import {
  useMotionValue,
  motion,
  useAnimationFrame,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";

export const MarqueeItem = () => {
  return (
    <>
      <div className="h-[60vh] bg-indigo-500" />
      <Marquee>
        🪄 Lorem ipsum blissmo <span>🤓</span> perro mijo otro <span>🏴</span>{" "}
        text un poco <span>🤩</span>
      </Marquee>
      <Marquee reversed className="bg-indigo-500">
        🪄 Lorem ipsum blissmo <span>🤓</span> perro mijo otro <span>🏴</span>{" "}
        text un poco <span>🤩</span>
      </Marquee>
      <div className="h-[60vh] bg-gray-800" />
    </>
  );
};

const ProjectCard = ({
  title,
  image,
  tags,
}: {
  title: string;
  image?: string;
  tags?: string;
}) => {
  return (
    <div className="col-span-1 w-full  group cursor-pointer ">
      <div className="overflow-hidden rounded-3xl w-full h-[432px] relative">
        <div className="pl-6 bg-curved object-fill absolute z-10 w-36 pt-2 flex gap-4 -right-1 -top-20 group-hover:-top-1 transition-all h-16 ">
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            👩🏻‍💻
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            🎨
          </div>
        </div>
        <img
          className=" w-full h-full object-cover group-hover:scale-125 transition-all"
          src={image}
          alt={title}
        />
      </div>
      <h3 className=" mt-4 text-left text-2xl text-brand-900"> {title}</h3>
    </div>
  );
};

const Marquee = ({
  children,
  className,
  reversed,
}: {
  reversed?: boolean;
  className?: string;
  children?: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>();
  const x = useMotionValue(-200);
  // scroll direction
  const { scrollY } = useScroll();
  const prevScroll = useRef(0);
  const direction = useRef(1);
  useMotionValueEvent(scrollY, "change", (latest) => {
    direction.current = latest > prevScroll.current ? 1 : -1;
    prevScroll.current = latest;
  });
  // velocity
  const scrollVelocity = useVelocity(scrollY);
  const smoothScrollVelocity = useSpring(scrollVelocity, { bounce: 0 });
  const scrollFactor = useTransform(
    smoothScrollVelocity,
    [-600, 0, 600],
    [10, 1, 10]
  );

  const move = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const factor =
      (reversed ? -1 : 1) * direction.current * -scrollFactor.get();
    x.set(x.get() + factor);
    // correction
    // right
    if (x.get() > 0) {
      x.jump(-rect.width / 2);
      return;
    }
    if (x.get() < -rect.width / 2) {
      x.jump(0);
    }
  };

  useAnimationFrame(move); // loop

  return (
    <article className={twMerge("bg-gray-800 py-2 overflow-hidden", className)}>
      <motion.div
        ref={ref}
        style={{ x }}
        className="whitespace-nowrap text-6xl font-sans font-extrabold text-white w-min"
      >
        {children} {children}
      </motion.div>
    </article>
  );
};

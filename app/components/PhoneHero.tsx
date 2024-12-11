import { ReactNode, useRef } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "~/lib/utils";
import { FaWeightScale } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa";

const floatingElements = [
  "/Item-1.png",
  "/item-2.png",
  "/Item-3.png",
  "/cube.png",
  "/cube2.png",
  "",
];
export const PhoneHero = ({ title }: { title: ReactNode }) => {
  const scrollerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollerRef });
  //   const springProgress = useSpring(scrollYProgress)
  const currentStep = useTransform(scrollYProgress, [0, 1], [1, 12]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("progeess", latest);
  });

  return (
    <article className="h-[600vh] mb-[-100vh]" ref={scrollerRef}>
      <Container
        className="pb-0"
        scrollYProgress={scrollYProgress}
        title={title}
      >
        <FloatingElements
          srcset={floatingElements}
          scrollYProgress={scrollYProgress}
        />
        <Circles scrollYProgress={scrollYProgress} />
        <Phone scrollYProgress={scrollYProgress} />
        <Paragraph scrollYProgress={scrollYProgress} />
      </Container>
    </article>
  );
};

const Paragraph = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 0.9],
    ["50vh", "0vh", "0vh", "-100vh"]
  );
  const rotateZ = useTransform(scrollYProgress, [0.5, 1], [-500, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <section className="inset-0 fixed flex flex-col  justify-end items-center pb-32 pointer-events-none bottom-0 left-0 right-0">
      <motion.main
        style={{
          y,
          opacity,
        }}
      >
        <div className="flex justify-center mb-6">
          <motion.span
            style={{
              rotateZ,
            }}
            className="text-4xl bg-brand-100 text-black h-20 w-20 rounded-full grid place-content-center"
          >
            <FaCodeBranch className="text-4xl font-light" />
          </motion.span>
        </div>
        <p className=" max-w-2xl text-brand-900 text-3xl md:text-4xl xl:text-5xl w-[90%] mx-auto font-bold text-center leading-snug mt-12">
          El mejor aliado para diseñar y desarrollar software para el éxito de
          tu empresa
        </p>
      </motion.main>
    </section>
  );
};

const Circles = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const scale = useTransform(scrollYProgress, [0.1, 1], [0, 4]);
  const y = useTransform(scrollYProgress, [0, 1], ["35vh", "-100vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const absoluteCentering =
    "absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]";
  return (
    <motion.section
      style={{
        scale,
        y,
        opacity,
      }}
      className="fixed hidden md:block inset-0 pointer-events-none"
    >
      <div
        className={cn(
          "rounded-full w-[800px] h-[800px] border-8 blur-md border-brand-800 opacity-40",
          absoluteCentering
        )}
      />
      <div
        className={cn(
          "rounded-full w-[500px] h-[500px] border-8 blur-md border-brand-700 opacity-40",
          absoluteCentering
        )}
      />
      <div
        className={cn(
          "rounded-full w-[300px] h-[300px] border-8 blur-md border-brand-600 opacity-40",
          absoluteCentering
        )}
      />
    </motion.section>
  );
};

const FloatingElements = ({
  srcset,
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
  srcset?: string[];
}) => {
  const yCero = useTransform(scrollYProgress, [0, 0.25], ["70vh", "-50vh"]);
  const yOne = useTransform(scrollYProgress, [0, 0.25], ["85vh", "-40vh"]);
  // blured items
  const yTwo = useTransform(scrollYProgress, [0, 0.25], ["85vh", "-150vh"]);
  const yThree = useTransform(scrollYProgress, [0, 0.25], ["75vh", "-40vh"]);
  const yFour = useTransform(scrollYProgress, [0, 0.25], ["65vh", "-80vh"]);
  return (
    <section className="inset-0 fixed z-10 pointer-events-none">
      <motion.img
        style={{ y: yCero, x: "33vw" }}
        className="w-28 lg:w-[180px] absolute -ml-28 md:-ml-10 lg:-ml-20 xl:ml-[inherit] mt-16 lg:mt-0"
        src={srcset[0]}
        alt="floating"
      />
      <motion.img
        style={{ y: yOne, x: "55vw" }}
        className="w-[150px] lg:w-[15%] absolute"
        src={srcset[1]}
        alt="floating"
      />
      <motion.img
        style={{ y: yFour, x: "55vw" }}
        className="w-[140px] lg:w-[180px] absolute"
        src={srcset[2]}
        alt="floating"
      />
      <motion.img
        style={{ y: yTwo, x: "15vw" }}
        className="hidden lg:block w-[180px] absolute -z-10"
        src={srcset[3]}
        alt="floating"
      />

      <motion.img
        style={{ y: yThree, x: "70vw" }}
        className="hidden lg:block w-[180px] absolute -z-10"
        src={srcset[4]}
        alt="floating"
      />
    </section>
  );
};

const Phone = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // @todo: need to know viewPort size
  const y = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    ["50vh", "-50vh", "-50vh", "-125vh"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.99], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.9, 1.5]);

  return (
    <div className="w-[240px] lg:w-[320px] top-0 md:top-20  mx-auto fixed inset-0">
      <motion.img
        style={{
          y,
          scale,
          opacity,
        }}
        className=""
        src="/phone.png"
        alt="iphone"
      />
    </div>
  );
};

const Container = ({
  scrollYProgress,
  className,
  title,
  children,
}: {
  scrollYProgress: MotionValue;
  className?: string;
  title: ReactNode;
  children?: ReactNode;
}) => {
  // container
  const containerY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, -100]),
    {
      bounce: 0,
    }
  );
  const containerScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.9, 0.6]),
    {
      bounce: 0,
    }
  );
  // title
  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.05], [1, 0]),
    {
      bounce: 0,
    }
  );

  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -500]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["blur(0px)", "blur(9px)"]
  );
  const opacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0]);
  return (
    <section
      className={cn(
        "h-[16%] md:h-[20%] mt-6 lg:mt-0 py-16 md:pt-10 lg:py-20 p relative overflow-hidden flex flex-col pb-60",
        className
      )}
    >
      {" "}
      <motion.div
        style={{ filter, opacity }}
        className="bg-stars absolute inset-16 "
      ></motion.div>
      {/* Background rectangle */}
      <motion.div
        initial={{ scale: 0.5, y: -200, opacity: 0 }}
        animate={{ scale: 0.9, y: 0, opacity: 1 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
        style={{ y: containerY, scale: containerScale }}
        className="inset-0 absolute rounded-5xl md:rounded-[60px] bg-gradient-to-b from-brand-500 to-brand-800 -z-10"
      />
      {/* Title and buttons */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex-col  flex justify-center text-4xl tracking-tight font-bold items-center gap-4 py-6 md:py-12 text-center"
      >
        {title}
      </motion.div>
      {/* Phone and elements 
      @todo: get out from children and just put'em in here
      */}
      <div className="mt-auto">{children}</div>
    </section>
  );
};

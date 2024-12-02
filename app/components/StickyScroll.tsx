import {
  AnimatePresence,
  useInView,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

export const StickyScrollReveal = ({
  items,
}: {
  items: Record<string, ReactNode>[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(items[currentIndex].img);
  const [currentBgColor, setCurrentBgColor] = useState(items[0].twColor);
  // scroll
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("latest", latest);
  });

  const handleEnterIntoView = (index: number) => {
    setCurrentImage(items[index].img);
    setCurrentBgColor(items[index].twColor);
    setCurrentIndex(index);
  };

  //   console.log("index", currentIndex);

  return (
    <article className={cn(currentBgColor, "transition-all ")}>
      <div className="relative inset-0 bg-red-500 w-full h-full">
        <div className="w-36 h-36 rounded-full bg-brand-500/30 blur-3xl  absolute  top-96 " />
      </div>
      <section
        className="flex  gap-20 justify-center items-start relative py-20 h-max max-w-7xl mx-auto"
        ref={targetRef}
      >
        {" "}
        <div className="flex flex-col flex-1 pb-40 pt-40 gap-80  ">
          {items.map(({ text, title, img }, index) => (
            <InViewDetector
              onInView={handleEnterIntoView}
              index={index}
              key={String(index) + title}
              className="h-[50vh] flex items-center"
            >
              <div>
                <p
                  className={cn(
                    "text-brand-100/40 uppercase font-light  text-xl mb-3 transition-all",

                    {
                      "text-ironGray": currentImage === img,
                    }
                  )}
                >
                  {title}
                </p>
                <div
                  className={cn(
                    "text-4xl text-white/40 font-bold transition-all leading-snug",
                    {
                      "text-white": currentImage === img,
                    }
                  )}
                >
                  {text}
                </div>
              </div>
            </InViewDetector>
          ))}
        </div>
        <div className="sticky top-60 mt-32 flex-1 overflow-hidden rounded-3xl aspect-square px-0 ">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              className="w-[80%] mx-auto"
              key={currentIndex}
              initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
              exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            >
              {currentImage}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </article>
  );
};

export const InViewDetector = ({
  children,
  index,
  className,
  onInView,
}: {
  className?: string;
  index: number;
  children?: ReactNode;
  onInView?: (arg0: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    // margin: "center",
    amount: 1,
  });
  // margin: "100px 0px 0px 0px",

  useEffect(() => {
    if (isInView) {
      onInView?.(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, index]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

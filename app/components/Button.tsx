import { Arrow } from "~/icons/arrow";
import { motion, useAnimate } from "motion/react";
import { useRef } from "react";
import { cn } from "~/lib/utils";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

export const Button = ({
  title,
  mode,
  className,
  link,
}: {
  title?: string;
  mode?: string;
  className?: string;
  link?: string;
}) => {
  const ref = useRef(null);

  const [scope, animate] = useAnimate();

  return (
    <Link to={link ? link : "/"}>
      <div
        ref={scope}
        onMouseEnter={() => {
          animate(
            "#arrow",
            { rotate: 45, x: 10 },
            { duration: 0.3, ease: "easeOut" }
          );
        }}
        onMouseLeave={() => {
          animate(
            "#arrow",
            { rotate: 0, x: 0 },
            { duration: 0.2, ease: "easeIn" }
          );
        }}
        role="button"
        className={cn("flex  w-fit", className)}
      >
        <div
          className={cn(
            "bg-brand-500 w-fit px-4 rounded-full  text-brand-900 font-normal h-10 flex items-center justify-center",
            { "bg-white text-brand-900": mode === "white" }
          )}
        >
          {title ? title : "Contactar"}
        </div>
        <motion.div
          id="arrow"
          className={cn(
            "h-10 w-10 rounded-full bg-brand-500 -ml-2 flex items-center justify-center",
            { "bg-white text-brand-900": mode === "white" }
          )}
        >
          <Arrow />
        </motion.div>
      </div>
    </Link>
  );
};

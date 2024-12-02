import { Arrow } from "~/icons/arrow";
import { motion } from "motion/react";
import { useRef } from "react";
import { cn } from "~/lib/utils";
import { twMerge } from "tailwind-merge";

export const Button = ({
  title,
  mode,
  className,
}: {
  title?: string;
  mode?: string;
  className?: string;
}) => {
  const ref = useRef(null);

  return (
    <div role="button" className={cn("flex  w-fit", className)}>
      <div
        className={cn(
          "bg-brand-500 w-fit px-4 rounded-full  text-brand-900 font-normal h-10 flex items-center justify-center",
          { "bg-white text-brand-900": mode === "white" }
        )}
      >
        {title ? title : "Contactar"}
      </div>
      <motion.div
        whileHover={{
          rotate: 45,
          x: 10,
          transition: { duration: 0.5, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "h-10 w-10 rounded-full bg-brand-500 -ml-2 flex items-center justify-center",
          { "bg-white text-brand-900": mode === "white" }
        )}
      >
        <Arrow />
      </motion.div>
    </div>
  );
};

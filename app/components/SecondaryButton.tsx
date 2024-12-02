import { Arrow } from "~/icons/arrow";
import { motion } from "motion/react";
import { useRef } from "react";
import { cn } from "~/lib/utils";

export const SecondaryButton = ({
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
          "bg-brand-900 w-fit px-4 rounded-full  text-brand-100 font-normal h-10 flex items-center justify-center",
          { "bg-white text-brand-900": mode === "white" }
        )}
      >
        {title ? title : "Contactar"}
      </div>
    </div>
  );
};

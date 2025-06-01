import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "~/components/Button";
import { cn } from "~/lib/utils";
import { AnimationConfig, desktopConfig, mobileConfig } from "./configs";
import { useMatchMedia } from "~/hooks/useMatchMedia";

const projects = [
  {
    image: "/sv-epros.webp",
    title: "English for pros",
  },
  {
    image: "/sv-reform.webp",
    title: "ReformAI",
  },
  {
    image: "/sv-denik.webp",
    title: "Deník",
  },
  {
    image: "/sv-ct.webp",
    title: "Constructoken",
  },
];

const testimonials = [
  {
    image: "/sv-cl.webp",
    title: "Collectum Datos Panel",
  },
  {
    image: "/sv-play.webp",
    title: "LastPlay",
  },

  {
    image: "/sv-pt.webp",
    title: "Potentia",
  },

  {
    image: "/sv-formmy.webp",
    title: "Formmy",
  },
];

export const WorkAccordion = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  return (
    <>
      <article
        ref={target}
        className="h-[150vh] md:h-[400vh] pt-20 pb-0 md:py-40 px-4 md:px-[5%] xl:px-0"
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold  text-center">
          Nuestro trabajo es estético, interactivo y funcional{" "}
        </h2>

        <main className="max-w-6xl mx-auto sticky top-20  mt-28">
          <section className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Box
                scrollYProgress={scrollYProgress}
                title={testimonial.title}
                key={i}
                index={i}
                image={testimonial.image}
              />
            ))}
            <Info scrollYProgress={scrollYProgress} />

            {projects.map((project, i) => (
              <Box
                scrollYProgress={scrollYProgress}
                title={project.title}
                key={i}
                index={4 + i}
                image={project.image}
              />
            ))}
          </section>
        </main>
      </article>
    </>
  );
};

export const Box = ({
  scrollYProgress,
  title,
  index,
  image,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  title: string;
  image?: string;
}) => {
  // const isMobile = useMatchMedia("(min-width: 1024px)");
  // console.log(isMobile, "CHECALE");

  // const configByIndex: AnimationConfig = isMobile
  //   ? mobileConfig
  //   : desktopConfig;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 517px)");
    mediaWatcher.addEventListener("change", () => {
      console.log("hola pelusa", mediaWatcher.matches);
      setIsMobile(mediaWatcher.matches);
    });
    setIsMobile(mediaWatcher.matches);
  }, []);

  const configByIndex: AnimationConfig = isMobile
    ? mobileConfig
    : desktopConfig;

  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const x = useTransform(springYProgress, [0, 1], configByIndex[index].x);
  const y = useTransform(springYProgress, [0, 1], configByIndex[index].y);
  const rotate = useTransform(
    springYProgress,
    [0, 1],
    configByIndex[index].rotate
  );
  const scale = useTransform(
    springYProgress,
    [0, 1],
    configByIndex[index].scale
  );

  const opacity = useTransform(springYProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <motion.figure
      style={{ scale, x, y, rotate }}
      className={cn("overflow-hidden rounded-2xl aspect-square relative z-0", {
        "z-30": index === 3,
        "z-20": index === 7 || index === 4,
        "z-10": index === 0 || index === 1,
      })}
    >
      <motion.p
        style={{ opacity }}
        className="absolute top-1 left-1 md:top-4 md:left-4 text-white bg-gray-900 z-10 py-1 px-3 rounded-full text-xs"
      >
        {title}
      </motion.p>
      <img
        className="object-cover w-full h-full scale-[1.2]"
        src={image}
        alt="ninja"
      />
    </motion.figure>
  );
};

export const Info = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const scale = useTransform(springYProgress, [0, 1], [0.2, 1]);
  const opacity = useTransform(springYProgress, [0, 0.5, 1], [0, 0, 1]);
  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex-col justify-center flex items-center h-full"
    >
      <h3 className=" text-xs leading-snug md:text-xl text-center font-bold">
        Conoce todos nuestros proyectos
      </h3>{" "}
      <Button className="my-6 hidden md:flex" title="Explorar proyectos" />
      <nav className="flex gap-4 mt-2 md:mt-0 justify-center">
        <a
          href="https://www.facebook.com/profile.php?id=100063503085832"
          title="facebook"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/company/28980688/"
          title="facebook"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>{" "}
      </nav>
    </motion.div>
  );
};

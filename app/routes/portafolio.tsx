import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nuestros proyectos" },
    { name: "description", content: "Hacemos realidad tus ideas" },
  ];
}

export default function Servicios() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-white min-h-screen ">
      <div className="bg-white relative top-0 z-50">
        <NavBar />
        <Header />
      </div>
      <div className="relative h-[900px]">
        <Banner />
        <Footer />
      </div>{" "}
    </main>
  );
}

const Header = () => {
  return (
    <section className="min-h-screen max-w-7xl  mx-auto mt-12 md:mt-20 px-4 md:px-[5%] xl:px-0 ">
      <h2 className="text-brand-900 text-4xl lg:text-5xl xl:text-6xl font-bold ">
        Hacemos realidad tus ideas
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
        exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
        className="text-ironGray text-lg md:text-2xl font-light mt-6"
      >
        Convirtiéndolas en productos digitales que tus usuarios amen.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 xl:gap-x-56 mt-12 md:mt-20 pb-64">
        <Card
          img="/sv-epros.webp"
          title="E4pros"
          description="Website de curso de Inglés"
          date="2024"
          tag="both"
        />
        <Card
          className="mt-0 md:mt-20"
          img="/sv-ct.webp"
          title="Constructoken"
          description="Landing page & Aplicacióm móvil Fintech"
          date="2023 - 2024"
        />
        <Card
          img="/sv-reform.webp"
          title="ReformAi"
          description="Venta de muebles y otros servicios"
          date="2024"
        />
        <Card
          className="mt-0 md:mt-20"
          img="/sv-pt.webp"
          title="Potentiia"
          description="Website de cursos y coaching deportivo"
          date="2021"
          tag="both"
        />
        <Card
          img="/sv-cl.webp"
          title="Collectum"
          description="Aplicación Web de encuestas y premios"
          date="2021-2024"
          tag="both"
        />
        <Card
          className="mt-0 md:mt-20"
          img="/sv-play.webp"
          title="LastPlay"
          description="Aplicación Móvil para organizar torneos deportivos"
          date="2023"
        />
        <Card
          img="/sv-az.webp"
          title="Laboratorios Azteca"
          description="E-comerce de estudios médicos"
          date="2023"
        />
        <Card
          className="mt-0 md:mt-20"
          img="/sv-su.webp"
          title="SurveyUp"
          description="Aplicación web de estudios de mercado"
          date="2022"
          tag="both"
        />
      </div>
    </section>
  );
};

const Card = ({
  className,
  img,
  title,
  description,
  date,
  tag,
}: {
  className?: string;
  img: string;
  title: string;
  description: string;
  date: string;
  tag?: string;
}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  return (
    <motion.div
      style={{
        opacity: isInview ? 1 : 0.8,
        scale: isInview ? 1 : 0.7,
        transform: isInview ? "translateY(0px)" : " translateY(40px)",
        transition: "all 1s ease",
      }}
      ref={ref}
      className={twMerge(
        "w-full  h-fit group cursor-pointer group ",
        className
      )}
    >
      <div className="w-full h-[320px] md:h-[480px] xl:h-[540px] rounded-5xl overflow-hidden relative ">
        {tag === "both" ? (
          <div className="pl-6 bg-curved object-fill absolute z-10 w-36 pt-2 flex gap-4 -right-1 -top-20 group-hover:-top-1 transition-all h-16 ">
            <div className="w-10 h-10 rounded-full bg-brand-100/40 flex items-center justify-center">
              👩🏻‍💻
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-100/40 flex items-center justify-center">
              🎨
            </div>
          </div>
        ) : (
          <div className="pl-6 bg-curved object-fill absolute z-10 w-24 pt-2 flex gap-4 -right-1 -top-20 group-hover:-top-1 transition-all h-16 ">
            <div className="w-10 h-10 rounded-full bg-brand-100/40 flex items-center justify-center">
              🎨
            </div>
          </div>
        )}

        <img
          className="w-full h-full object-cover group-hover:scale-125 transition-all"
          src={img}
          alt={title}
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mt-4 text-brand-900  lg:group-hover:ml-6 transition-all">
        {title}
      </h3>
      <p className="text-base md:text-lg font-light lg:group-hover:ml-6  transition-all text-ironGray">
        {description} | {date}
      </p>
    </motion.div>
  );
};

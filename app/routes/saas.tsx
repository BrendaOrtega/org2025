import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Saas y apps" },
    { name: "description", content: "Conoce nuestros Saas y apps" },
  ];
}

export default function Saas() {
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
        <SaasContent />
      </div>
      <div className="relative h-[900px]">
        <Banner />
        <Footer />
      </div>{" "}
    </main>
  );
}

const SaasContent = () => {
  return (
    <section className="min-h-screen max-w-7xl mx-auto mt-12 md:mt-20 px-4 md:px-[5%] xl:px-0 ">
      <h2 className="text-brand-900 text-4xl md:text-5xl xl:text-6xl font-bold ">
        Nuestra vida secreta
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
        exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
        className="text-ironGray text-lg md:text-2xl font-light mt-6"
      >
        Cuando no estamos trabajando con nuestros clientes, estamos
        desarrollando nuestros propios Saas y aplicaciones web.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 xl:gap-x-56 mt-12 md:mt-20 pb-64">
        <Card
          className="bg-formmyCover "
          img="https://i.imgur.com/3wx9Qa4.png"
          title="Formmy"
          description="La forma más fácil de agregar formularios de contacto a tu sitio web"
        />
        <Card
          className="bg-denikCover mt-0 md:mt-20"
          img="https://i.imgur.com/lmSmhdB.png"
          title="Deník"
          description="La agenda en línea ideal para tu negocio: cobros, recordatios y más"
        />
        <Card
          className="bg-geekCover"
          img="https://i.imgur.com/nLH6ChB.png"
          title="Fixtergeek"
          description="Plataforma de E-learning para aprender a programar"
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
}: {
  className?: string;
  img: string;
  title: string;
  description: string;
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
      className="w-full  h-fit group cursor-pointer "
    >
      <div
        className={twMerge(
          "w-full h-[280px] md:h-[460px] xl:h-[540px] bg-center rounded-5xl bg-cover border border-brand-100/50 overflow-hidden ",
          className
        )}
      ></div>

      <h3 className="text-2xl font-bold text-brand-900 mt-4 group-hover:ml-6 transition-all">
        {title}
      </h3>
      <p className="text-lg font-light text-ironGray group-hover:ml-6 transition-all">
        {description}
      </p>
    </motion.div>
  );
};

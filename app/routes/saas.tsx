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
      <div className="bg-white relative top-0 z-50 mb-[600px] md:mb-[500px] rounded-b-[40px]">
        <NavBar />
        <SaasContent />
        <Banner />
      </div>

      <Footer />
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
        desarrollando nuestros propios Saas y aplicaciones web, échales un
        vistazo y pruébalos.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 xl:gap-x-56 mt-12 md:mt-20 pb-64">
        <Card
          link="https://www.formmy.app/dash"
          img="/projects/formmy-cover.png"
          title="Formmy"
          description="Creamos esta herramienta para agregar formularios de contacto y chatbots IA a tu sitio web de forma fácil, rápida y sin complicaciones técnicas."
        />
        <Card
        img="/projects/denik-cover.png"
          className=" mt-0 md:mt-20"
          title="Deník"
          description="Nacido de la necesidad real de pequeños negocios. Una agenda digital que resuelve el caos diario de cobros, citas y recordatorios."
        />
        <Card
        img="/projects/geek-cover.webp"
          link="https://fixtergeek.com/"
          title="Fixtergeek"
          description="Nuestra plataforma educativa donde compartimos años de experiencia. Porque creemos que programar debe ser accesible y transformador para todos."
        />
        <Card
        img="/projects/bits-org.webp"
          className=" mt-0 md:mt-20"
          link="https://www.easybits.cloud/"
          title="EasyBits"
          description="Desarrollamos esta solución para creadores como nosotros. Automatiza la parte aburrida del negocio digital y enfócate en lo que amas crear."
        />
      </div>
    </section>
  );
};

const Card = ({
  className,
  title,
  description,
  link,
  img,
}: {
  className?: string;
  link?: string;
  title: string;
  description: string;
  img?: string;
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
      {" "}
      <a href={link} target="_blank" title={title}>
        <div
          className={twMerge(
            "w-full h-[280px] md:h-[460px] xl:h-[540px] bg-center rounded-5xl bg-cover border border-brand-100/50 overflow-hidden ",
            className
          )}
        >
          <img src={img} className="w-full h-full object-cover hover:scale-110 transition-all" />
        </div>
        <h3 className="text-2xl font-bold text-brand-900 mt-4 lg:group-hover:ml-2 transition-all">
          {title}
        </h3>
        <p className="text-lg font-light text-ironGray lg:group-hover:ml-2 transition-all">
          {description}
        </p>{" "}
      </a>
    </motion.div>
  );
};

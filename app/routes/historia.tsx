import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { twMerge } from "tailwind-merge";
import { ReactNode, useEffect, useRef } from "react";
import { animate } from "motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWebAwesome } from "react-icons/fa6";
import { SecondaryButton } from "~/components/SecondaryButton";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nuestra historia" },
    {
      name: "description",
      content: "Una recapitulación rápida de nuestra historia",
    },
  ];
}

export default function Historia() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-brand-900 min-h-screen ">
      <div className="bg-white relative top-0 z-50 mb-[600px] md:mb-[500px] rounded-b-[40px]">
        <NavBar />
        <section className=" max-w-7xl gap-16 mx-auto mt-12 md:mt-20 mb-40 md:mb-64 relative px-4 md:px-[5%] xl:px-0 ">
          <h2 className="text-brand-900 text-4xl md:text-5xl xl:text-6xl font-bold ">
            Nuestra historia
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
            exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className="text-ironGray text-lg md:text-2xl font-light mt-6"
          >
            Somos una empresa de diseño y desarrollo web nacida en Hidalgo,
            México, en el año 2014. Especializada en diseño web, desarrollo web,
            Diseño UX/UI, prototipado, comercio electrónico y SEO. Con más de
            una década de experiencia, Fixter es un equipo enérgico, fresco y
            dinámico que ofrece talento creativo, conocimiento de la industria y
            estándares de calidad extremadamente altos.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
            exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className="text-ironGray text-lg md:text-2xl font-light mt-6"
          >
            Trabajamos con emprendedores que buscan probar sus ideas a usuarios
            o inversionistas, pequeñas y grandes empresas que buscan mejorar sus
            productos actuales, crear nuevos u optimizar procesos.
          </motion.p>
          <img
            className="hover:-translate-x-6 transition-all cursor-pointer absolute right-80 mt-3 w-16 h-16 object-cover rounded-b-3xl rounded-tr-3xl border-4 border-brand-500"
            alt="brenda "
            src="https://i.imgur.com/GaxBKXA.png "
          />
          <img
            className="hover:translate-x-6 transition-all cursor-pointer absolute -top-4 md:-top-3 xl:top-0 right-6 md:right-52 mt-3 w-16 h-16 object-cover rounded-t-3xl rounded-br-3xl border-4 border-brand-500"
            alt="brenda "
            src="https://i.imgur.com/rIWBI4C.jpg "
          />
        </section>
        <ScrollHorizontal />
        <Team />
        <Banner />
      </div>
      <Footer />
    </main>
  );
}

const Team = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl flex-wrap lg:flex-nowrap mx-auto mt-20 mb-10 md:pt-[160px] md:pb-[180px] flex gap-20 items-center px-4 md:px-[5%] xl:px-0">
        <div className="w-80 grow -mt-6">
          <h2 className="text-brand-900 text-4xl md:text-5xl xl:text-6xl font-bold ">
            Team
          </h2>
          <p className="text-ironGray text-base md:text-xl font-light mt-6">
            Somos un equipo distribuido en México, unido por la curiosidad
            insaciable de crear productos nuevos y la ambición de redefinir el
            significado de la experiencia de nuestros clientes en cuánto al
            desarrollo de software se refiere.
          </p>
          <p className="text-ironGray text-base md:text-xl  font-light mt-6">
            En cada uno de nuestros productos nos enfocamos en crear
            experiencias que no solo satisfagan las necesidades de nuestros
            clientes, sino que las anticipen.{" "}
            <strong>
              La curiosidad, la responsabilidad y la iniciativa son el núcleo de
              nuestro día a día, más que diseñadores o desarrolladores: somos
              cocreadores.{" "}
            </strong>{" "}
            Somos creativos que proponen y crean, no esperamos las condiciones
            perfectas, sino que las creamos.
          </p>
          <Link to="/contacto">
            <SecondaryButton
              className="mt-8 md:mt-12"
              title="Trabaja con nosotros"
            />{" "}
          </Link>
        </div>
        <div className="w-80 grow  h-[680px]">
          <img
            className="w-full object-cover rounded-5xl h-[400px] md:h-[600px]"
            src="https://i.imgur.com/RmY6Q7F.jpg"
          />{" "}
          <div className="mt-4 flex gap-12">
            <div className="flex items-center gap-2">
              <h3 className="text-brand-900 text-base md:text-lg">
                Brenda Ortega
              </h3>
              <MediaItem link="https://www.linkedin.com/in/brendago/">
                <FaLinkedinIn className="" />
              </MediaItem>
              <MediaItem link="https://www.brendago.design/">
                <FaWebAwesome />
              </MediaItem>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-brand-900 text-base md:text-lg">
                Héctor Campos
              </h3>
              <MediaItem link="https://www.linkedin.com/in/hectorbliss/">
                <FaLinkedinIn className="" />
              </MediaItem>
              <MediaItem link="https://www.hectorbliss.com/">
                <FaWebAwesome />
              </MediaItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaItem = ({
  children,
  link,
}: {
  children: ReactNode;
  link?: string;
}) => {
  return (
    <a href={link} title={link} target="_blank">
      <div className="text-brand-900 border border-brand-100/40 text-lg cursor-pointer hover:text-brand-900 transition-all hover:bg-brand-500 hover:border-brand-500 p-2 rounded-full">
        {children}
      </div>{" "}
    </a>
  );
};

const ScrollHorizontal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <section className="h-[700vh]" ref={ref}>
      <ul className="sticky bg-brand-900 top-0 w-full overflow-hidden ">
        <motion.div style={{ x }} className="w-max flex">
          <li className="w-fit h-screen flex pl-4 md:pl-10 xl:pl-48 pt-10 md:pt-20 bg-dotts bg-cover">
            <div className="w-[400px] flex flex-col  pt-4">
              <h3 className="text-4xl md:text-5xl text-white font-bold mt-20">
                Cómo empezamos
              </h3>
              <p className="text-lg md:text-xl text-iron font-light mt-12">
                Han pasado 84 años ya desde que Fixter nació en Pachuca de Soto,
                Hidalgo. 👉🏻
              </p>{" "}
              <img className="mt-12 w-[280px]" src="/84anos.gif" />
            </div>
            <div className="ml-20 md:ml-20 xl:ml-48 pt-20 md:pt-32 lg:pt-20 xl:pt-52 flex ">
              <MotionContainer>
                <div className="flex justify-center relative">
                  <span className="text-5xl absolute z-10 bottom-0 left-40 bg-white p-3 rounded-full">
                    🎬
                  </span>
                  <img
                    className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                    src="https://i.imgur.com/R0k5PkY.jpg"
                  />{" "}
                  <img
                    className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                    src="https://i.imgur.com/hy3pyGs.jpg"
                  />{" "}
                  <img
                    className="w-auto rotate-6 absolute left-64 top-20"
                    src="/stars.png"
                  />{" "}
                </div>
                <h3 className="font-bold text-center text-2xl mt-4 text-white">
                  2014
                </h3>
                <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                  El año del CFDI3.2 Así es, Fixter inició como una empresa de
                  Software de Facturación 😱
                </p>
              </MotionContainer>
              <MotionContainer className="-mt-28">
                <h3 className="font-bold text-center text-2xl mt-4 text-white">
                  2016
                </h3>
                <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                  Inauguramos Fixtergeek, una escuela de hackers con cursos de
                  JS, Linux, Django, Android y videojuegos.
                </p>
                <div className="flex flex-col items-center relative mt-20">
                  <span className="text-5xl absolute z-10 bottom-44 left-16 bg-white p-3 rounded-full">
                    🧑🏻‍💻
                  </span>
                  <span className="text-5xl absolute z-10 top-28 left-72 bg-white p-3 rounded-full">
                    📚
                  </span>
                  <img
                    className="w-64 h-44 md:w-80 md:h-48 object-cover rounded-3xl -rotate-6 -ml-16"
                    src="https://i.imgur.com/Ip1Hu1W.jpg"
                  />{" "}
                  <img
                    className="w-64 h-44 md:w-80 md:h-48o bject-cover rounded-3xl rotate-6 ml-28 -mt-10 "
                    src="https://i.imgur.com/aQr4RvD.jpg"
                  />{" "}
                  <img
                    className="w-64 h-44 md:w-80 md:h-48 object-cover rounded-3xl -rotate-6 -ml-16 -mt-10"
                    src="https://i.imgur.com/I6Mm7YI.jpg"
                  />{" "}
                </div>{" "}
              </MotionContainer>
            </div>
          </li>
          <li className="w-fith-screen  pt-20 md:pt-32 lg:pt-20 xl:pt-52  flex bg-dotts bg-cover ">
            <MotionContainer>
              <div className=" w-[400px]">
                <div className="flex  justify-center relative">
                  <span className="text-5xl absolute z-10 top-32 left-44 bg-white p-3 rounded-full">
                    🙋🏻‍♀️
                  </span>
                  <img
                    className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                    src="https://i.imgur.com/DpQhCWH.jpg"
                  />{" "}
                  <img
                    className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                    src="https://i.imgur.com/fNvQJJR.jpg"
                  />{" "}
                  <img
                    className="w-auto rotate-6 absolute bottom-20 left-40"
                    src="/stars3.svg"
                  />{" "}
                  <img
                    className="w-auto rotate-6 absolute top-10 right-16"
                    src="/stars.png"
                  />{" "}
                </div>
                <h3 className="font-bold text-center text-2xl mt-4 text-white">
                  2016
                </h3>
                <p className="text-center text-base md:text-lg mt-2 text-iron">
                  Diseñamos y desarollamos la primera plataforma de consulta
                  ciudadana del Estado de Hidalgo, en donde participaron más de
                  50,000 ciudadanos registrando iniciativas de seguridad,
                  desarollo social, y más directrices.
                </p>
              </div>
            </MotionContainer>
            <MotionContainer>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2017-2018
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Ganamos 4 concursos de desarrollo de Software en Reto México.
                ¡Sí, 4 seguidos! 😎 Y creamos de todo, una plataforma de
                Crowdfunding, una Red Social interna, un Sistema de delivery y
                demás.
              </p>
              <div className="flex justify-center relative mt-20">
                <span className="text-7xl absolute z-10 bottom-8 left-12 bg-white p-6 rounded-full">
                  🚀
                </span>
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-12"
                  src="https://i.imgur.com/nNKZZrG.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl  -rotate-12 mt-32"
                  src="https://i.imgur.com/5GD6C9C.jpg"
                />{" "}
              </div>
            </MotionContainer>
            <MotionContainer>
              <div className="flex  justify-center relative ">
                <span className="text-5xl absolute z-10 bottom-0 left-40 bg-white p-3 rounded-full">
                  🧙🏻
                </span>
                <img
                  className=" absolute z-30 right-16 top-10 w-28 h-36  object-cover rounded-3xl rotate-12 ml-28 -mt-10 "
                  src="https://i.imgur.com/AaCUNSt.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                  src="https://i.imgur.com/fK6pwTB.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                  src="https://i.imgur.com/dh6f4jQ.jpg"
                />{" "}
                <img
                  className="w-auto rotate-6 absolute bottom-10 left-20"
                  src="/stars.png"
                />{" "}
              </div>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2019
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Abrimos nuestra primer oficina en la CDMX, en la pintoresca Roma
                Norte. En donde seguimos organizando eventos para toda la
                comunidad.
              </p>
            </MotionContainer>
          </li>
          <li className="w-fit h-screen bg-brad-900 bg-dotts bg-cover pt-20 md:pt-32 lg:pt-20 xl:pt-52 flex ">
            <MotionContainer>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2021
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Llegamos a los 30 proyectos entregados a empresas de México,
                USA, Holanda y España.
              </p>
              <div className="flex  justify-center relative mt-20 ml-6 md:ml-0">
                <span className="text-5xl absolute z-10 top-10 right-40 bg-white p-3 rounded-full">
                  🔥
                </span>
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                  src="https://i.imgur.com/7pFJCXu.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                  src="https://i.imgur.com/qBspJaG.jpg"
                />{" "}
              </div>
            </MotionContainer>
            <MotionContainer>
              <div className="flex  justify-center  justify-centerrelative">
                <span className="text-5xl absolute z-10 bottom-0 left-40 bg-white p-3 rounded-full">
                  🔎
                </span>
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                  src="https://i.imgur.com/rIWBI4C.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                  src="https://i.imgur.com/Z1ZqkiA.jpg"
                />{" "}
              </div>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2022
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Actualizamos nuestro stack de desarollo.
                <br /> React + Remix = Apps en 1 día 🪄 <br /> Esta bien, no en
                1 día pero sí en una semana.
              </p>
            </MotionContainer>
            <MotionContainer className="w-[450px] mx-[168px] ">
              <div className="bg-brand-900 relative">
                <span className="text-white/50 font-light">
                  Nuestro don, nuestra maldición
                </span>
                <h3 className="text-4xl pr-16 md:pr-0 md:text-5xl text-white font-bold mt-4">
                  Obsesionados por las nuevas herramientas y la experiencia de
                  usuario
                </h3>
                <img
                  className="w-8 rotate-6 absolute -top-16 left-0"
                  src="/stars2.svg"
                />{" "}
              </div>
            </MotionContainer>
          </li>{" "}
          <li className="w-fit h-screen bg-brad-900 bg-dotts bg-cover pt-20 md:pt-32 lg:pt-20 xl:pt-52 flex ">
            <MotionContainer>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2023
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Lanzamos Formmy.app, la aplicación que te permite agregar
                formularios de contacto a tu sitio web en menos de 5 minutos.
              </p>
              <div className="flex  justify-center relative mt-20">
                <span className="text-5xl absolute z-10 top-10 right-40 bg-white p-3 rounded-full">
                  👻
                </span>
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                  src="/projects/formmy-cover.png"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                  src="https://i.imgur.com/29QejPK.jpg"
                />{" "}
              </div>
            </MotionContainer>
            <MotionContainer>
              <div className="flex  justify-center relative">
                <span className="text-5xl absolute z-10 bottom-0 left-40 bg-white p-3 rounded-full">
                  🗓️
                </span>
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl -rotate-6"
                  src="https://i.imgur.com/iADMd8i.jpg"
                />{" "}
                <img
                  className="w-44 h-56 md:w-52 md:h-72 object-cover rounded-3xl rotate-6 mt-40"
                  src="/projects/denik-cover.png"
                />{" "}
              </div>
              <h3 className="font-bold text-center text-2xl mt-4 text-white">
                2024
              </h3>
              <p className="text-center text-base md:text-lg mt-2 text-white/70 font-light">
                Iniciamos con beta de Deník.me. La agenda para administrar tu
                negocio en un solo lugar.
                <br />Y si te preguntas por qué ¿Deník? 👀 Deník significa
                agenda en checo.
              </p>
            </MotionContainer>
            <MotionContainer>
              <img
                className="w-48 absolute -right-12 top-64"
                src="/cube4.webp"
                alt="cohete"
              />
            </MotionContainer>
          </li>
        </motion.div>
      </ul>
    </section>
  );
};

const MotionContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const isMobile = () => {
    if (!window) {
      return;
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <motion.div
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      initial={{ filter: "blur(9px)", opacity: 0 }}
      viewport={{ amount: isMobile() ? "some" : "all", once: true }}
      className={twMerge(" pt-0 ")}
    >
      <div className={twMerge(" w-[400px] mx-32 md:mx-48", className)}>
        {children}
      </div>
    </motion.div>
  );
};

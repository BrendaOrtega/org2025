import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView } from "motion/react";
import { FaCirclePlay } from "react-icons/fa6";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";
import { Slider } from "~/components/Slider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Servicios" },
    { name: "description", content: "Conoce nuestros servicios" },
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
      <div className="bg-white relative top-0 z-50 mb-[600px] md:mb-[500px] rounded-b-[40px]">
        <NavBar />
        <Services />
        <ServicesList />
        <Advertaising />
        <Banner />
      </div>
      <Footer />
    </main>
  );
}

const ServiceOne = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="w-full md:w-[80%]  relative overflow-hidden border border-brand-100/30 rounded-5xl">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        className="absolute max-w-[1000px] !w-[640px] top-20 -left-60 "
        src="/servicios1.3.png"
        ref={ref}
      />

      <motion.img
        initial={{ x: 40 }}
        animate={{ x: 0 }}
        exit={{ x: 40 }}
        transition={{
          ease: "easeInOut",
          bounce: 0,
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute w-[380px] top-48 left-20"
        src="/servicios1.1.webp"
      />
      <img className="w-full h-full  object-cover" src="/servicios1.png" />
    </section>
  );
};

const ServiceTwo = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="w-full md:w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease .3s",
        }}
        className="absolute w-[280px] md:w-[320px] bottom-6 md:bottom-28 -right-32 "
        src="/servicios2.1.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-[280px] md:w-[320px] top-12 -right-6 "
        src="/servicios2.3.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease .5s",
        }}
        className="absolute w-[200px] md:w-[300px] bottom-16 md:bottom-28 -left-6  "
        src="/servicios2.2.png"
        ref={ref}
      />
      <img className="w-full h-full  object-cover" src="/servicios2.png" />
    </section>
  );
};

const ServiceThree = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="w-full md:w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        ref={ref}
        className="absolute w-[380px] top-20 -right-24 md:-right-8 rounded-5xl  "
        src="/servicios3.3.webp"
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        ref={ref}
        className="absolute w-[280px] md:w-[380px] bottom-28 left-8 rounded-2xl md:rounded-5xl "
        src="/servicios3.4.webp"
      />
      <img
        className="w-full h-full border border-brand-100  object-cover"
        src="/servicios3.webp"
      />
    </section>
  );
};
const ServiceFour = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <section className="w-full md:w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        className="absolute w-[280px] md:w-[340px] top-12 ml-10 md:ml-20 "
        src="/servicios4.1.webp"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-52 bottom-20 md:bottom-48 right-2 md:right-10 "
        src="/servicios4.2.webp"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-[360px] bottom-3 md:bottom-16 left-4 md:left-10 "
        src="/servicios4.3.png"
        ref={ref}
      />

      <img className="w-full h-full  object-cover" src="/servicios4.webp" />
    </section>
  );
};
const ServiceFive = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <section className="w-full md:w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          filter: isInview ? "blur(0px)" : "blur(9px)",
          scale: isInview ? 1 : 0.3,
          opacity: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        className="absolute w-[90%] left-[5%] top-[5%]"
        src="/servicios5.1.png"
        ref={ref}
      />

      <img className="w-full h-full  object-cover" src="/servicios2.png" />
    </section>
  );
};

const ServicesList = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-40  px-0 md:px-[5%] xl:px-0">
      <div id="diseño">
        <Content img={<ServiceOne />}>
          <div className="pr-12">
            <h2 className="text-brand-900 text-3xl md:text-5xl font-bold">
              Diseño de producto
            </h2>
            <p className="text-ironGray text-base md:text-xl font-light mt-6">
            De la idea al producto memorable: diseñamos y desarrollamos productos digitales 
            que no solo conectan con tus usuarios, sino que también crecen y escalan junto con tu negocio.
            </p>{" "}
            <div className=" flex flex-col gap-3 mt-12">
              <Item text="User Research & Testing" />
              <Item text="User Experience Design" />
              <Item text="UI Design & Interaction Design" />
              <Item text="Design Systems" />
              <Item text="Prototipado" />
            </div>
          </div>
        </Content>{" "}
      </div>
      <div id="software">
        <Content className="flex-row-reverse" img={<ServiceTwo />}>
          <div className="pl-0 md:pl-12">
            <h2 className="text-brand-900 text-3xl md:text-5xl font-bold">
              Desarrollo de Software a la medida
            </h2>
            <p className="text-ironGray text-base md:text-xl font-light mt-6">
            Diseño y desarrollo de la mano: construimos sitios y 
            aplicaciones que combinan funcionalidad y experiencia increíble, siempre pensados para tu negocio.
            </p>{" "}
            <div className=" flex flex-col gap-3 mt-12">
              <Item text="Desarrollo de aplicaciones móviles" />
              <Item text="Desarrollo web frontend y backend" />
              <Item text="UI Design & Interaction Design" />
              <Item text="Integraciones API" />
              <Item text="Conterización" />
            </div>
          </div>
        </Content>
      </div>
      <div id="web">
        <Content img={<ServiceThree />}>
          <div className="pr-12">
            <h2 className="text-brand-900 text-3xl md:text-5xl font-bold ">
              Sitios web
            </h2>
            <p className="text-ironGray text-base md:text-xl font-light mt-6">
            Más que un sitio web, es tu mejor herramienta para acercar tu marca a las personas. 
            Nos enfocamos en que transmita quién eres, lo que te hace especial y conecte genuinamente con tus clientes.
            </p>{" "}
            <div className=" flex flex-col gap-3 mt-12">
              <Item text="Diseño y desarrollo web" />
              <Item text="Interacciones y animaciones" />
              <Item text="Integraciones API para tracking" />
              <Item text="Optimización SEO" />
            </div>
          </div>
        </Content>
      </div>
      <div id="apps">
        <Content className="flex-row-reverse" img={<ServiceFour />}>
          <div className="pl-0 md:pl-12">
            <h2 className="text-brand-900 text-3xl md:text-5xl font-bold">
              Aplicciones Móviles
            </h2>
            <p className="text-ironGray text-base md:text-xl font-light mt-6">
            Diseñamos y desarrollamos apps —híbridas o nativas— pensando siempre en dos cosas: que tu negocio crezca y que tus clientes tengan una experiencia increíble con tu marca.
            </p>{" "}
            <div className=" flex flex-col gap-3 mt-12">
              <Item text="Diseño y desarrollo de apps" />
              <Item text="Publicación" />
              <Item text="Testing" />
            </div>
          </div>
        </Content>
      </div>
      <div id="capacitacion">
        <Content img={<ServiceFive />}>
          <div className="pr-12">
            <h2 className="text-brand-900 text-3xl md:text-5xl font-bold">
              Capacitación
            </h2>
            <p className="text-ironGray text-base md:text-xl font-light mt-6">
              La enseñanza es algo que nos apasiona, así que de la mano de
              nuestros desarrolladores creamos cursos personalizados adoc al
              stack de tus proyectos. Y si la herramienta que buscas es nueva,
              no te preocupes, seguro tendremos algo listo. Desde HTML y JS
              hasta Remix, Astro y Kubernetes.
            </p>{" "}
            <div className=" flex flex-col gap-3 mt-12">
              <Item text="Capacitación en línea" />
              <Item text="Cursos presenciales personalizados" />
              <Item text="Cursos pregrabados On Demand" />
            </div>
          </div>
        </Content>
      </div>
      <div id="extras">
        <Slider />
        </div>
    </section>
  );
};

const Advertaising = () => {
  return (
    <section className="bg-white md:pt-[160px] pt-20 pb-52 md:pb-[320px] px-4 md:px-0">
      <div className=" flex flex-wrap md:flex-nowrap max-w-7xl mx-auto h-fit md:h-[300px] rounded-5xl overflow-hidden ">
        <div className="bg-brand-900 grow-[2] flex gap-8 items-center px-6 md:px-12 py-8 md:py-0">
          <a
            href="https://open.spotify.com/episode/2Wd7XeH9spFblNclRiv0Tq"
            target="_blank"
            title="podcast"
          >
            <div className="w-28 h-28 md:w-40 md:h-40 border-[3px] rounded-full border-white p-3 md:p-5 relative">
              <img className="mt-2" src="/micro.png" />
              <div className="text-4xl text-white bg-brand-900 w-fit p-2 absolute right-0 bottom-0 rounded-full">
                <FaCirclePlay />
              </div>
            </div>
          </a>
          <div>
            <p className="text-sm md:text-lg font-light text-iron">
              Escucha nuestro podcast
            </p>
            <h3 className="text-white text-2xl md:text-4xl mt-1">
              Rust + Docker
            </h3>
            <div className="overflow-hidden h-16 flex items-center mt-4 md:mt-6">
              <img className="w-64 -ml-6" src="/wave.gif" />{" "}
            </div>
          </div>
        </div>
        <div className="bg-brand-800 grow-[1] text-white flex items-center justify-center text-center  bg-cover p-8">
          <div>
            <h4 className="text-6xl font-bold ">+9</h4>
            <p className="text-2xl font-light">Años de experiencia</p>
          </div>
        </div>
        <div className="bg-brand-500 grow-[1] ">
          <div className="w-full h-full bg-framework text-brand-900 flex items-center justify-center text-center bg-no-repeat bg-contain bg-center  p-8">
            <div>
              <h4 className="text-6xl font-bold">+50</h4>
              <p className="text-2xl font-light">Proyectos entregados</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

const Content = ({
  children,
  img,
  className,
}: {
  children: ReactNode;
  img?: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        "max-w-7xl mx-auto mt-20 flex items-center flex-wrap px-4 md:px-0 gap-12 md:gap-0",
        className
      )}
    >
      <div className="w-full md:w-[50%]">{children}</div>
      <div className="w-full md:w-[50%] flex items-center justify-start md:justify-center">
        {img}
      </div>
    </section>
  );
};

const Item = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
      exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
      transition={{ type: "spring", bounce: 0, duration: 1 }}
      className="flex gap-2"
    >
      <img className="w-6" src="/bullet.svg" />
      <p className="text-base md:text-xl font-light text-ironGray">{text}</p>
    </motion.div>
  );
};

const Services = () => {
  const handleWeb = () => {
    const node = document.querySelector("#web");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const handleDiseno = () => {
    const node = document.querySelector("#diseño");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const handleSoftware = () => {
    const node = document.querySelector("#software");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const handleApps = () => {
    const node = document.querySelector("#apps");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const handleCap = () => {
    const node = document.querySelector("#capacitacion");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const handleExtras = () => {
    const node = document.querySelector("#extras");
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className=" max-w-7xl mx-auto mt-12 md:mt-20 px-4 md:px-[5%] xl:px-0 ">
      <h2 className="text-brand-900 text-4xl md:text-5xl xl:text-6xl font-bold ">
        El mejor partner Full-stack
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
        exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
        className="text-ironGray text-lg  md:text-2xl font-light mt-6"
      >
        Nuestra experiencia en diseño y desarrollo ofrece las mejores
        experiencias digitales.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
        exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
        className="mt-12 w-fit  emoji"
      >
        <div
          onClick={handleDiseno}
          className=" w-full flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>01</span> <p>Diseño de Producto</p>
        </div>{" "}
        <div
          onClick={handleSoftware}
          className="w-full  flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>02</span> <p>Desarrollo de Software a la medida</p>
        </div>
        <div
          onClick={handleWeb}
          className="w-full  flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>03</span> <p>Sitios web</p>
        </div>
        <div
          onClick={handleApps}
          className="w-full  flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>04</span> <p>Aplicciones Móviles</p>
        </div>
        <div
          onClick={handleCap}
          className="w-full  flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>05</span> <p>Capacitación</p>
        </div>
        <div
          onClick={handleExtras}
          className="w-full  flex gap-3 text-ironGray text-base md:text-xl  font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[1px] transition-all"
        >
          <span>06</span> <p>Features específicos</p>
        </div>
      </motion.div>
    </section>
  );
};

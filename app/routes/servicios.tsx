import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView } from "motion/react";
import { FaCirclePlay } from "react-icons/fa6";
import { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fixter.org" },
    { name: "description", content: "Desarrollo de software a la medida" },
  ];
}

export default function Servicios() {
  return (
    <main className="bg-white min-h-screen ">
      <div className="bg-white relative top-0 z-50">
        <NavBar />
        <Services />
        <ServicesList />
        <Advertaising />
      </div>
      <div className="relative h-[900px]">
        <Banner />
        <Footer />
      </div>{" "}
    </main>
  );
}

const ServiceOne = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="w-[80%] relative overflow-hidden">
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
        src="/servicios1.1.png"
      />
      <img className="w-full h-full  object-cover" src="/servicios1.png" />
    </section>
  );
};

const ServiceTwo = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease .3s",
        }}
        className="absolute w-[320px] bottom-28 -right-32 "
        src="/servicios2.1.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-[320px] top-12 -right-6 rounded-5xl "
        src="/servicios2.3.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease .5s",
        }}
        className="absolute w-[300px] bottom-28 -left-6 rounded-5xl "
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
    <section className="w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        ref={ref}
        className="absolute w-[380px] top-20 -right-8 rounded-5xl  "
        src="/servicios3.3.png"
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        ref={ref}
        className="absolute w-[380px] bottom-28 left-8 rounded-5xl "
        src="/servicios3.4.png"
      />
      <img
        className="w-full h-full border border-brand-100  object-cover"
        src="/servicios3.png"
      />
    </section>
  );
};
const ServiceFour = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <section className="w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0.3,
          transition: "all 1s ease",
        }}
        className="absolute w-[340px] top-12 ml-20 "
        src="/servicios4.1.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-52 bottom-48 right-10 "
        src="/servicios4.2.png"
        ref={ref}
      />
      <motion.img
        style={{
          transform: isInview ? "translateY(-100px)" : " translateY(600px)",
          scale: isInview ? 1 : 0,
          transition: "all 1s ease",
        }}
        className="absolute w-[360px] bottom-16 left-10 "
        src="/servicios4.3.png"
        ref={ref}
      />

      <img className="w-full h-full  object-cover" src="/servicios4.png" />
    </section>
  );
};
const ServiceFive = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  return (
    <section className="w-[80%] relative overflow-hidden border border-brand-100/20 rounded-[48px]">
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
    <section className="flex flex-col gap-40">
      <Content img={<ServiceOne />}>
        <div className="pr-12">
          <h2 className="text-brand-900 text-5xl font-bold">
            Diseño de producto
          </h2>
          <p className="text-ironGray text-xl font-light mt-6">
            Creamos productos memorables para empresas y consumidores, además de
            brindar soluciones de diseño integrales para una iteración de
            productos escalable.
          </p>{" "}
          <div className=" flex flex-col gap-3 mt-12">
            <Item text="User Research & Testing" />
            <Item text="User Experience Design" />
            <Item text="UI Design & Interaction Design" />
            <Item text="Design Systems" />
            <Item text="Prototipado" />
          </div>
        </div>
      </Content>
      <Content className="flex-row-reverse" img={<ServiceTwo />}>
        <div className="pl-12">
          <h2 className="text-brand-900 text-5xl font-bold">
            Desarrollo de Software a la medida
          </h2>
          <p className="text-ironGray text-xl font-light mt-6">
            Nuestros equipos de diseño y desarrollo trabajan conjuntamente para
            crear sitios y aplicaciones web y móviles que brindan experiencias y
            funcionalidades exepcionales basadas en tus necesidades.
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
      <Content img={<ServiceThree />}>
        <div className="pr-12">
          <h2 className="text-brand-900 text-5xl font-bold ">Sitios web</h2>
          <p className="text-ironGray text-xl font-light mt-6">
            Consideramos a los sitios web el canal más importante para acercar
            tu marca a tus clientes. Así que nos enfocamos en que tu sitio
            transmita la esencia de tu marca.
          </p>{" "}
          <div className=" flex flex-col gap-3 mt-12">
            <Item text="Diseño y desarrollo web" />
            <Item text="Interacciones y animaciones" />
            <Item text="Integraciones API para tracking" />
            <Item text="Optimización SEO" />
          </div>
        </div>
      </Content>
      <Content className="flex-row-reverse" img={<ServiceFour />}>
        <div className="pl-12">
          <h2 className="text-brand-900 text-5xl font-bold">
            Aplicciones Móviles
          </h2>
          <p className="text-ironGray text-xl font-light mt-6">
            Ya sea una aplicación híbrida o nativa, nos encargamos de evaluar la
            mejor solución para ti y tus clientes, diseñaremos y desarrollaremos
            aplicaciones que mejoren tu tasa de conversión y la experiencia de
            usuario de tus clientes al interactuar con tu marca.
          </p>{" "}
          <div className=" flex flex-col gap-3 mt-12">
            <Item text="Diseño y desarrollo de apps" />
            <Item text="Publicación" />
            <Item text="Testing" />
          </div>
        </div>
      </Content>
      <Content img={<ServiceFive />}>
        <div className="pr-12">
          <h2 className="text-brand-900 text-5xl font-bold">Capacitación</h2>
          <p className="text-ironGray text-xl font-light mt-6">
            La enseñanza es algo que nos apasiona, así que de la mano de
            nuestros desarrolladores creamos cursos personalizados adoc al stack
            de tus proyectos. Y si la herramienta que buscas es nueva, no te
            preocupes, seguro tendremos algo listo. Desde HTML y JS hasta Remix,
            Astro y Kubernetes.
          </p>{" "}
          <div className=" flex flex-col gap-3 mt-12">
            <Item text="Capacitación en línea" />
            <Item text="Cursos presenciales personalizados" />
            <Item text="Cursos pregrabados On Demand" />
          </div>
        </div>
      </Content>
    </section>
  );
};

const Advertaising = () => {
  return (
    <section className="bg-white pt-[240px] pb-[320px]">
      <div className=" flex max-w-7xl mx-auto h-[300px] rounded-5xl overflow-hidden ">
        <div className="bg-brand-900 grow-[2] flex gap-8 items-center px-12">
          <a
            href="https://open.spotify.com/episode/2Wd7XeH9spFblNclRiv0Tq"
            target="_blank"
            title="podcast"
          >
            <div className="w-40 h-40 border-[3px] rounded-full border-white p-5 relative">
              <img className="mt-2" src="/micro.png" />
              <div className="text-4xl text-white bg-brand-900 w-fit p-2 absolute right-0 bottom-0 rounded-full">
                <FaCirclePlay />
              </div>
            </div>
          </a>
          <div>
            <p className="text-lg font-light text-iron">
              Escucha nuestro podcast
            </p>
            <h3 className="text-white text-4xl mt-1">Rust + Docker</h3>
            <div className="overflow-hidden h-16 flex items-center mt-6">
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
        "max-w-7xl mx-auto mt-20 flex items-center",
        className
      )}
    >
      <div className="w-[50%]">{children}</div>
      <div className="w-[50%] flex items-center justify-center">{img}</div>
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
      <p className="text-xl font-light text-ironGray">{text}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 ">
      <h2 className="text-brand-900 text-6xl font-bold ">
        El mejor partner Full-stack
      </h2>
      <p className="text-ironGray text-2xl font-light mt-6">
        Nuestra experiencia en diseño y desarrollo ofrece las mejores
        experiencias digitales.
      </p>
      <div className="mt-12 w-fit emoji">
        <div className=" w-full flex gap-3 text-ironGray text-xl font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[2px] transition-all">
          <span>01</span> <p>Diseño de Producto</p>
        </div>
        <div className="w-full  flex gap-3 text-ironGray text-xl font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[2px] transition-all">
          <span>02</span> <p>Desarrollo de Software a la medida</p>
        </div>
        <div className="w-full  flex gap-3 text-ironGray text-xl font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[2px] transition-all">
          <span>03</span> <p>Sitios web</p>
        </div>
        <div className="w-full  flex gap-3 text-ironGray text-xl font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[2px] transition-all">
          <span>04</span> <p>Aplicciones Móviles</p>
        </div>
        <div className="w-full  flex gap-3 text-ironGray text-xl font-light border-b border-ironGray/10 py-4 hover:border-brand-500 hover:border-b-[2px] transition-all">
          <span>05</span> <p>Capacitación</p>
        </div>
      </div>
    </section>
  );
};
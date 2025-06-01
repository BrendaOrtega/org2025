import { Button } from "~/components/Button";
import { FaCodeBranch } from "react-icons/fa";
import { StickyScrollReveal } from "~/components/StickyScroll";
import { twMerge } from "tailwind-merge";
import { SwipeGallery } from "~/components/SwipeGallery";
import { NavBar } from "~/components/Navbar";
import { SecondaryButton } from "~/components/SecondaryButton";
import { MdLocalPhone } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router";
import { Secuence } from "~/icons/secuence";
import { PhoneHero } from "~/components/PhoneHero";
import { InfiniteMovingCards } from "~/components/InfiniteMoving";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import BlobCursor from "~/components/BlobCursor";
import { FaLinkedinIn } from "react-icons/fa6";
import { WorkAccordion } from "./WorkAccordion";

const projects = [
  {
    image: "/sv-epros.webp",
    title: "English 4 professionals",
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
    image: "/sv-formmy.webp",
    title: "Formmy",
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
    image: "/sv-ct.webp",
    title: "Constructoken",
  },
  {
    image: "/sv-pt.webp",
    title: "Potentia",
  },
];

export function Welcome() {
  return (
    <main className="bg-white min-h-screen  ">
      <div className="bg-white relative z-30 mb-[600px] md:mb-[500px] rounded-b-[40px]">
        <NavBar />
        <Hero />
        <Why />
        <WorkAccordion />
        <Tools />
        <Comments />
        <Banner />
      </div>
      <Footer />
    </main>
  );
}

export const Banner = () => {
  return (
    <section className="bg-brand-500 pb-10  md:pb-20 pt-16 md:pt-32 rounded-5xl sticky -top-8 md:top-0 w-full z-50 -mt-32 md:-mt-32 ">
      <img className="mx-auto -mt-28 md:-mt-44" src="/star.png" />
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center my-8 md:my-16 ">
        Construyamos algo grandioso juntos
      </h2>
      <Button link="/contacto" className="mx-auto" mode="white" />
    </section>
  );
};

export const Footer = () => {
  return (
    <section className="bg-brand-900 h-[900px] overflow-hidden flex items-end  w-full fixed  z-10 bottom-0  md:pt-[300px]  ">
      <div className=" pt-32 w-full min-h-fit flex flex-col justify-end  ">
        <div className="flex w-full px-4 md:px-[5%] xl:px-0 flex-wrap gap-10 md:flex-nowrap md:gap-0 xl:gap-10 justify-between  max-w-7xl mx-auto">
          <div className="w-full md:w-fit flex flex-col justify-start items-start">
            <img className="w-28" src="/logo.png" />
            <span className=" text-xs mt-4 text-lightGray font-light">
              Todos los derechos reservados <br /> © 2016 – 2025 Fixter.org
            </span>
          </div>
          <div className="text-white font-normal flex flex-col gap-2">
            <h3 className="text-lightGray  ">Explora</h3>
            <Link to="/servicios">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Servicios
              </p>
            </Link>
            <Link to="/portafolio">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Portafolio
              </p>
            </Link>
            <Link to="/historia">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Nuestra historia
              </p>
            </Link>
            <Link to="/contacto">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Contacto
              </p>
            </Link>
          </div>
          <div className="text-white  font-normal flex flex-col gap-2 relative z-40">
            <h3 className="text-lightGray   ">Saas y Webapps</h3>
            <a href="https://fixtergeek.com/" target="_blank" rel="noreferrer">
              <p className="hover:text-brand-600  cursor-pointer hover:scale-95 transition-all">
                Fixtergeek
              </p>
            </a>{" "}
            <a href="https://www.formmy.app/" target="_blank">
              <p className="hover:text-brand-600 text-white  cursor-pointer hover:scale-95 transition-all">
                Formmy
              </p>
            </a>
            <a href="https://www.denik.me/" target="_blank">
              <p className="hover:text-brand-600 text-white  cursor-pointer hover:scale-95 transition-all">
                Deník
              </p>
            </a>
            <a href="https://www.easybits.cloud/" target="_blank">
              <p className="hover:text-brand-600 text-white  cursor-pointer hover:scale-95 transition-all">
                EasyBits
              </p>
            </a>
          </div>
          <div className="text-white  font-normal flex flex-col gap-2  ">
            <h3 className="text-lightGray  ">Escríbenos</h3>
            <a href="https://wa.me/527757609276" title="phone" target="_blank">
              <p className="flex items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <MdLocalPhone />
                +52 775 760 92 76
              </p>{" "}
            </a>
            <a href="mailto:brenda@fixter.org" title="mail" target="_blank">
              <p className="flex items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <BsMailbox />
                brenda@fixter.org
              </p>
            </a>
            <p className="md:flex hidden items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
              <GrLocationPin />
              México{" "}
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100063503085832"
              title="facebook"
              target="_blank"
            >
              <p className="md:flex hidden items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <TiSocialFacebook />
                Facebook
              </p>
            </a>
            <a
              href="https://www.linkedin.com/company/28980688/"
              title="facebook"
              target="_blank"
            >
              <p className="md:flex hidden items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <FaLinkedinIn className="text-sm mr-1" />
                Linkedin
              </p>
            </a>
          </div>
          <div className="text-white  font-normal flex md:hidden flex-col gap-2">
            <h3 className="text-lightGray invisible  ">Saas y Webapps</h3>
            <p className="flex items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
              <GrLocationPin />
              México{" "}
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100063503085832"
              title="facebook"
              target="_blank"
            >
              <p className="flex items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <TiSocialFacebook />
                Facebook
              </p>
            </a>
            <a
              href="https://www.linkedin.com/company/28980688/"
              title="facebook"
              target="_blank"
            >
              <p className="flex items-center gap-2 hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                <FaLinkedinIn className="text-sm mr-1" />
                Linkedin
              </p>
            </a>
          </div>
        </div>
        <div className="mt-0 md:mt-20 lg:mt-32  w-full overflow-hidden">
          <div className="flex items-center justify-start w-[2000px] gap-10 h-20 md:h-32 pl-4">
            <span
              className="text-white/10 text-[32px] md:text-[58px] lg:text-[72px] xl:text-[110px] text-left ml-0 lg:ml-12 bg-clip-text inline-block animate-shine"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(158, 201, 186, 0) 40%, rgba(158, 201, 186, 0.8) 50%, rgba(158, 201, 186, 0) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                animationDuration: "4s",
              }}
              // className="text-[110px] text-left ml-12 text-[#9EC9BA]"
            >
              Siendo creativos desde 2014
            </span>
            <img className="w-32 h-32" src="/clic2.gif" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

const Comments = () => {
  return (
    <main className="h-fit md:h-[100vh] pt-20 pb-64 md:pb-[900px]  xl:py-[80px] bg-white  relative z-30">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center px-4 md:px-0">
        Qué dicen nuestros clientes
      </h2>
      <div className="flex justify-center items-center w-[90%] md:w-full mx-auto mt-12  md:mt-40">
        <SwipeGallery>
          <CommentCard
            company="Collectum Datos Panel"
            name="Rosalba Flores"
            comment="Teníamos la idea de un negocio digital, pero no sabíamos como implementarlo. Entre varias opciones fue en Fixter que encontramos la solución ideal. No solo desarrollaron exactamente lo que necesitábamos, sino que también nos ofrecieron ideas innovadoras con tecnología de vanguardia."
            date="2020 - 2024"
            image="https://i.imgur.com/RAiyJBc.jpg"
          />

          <ImageCard className="bg-brand-900" image="/e4pros.svg" />
          <CommentCard
            company="Founder English4pros"
            name="Katherine Manson"
            comment="Contratamos Fixter para ayudarnos a modernizar
             nuestro sitio web obsoleto. Brenda se tomó el tiempo necesario para comprender a fondo nuestros objetivos 
             y la visión para el sitio... El resultado final superó nuestras expectativas de todas las maneras posibles, con un diseño elegante 
               y fácil de usar que refleja nuestra marca."
            date="2024"
            image="https://www.e4pros.com/katherine.webp"
          />
          <ImageCard className="bg-brand-900" image="/token.svg" />
          {/* <CommentCard
            company="Constructoken"
            name="Carlos Landaverde"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2023-2024"
          /> */}
          <ImageCard className="bg-brand-900" image="/potentia.svg" />
          {/* <CommentCard
            company="Potentiia"
            name="Marta Roman"
            comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2020 - 2024"
          /> */}
          <ImageCard className="bg-brand-900" image="/panel.svg" />
        </SwipeGallery>
      </div>
    </main>
  );
};
const ImageCard = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={twMerge(
        "  w-full h-full bg-contain bg-no-repeat bg-center p-6 flex flex-col justify-around",
        className
      )}
    ></section>
  );
};
const CommentCard = ({
  name,
  company,
  date,
  comment,
  image,
  className,
}: {
  name: string;
  company: string;
  date?: string;
  comment: string;
  image?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "w-full h-full bg-brand-100 border-brand-800 p-6 flex flex-col justify-around",
        className
      )}
    >
      <p className="text-base md:text-xl font-semibold">"{comment}"</p>
      <div className="flex gap-3">
        <div className="bg-brand-900 overflow-hidden w-12 h-12 rounded-full">
          <img className="bg-brand-900" src={image} alt={name} />{" "}
        </div>
        <div>
          <h3 className="text-base md:text-lg">{name}</h3>
          <p className="text-ironGray font-light text-sm">
            {company} | {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <section className="max-w-7xl w-[90%] md:w-full  mx-auto py-20 px-4 md:px-10 lg:px-0 md:py-[160px] relative z-10 bg-white">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center ">
        Enfócate en tus clientes y déjanos el resto
      </h2>
      <p className="text-ironGray text-lg md:text-xl lg:text-2xl font-light text-center mt-6">
        No inviertas tiempo desarrollando y manteniendo tu sitio web,{" "}
        <span className="hidden md:block">
          si tu sitio parece obsoleto y el diseño va en contra de su imagen en
          lugar de favorecerla,
        </span>{" "}
        si tus apps web no tienen todas las funcionalidades que necesitas, no lo
        pienses más y trabaja con nosotros.
      </p>
      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center mt-12 md:mt-20">
        <div className=" flex justify-center gap-6  lg:gap-12 w-fit ">
          <div className="flex flex-col gap-10">
            <Item image="/remix.svg" title="Remix" />
            <Item image="/mongo.svg" title="Mongo" />
            <Item image="/python.svg" title="Python" />
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <Item image="/tailwind.svg" title="Tailwind" />
            <Item image="/prisma.svg" title="Prisma" />
          </div>
          <div className="flex flex-col gap-10">
            <Item image="/ts.svg" title="TS" />
            <Item image="/react.png" title="React" />
            <Item image="/js.svg" title="JS" />
          </div>
        </div>
        <div className="h-52 w-full overflow-hidden md:w-[28%] flex items-center justify-center relative">
          <Secuence />
          <Item
            className="bg-brand-900 absolute pt-4 lg:pt-8"
            image="/logo.svg"
          />
        </div>
        <div className="w-fit ">
          <img
            className="shadow-[0_8px_32px_rgba(204,204,204,.4)] w-[240px] md:w-[200px] lg:w-auto z-10 relative rounded-3xl"
            src="/example1.webp"
          />
        </div>
      </div>
    </section>
  );
};

const Item = ({
  image,
  title,
  className,
}: {
  image: string;
  title?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-white cursor-pointer shadow-[0_8px_32px_rgba(204,204,204,.4)] border border-brand-100/40 rounded-2xl w-24 md:w-20 md:h-24 lg:w-24 lg:h-28 hover:shadow-none transition-all pt-4",
        className
      )}
    >
      <img
        className=" md:max-w-[60%] object-contain lg:max-w-[70%] h-12 mx-auto "
        src={image}
      />
      <p className="text-center text-base md:text-sm lg:text-base mt-2 text-brand-900 font-semibold">
        {title}
      </p>
    </div>
  );
};

const Work = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="text-center  mx-auto p-10 md:pt-[240px] md:pb-[160px] relative z-10 bg-white">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold px-4 md:px-0 ">
        Nuestro trabajo es estético, interactivo y funcional{" "}
      </h2>

      {/* <motion.div className="mt-12 md:mt-20 flex flex-col gap-0 md:gap-20">
        <InfiniteMovingCards items={projects} direction="left" speed="normal" />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </motion.div> */}
    </section>
  );
};

const Why = () => {
  return (
    <section className=" relative z-10">
      <StickyScrollReveal
        items={[
          {
            twColor: "bg-[#1B2428]",
            img: (
              <img
                className="object-cover w-[80%] md:scale-100 h-full mx-auto bg-[#1B2428]"
                src="/step1-org.gif"
                alt="prototipo"
              />
            ),
            text: (
              <p className="font-sans leading-snug">
                No inviertas meses o una fortuna para probar tus ideas 🪄
              </p>
            ),
            title: "Prueba tus ideas",
          },
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="object-cover  scale-120 h-full w-full bg-brand-900"
                src="/projects/proto1.gif"
                alt="perro"
              />
            ),
            text: (
              <p className="font-sans leading-snug">
                Creamos prototipos que puedes probar con tus usuarios y mostrar
                a tus socios o inversionistas 📱
              </p>
            ),
            title: "Prueba tus ideas ",
          },
          {
            twColor: "bg-[#1B2428]",
            img: (
              <img
                className="w-full md:w-[90%] lg:w-[80%] mx-auto h-[350px] md:h-[500px]   object-contain  bg-[#1B2428] "
                src="/projects/proto2.gif"
                alt="phone"
              />
            ),
            text: (
              <p className="font-sans leading-snug">
                Diseñamos y desarrollamos el software que tu negocio necesita 🚀
              </p>
            ),
            title: "Impulsa tu negocio ",
          },
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="w-full h-full object-contain md:object-cover bg-brand-900"
                src="/projects/proto4.webp"
                alt="perro"
              />
            ),
            text: (
              <ul className="font-sans leading-snug">
                <li>💻 Sitios web </li>
                <li>🛍️ E-commerce</li>
                <li>🎯 CRM's</li>
                <li>🧩 O software personalizado </li>
              </ul>
            ),
            title: "Impulsa tu negocio ",
          },
        ]}
      />
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <section className=" -mt-12  w-full rounded-5xl mx-auto px-0 md:px-16  relative  ">
        <PhoneHero
          title={
            <div className="w-[80%] relative z-50">
              <h1 className=" text-brand-900 text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center  !leading-snug">
                Creamos experiencias únicas a través del diseño y desarrollo de
                sitios web, prototipos y webapps.
              </h1>
              <div className="flex justify-center gap-6 mt-6 md:mt-12">
                <Button link="/contacto" className="!text-base " mode="white" />{" "}
                <Link to="/portafolio">
                  <SecondaryButton
                    className="!text-base"
                    title="Ver proyectos"
                  />{" "}
                </Link>
              </div>
            </div>
          }
        />
      </section>
    </>
  );
};

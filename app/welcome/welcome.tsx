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

const projects = [
  {
    image: "https://i.imgur.com/3wx9Qa4.png",
    title: "English 4 professionals",
  },
  {
    image: "https://i.imgur.com/nLH6ChB.png",
    title: "ReformAI",
  },
  {
    image: "https://i.imgur.com/JQrOEpZ.jpg",
    title: "Deník",
  },
  {
    image: "https://i.imgur.com/2nGAoyu.png",
    title: "Formmy",
  },
];

const testimonials = [
  {
    image: "https://i.imgur.com/U8dTc3C.jpg",
    title: "Collectum Datos Panel",
  },
  {
    image: "https://i.imgur.com/v5NluEA.jpg",
    title: "LastPlay",
  },
  {
    image: "https://i.imgur.com/lmSmhdB.png",
    title: "Constructoken",
  },
  {
    image: "https://i.imgur.com/nYvYjdc.png",
    title: "Potentia",
  },
];

export function Welcome() {
  return (
    <main className="bg-white min-h-screen ">
      <div className="bg-white relative z-30">
        <NavBar />
        <Hero />
        <Why />
        <Work />
        <Tools />
        <Comments />
      </div>
      <div className="relative h-[1900px]">
        <Banner />
        <Footer />
      </div>
    </main>
  );
}

export const Banner = () => {
  return (
    <section className="bg-brand-500 pb-10  md:pb-20 pt-16 md:pt-32 rounded-5xl sticky -top-8 md:top-0 w-full z-50 -mt-32 md:-mt-32 ">
      <img className="mx-auto -mt-28 md:-mt-44" src="/star.png" />
      <h2 className="text-3xl md:text-5xl font-bold text-center my-8 md:my-16 ">
        Construyamos algo grandioso juntos
      </h2>
      <Button link="/contacto" className="mx-auto" mode="white" />
    </section>
  );
};

export const Footer = () => {
  return (
    <section className="bg-brand-900 overflow-hidden flex items-end rounded-t-5xl w-full fixed  z-10 bottom-0  md:pt-[300px]  ">
      <div className=" pt-32 w-full min-h-fit flex flex-col justify-end  ">
        <div className="flex w-full px-4 md:px-0 flex-wrap md:flex-nowrap gap-10 justify-between  max-w-7xl mx-auto">
          <div className="w-full md:w-fit flex flex-col justify-start items-start">
            <img src="/logo.svg" />
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
          <div className="text-white  font-normal flex flex-col gap-2">
            <h3 className="text-lightGray  ">Saas y Webapps</h3>
            <a href="https://fixtergeek.com/" title="phone" target="_blank">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Fixtergeek
              </p>
            </a>{" "}
            <a href="https://www.formmy.app/" title="phone" target="_blank">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Formmy
              </p>
            </a>
            <a href="https://www.denik.me/" title="phone" target="_blank">
              <p className="hover:text-brand-600 cursor-pointer hover:scale-95 transition-all">
                Deník
              </p>
            </a>
          </div>
          <div className="text-white  font-normal flex flex-col gap-2">
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
          </div>
        </div>
        <div className="mt-0 md:mt-40  w-full overflow-hidden">
          <div className="flex items-center justify-start w-[2000px] gap-10 h-20 md:h-32">
            <span
              className="text-white/10 text-[40px] md:text-[110px] text-left ml-0 md:ml-12 bg-clip-text inline-block animate-shine"
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
    <main className="h-fit md:h-[100vh] pt-20 pb-64  md:py-[80px] bg-white  relative z-30">
      <h2 className="text-3xl md:text-5xl font-bold text-center px-4 md:px-0">
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
            company="English4pros"
            name="Katherine Manson"
            comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2024"
          />
          <ImageCard className="bg-brand-900" image="/token.svg" />
          <CommentCard
            company="Constructoken"
            name="Carlos Landaverde"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2023-2024"
          />
          <ImageCard className="bg-brand-900" image="/potentia.svg" />
          <CommentCard
            company="Potentiia"
            name="Marta Roman"
            comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2020 - 2024"
          />
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
    <section className="max-w-7xl w-[90%] md:w-full  mx-auto py-20 md:py-[160px] relative z-10 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center ">
        Enfócate en tus clientes y déjanos el resto
      </h2>
      <p className="text-ironGray text-lg md:text-2xl font-light text-center mt-6">
        No inviertas tiempo desarrollando y manteniendo tu sitio web,{" "}
        <span className="hidden md:block">
          si tu sitio parece obsoleto y el diseño va en contra de su imagen en
          lugar de favorecerla,
        </span>{" "}
        si tus apps web no tienen todas las funcionalidades que necesitas, no lo
        pienses más y trabaja con nosotros.
      </p>
      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center mt-12 md:mt-20">
        <div className=" flex justify-center gap-12 w-fit ">
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
        <div className="h-52 w-full md:w-[28%] flex items-center justify-center relative">
          <Secuence />
          <Item className="bg-brand-900 absolute pt-8" image="/logo.svg" />
        </div>
        <div className="w-fit ">
          <img
            className="shadow-[0_8px_32px_rgba(204,204,204,.4)] w-[240px] md:w-auto z-10 relative rounded-3xl"
            src="/example1.svg"
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
        "bg-white cursor-pointer shadow-[0_8px_32px_rgba(204,204,204,.4)] border border-brand-100/40 rounded-2xl w-24 h-28 hover:shadow-none transition-all pt-4",
        className
      )}
    >
      <img className="max-w-[70%] h-12 mx-auto " src={image} />
      <p className="text-center mt-2 text-brand-900 font-semibold">{title}</p>
    </div>
  );
};

const Work = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <section className="text-center  mx-auto py-20 md:pt-[240px] md:pb-[160px] relative z-10 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold px-4 md:px-0 ">
        Nuestro trabajo es estético, interactivo y funcional{" "}
      </h2>
      <div className="absolute w-full h-full inset-0 ">
        <BlobCursor />
      </div>
      <motion.div className="mt-12 md:mt-20 flex flex-col gap-4 md:gap-20">
        <InfiniteMovingCards items={projects} direction="left" speed="normal" />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </motion.div>
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
                className="object-cover scale-110 h-full w-full"
                src="/projects/proto3.gif"
                alt="prototipo"
              />
            ),
            text: (
              <p className="font-sans">
                No inviertas meses o una fortuna para probar tus ideas 🪄
              </p>
            ),
            title: "Prueba tus ideas",
          },
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="object-cover scale-110 h-full w-full"
                src="/projects/proto1.gif"
                alt="perro"
              />
            ),
            text: (
              <p className="font-sans">
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
                className="w-[98%] h-full object-cover "
                src="/projects/proto2.gif"
                alt="perro"
              />
            ),
            text: (
              <p className="font-sans">
                Diseñamos y desarrollamos el software que tu negocio necesita 🚀
              </p>
            ),
            title: "Impulsa tu negocio ",
          },
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="w-full h-full object-cover"
                src="/projects/proto4.png"
                alt="perro"
              />
            ),
            text: (
              <ul className="font-sans">
                <li>💻 Sitios web</li>
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
      <section className=" -mt-12  w-full rounded-5xl mx-auto px-0 md:px-16  relative ">
        <PhoneHero
          title={
            <div className="w-[80%] relative z-50">
              <h1 className=" text-brand-900 text-2xl md:text-6xl font-bold text-center  !leading-snug">
                Creamos experiencias únicas a través del diseño y desarrollo de
                sitios web, prototipos y webapps.
              </h1>
              <div className="flex justify-center gap-6  mt-12">
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

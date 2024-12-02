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
      <div className="relative h-[900px]">
        <Banner />
        <Footer />
      </div>
    </main>
  );
}

export const Banner = () => {
  return (
    <section className="bg-brand-500 pb-20 pt-32 rounded-5xl sticky top-0 w-full z-50 -mt-20 ">
      <img className="mx-auto -mt-44" src="/star.png" />
      <h2 className="text-5xl font-bold text-center my-16 ">
        Construyamos algo grandioso juntos
      </h2>
      <Button className="mx-auto" mode="white" />
    </section>
  );
};

export const Footer = () => {
  return (
    <section className="bg-brand-900 rounded-t-5xl w-full fixed bottom-0 pt-[300px] z-10 ">
      <div className=" pt-16">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className=" flex flex-col justify-start items-start">
            <img src="/logo.svg" />
            <span className="text-xs mt-4 text-lightGray font-light">
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
            <a href="tel:+34623123456" title="phone" target="_blank">
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

        <div className="mt-40  w-full overflow-hidden">
          <div className="flex items-center justify-start w-[2000px] gap-10 h-32">
            <span
              className="text-white/10 text-[110px] text-left ml-12 bg-clip-text inline-block animate-shine"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(158, 201, 186, 0) 40%, rgba(158, 201, 186, 0.8) 50%, rgba(158, 201, 186, 0) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                animationDuration: "4s",
              }}
              // className="text-[110px] text-left ml-12 text-[#9EC9BA]"
            >
              Siendo creativos desde 2016
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
    <main className=" h-[100vh] py-[80px] bg-white !z-30">
      <h2 className="text-5xl font-bold text-center ">
        Qué dicen nuestros clientes
      </h2>
      <div className="flex justify-center items-center  mt-40">
        <SwipeGallery>
          <CommentCard
            company="Collectum Datos Panel"
            name="Rosalba Flores"
            comment="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque quasi a, hic quae aut provident eius ea ab molestiae culpa
          explicabo totam aliquam laudantium alias sit animi id impedit!"
            date="2020 - 2024"
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
      <p className="text-xl font-semibold">"{comment}"</p>
      <div className="flex gap-3">
        <div className="bg-brand-900 w-12 h-12 rounded-full"></div>
        <div>
          <h3>{name}</h3>
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
    <section className="max-w-7xl mx-auto py-[160px]">
      <h2 className="text-5xl font-bold text-center ">
        Enfócate en tus clientes y déjanos el resto
      </h2>
      <p className="text-ironGray text-2xl font-light text-center mt-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        ullam perspiciatis iusto architecto, molestiae itaque odit aut! Ex
        obcaecati necessitatibus placeat beatae voluptatem molestiae vitae
        dolores incidunt consequuntur excepturi? Suscipit!
      </p>
      <div className="flex w-full justify-center mt-20">
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
        <div className="w-[28%] flex items-center justify-center relative">
          <Secuence />
          <Item className="bg-brand-900 absolute pt-8" image="/logo.svg" />
        </div>
        <div className="w-fit ">
          <img
            className="shadow-[0_8px_32px_rgba(204,204,204,.4)] rounded-3xl"
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
        "bg-white shadow-[0_8px_32px_rgba(204,204,204,.4)] border border-brand-100/40 rounded-2xl w-24 h-28 hover:shadow-none transition-all pt-4",
        className
      )}
    >
      <img className="max-w-[70%] h-12 mx-auto " src={image} />
      <p className="text-center mt-2 text-brand-900 font-semibold">{title}</p>
    </div>
  );
};

const Work = () => {
  return (
    <section className="text-center max-w-7xl  mx-auto py-[160px]">
      <h2 className="text-5xl font-bold ">Nuestro trabajo</h2>
      <div className="grid grid-cols-3 gap-10 mt-20">
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          tags="UX/UI Design & Development"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          tags="UX/UI Design & Development"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  image,
  tags,
}: {
  title: string;
  image?: string;
  tags?: string;
}) => {
  return (
    <div className="col-span-1 w-full  group cursor-pointer ">
      <div className="overflow-hidden rounded-3xl w-full h-[432px] relative">
        <div className="pl-6 bg-curved object-fill absolute z-10 w-36 pt-2 flex gap-4 -right-1 -top-20 group-hover:-top-1 transition-all h-16 ">
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            👩🏻‍💻
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            🎨
          </div>
        </div>
        <img
          className=" w-full h-full object-cover group-hover:scale-125 transition-all"
          src={image}
          alt={title}
        />
      </div>
      <h3 className=" mt-4 text-left text-2xl text-brand-900"> {title}</h3>
    </div>
  );
};

const Why = () => {
  return (
    <section className="bg-brand-900 ">
      <StickyScrollReveal
        items={[
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="object-cover h-full w-full"
                src="https://i.imgur.com/WpmbbPu.png"
                alt="perro"
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
                className="object-cover h-full w-full"
                src="https://i.imgur.com/WpmbbPu.png"
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
            twColor: "bg-brand-900",
            img: (
              <img
                className="w-full h-full object-cover"
                src="https://i.imgur.com/FOFW9Oc.png"
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
                src="https://i.imgur.com/FOFW9Oc.png"
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
      <section className=" bg-stars max-w-7xl w-full h-screen rounded-5xl mx-auto px-16 pt-20 mt-10 relative ">
        <h1 className="text-brand-900 text-6xl font-bold text-center leading-snug">
          Creamos experiencias únicas a través del diseño y desarrollo de sitios
          web, prototipos y webapps.
        </h1>
        <div className="flex justify-center gap-6  mt-12">
          <Button mode="white" />
          <SecondaryButton title="Ver proyectos" />{" "}
        </div>
        <div className="relative inset-0 flex justify-center">
          <img className="absolute top-20 " src="/phone.png" />
          <img
            className="absolute top-64 left-[25%] w-[180px] shadow-2xl rounded-3xl "
            src="/Item-1.png"
          />{" "}
          <img
            className="absolute top-[410px] right-[25%] w-[240px]  "
            src="/item-2.png"
          />
          <img
            className="absolute top-40 right-[20%] w-[240px]  "
            src="/Item-3.png"
          />
        </div>
      </section>
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center px-[20%] ">
        <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center">
          <FaCodeBranch className="text-4xl font-light" />
        </div>
        <h2 className="text-brand-900 text-5xl font-bold text-center leading-snug mt-12">
          El mejor aliado para diseñar y desarrollar software para el éxito de
          tu empresa
        </h2>
      </section>
    </>
  );
};

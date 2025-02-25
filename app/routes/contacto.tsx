import type { Route } from "./+types/home";
import { Banner, Footer, Welcome } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Escríbenos " },
    { name: "description", content: "Construyamos algo grandioso juntos" },
  ];
}

export default function Contacto() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-white min-h-screen ">
      <div className="bg-white relative top-0 z-50 pb-52 xl:pb-20">
        <NavBar />
        <section className="min-h-screen max-w-7xl pb-40 md:pb-0 gap-16 mx-auto mt-12 md:mt-20 flex items-start px-4 md:px-[5%] xl:px-0 ">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-brand-900 text-4xl md:text-5xl xl:text-6xl font-bold ">
              Hablemos
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(9px" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px" }}
              exit={{ opacity: 0, y: -40, filter: "blur(9px" }}
              transition={{ type: "spring", bounce: 0, duration: 1 }}
              className="text-ironGray text-lg md:text-2xl font-light mt-6"
            >
              Nos encantaría saber más sobre ti y lo que podemos diseñar y
              construir juntos.
            </motion.p>
            <div className="flex gap-12 mt-12">
              <a>
                <p className="text-sm text-ironGray font-light mb-1">
                  Cotiza tu proyecto
                </p>
                <span className="text-brand-900">brenda@fixter.org</span>

                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#51B4A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </a>
              <a>
                <p className="text-sm text-ironGray font-light mb-1">
                  Trabaja con nosotros
                </p>
                <span className="text-brand-900">contacto@fixter.org</span>
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#51B4A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </a>
            </div>
            <div className=" mt-10 -ml-4  overflow-hidden flex justify-start">
              <iframe
                frameBorder="0"
                id="formmy-iframe"
                title="formmy"
                width="100%"
                height="550"
                src="https://formmy.app/embed/674f8519505ff6f8336edca8"
                style={{ margin: " 0 auto", display: "block" }}
              ></iframe>
            </div>
          </div>
          <img
            className="hidden lg:flex lg:w-[40%] xl:w-[45%] lg:ml-0 xl:ml-[5%] h-[800px] rounded-5xl object-cover object-left"
            src="/contacto.jpg"
            alt="comedor azul"
          />
        </section>
      </div>
      <div className="relative h-[900px]">
        <Banner />
        <Footer />
      </div>{" "}
    </main>
  );
}

import type { Route } from "./+types/home";
import { Banner, Footer } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import React from "react";
import { FaPlay, FaArrowRight, FaCheck, FaDiscord, FaGithub, FaBrain, FaRocket, FaShieldAlt, FaLightbulb, FaChartLine, FaCogs, FaTimes, FaDollarSign, FaClock, FaTools, FaHeadset, FaPercent } from "react-icons/fa";
import { Button } from "~/components/Button";
import { cn } from "~/lib/utils";
import { IoOpenOutline, IoChevronDown, IoAdd } from "react-icons/io5";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Phi-4 - La Nueva Generación de Inteligencia Artificial" },
    { name: "description", content: "Phi-4: La inteligencia artificial más avanzada del mercado. Potencia tu negocio con IA de vanguardia y capacidades revolucionarias." },
  ];
}

export default function AI() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="bg-darkGreen text-white min-h-screen">
       <div className="bg-darkGreen relative z-30 mb-[600px] md:mb-[500px] rounded-b-[40px]">
        <NavBar />
        <Hero />
        <Capabilities />
        <Features />
        <Pricing />
        <FAQ />
        <Banner />
      </div>
      <Footer className="bg-darkGreen" />
    </main>
  );
}

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className=" pt-0 md:pt-32 pb-20 bg-darkGreen min-h-[80vh] relative overflow-hidden grid place-content-center ">
      {/* Pattern background estático */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none bg-pattern bg-cover bg-center" aria-hidden />
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10  mt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-4 scale-150">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#85DDCB" fillOpacity="0.15" />
              <path d="M20 10a6 6 0 0 1 6 6v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2a6 6 0 0 1-12 0v-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2v-2a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4zm-6 8v2a4 4 0 0 0 8 0v-2h-8z" fill="#85DDCB" />
              <circle cx="14" cy="26" r="2" fill="#85DDCB" />
              <circle cx="26" cy="26" r="2" fill="#85DDCB" />
            </svg>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mt-8 md:mt-12"
          >
            Automatiza tu negocio con IA y multiplica tus resultados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lightGray text-lg md:text-2xl font-light mt-6"
          >
            Descubre cómo la inteligencia artificial puede reducir tus costos, acelerar tus procesos y liberar a tu equipo de tareas repetitivas. Implementa soluciones de automatización y lleva tu empresa al siguiente nivel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
          >
            <Button title="Agenda una llamada" link="https://calendly.com/bremin11-20-93/interview" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-20 md:py-40 bg-darkGreen max-w-7xl px-4 md:px-[5%] xl:px-0 mx-auto">
      <div className="container mx-auto px-6 grid grid-cols-6 gap-10 md:gap-20">
        <div className="col-span-6 lg:col-span-3">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sticky top-10 flex md:block flex-col items-center "
          >
              <HeaderTag title="Transforma tu empresa con IA"  variant="brand" />
            <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold mb-6 text-white">
              Soluciones de IA a la medida de tu empresa
            </h2>
            <p className="text-base md:text-xl text-center md:text-left text-lightGray font-light max-w-3xl mx-auto">
              Desde atención al cliente automatizada hasta análisis predictivo y generación de reportes, integra la IA en tus procesos clave para que tu negocio sea más eficiente, rentable y competitivo.
            </p>
            <div className="flex flex-wrap items-start justify-center md:justify-start gap-4 mt-10">
              <HeaderTag title="Automatización de procesos" variant="default" />
              <HeaderTag title="Chatbots inteligentes" variant="default" />
              <HeaderTag title="Análisis de datos en tiempo real" variant="default" />
              <HeaderTag title="Integración con tus sistemas" variant="default" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 col-span-6 lg:col-span-3">
        <CapabilityCard index={0} title="Atención al cliente 24/7 con IA" description="Responde consultas y resuelve problemas de tus clientes en cualquier momento.">
          {(() => {
            const ref = React.useRef(null);
            const isInView = useInView(ref, { once: true, margin: '-50px' });
            return (
              <div ref={ref} className="w-[95%] h-[95%] mx-auto flex flex-col justify-end items-center">
                {/* Mockup visual tipo chat AI, tema light, grande y animado */}
                <div className="w-full max-w-md h-[350px] bg-white rounded-3xl  flex flex-col justify-end items-center relative overflow-hidden border border-gray-200 p-6 mt-10">
                  {/* Avatares y estado */}
                  <div className="absolute top-4 left-6 flex items-center gap-2 z-10">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-2xl font-bold text-white ">🤖</div>
                    <div>
                      <p className="text-xs font-semibold text-brand-900 ">Ghosty</p> <p className="text-[10px] font-light text-gray-400 ">Tu asistente virtual</p>   </div>
                  </div>
                  {/* Burbujas de chat animadas solo si isInView */}
                  <div className="flex flex-col gap-3 w-full mt-16">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5 }}
                      className="self-start bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-sm text-sm md:text-base max-w-[80%] shadow"
                    >
                      ¡Hola! ¿En qué puedo ayudarte hoy?
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="self-end bg-brand-500/20 text-brand-900 px-4 py-3 rounded-2xl rounded-br-sm text-sm md:text-base max-w-[70%] shadow"
                    >
                      Quiero cotizar un pedido
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="self-end bg-brand-500/20 text-brand-900 px-4 py-3 rounded-2xl rounded-br-sm text-sm md:text-base max-w-[70%] shadow"
                    >
                      100 tazas personalizadas con logo de la empresa
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="self-start bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-sm text-base max-w-[80%] shadow flex items-center gap-2"
                    >
                      ¡Por supuesto! Te ayudo <span className="animate-pulse">💬</span>
                    </motion.div>
                  </div>
                  {/* Badge */}
                  <span className="absolute bottom-4 right-6 text-xs text-brand-900 bg-brand-500/50 px-2 py-1 rounded-full">24/7</span>
                </div>
              </div>
            );
          })()}
        </CapabilityCard>
          <CapabilityCard index={1} title="Reportes automáticos y análisis predictivo" description="Obtén insights y reportes visuales para tomar mejores decisiones.">
            {(() => {
              const ref = React.useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-50px' });
              const [simple, setSimple] = React.useState(false);
              React.useEffect(() => {
                if (isInView) {
                  const timeout = setTimeout(() => setSimple(true), 2500);
                  return () => clearTimeout(timeout);
                }
              }, [isInView]);
              return (
                <div ref={ref} className="mt-16 mx-auto flex flex-col justify-end items-center">
                  <motion.div
                    layout
                    transition={{ layout: { duration: 0.7, type: 'spring' } }}
                    className="w-full max-w-md  h-[340px] md:h-[370px] bg-gradient-to-br from-darkGreen to-[#1a2e2b] rounded-3xl shadow-2xl flex flex-col justify-between items-center relative overflow-hidden border border-white/10 p-4 mt-16 md:mt-10"
                  >
                    {/* KPIs y widgets arriba, solo en dashboard simplificado */}
                    {simple && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-6 left-28 flex gap-2"
                      >
                        <div className="w-24 h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center">
                          <span className="text-xs text-brand-500 font-bold">Usuarios</span>
                          <span className="text-white text-sm font-semibold">2,340</span>
                        </div>
                        <div className="w-24 h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center">
                          <span className="text-xs text-brand-500 font-bold">Conversiones</span>
                          <span className="text-white text-sm font-semibold">187</span>
                        </div>
                        <div className="w-24 h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center">
                          <span className="text-xs text-brand-500 font-bold">Ingresos</span>
                          <span className="text-white text-sm font-semibold">$12K</span>
                        </div>
                      </motion.div>
                    )}
                    {/* Filtro de fechas arriba derecha */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: simple ? 0 : 1, y: simple ? -20 : 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="absolute top-4 right-8 flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-xs text-white"
                    >
                      <span>📅</span>
                      <span>01/06/24 - 07/06/24</span>
                    </motion.div>                
            
                    {/* KPI Widget */}
                    <motion.div
                      layout
                      initial={false}
                      animate={{ top: simple ? 96 : 16, right: simple ? 24 : 16, scale: simple ? 1.2 : 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: simple ? 0.2 : 0 }}
                      className="absolute bg-brand-500/10 px-3 top-6 left-6 py-1 rounded-lg text-xs text-brand-500 !h-fit w-fit font-bold shadow"
                      style={{ top: simple ? 24 : 16, right: simple ? 24 : 16 }}
                    >
                      +32% ventas
                    </motion.div>
                    {/* Gráfica de barras principal, más grande y pegada al borde inferior */}
                    <motion.div
                      layout
                      initial={false}
                      animate={{
                        height: simple ? 120 : 100,
                        marginTop: simple ? 64 : 64,
                       left: simple ? 12 : 8,
                        marginBottom: simple ? 0 : 0,
                        gap: simple ? 12 : 8,
                        opacity: 1, 
                        scale: simple ? .8 : 1
                      }}
                      transition={{ duration: 0.7, delay: simple ? 0 : 0 }}
                      className="flex items-end w-full absolute left-8 right-0 !top-40 px-4"
                    >
                      <motion.div layout className="w-10 rounded bg-brand-500/40" animate={{ height: simple ? 120 : 90 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/60 ml-3" animate={{ height: simple ? 200 : 200 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/30 ml-3" animate={{ height: simple ? 240 : 240 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/30 ml-3" animate={{ height: simple ? 100 : 100 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/30 ml-3" animate={{ height: simple ? 20 : 20 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/80 ml-3" animate={{ height: simple ? 180 : 180 }} />
                      <motion.div layout className="w-10 rounded bg-brand-500/20 ml-3" animate={{ height: simple ? 110 : 110 }} />
                    </motion.div>
      
                  </motion.div>
                </div>
              );
            })()}
          </CapabilityCard>
          <CapabilityCard index={2} title="Integración fácil con tus herramientas actuales" description="Conecta la IA con tus sistemas y plataformas favoritas sin complicaciones.">
            {(() => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-50px' });
              const [showSuccess, setShowSuccess] = React.useState(false);
              
              React.useEffect(() => {
                if (isInView) {
                  const timeout = setTimeout(() => setShowSuccess(true), 3000);
                  return () => clearTimeout(timeout);
                }
              }, [isInView]);
              
              return (
                <div ref={ref} className="relative w-[90%] h-[90%] mx-auto flex flex-col justify-end items-center">
                  <div className="w-full h-80  flex flex-col justify-center items-center relative  p-4 ">
                    <div className="flex gap-4 items-center">
                      <div className="w-28 h-28 rounded-xl bg-darkGreen relative z-40  border border-brand-500/10 flex items-center justify-center text-6xl text-brand-500">🔗</div>
                      <div className="w-28 h-28 rounded-xl bg-darkGreen relative z-40 border border-brand-500/10 flex items-center justify-center text-6xl text-brand-500">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >⚙️</motion.span>
                      </div>
                      <div className="w-28 h-28 rounded-xl bg-darkGreen relative z-40 border border-brand-500/10 flex items-center justify-center text-6xl text-brand-500">🗂️</div>
                    </div>
                    <svg width="200" height="30" className="absolute left-1/2  top-36 -translate-x-1/2" style={{zIndex:0}}>
                      <line x1="220" y1="15" x2="60" y2="15" stroke="#51B4A0" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="0" y1="15" x2="60" y2="15" stroke="#51B4A0" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                    <motion.div 
                      className="absolute bottom-4 left-0/2 md:left-1/3 -translate-x-1/2 flex items-center gap-2 bg-brand-500/10 px-3 py-1 rounded-full text-xs text-brand-500 font-bold shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={showSuccess ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6 }}
                    >
                    <FaCheck /> Integración exitosa
                    </motion.div>
                  </div>
                </div>
              );
            })()}
          </CapabilityCard>
        </div>
      </div>
    </section>
  );
};

const HeaderTag = ({title, variant, className}: {title: string, variant: "default" | "brand", className?: string}) => {
  return (
    <div className="text-center  w-fit  ml-0 ">
      <h2 className={cn("text-sm font-light text-white px-2 py-2 border border-white/10 rounded-lg", variant === "brand" && "text-[10px] border-none mb-6 text-brand-500 bg-brand-500/10 font-normal rounded-full uppercase ", className)}>
        {title} 
     </h2>
      </div>
  )
}

const CapabilityCard = ({ 
  children, 
  index, 
  title,
  description
}: { 
  children: ReactNode; 
  index?: number;  
  title: string;
  description: string;  
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("group relative bg-white h-[528px] text-brand-900 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", index === 1 && "bg-ironGreen border-none text-white", index === 2 && "bg-darkGreen border-white/10 text-white")}
    >
          <div className="absolute top-6 left-6 text-left z-10">
                <h3 className={cn("text-xl font-bold text-brand-900", index === 1 && "text-white", index === 2 && "text-white")}>{title}</h3>
                <p className="text-lightGray text-base font-light mt-1">{description}</p>
              </div>
        <div className={cn("absolute text-brand-900 bottom-4 right-4 w-8 h-8 bg-[#CECFD0] rounded grid place-items-center ",  index === 1 && "bg-[#1D2726] text-white", index === 2 && "bg-white/5 text-white")}>
        <IoOpenOutline className=" text-xl" />
        </div>
    {children}
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const features = [
    "Implementación ágil y acompañamiento experto",
    "Soluciones personalizadas, nada genérico",
    "Ahorro de tiempo y reducción de errores",
    "Soporte humano siempre que lo necesites"
  ];

  return (
    <section className="py-20 bg-darkGreen max-w-7xl px-4 md:px-[5%] xl:px-0   mx-auto">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center "
        >
            <HeaderTag title="Ventajas competitivas" variant="brand"  />
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 text-white">
            ¿Por qué automatizar con Phi-4?
          </h2>
          <p className="text-base md:text-xl text-center text-lightGray font-light max-w-3xl mx-auto">
            Nuestra plataforma combina la última tecnología en IA con una implementación ágil y soporte experto. Olvídate de soluciones genéricas: te ayudamos a transformar tu operación con inteligencia real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard index={1} title="Implementación ágil y acompañamiento experto" description="Te guiamos paso a paso para que la IA trabaje para ti desde el primer día." className=" col-span-1 md:col-span-2"     image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"   />
          <FeatureCard index={2} title="Soluciones personalizadas, nada genérico" description="Cada negocio es único. Creamos automatizaciones que se adaptan a tus procesos y objetivos."  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"  />
          <FeatureCard index={3} title="Ahorro de tiempo y reducción de errores" description="Automatiza tareas repetitivas y minimiza los errores humanos para que tu equipo se enfoque en lo importante."  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
          <FeatureCard index={4} title="Soporte humano siempre que lo necesites" description="Nuestro equipo está listo para ayudarte en cada etapa del proceso."  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
          <div className="col-span-1 subgrid">
          <FeatureCard index={5} title="Integración rápida" description="Conectamos la IA con tus sistemas actuales sin complicaciones." className="!h-[207px]"    />
          <FeatureCard index={6} title="Escalabilidad garantizada" description="Empieza pequeño y crece a tu ritmo, sin límites." className="!h-[207px] mt-6"    />
          </div>
          <FeatureCard index={7} title="Automatización segura" description="Tus datos siempre protegidos con los más altos estándares de seguridad."  className="col-span-1"   image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"   />
          <FeatureCard index={8} title="Resultados medibles" description="Mide el impacto de la automatización en tu negocio con reportes claros y accionables." className="col-span-1 md:col-span-2"   image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  title, 
  description,
  image,
  index,
  className,
  imageClassName
}: { 
  title: string; 
  description: string;
  image?: string;
  index: number;
  className?:string;
  imageClassName?:string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const icons = [FaBrain, FaRocket, FaShieldAlt, FaCogs];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("group relative bg-ironGreen overflow-hidden h-[280px] md:h-[438px] border border-white/10 rounded-3xl  hover:shadow-lg transition-all duration-300 hover:border-brand-500/50", className) }
    >

      <img className={cn("absolute top-0 left-0 w-full object-cover z-0", imageClassName)} src={image} alt={title} />
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-b from-ironGreen/0 p-6 to-ironGreen/100 pointer-events-none">
        <h3 className="text-white text-base md:text-xl font-bold">{title}</h3>
        <p className="text-lightGray text-xs md:text-sm font-light mt-2"> {description}</p>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const faqs = [
    {
        question: "¿Qué LLM usan?",
        answer: "Utilizamos Phi-4 de Microsoft, un modelo de lenguaje de última generación desarrollado por Microsoft Research. Phi-4 destaca por su eficiencia, precisión y capacidad de razonamiento, lo que lo hace ideal para automatizaciones empresariales, análisis de datos y tareas complejas en entornos corporativos. Aunque dependiendo el proyecto, podemos usar otros modelos de Microsoft, OpenAI o de Meta."
      },
    {
      question: " ¿Qué hace Microsoft Phi-4 exactamente?",
      answer: "Microsoft Phi-4 es tu asistente de IA personal que automatiza tareas repetitivas, analiza datos complejos y genera insights valiosos para tu negocio. Desde reportes automáticos hasta análisis predictivos, Microsoft Phi-4 lo hace todo."
    },
 
    {
      question: "¿Puedo usar Phi-4 en proyectos comerciales?",
      answer: "¡Sí! Phi-4 está diseñado para uso comercial y empresarial. Ofrecemos licencias flexibles que se adaptan a las necesidades de tu negocio."
    },
    {
      question: " ¿Qué incluye el precio?",
      answer: "Implementación, capacitación, soporte prioritario, actualizaciones automáticas y acceso a todas las funcionalidades premium. Sin costos ocultos."
    },
    {
      question: " ¿Cuánto tiempo toma la implementación?",
      answer: "Depende del proyecto, pero generalmente es entre 2 y 4 semanas."
    },
    {
      question: " ¿Se integra con mis herramientas?",
      answer: "¡Absolutamente! Microsoft Phi-4 se conecta con más de 100 herramientas populares: Slack, Salesforce, Google Workspace, Microsoft Office, y muchas más. Si no está en la lista, lo agregamos."
    },
    {
      question: " ¿Necesito conocimientos técnicos?",
      answer: "¡Para nada! Microsoft Phi-4 está diseñado para ser súper intuitivo. Interfaz simple, comandos en lenguaje natural y soporte prioritario. Cualquiera puede usarlo desde el primer día."
    },
    {
      question: "📊 ¿Hay límites de uso?",
      answer: "Sin límites artificiales. El LLM escala con tu negocio. Usa tanto como necesites, procesa todos los datos que quieras. Tu éxito no tiene techo con Microsoft Phi-4."
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte técnico completo, documentación detallada, y acceso a nuestro equipo de expertos en IA para resolver cualquier consulta."
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-darkGreen mb-40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
          >
                   <HeaderTag title="Resuelve tus dudas" variant="brand"  />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

    
      </div>
    </section>
  );
};

const FAQItem = ({ 
  question, 
  answer, 
  index 
}: { 
  question: string; 
  answer: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-ironGreen rounded-xl p-0 overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between px-8 py-6 focus:outline-none group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h3 className="text-xl font-bold text-white mb-0 text-left">{question}</h3>
        <span className="flex items-center justify-center">
          <IoAdd
            className={cn(
              "text-3xl text-brand-500 transition-transform duration-300",
              open && "rotate-45"
            )}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ opacity: { duration: 0.18 }, height: { duration: 0.35 }, y: { duration: 0.25 } }}
            className="px-8"
            style={{ overflow: 'hidden' }}
          >
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="text-lightGray leading-relaxed pb-6"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const plans = [
    {
      name: "Implementación con ChatGPT",
      price: "$45,000+",
      subtitle: "MXN por mes",
      features: [
        { text: "Suscripción ChatGPT Plus ($20/mes)", icon: FaDollarSign },
        { text: "Desarrollo de prompts personalizados", icon: FaTools },
        { text: "Integración manual con tus sistemas", icon: FaClock },
        { text: "Mantenimiento y ajustes continuos", icon: FaCogs },
        { text: "Tiempo de tu equipo en configuración", icon: FaTimes },
        { text: "Resultados limitados y genéricos", icon: FaTimes }
      ],
      cta: "Ver alternativa"
    },
    {
      name: "Nuestro servicio optimizado",
      price: "Desde $999",
      subtitle: "MXN por mes",
      features: [
        { text: "IA especializada para tu industria", icon: FaBrain },
        { text: "Implementación completa y automatizada", icon: FaRocket },
        { text: "Integración nativa con tus herramientas", icon: FaShieldAlt },
        { text: "Soporte técnico prioritario", icon: FaHeadset },
        { text: "Resultados medibles y personalizados", icon: FaChartLine },
        { text: "Ahorro del 88% vs ChatGPT", icon: FaPercent }
      ],
      cta: "Cotiza tu proyecto"
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-darkGreen ">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
                 <HeaderTag title="Inversión inteligente" variant="brand"  />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¿Por qué pagar más por menos?
          </h2>
          <p className="text-base md:text-xl text-center text-lightGray font-light max-w-3xl mx-auto">
            Compara el costo real de implementar ChatGPT en tu empresa vs nuestro servicio optimizado. Ahorra tiempo, dinero y obtén mejores resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ 
  name, 
  price, 
  subtitle, 
  features, 
  cta, 
  index 
}: { 
  name: string; 
  price: string; 
  subtitle?: string;
  features: { text: string; icon: any }[]; 
  cta: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-darkGreen border border-white/10 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {subtitle && <span className="text-lightGray/60 ml-2">{subtitle}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, featureIndex) => {
          const IconComponent = feature.icon;
          return (
            <li key={featureIndex} className="flex items-center gap-3">
              <IconComponent className={cn(
                "flex-shrink-0",
                index === 0 && featureIndex >= 4 ? "text-red-400" : "text-white"
              )} />
              <span className="text-lightGray">{feature.text}</span>
            </li>
          );
        })}
      </ul>

      {index !== 0 && (
        <Link to="/contact">
        <button className="mt-auto w-full bg-brand-500 text-brand-900 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-95 cursor-pointer">
          {cta}
        </button></Link>
      )}
    </motion.div>
  );
}; 
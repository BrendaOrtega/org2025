import type { Route } from "./+types/home";
import { Banner, Footer } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import { FaPlay, FaArrowRight, FaCheck, FaDiscord, FaGithub, FaBrain, FaRocket, FaShieldAlt, FaLightbulb, FaChartLine, FaCogs, FaTimes, FaDollarSign, FaClock, FaTools, FaHeadset, FaPercent } from "react-icons/fa";
import { Button } from "~/components/Button";
import { cn } from "~/lib/utils";
import { IoOpenOutline, IoChevronDown, IoAdd } from "react-icons/io5";
import { Link } from "react-router";
import { Secuence } from "../icons/secuence";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Agrega IA a tu negocio" },
    { name: "description", content: "Agrega IA a tu negocio con nuestras soluciones de IA de vanguardia." },
  ];
}

export default function AI() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverFeatures, setIsOverFeatures] = useState(false);
  const [isOverCustomLLM, setIsOverCustomLLM] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getCursorEmoji = () => {
    if (isOverCustomLLM) return '🪄';
    if (isOverFeatures) return '👀';
    return null;
  };

  return (
    <div className="min-h-screen bg-darkGreen relative ">
      {/* Cursor personalizado */}
      {getCursorEmoji() && (
        <div
          className="fixed pointer-events-none z-50 text-2xl transition-transform duration-100 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        >
          {getCursorEmoji()}
        </div>
      )}
      
      <main className="bg-darkGreen text-white min-h-screen">
        <div className="bg-darkGreen relative z-30 mb-[600px] md:mb-[500px] rounded-b-[40px]">
          <NavBar />
          <Hero />
          <Capabilities />
          <div 
            onMouseEnter={() => setIsOverFeatures(true)}
            onMouseLeave={() => setIsOverFeatures(false)}
          >
            <Features />
          </div>
          <Pricing />
          <div
            onMouseEnter={() => setIsOverCustomLLM(true)}
            onMouseLeave={() => setIsOverCustomLLM(false)}
          >
            <CustomLLMBanner />
          </div>
          <FAQ />
          <br/>
          <br/>
          <br/>
          <br/>
          <Banner />
        </div>
        <Footer className="bg-darkGreen" />
      </main>
    </div>
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
      <div className="container mx-auto px-4 relative z-10  mt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
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
            className="text-white text-4xl lg:text-5xl xl:text-7xl font-bold mt-8 md:mt-12"
          >
         Haz que tu negocio trabaje solo (casi).
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lightGray text-lg md:text-2xl font-light mt-6"
          >
Deja que la IA se encargue de lo repetitivo: menos errores, más eficiencia y un equipo libre para enfocarse en lo que realmente importa: crecer.          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 md:mt-16"
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
    <section className="py-20 md:py-32 bg-darkGreen max-w-7xl px-4 md:px-[5%] xl:px-0 mx-auto">
      <div className="container mx-auto  grid grid-cols-6 gap-10 md:gap-20 ">
        <div className="col-span-6 lg:col-span-3 sticky top-10 h-fit  ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex md:block flex-col items-center z-10"
          >
              <HeaderTag title="Transforma tu empresa con IA"  variant="brand" />
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold mb-6 text-white">
              Soluciones de IA a la medida de tu empresa
            </h2>
            <p className="text-base md:text-xl text-center md:text-left text-lightGray font-light max-w-3xl mx-auto">
              Desde atención al cliente automatizada hasta análisis predictivo y generación de reportes, integra la IA en tus procesos clave para que tu negocio sea más eficiente, rentable y competitivo.
            </p>
            <div className="flex flex-wrap items-start justify-center md:justify-start gap-4 mt-10">
              <HeaderTag title="Automatización de procesos" variant="default" />
              <HeaderTag title="Chatbots inteligentes" variant="default" />          
                  <HeaderTag title="Alertas automáticas" variant="default" />
              <HeaderTag title="Análisis de datos en tiempo real" variant="default" />
              <HeaderTag title="Integración con tus sistemas" variant="default" />
              <HeaderTag title="Reconocimiento de voz y texto" variant="default" />
              <HeaderTag title="Generación de contenido" variant="default" />

       
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
                      className="self-start bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-sm text-xs md:text-base max-w-[80%] shadow"
                    >
                      ¡Hola! ¿En qué puedo ayudarte hoy?
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="self-end bg-brand-500/20 text-brand-900 px-4 py-3 rounded-2xl rounded-br-sm text-xs md:text-base max-w-[70%] shadow"
                    >
                      Quiero cotizar un pedido
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="self-end bg-brand-500/20 text-brand-900 px-4 py-3 rounded-2xl rounded-br-sm text-xs md:text-base max-w-[70%] shadow"
                    >
                      100 tazas personalizadas con logo de la empresa
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="self-start bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-sm text-xs md:text-base max-w-[80%] shadow flex items-center gap-2"
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
          
          <CapabilityCard index={3} title="Automatización de workflows empresariales" description="Optimiza procesos repetitivos y libera tiempo valioso para tareas estratégicas.">
            {(() => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-50px' });
              
              return (
                <div ref={ref} className="w-[95%] h-[95%] mx-auto flex flex-col justify-end items-center ">
                  <div className="w-full max-w-md h-[350px] bg-[#C9E0D6] rounded-3xl flex flex-col justify-center items-center relative overflow-hidden border border-gray-200 p-6">
                    {/* Workflow visual */}
                    <div className="flex flex-col items-center space-y-4 ">
                      {/* Paso 1 */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <span className="text-sm text-gray-700">Email recibido</span>
                      </motion.div>
                      
                      {/* Flecha */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="text-gray-400"
                      >
                        ↓
                      </motion.div>
                      
                      {/* Paso 2 */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <span className="text-sm text-gray-700">IA clasifica y extrae datos</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="text-gray-400"
                      >
                        ↓
                      </motion.div>
                      
                      {/* Paso 3 */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <span className="text-sm text-gray-700">Acción automatizada</span>
                      </motion.div>
                    </div>
                    
                    {/* Badge de tiempo ahorrado */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="absolute bottom-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      -80% tiempo
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
      <h2 className={cn(
        "text-sm cursor-pointer font-light text-white px-2 py-2 border border-white/10 rounded-lg relative overflow-hidden group transition-all duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[100%] before:transition-transform before:duration-[1000ms] before:ease-in-out",
        variant === "brand" && "text-[10px] border-none mb-6 text-brand-500 bg-brand-500/10 font-normal rounded-full uppercase before:via-brand-400/30",
        className
      )}>
        <span className="relative z-10">{title}</span>
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
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.8,
        scale: isInView ? 1 : 0.7,
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 1s ease",
      }}
      className={cn("group relative bg-white h-[528px] text-brand-900 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", index === 1 && "bg-ironGreen border-none text-white", index === 2 && "bg-darkGreen border-white/10 text-white", index === 3 && "bg-[#191F23] border-white/0 text-white")}
    >
          <div className="absolute top-6 left-6 text-left z-10">
                <h3 className={cn("text-2xl font-bold text-brand-900", index === 1 && "text-white", index === 2 && "text-white", index === 3 && "text-white")}>{title}</h3>
                <p className="text-lightGray text-base font-light mt-2">{description}</p>
              </div>
        <div className={cn("absolute text-brand-900 bottom-4 right-4 w-8 h-8 bg-[#CECFD0] rounded grid place-items-center ",  index === 1 && "bg-[#1D2726] text-white", index === 2 && "bg-white/5 text-white", index === 3 && "bg-white/5 text-white")}>
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
    <section className="py-32 bg-darkGreen max-w-7xl px-4 md:px-[5%] xl:px-0   mx-auto">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center "
        >
            <HeaderTag title="Ventajas competitivas" variant="brand"  />
          <h2 className="text-3xl text-center md:text-5xl font-bold mb-6 text-white">
            ¿Por qué automatizar con IA?
          </h2>
          <p className="text-base md:text-xl text-center text-lightGray font-light max-w-4xl mx-auto">
            Creamos IA que realmente funciona para tu negocio. Nada de plantillas copy-paste ni rollos técnicos complicados. Solo herramientas que hacen tu trabajo más fácil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard index={1}  title="Implementación ágil y acompañamiento experto" description="No te dejamos solo con la tecnología. Te acompañamos hasta que veas resultados reales funcionando en tu negocio." className=" col-span-1 md:col-span-2"     image="/icons/img1.png"  />
          <FeatureCard index={2} title="Soluciones personalizadas, nada genérico" description="Cada negocio es único. Creamos automatizaciones que se adaptan a tus procesos y objetivos."   image="/icons/img4.svg"  imageClassName="scale-75 -top-16 md:top-0 md:scale-100"  />
          <FeatureCard index={3} title="Ahorro de tiempo y reducción de errores" description="Automatiza tareas repetitivas y minimiza los errores humanos para que tu equipo se enfoque en lo importante."   image="/icons/img2.png"   imageClassName="scale-50 -top-20 md:top-0 md:scale-100"  />
          <FeatureCard index={4} title="Integración rápida" description="Conectamos la IA con tus sistemas actuales." image="/icons/img3.svg"  imageClassName=" -top-16 md:top-0 "   />
          <div className="col-span-1 subgrid">
          <FeatureCard index={5} title="Soporte humano " description="Nuestro equipo está listo para ayudarte en cada etapa del proceso."  className="!h-[207px]"  image="/icons/img6.svg"    />

          <FeatureCard index={6} title="Escalabilidad garantizada" description="Empieza pequeño y crece a tu ritmo, sin límites." className="!h-[207px] mt-6"    image="/icons/img5.svg"  />
          </div>
          {/* <FeatureCard index={7} title="Automatización segura" description="Tus datos siempre protegidos con los más altos estándares de seguridad."  className="col-span-1"   image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"   /> */}
          {/* <FeatureCard index={8} title="Resultados medibles" description="Mide el impacto de la automatización en tu negocio con reportes claros y accionables." className="col-span-1 md:col-span-2"   image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    /> */}
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
  const isInView = useInView(ref, { once: true });

  const icons = [FaBrain, FaRocket, FaShieldAlt, FaCogs];

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.8,
        scale: isInView ? 1 : 0.7,
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 1s ease",
      }}
      className={cn("group relative bg-ironGreen bg-darkGreen overflow-hidden h-[280px] md:h-[438px] border border-white/10 rounded-3xl  hover:shadow-lg transition-all duration-300 hover:border-brand-500/50", className) }
    >

      <img className={cn("absolute top-0 left-0 w-full object-cover z-0", imageClassName)} src={image} alt={title} />
      <div className="absolute bottom-0 left-0 w-full backdrop-blur z-10 bg-gradient-to-b from-ironGreen/0 p-6 to-ironGreen/100 pointer-events-none">
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
        answer: "Trabajamos con los mejores modelos del mercado: Claude 3.5 Sonnet de Anthropic, GPT-4o de OpenAI, Gemini Pro de Google y Phi-4 de Microsoft. Cada proyecto requiere diferentes capacidades, por eso elegimos el modelo más adecuado según tus necesidades específicas - análisis de datos, automatización, generación de contenido o razonamiento complejo."
      },
    {
      question: "¿Qué pueden hacer estos modelos de IA para mi negocio?",
      answer: "Nuestros modelos de IA funcionan como asistentes súper inteligentes que automatizan tareas repetitivas, analizan grandes volúmenes de datos y generan insights valiosos para tu negocio. Desde crear reportes automáticos hasta análisis predictivos y atención al cliente 24/7."
    },
 
    {
      question: "¿Puedo usar estos modelos de IA en proyectos comerciales?",
      answer: "¡Por supuesto! Trabajamos con licencias comerciales de todos los modelos principales. Nos encargamos de todo el tema legal y técnico para que puedas usar la IA en tu negocio sin complicaciones."
    },
    {
      question: " ¿Qué incluye el precio?",
      answer: "Implementación, capacitación, soporte prioritario y actualizaciones automáticas sin costos ocultos."
    },
    {
      question: " ¿Cuánto tiempo toma la implementación?",
      answer: "Depende del proyecto, pero generalmente es entre 2 y 8 semanas."
    },
    {
      question: " ¿Se integra con mis herramientas?",
      answer: "¡Absolutamente! Nuestras implementaciones pueden conectarse con más de 100 herramientas populares: Slack, Salesforce, Google Workspace, Microsoft Office, y muchas más. Si no está en la lista, lo agregamos."
    },
    {
      question: " ¿Necesito conocimientos técnicos?",
      answer: "¡Para nada! Nuestros servicios están diseñados para ser súper intuitivos. Interfaz simple, comandos en lenguaje natural y soporte prioritario. Cualquiera puede usarlo desde el primer día."
    },
    {
      question: "¿Hay límites de uso?",
      answer: "Sin límites artificiales. El LLM escala con tu negocio. Usa tanto como necesites, procesa todos los datos que quieras. Tu éxito no tiene techo."
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte técnico completo, documentación detallada, y acceso a nuestro equipo de expertos en IA para resolver cualquier consulta."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-darkGreen mb-20">
      <div className="container mx-auto px-4">
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
  const isInView = useInView(ref, { once: true });
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
              "text-3xl text-white transition-transform duration-300",
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
      name: "Implementación IA",
      price: "+$45,000",
      subtitle: "MXN por mes",
      features: [
        { text: "Suscripción AI ($20/mes)", icon: FaDollarSign },
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
        { text: "IA especializada para tu empresa", icon: FaBrain },
        { text: "Implementación completa y automatizada", icon: FaRocket },
        { text: "Integración nativa con tus herramientas", icon: FaShieldAlt },
        { text: "Soporte técnico prioritario", icon: FaHeadset },
        { text: "Resultados medibles y personalizados", icon: FaChartLine },
        { text: "Ahorro hasta del 88% vs ChatGPT", icon: FaPercent }
      ],
      cta: "Cotiza tu proyecto"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-darkGreen ">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
         <HeaderTag title="Inversión inteligente" variant="brand"  />
          <h2 className="text-3xl text-center md:text-5xl font-bold mb-6 text-white">
            ¿Por qué pagar más por menos?
          </h2>
          <p className="text-base md:text-xl text-center text-lightGray font-light max-w-3xl mx-auto">
            Compara el costo real de implementar IA con Anthropic, ChatGPT o Gemini en tu empresa por tu cuenta vs nuestro servicio optimizado. Ahorra tiempo, dinero y obtén mejores resultados.
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
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.8,
        scale: isInView ? 1 : 0.7,
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 1s ease",
      }}
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
        <Link to="/contacto">
        <button className="mt-auto w-full bg-brand-500 text-brand-900 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-95 cursor-pointer">
          {cta}
        </button></Link>
      )}
    </motion.div>
  );
};

const CustomLLMBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border border-white/10 rounded-3xl p-0 md:p-0 flex flex-col md:flex-row items-stretch overflow-hidden shadow-xl relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Estela de luz del cursor */}
          {isHovering && (
            <div
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(133, 221, 203, 0.15), transparent 40%)`,
              }}
            />
          )}
          
          {/* Left: Content */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-20">
<HeaderTag title="LLM Empresarial" variant="brand"  />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IA privada para tu empresa</h2>
            <p className="text-lightGray text-lg mb-8 max-w-xl font-light">
              Implementa tu propio modelo de lenguaje (LLM) privado, entrenado con tus datos y totalmente bajo tu control. Seguridad, personalización y escalabilidad para empresas que exigen lo mejor.
            </p>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <FaShieldAlt className="text-brand-500 text-2xl mt-1" />
                <div>
                  <span className="text-white font-semibold">Privacidad total</span>
                  <p className="text-lightGray text-base font-light">Tus datos nunca salen de tu infraestructura.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaCogs className="text-brand-500 text-2xl mt-1" />
                <div>
                  <span className="text-white font-semibold">Personalización avanzada</span>
                  <p className="text-lightGray text-base font-light">Entrenado y ajustado para tus procesos y necesidades.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaChartLine className="text-brand-500 text-2xl mt-1" />
                <div>
                  <span className="text-white font-semibold">Escalabilidad y control</span>
                  <p className="text-lightGray text-base font-light">Crecimiento sin límites y control total sobre el modelo.</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-2">
              <Button  title="Cotizar mi proyecto" link="/contacto"  />
           
            </div>
          </div>
          {/* Right: Illustration (Grid 3x5 de LLMs con máscara radial) */}
          <div className="hidden md:block relative min-w-[340px] max-w-[420px]">
            <div
              className="grid grid-cols-3 grid-rows-5 gap-8  px-8 py-8 w-full h-full place-items-center rounded-2xl"
              style={{
                maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
              }}
            >
              {/* Fila 1 */}
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#384B4B] font-bold">Phi-4</div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/chatgpt.svg" alt="gpt" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/microsoft.svg" alt="Phi-4" className="w-1/2 h-full object-contain" /></div>
              {/* Fila 2 */}
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/llama.svg" alt="llama" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-xl text-[#384B4B] font-bold">Mistral</div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/claude.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              {/* Fila 3 */}
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/gemini.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              <div className="transition-all w-20 h-20 rounded-2xl bg-brand-500/10 flex items-center justify-center shadow-lg">
              <div className="transition-all flex justify-center mb-4 scale-150 pt-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#85DDCB" fillOpacity="0.15" />
              <path d="M20 10a6 6 0 0 1 6 6v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2a6 6 0 0 1-12 0v-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2v-2a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4zm-6 8v2a4 4 0 0 0 8 0v-2h-8z" fill="#85DDCB" />
              <circle cx="14" cy="26" r="2" fill="#85DDCB" />
              <circle cx="26" cy="26" r="2" fill="#85DDCB" />
            </svg>
          </div>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/mistral.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              {/* Fila 4 */}
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/claude2.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/tropic.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-lg text-[#384B4B] font-bold">Gemini</div>
              {/* Fila 5 */}
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/chatgpt.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/gok.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
              <div className="opacity-60 hover:opacity-100 transition-all w-20 h-20 rounded-xl bg-ironGreen flex items-center justify-center text-2xl text-[#6B7A86] font-bold"><img src="/icons/journey.svg" alt="claude" className="w-2/3 h-full object-contain" /></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


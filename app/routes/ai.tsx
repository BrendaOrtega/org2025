import type { Route } from "./+types/home";
import { Banner, Footer } from "../welcome/welcome";
import { NavBar } from "~/components/Navbar";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import React from "react";
import { FaPlay, FaArrowRight, FaCheck, FaDiscord, FaGithub, FaBrain, FaRocket, FaShieldAlt, FaLightbulb, FaChartLine, FaCogs } from "react-icons/fa";
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
    <section className="pt-32 pb-20 bg-darkGreen min-h-[80vh] relative overflow-hidden ">
      {/* Pattern background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none bg-pattern bg-cover bg-contain">
       
      </div>
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
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mt-12"
          >
            Potencia tu negocio con IA de vanguardia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lightGray text-lg md:text-2xl font-light mt-6"
          >
            Phi-4: El Futuro de la IA. La nueva generación de inteligencia artificial que revoluciona la forma en que interactuamos con la tecnología. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
          >
            <Button title="Ver demo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const capabilities = [
    "Procesamiento de Lenguaje Natural",
    "Análisis de Datos Avanzado", 
    "Generación de Código Inteligente",
    "Automatización de Procesos",
    "Computer Vision"
  ];

  return (
    <section className="py-40 bg-darkGreen max-w-7xl mx-auto">
      <div className="container mx-auto px-6 grid grid-cols-6 gap-20">
        <div className="col-span-3">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sticky top-10"
          >
              <HeaderTag title="Ve más allá de lo básico" variant="brand" />
            <h2 className="text-3xl text-left md:text-4xl font-bold mb-6 text-white">
            Ve más allá de lo básico
            </h2>
            <p className="text-xl text-left text-lightGray font-light max-w-3xl mx-auto">
              Descubre las capacidades revolucionarias que hacen de Phi-4 la IA más avanzada del mercado. Tecnología de vanguardia al servicio de tu negocio usando lenguaje natural.
            </p>
            <div className="flex flex-wrap items-start justify-start gap-4 mt-10">
                        <HeaderTag title="Ve más allá de lo básico" variant="default" />
                        <HeaderTag title="VPiensa bien" variant="default" />
                        <HeaderTag title="Ve más allá de lo básico" variant="default" />
                        <HeaderTag title="Ve más allá de lo básico" variant="default" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 col-span-3">
            <CapabilityCard index={0}    >
                hola
            </CapabilityCard>
            <CapabilityCard index={1}    >
                hola
            </CapabilityCard>
            <CapabilityCard     index={2}  >
                hola
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

}: { 
  children: ReactNode; 
  index?: number;  
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("group relative bg-white h-[528px] border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", index === 1 && "bg-ironGreen border-none", index === 2 && "bg-darkGreen border-white/10")}
    >
        <div className={cn("absolute text-brand-900 bottom-4 right-4 w-8 h-8 bg-[#CECFD0] rounded grid place-items-center",  index === 1 && "bg-[#1D2726] text-white", index === 2 && "bg-white/5 text-white")}>
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
    "Inteligencia Avanzada",
    "Velocidad Suprema",
    "Seguridad Garantizada",
    "Escalabilidad Total"
  ];

  return (
    <section className="py-40 bg-darkGreen max-w-7xl   mx-auto">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center "
        >
            <HeaderTag title="Ve más allá de lo básico" variant="brand"  />
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 text-white">
            Características Premium
          </h2>
          <p className="text-xl text-left text-lightGray font-light max-w-3xl mx-auto">
            Phi-4 te ofrece características premium de inteligencia artificial. Construido con tecnología de vanguardia, completamente probado y listo para producción.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         <FeatureCard index={1} title="hola" description="pollo" className="col-span-2"     image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"   />
         <FeatureCard index={2} title="hola" description="pollo"  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"  />
         <FeatureCard index={3} title="hola" description="pollo"  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
         <FeatureCard index={4} title="hola" description="pollo"  image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
         <div className="col-span-1 subgrid">
         <FeatureCard index={5} title="hola" description="pollo" className="h-[207px]"    />
         <FeatureCard index={6} title="hola" description="pollo" className="h-[207px] mt-6"    />

         </div>
         <FeatureCard index={7} title="hola" description="pollo"    image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"   />
         <FeatureCard index={8} title="hola" description="pollo" className="col-span-2"   image="https://framerusercontent.com/images/sFAiIwZhSefF9aa6voNEVDz39o.png"    />
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
  className
}: { 
  title: string; 
  description: string;
  image?: string;
  index: number;
  className?:string;
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
      className={cn("group relative bg-ironGreen overflow-hidden h-[438px] border border-white/10 rounded-3xl  hover:shadow-lg transition-all duration-300 hover:border-brand-500/50", className) }
    >

      <img className="absolute top-0 left-0 w-full object-cover z-0" src={image} alt={title} />
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-b from-ironGreen/0 p-8 to-ironGreen/100 pointer-events-none">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};



const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const faqs = [
    {
      question: "¿Qué hace a Phi-4 diferente de otras IAs?",
      answer: "Phi-4 utiliza tecnología de vanguardia con capacidades de procesamiento de lenguaje natural avanzadas, análisis predictivo y automatización inteligente que superan a las soluciones tradicionales."
    },
    {
      question: "¿Puedo usar Phi-4 en proyectos comerciales?",
      answer: "¡Sí! Phi-4 está diseñado para uso comercial y empresarial. Ofrecemos licencias flexibles que se adaptan a las necesidades de tu negocio."
    },
    {
      question: "¿Cómo funciona la implementación?",
      answer: "La implementación es sencilla y rápida. Nuestro equipo te guía en todo el proceso, desde la configuración inicial hasta la puesta en producción."
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte técnico completo, documentación detallada, y acceso a nuestro equipo de expertos en IA para resolver cualquier consulta."
    }
  ];

  return (
    <section className="py-40 bg-darkGreen mb-40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
          >
                   <HeaderTag title="Ve más allá de lo básico" variant="brand"  />
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
      name: "Costos Tradicionales de IA",
      price: "$299",
      subtitle: "/mes",
      features: [
        "Acceso básico a Phi-4",
        "5,000 consultas/mes",
        "Soporte por email",
        "Documentación completa",
        "Actualizaciones gratuitas"
      ],
      cta: "Comenzar ahora"
    },
    {
      name: "Costos con nuestra implementación",
      price: "$1,499",
      subtitle: "/mes",
      features: [
        "Acceso completo a Phi-4",
        "Consultas ilimitadas",
        "Soporte prioritario 24/7",
        "Implementación personalizada",
        "API dedicada",
        "Soporte para hasta 10 usuarios",
        "SLA garantizado"
      ],
      cta: "Contactar ventas"
    }
  ];

  return (
    <section className="py-40 bg-darkGreen">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
                 <HeaderTag title="Ve más allá de lo básico" variant="brand"  />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Reduce gastos de IA
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/20 text-sm">
            <strong>CONSEJO:</strong> ¡Pregunta a tu empresa sobre el presupuesto de tecnología!
          </p>
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
  features: string[]; 
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
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-3">
            <FaCheck className="text-brand-500 flex-shrink-0" />
            <span className="text-lightGray">{feature}</span>
          </li>
        ))}
      </ul>

      {index !== 0 && (
        <Link to="/contact">
        <button className="mt-auto w-full bg-brand-500 text-brand-900 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-800">
          {cta}
        </button></Link>
      )}
    </motion.div>
  );
}; 
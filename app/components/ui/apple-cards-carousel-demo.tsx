"use client";

import React from "react";
import { Carousel, Card } from "~/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-brand-900 font-sans">
        Features específicos
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Creamos soluciones innovadoras que transforman la forma de trabajar.
              </span>{" "}
              Cada proyecto es único y diseñado específicamente para resolver 
              problemas reales de nuestros clientes, utilizando las últimas 
              tecnologías y mejores prácticas de desarrollo.
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Proyecto de desarrollo"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-6"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Pagos",
    title: "Integramos pasarelas de pagos como Stripe o PayPal",
    src: "/extras/card.webp",
    content: <DummyContent />,
  },
  {
    category: "Chatbots",
    title: "Configuramos chatbots IA para mejorar la atención al cliente",
    src: "/extras/suport.webp",
    content: <DummyContent />,
  },
  {
    category: "Notificaciones",
    title: "Creamos workflows para automatizar recordatorios",
    src: "/extras/reminder.webp",
    content: <DummyContent />,
  },
  {
    category: "Analytics",
    title: "Creamos dashboards para visualizar métricas y reportes en tiempo real",
    src: "/extras/figure.webp",
    content: <DummyContent />,
  },
  {
    category: "Blog",
    title: "Agregamos un blog personal a tu sitio web para tus compartir conocimientos y noticias",
    src: "/extras/blog.webp",
    content: <DummyContent />,
  },
  {
    category: "E-commerce",
    title: "Agregamos un e-commerce a tu sitio web para vender tus productos",
    src: "/extras/store.webp",
    content: <DummyContent />,
  },
];
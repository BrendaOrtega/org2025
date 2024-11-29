import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "./Button";

const navigation = [{ name: "Portafolio" }, { name: "Servicios" }];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="flex gap-16">
      {navigation.map((item) => {
        const isSelected = item.name === selectedLink;
        return (
          <Link
            key={item.name}
            to="#"
            className={`relative text-sm leading-6 no-underline ${
              isSelected ? "font-semibold text-brand-900" : "text-brand-900"
            }`}
            onClick={() => setSelectedLink(item.name)}
          >
            {item.name}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
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
              </motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export const NavBar = () => {
  return (
    <section className=" w-full z-10 bg-white/20 backdrop-blur ">
      <nav className="flex max-w-7xl mx-auto py-8 items-center justify-between ">
        <img src="/logo.svg" alt="logo" />
        <div className="flex items-center gap-8">
          <SquigglyUnderline />
          <Button />
        </div>
      </nav>
    </section>
  );
};
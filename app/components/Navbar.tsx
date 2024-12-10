import { useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation, useParams } from "react-router";
import { Button } from "./Button";

const navigation = [
  { name: "Portafolio", link: "/portafolio" },
  { name: "Servicios", link: "/servicios" },
  { name: "Saas & Apps", link: "/saas" },
];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [isHover, setIsHover] = useState<number | null>(null);
  const location = useLocation();
  return (
    <div className="flex gap-3 md:gap-16">
      {navigation.map((item, i) => {
        const isCurrent = isHover === i;
        const isCurrentRoute = location.pathname.includes(item.link);
        return (
          <Link
            key={item.name}
            to={item.link}
            className={`relative text-sm leading-6 no-underline ${
              isCurrent || isCurrentRoute
                ? "font-semibold text-brand-900"
                : "text-brand-900"
            }`}
            onClick={() => setSelectedLink(item.name)}
            onMouseEnter={() => {
              setIsHover(i);
            }}
            onMouseLeave={() => {
              setIsHover(null);
            }}
          >
            {item.name}
            {isCurrent || isCurrentRoute ? (
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
    <section className=" w-full px-4 md:px-0 z-10 bg-white/20 backdrop-blur ">
      <nav className="flex max-w-7xl mx-auto py-8 items-center justify-between ">
        <Link to="/">
          <img
            className="w-20 md:w-auto hover:scale-95 transition-all"
            src="/logo.svg"
            alt="logo"
          />
        </Link>
        {/* <div className="flex items-center gap-8">
          <SquigglyUnderline />
          <Button link="/contacto" />
        </div> */}
      </nav>
    </section>
  );
};

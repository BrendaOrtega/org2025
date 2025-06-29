import { useEffect, useState } from "react";
import { motion, useAnimate, useMotionValue, useSpring } from "motion/react";
import { Link, useLocation, useParams } from "react-router";
import { Button } from "./Button";
import { motionValue } from "motion";

const navigation = [
  { name: "Portafolio", link: "/portafolio" },
  { name: "Servicios", link: "/servicios" },
  { name: "Saas & Apps", link: "/saas" },
  { name: "Inteligencia artificial", link: "/ai" },
];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [isHover, setIsHover] = useState<number | null>(null);
  const location = useLocation();
  const isAiRoute = location.pathname === "/ai";
  return (
    <div className="flex gap-3 md:gap-6 lg:gap-16">
      {navigation.map((item, i) => {
        const isCurrent = isHover === i;
        const isCurrentRoute = location.pathname.includes(item.link);
        return (
          <Link
            key={item.name}
            to={item.link}
            className={`relative text-sm leading-6 no-underline ${
              isCurrent || isCurrentRoute
                ? ` ${isAiRoute ? "text-white" : "text-brand-900"}`
                : isAiRoute ? "text-white" : "text-brand-900"
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      animate("#drawer", { y: "-100%" }, { duration: 0.5, type: "tween" });
    } else {
      setIsOpen(true);
      animate("#drawer", { y: "0%" }, { duration: 0.5, type: "tween" });
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [scope, animate] = useAnimate();

  return (
    <section
      ref={scope}
      className=" w-full px-6 md:px-[12%] lg:px-[5%] xl:px-0   backdrop-blur relative z-[100]"
    >
      <nav className="flex relative z-[120] max-w-7xl mx-auto py-4 md:py-8 items-center justify-between ">
        <Link to="/">
          <img
            className="w-20 md:w-24 lg:w-32 hover:scale-95 transition-all"
            src="/logo.png"
            alt="logo"
          />
        </Link>
        <div className="md:flex items-center gap-8 hidden ">
          <SquigglyUnderline />
          <Button link="/contacto" />
        </div>

        <Burger onClick={toggleMenu} isOpen={isOpen} />
      </nav>
      <motion.div
        id="drawer"
        style={{
          y: "-100%",
        }}
        className="bg-bloob bg-cover px-6 inset-0 w-full h-screen absolute grid place-content-center"
      >
        <div className="text-center  text-white">
          <NavItem
            link="/portafolio"
            index={1}
            isOpen={isOpen}
            title="Portafolio"
          />
          <NavItem
            link="/servicios"
            index={2}
            isOpen={isOpen}
            title="Servicios"
          />
          <NavItem link="/saas" index={3} isOpen={isOpen} title="Saas y Apps" />
          <NavItem
            link="/historia"
            index={4}
            isOpen={isOpen}
            title="Nuestra historia"
          />
          <NavItem
            link="/ai"
            index={5}
            isOpen={isOpen}
            title="Inteligencia artificial"
          />
          <Button className="mx-auto mt-16" link="/contacto" />
        </div>
      </motion.div>
    </section>
  );
};

const Burger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const [scope, animate] = useAnimate();
  const location = useLocation();
  const isAiRoute = location.pathname === "/ai";
  useEffect(() => {
    if (isOpen) {
      animate("#top", { rotateZ: -135, y: 6, backgroundColor: "white" });
      animate("#bottom", { rotateZ: 135, y: -5, backgroundColor: "white" });
    } else {
      animate("#top", { rotateZ: 0, y: 0, backgroundColor: isAiRoute ? "white" : "#1A2E2B" });
      animate("#bottom", { rotateZ: 0, y: 0, backgroundColor: isAiRoute ? "white" : "#1A2E2B" });
    }
  }, [isOpen, isAiRoute]);
  return (
    <button
      onClick={onClick}
      ref={scope}
      className="flex md:hidden flex-col gap-2 relative"
    >
      <div id="top" className={`w-8 h-[3px] rounded-full transition-all duration-300 ${isOpen ? "bg-white" : isAiRoute ? "bg-white" : "bg-brand-900"}`}></div>
      <div id="bottom" className={`w-8 h-[3px] rounded-full transition-all duration-300 ${isOpen ? "bg-white" : isAiRoute ? "bg-white" : "bg-brand-900"}`}></div>
    </button>
  );
};

const NavItem = ({
  title,
  isOpen,
  index,
  link,
}: {
  title: string;
  isOpen?: boolean;
  index: number;
  link?: string;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isOpen) {
      animate(
        scope.current,
        { y: 0, opacity: 1, filter: "blur(0px)" },
        { delay: 0.25 * index, duration: 0.3 }
      );
    } else {
      animate(scope.current, { y: 20, opacity: 0, filter: "blur(9px)" });
    }
  }, [isOpen]);
  return (
    <Link to={link || "#"}>
      <h3
        ref={scope}
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          filter: "blur(9px)",
        }}
        className="text-4xl my-10 font-light text-white"
      >
        {title}
      </h3>
    </Link>
  );
};

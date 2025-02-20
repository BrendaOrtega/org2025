import { IoChatbubblesSharp } from "react-icons/io5";
import { Button } from "~/components/Button";
import { cn } from "~/lib/utils";

export default function Yt() {
  return (
    <>
      <nav className="bg-black h-20 w-full fixed"></nav>
      <section className=" mx-auto max-w-7xl min-h-screen  gap-20 flex items-center justify-center">
        <div className="">
          <h1 className="text-7xl mb-12">
            Vende tus assets digitales en línea
          </h1>
          <BrutalismButton />
        </div>
        <img src="hero.png" />
      </section>
    </>
  );
}

const BrutalismButton = () => {
  return (
    <button className="bg-black group  rounded-xl">
      <div className="grid place-content-center font-semibold w-40 h-12 bg-[#9870ED] border-2 border-black rounded-xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all">
        Crear cuenta
      </div>
    </button>
  );
};

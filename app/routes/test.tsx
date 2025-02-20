import { IoChatbubblesSharp } from "react-icons/io5";
import { Button } from "~/components/Button";
import { cn } from "~/lib/utils";

export default function Test() {
  return (
    <main className="bg-[#11151A] min-h-screen">
      <nav className="border-b-white/20 border-b-[1px] h-20 px-20 flex gap-6 justify-end items-center">
        <section className="relative group">
          <button className="hover:bg-white hover:text-[#11151A] transition-all text-white group w-12 h-12 rounded-full border-[1px] border-white/20 grid place-content-center">
            <IoChatbubblesSharp className=" text-2xl " />
          </button>{" "}
          <Staff
            position="left"
            image="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
          <Staff image="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Staff
            position="right"
            image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
        </section>
        <Button title="Agendar demo" />
      </nav>
    </main>
  );
}

const Staff = ({
  image,
  className,
  position,
}: {
  image: string;
  className?: string;
  position?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute transition-all  -translate-y-10 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 w-12 h-12 rounded-full  overflow-hidden ",
        {
          "group-hover:-translate-x-14 group-hover:translate-y-0 w-11 h-11 ":
            position === "left",
          "group-hover:translate-x-14 group-hover:translate-y-0 w-11 h-11":
            position === "right",
        },
        className
      )}
    >
      <img className="object-cover w-full h-full" src={image} alt="staff" />
    </div>
  );
};

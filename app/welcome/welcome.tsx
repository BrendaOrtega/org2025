import { Button } from "~/components/Button";
import { FaCodeBranch } from "react-icons/fa";
import { StickyScrollReveal } from "~/components/StickyScroll";

export function Welcome() {
  return (
    <main className="bg-white min-h-screen pt-36">
      <Hero />
      <Why />
      <Work />
    </main>
  );
}

const Work = () => {
  return (
    <section className="text-center max-w-7xl mx-auto py-[160px]">
      <h2 className="text-5xl font-bold ">Nuestro trabajo</h2>
      <div className="grid grid-cols-3 gap-20 mt-20">
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          tags="UX/UI Design & Development"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="E4Pros"
          image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  image,
  tags,
}: {
  title: string;
  image?: string;
  tags?: string;
}) => {
  return (
    <div className="col-span-1 w-full  group cursor-pointer ">
      <div className="overflow-hidden rounded-3xl w-full h-[432px] relative">
        <div className="pl-6 bg-curved object-fill absolute z-10 w-36 pt-2 flex gap-4 -right-1 -top-20 group-hover:-top-1 transition-all h-16 ">
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            👩🏻‍💻
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
            🎨
          </div>
        </div>
        <img
          className=" w-full h-full object-cover group-hover:scale-125 transition-all"
          src={image}
          alt={title}
        />
      </div>
      <h3 className=" mt-4 text-left text-2xl text-brand-900"> {title}</h3>
    </div>
  );
};

const Why = () => {
  return (
    <section className="bg-brand-900 ">
      <StickyScrollReveal
        items={[
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="object-cover h-full w-full"
                src="https://i.imgur.com/WpmbbPu.png"
                alt="perro"
              />
            ),
            text: (
              <p className="font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corporis numquam illum ratione neque? Doloremque at,
                pariatur aperiam ipsam repellat placeat itaque numquam veritatis
                eius cumque sed architecto dolorum iure.
              </p>
            ),
            title: "Prueba tus ideas",
          },
          {
            twColor: "bg-brand-900",
            img: (
              <img
                className="w-full h-full object-cover"
                src="https://i.imgur.com/FOFW9Oc.png"
                alt="perro"
              />
            ),
            text: (
              <p className="font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corporis numquam illum ratione neque? Doloremque at,
                pariatur aperiam ipsam repellat placeat itaque numquam veritatis
                eius cumque sed architecto dolorum iure.
              </p>
            ),
            title: "Impulsa tu negocio",
          },
        ]}
      />
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <section className=" bg-stars max-w-7xl w-full h-screen rounded-5xl mx-auto px-16 pt-20 relative ">
        <h1 className="text-brand-900 text-6xl font-bold text-center leading-snug">
          Creamos sitios web, desarrollamos prototipos y construimos
          experiencias únicas.
        </h1>
        <Button className="mt-12" mode="white" />
        <div className="relative inset-0 flex justify-center">
          <img className="absolute top-20 " src="/phone.png" />
        </div>
      </section>
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center px-[20%] ">
        <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center">
          <FaCodeBranch className="text-4xl font-light" />
        </div>
        <h2 className="text-brand-900 text-5xl font-bold text-center leading-snug mt-12">
          El mejor aliado para diseñar y desarrollar el software para el éxito
          de tu empresa
        </h2>
      </section>
    </>
  );
};

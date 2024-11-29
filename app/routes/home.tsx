import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fixter.org" },
    { name: "description", content: "Desarrollo de software a la medida" },
  ];
}

export default function Home() {
  return <Welcome />;
}

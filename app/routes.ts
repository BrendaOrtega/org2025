import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/servicios", "./routes/servicios.tsx"),
  route("/portafolio", "./routes/portafolio.tsx"),
  route("/saas", "./routes/saas.tsx"),
  route("/contacto", "./routes/contacto.tsx"),
  route("/historia", "./routes/historia.tsx"),
] satisfies RouteConfig;

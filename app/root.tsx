import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { NavBar } from "./components/Navbar";
import { Button } from "./components/Button";
import useGoogleTM from "./lib/useGoogleTM";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "icon",
    href: "/ico.png",
    type: "image/png",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shop de desarrollo web de vanguardia" },
    {
      name: "description",
      content: "Diseño, prototipos y desarrollo de software a la medida",
    },
    {
      property: "og:title",
      content: "Shop de desarrollo web de vanguardia",
    },
    {
      name: "image",
      content: "/fixter-cover.png",
    },
    {
      property: "og:image",
      content: "/fixter-cover.png",
    },
    {
      property: "og:description",
      content: "Diseño, prototipos y desarrollo de software a la medida",
    },
    {
      property: "og:url",
      content: "https://www.fixter.org/",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:description",
      content: "Diseño, prototipos y desarrollo de software a la medida",
    },
    {
      property: "twitter:title",
      content: "Shop de desarrollo web de vanguardia",
    },
    {
      property: "twitter:image",
      content: "/fixter-cover.png",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  useGoogleTM();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto ">
      {/* <h1>{message}</h1>
      <p>{details}</p> */}
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
      <img className="mx-auto w-[700px]" src="/404.svg" />
      <Button className="mx-auto mt-20" title="Volver al inicio" />
    </main>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//calc(    75vh + -75vh * (clamp(0,var(--progress),0.33) - 0) / 0.33)

export default function Index() {
  return (
    <main style={{ height: "200vh" }} className="relative">
      <section className="bg-blue-500">test 2</section>
      <section
        className="bg-green-400 sticky block top-0"
        style={{ height: "500px" }}
      >
        test
      </section>
      <section className="bg-blue-500">test 2</section>
    </main>
  );
}

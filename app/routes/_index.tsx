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
  useEffect(() => {
    const sectionEl = document.querySelector("#animation-section");
    if (sectionEl) {
      const breakpoint =
        sectionEl.getBoundingClientRect().top - window.innerHeight / 2;
      const cards = document.querySelectorAll(".card");

      let sum = 1800;
      // for (const card of cards) {
      //   sum += card.clientHeight;
      // }
      // TODO
      sectionEl.style.height = `${sum}px`;

      window.addEventListener("scroll", function () {
        const progress = ((window.scrollY - breakpoint) * 100) / sum / 100;

        if (window.scrollY > breakpoint) {
          const root = document.querySelector(":root");

          root.style.setProperty("--progress", Math.min(progress, 1));
        }
      });
    }
  }, []);
  return (
    <main style={{ minHeight: "500vh" }}>
      <section className="h-[600px]">this is an offset section</section>

      <section id="animation-section">
        <div className="mx-auto max-w-screen-md top-10 sticky left-0">
          <div
            className="text-center absolute"
            style={{
              top: "calc(50vh - 50vh * clamp(0.0,var(--progress),0.33) / 0.33)",
            }}
          >
            <h1 className="text-lg font-semibold">
              Faites de la santé votre meilleur investissement RH
            </h1>

            <div>
              <p>
                La santé des salariés ne rime plus qu'avec obligation légale.
              </p>
              <p>
                Découvrez le premier avantage salarié qui est un avantage pour
                les entreprises.
              </p>
            </div>
          </div>
          <div
            className="bg-pink-400 rounded-xl absolute w-full card"
            style={{
              height: "min(80vh, 720px)",
              top: "calc(75vh + -75vh*(clamp(0, var(--progress), 0.33) - 0) / 0.33)",
            }}
          ></div>
          <div
            className="bg-blue-400 rounded-xl absolute w-full card"
            style={{
              height: "min(80vh, 720px)",
              top: "calc(100vh + -100vh * (clamp(0.33,var(--progress),0.66) - 0.33) / 0.33)",
            }}
          ></div>
          <div
            className="bg-green-400 rounded-xl absolute w-full card"
            style={{
              height: "min(80vh, 720px)",
              top: "calc(100vh + -100vh * (clamp(0.66,var(--progress),1) - 0.66) / 0.33999999999999997)",
            }}
          ></div>
        </div>
      </section>

      <section className="h-screen sticky">this is an offset section</section>
    </main>
  );
}

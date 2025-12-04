import Image from "next/image";
import { useState } from "react";

export function QuintaSessao() {
  const [active, setActive] = useState("Todos");
  const WORKS = [
  { id: 1, category: "Brand", image: "/works/work1.jpg" },
  { id: 2, category: "UX/UI", image: "/works/work2.jpg" },
  { id: 3, category: "Landing", image: "/works/work3.jpg" },
  { id: 4, category: "Sistemas", image: "/works/work4.jpg" },
  { id: 5, category: "Brand", image: "/works/work5.jpg" },
  { id: 6, category: "UX/UI", image: "/works/work6.jpg" },
  { id: 7, category: "Landing", image: "/works/work7.jpg" },
  { id: 8, category: "Sistemas", image: "/works/work8.jpg" },
];


    const FILTERS = ["Todos", "Brand", "UX/UI", "Landing", "Sistemas"];
  const filtered =
    active === "Todos" ? WORKS : WORKS.filter((w) => w.category === active);

  return (
    <section className="w-full bg-[#F0540C] py-20 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Confira nossos trabalhos
        </h2>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border border-white/40 transition-all duration-200 ${
                active === f
                  ? "bg-[#5122B0] text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID DE TRABALHOS */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-black shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

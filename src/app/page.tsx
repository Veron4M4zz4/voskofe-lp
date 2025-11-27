import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#2B0050] text-white flex flex-col items-center">
      {/* PRIMEIRA SESSÃO (HEADER + HERO) */}
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-0 py-8 min-h-screen">
        {/* NAVBAR EM CÁPSULA */}
        <header className="flex justify-center">
          <div className="flex w-full items-center justify-between rounded-full bg-white/95 px-5 md:px-8 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo-voskofe.svg"
                alt="Voskofe"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-[#3A245F] font-medium">
              <button className="hover:text-[#FF7A29] transition-colors">
                Serviços
              </button>
              <button className="hover:text-[#FF7A29] transition-colors">
                Portfólio
              </button>
              <button className="hover:text-[#FF7A29] transition-colors">
                Valores
              </button>
            </nav>

            {/* CTA */}
            <button className="rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2 text-sm font-semibold text-white shadow-md hover:brightness-110 transition">
              Fale com a gente
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="relative mt-16 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          {/* K gigante no fundo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <Image
              src="/k-background.svg"
              alt=""
              width={520}
              height={520}
              className="opacity-[0.07] hidden md:block"
            />
          </div>

          {/* Coluna esquerda */}
          <div className="space-y-6">
            <div className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
              <p className="text-[#FF9A3C]">VOS</p>
              <p className="text-[#FF9A3C]">KO</p>
              <p className="text[#FF9A3C]">FE.</p>
            </div>

            <p className="max-w-md text-sm md:text-base text-[#F1DFFB]">
              Acelere o início de qualquer projeto com soluções completas e um
              atendimento direto ao ponto. Organize melhor suas ideias,
              economize tempo e entregue com mais confiança.
            </p>
          </div>

          {/* Coluna direita */}
          <div className="text-right md:text-left md:pl-8 space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              <span>Transformamos ideias em </span>
              <span className="block md:inline font-extrabold text-[#FF9A3C]">
                produtos digitais que funcionam.
              </span>
            </h1>
          </div>
        </section>
      </div>

      {/* === SEGUNDA SESSÃO === */}
      <section className="relative w-full min-h-[80vh] bg-[#F2B24C] flex items-center justify-center text-[#2A0055]">
        {/* Textos dos cantos */}
        <div className="absolute top-10 left-10 text-xs leading-tight font-medium">
          <p>projetos incomuns para</p>
          <p>empresas incomuns</p>
        </div>

        <div className="absolute top-10 right-10 text-xs leading-tight font-medium">
          <p>criatividade + estratégia</p>
          <p>+ funcionalidade</p>
        </div>

        <div className="absolute bottom-10 left-10 text-xs leading-tight font-medium">
          <p>metodologia</p>
          <p>check</p>
        </div>

        <div className="absolute bottom-10 right-10 text-xs leading-tight font-medium">
          <p>quero ter um</p>
          <p>branding incomum</p>
        </div>

        {/* TÍTULO CENTRAL */}
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#2A0055]">
          DESIGN DE MARCA
        </h2>
      </section>
      {/* === TERCEIRA SESSÃO – CASES === */}
<section className="w-full bg-[#F7F3EC] py-16 md:py-20">
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6 lg:px-0">
    {/* TÍTULO + SUBTÍTULO */}
    <header>
      <p className="text-xs uppercase tracking-[0.16em] text-[#7C659D]">
        Confira nossos cases
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#2D0056]">
        Transformamos ideias em produtos de impacto.
      </h2>
    </header>

    {/* TABS */}
    <div className="border-b border-[#C99AF5] flex gap-6 text-sm font-medium text-[#7C659D]">
      <button className="relative pb-3 text-[#3C0070]">
        Recentes
        <span className="absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full bg-[#6E1FD9]" />
      </button>
      <button className="pb-3 hover:text-[#3C0070] transition-colors">
        Sites
      </button>
      <button className="pb-3 hover:text-[#3C0070] transition-colors">
        E-Commerces
      </button>
      <button className="pb-3 hover:text-[#3C0070] transition-colors">
        Aplicativos
      </button>
    </div>

    {/* CONTEÚDO PRINCIPAL */}
    <div className="grid gap-10 md:grid-cols-2 items-center">
      {/* TEXTO ESQUERDA */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2D0056]">
            Plataforma de E-learning Interativa
          </h3>
          <p className="mt-3 text-sm md:text-base text-[#4E3A6E] leading-relaxed">
            Desenvolvemos uma plataforma completa de ensino online com sistema
            de gamificação, videoaulas e acompanhamento de progresso em tempo
            real. O projeto integra IA para personalização de conteúdo.
          </p>
        </div>

        {/* TAGS */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C659D]">
            Tecnologias utilizadas
          </p>
          <div className="flex flex-wrap gap-3">
            {["UX/UI Design", "Desenvolvimento", "Sistema Web"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#2F0A63] px-4 py-2 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTÃO */}
        <button className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B2BFF] to-[#C044FF] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(77,19,158,0.35)] hover:brightness-110 transition">
          Ver case completo
        </button>
      </div>

      {/* MOCKUP DIREITA */}
      <div className="flex justify-center md:justify-end">
        <div className="relative h-[320px] w-[260px] md:h-[360px] md:w-[300px] rounded-3xl bg-[#111111] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
          {/* Troca essa imagem pela sua mockup */}
          <Image
            src="/cases/elearning-mockup.png"
            alt="Mockup do aplicativo de E-learning"
            fill
            className="object-contain p-6"
          />
        </div>
      </div>
    </div>
  </div>
</section>
{/* === QUARTA SESSÃO – O QUE ENTREGAMOS === */}
<section
  className="w-full py-16 md:py-20 bg-[#2B0050] text-white"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "120px 120px",
  }}
>
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6 lg:px-0">
    {/* TÍTULO */}
    <header className="text-center space-y-2">
      <h2 className="text-3xl md:text-4xl font-extrabold">O que entregamos</h2>
      <p className="text-sm md:text-base text-[#E9D7FF]">
        Soluções completas que cobrem todas as etapas do seu projeto digital.
      </p>
    </header>

    {/* CARDS */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* CARD 1 */}
      <article className="flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#2A0243] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src="/services/design-marca.jpg"
            alt="Design de Marca"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
          <h3 className="text-sm font-semibold">Design de Marca</h3>
          <p className="text-xs leading-relaxed text-[#4E3A6E]">
            Criamos identidades visuais únicas e memoráveis que representam a
            essência do seu negócio.
          </p>
          <div className="mt-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition">
              Saiba mais
            </button>
          </div>
        </div>
      </article>

      {/* CARD 2 */}
      <article className="flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#2A0243] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src="/services/ux-ui.jpg"
            alt="UX/UI Design"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
          <h3 className="text-sm font-semibold">UX/UI Design</h3>
          <p className="text-xs leading-relaxed text-[#4E3A6E]">
            Interfaces intuitivas e experiências de usuário que convertem
            visitantes em clientes.
          </p>
          <div className="mt-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition">
              Saiba mais
            </button>
          </div>
        </div>
      </article>

      {/* CARD 3 */}
      <article className="flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#2A0243] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src="/services/landing-sites.jpg"
            alt="Landing Pages & Sites"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
          <h3 className="text-sm font-semibold">Landing Pages &amp; Sites</h3>
          <p className="text-xs leading-relaxed text-[#4E3A6E]">
            Páginas otimizadas para conversão, responsivas e com performance
            excepcional.
          </p>
          <div className="mt-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition">
              Saiba mais
            </button>
          </div>
        </div>
      </article>

      {/* CARD 4 */}
      <article className="flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#2A0243] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src="/services/sistemas-complexos.jpg"
            alt="Sistemas Complexos"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5">
          <h3 className="text-sm font-semibold">Sistemas Complexos</h3>
          <p className="text-xs leading-relaxed text-[#4E3A6E]">
            Aplicativos e plataformas robustas, escaláveis e preparadas para o
            crescimento.
          </p>
          <div className="mt-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition">
              Saiba mais
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
"use client";

import Image from "next/image";
import { useState } from "react";

const WORKS = [
  { id: 1, category: "Brand", image: "/works/work1.jpg" },
  { id: 2, category: "UX/UI", image: "/works/work2.jpg" },
  { id: 3, category: "Landing", image: "/works/work3.jpg" },
  { id: 4, category: "Sistemas", image: "/works/work4.jpg" },
  { id: 5, category: "Brand", image: "/works/work5.jpg" },
  { id: 6, category: "UX/UI", image: "/works/work6.jpg" },
  { id: 7, category: "Landing", image: "/works/work7.jpg" },
  { id: 8, category: "Sistemas", image: "/works/work8.jpg" },
  // repita os items ou ajuste conforme sua necessidade
];

const FILTERS = ["Todos", "Brand", "UX/UI", "Landing", "Sistemas"];

export default function QuintaSessao() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? WORKS
      : WORKS.filter((w) => w.category === active);

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
              className={`
                px-4 py-2 rounded-full text-sm font-medium border border-white/40 
                transition-all duration-200
                ${
                  active === f
                    ? "bg-[#5122B0] text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                    : "bg-white/10 hover:bg-white/20"
                }
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID DE TRABALHOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative h-[260px] w-full rounded-3xl overflow-hidden bg-black shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
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

    </main>
  );
}

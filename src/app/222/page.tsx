"use client";

import Image from "next/image";
import { useState } from "react";

/* ===== DADOS ===== */

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

/* ===== PÁGINA PRINCIPAL ===== */

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredWorks =
    activeFilter === "Todos"
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter);

  return (
    <main className="bg-[#2B0050] text-white">
      {/* PRIMEIRA SESSÃO (HEADER + HERO) */}
      <section className="relative min-h-screen w-full overflow-hidden px-4 pb-20 pt-6 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          {/* NAVBAR EM CÁPSULA */}
          <header className="mb-16 flex justify-center md:mb-20">
            <div className="flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:px-8 md:py-3.5">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FF9F47]" />
                  <span className="text-lg font-bold text-[#2B0050] md:text-xl">
                    voskofe.
                  </span>
                </div>
              </div>

              {/* Links - Desktop */}
              <nav className="hidden items-center gap-8 text-sm font-medium text-[#3A245F] md:flex">
                <button className="transition-colors hover:text-[#FF7A29]">
                  Serviços
                </button>
                <button className="transition-colors hover:text-[#FF7A29]">
                  Portfólio
                </button>
                <button className="transition-colors hover:text-[#FF7A29]">
                  Valores
                </button>
              </nav>

              {/* CTA */}
              <button className="rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110 md:px-6 md:py-2.5">
                Fale com a gente
              </button>
            </div>
          </header>

          {/* HERO */}
          <div className="relative grid items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-20">
            {/* Coluna esquerda */}
            <div className="space-y-8 md:space-y-10">
              <div className="text-[clamp(4rem,12vw,7rem)] font-black leading-[0.85] tracking-tight">
                <p className="text-[#FF9A3C]">VOS</p>
                <p className="text-[#FF9A3C]">KO</p>
                <p className="text-[#FF9A3C]">FE.</p>
              </div>

              <p className="max-w-md text-balance text-base leading-relaxed text-[#E9D7FF] md:text-[15px]">
                Acelere o início de qualquer projeto com soluções completas e um
                atendimento direto ao ponto. Organize melhor suas ideias,
                economize tempo e entregue com mais confiança.
              </p>
            </div>

            {/* Coluna direita */}
            <div className="flex items-center md:pt-8">
              <h1 className="text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.2] text-white">
                Transformamos ideias em{" "}
                <span className="font-black text-[#FF9A3C]">
                  produtos digitais que funcionam.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA SESSÃO - DESIGN DE MARCA */}
      <section className="relative flex min-h-[85vh] w-full items-center justify-center bg-[#F2B24C] px-4 py-20 text-[#2A0055]">
        {/* Textos nos cantos */}
        <div className="absolute left-6 top-8 hidden text-xs font-medium leading-tight md:block lg:left-12 lg:top-12">
          <p>projetos incomuns para</p>
          <p>empresas incomuns</p>
        </div>

        <div className="absolute right-6 top-8 hidden text-xs font-medium leading-tight md:block lg:right-12 lg:top-12">
          <p>criatividade + estratégia</p>
          <p>+ funcionalidade</p>
        </div>

        <div className="absolute bottom-8 left-6 hidden text-xs font-medium leading-tight md:block lg:bottom-12 lg:left-12">
          <p>metodologia</p>
          <p>check</p>
        </div>

        <div className="absolute bottom-8 right-6 hidden text-xs font-medium leading-tight md:block lg:bottom-12 lg:right-12">
          <p>quero ter um</p>
          <p>branding incomum</p>
        </div>

        {/* TÍTULO CENTRAL */}
        <h2 className="text-center text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tight">
          DESIGN DE MARCA
        </h2>
      </section>

      {/* TERCEIRA SESSÃO – CASES */}
      <section className="w-full bg-[#F7F3EC] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          {/* CABEÇALHO */}
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7C659D]">
              Confira nossos cases
            </p>
            <h2 className="mt-2 text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-tight text-[#2D0056]">
              Transformamos ideias em produtos de impacto.
            </h2>
          </header>

          {/* TABS */}
          <div className="flex gap-6 overflow-x-auto border-b border-[#D4B8E8] pb-px text-sm font-medium text-[#7C659D]">
            <button className="relative whitespace-nowrap pb-3 text-[#3C0070] transition-colors">
              Recentes
              <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#6E1FD9]" />
            </button>
            <button className="whitespace-nowrap pb-3 transition-colors hover:text-[#3C0070]">
              Sites
            </button>
            <button className="whitespace-nowrap pb-3 transition-colors hover:text-[#3C0070]">
              E-Commerces
            </button>
            <button className="whitespace-nowrap pb-3 transition-colors hover:text-[#3C0070]">
              Aplicativos
            </button>
          </div>

          {/* CONTEÚDO DO CASE */}
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            {/* TEXTO */}
            <div className="space-y-7">
              <div className="space-y-4">
                <h3 className="text-balance text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight text-[#2D0056]">
                  Plataforma de E-learning Interativa
                </h3>
                <p className="text-pretty text-base leading-relaxed text-[#4E3A6E]">
                  Desenvolvemos uma plataforma completa de ensino online com
                  sistema de gamificação, videoaulas e acompanhamento de
                  progresso em tempo real. O projeto integra IA para
                  personalização de conteúdo.
                </p>
              </div>

              {/* TAGS */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C659D]">
                  Tecnologias utilizadas
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UX/UI Design", "Desenvolvimento", "Sistema Web"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#3D1370] px-4 py-2 text-xs font-semibold text-white"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* BOTÃO */}
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B2BFF] to-[#C044FF] px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition hover:shadow-[0_16px_32px_rgba(0,0,0,0.4)] hover:brightness-110">
                Ver case completo →
              </button>
            </div>

            {/* MOCKUP */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-[#000000] shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:h-[420px] md:w-[320px]">
                <div className="flex h-full items-center justify-center p-8">
                  <Image
                    src="/mobile-app-elearning-interface.jpg"
                    alt="Mockup do aplicativo de E-learning"
                    width={280}
                    height={400}
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUARTA SESSÃO – O QUE ENTREGAMOS */}
      <section
        className="w-full bg-[#2B0050] px-4 py-16 text-white md:px-8 md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          {/* CABEÇALHO */}
          <header className="space-y-3 text-center">
            <h2 className="text-balance text-[clamp(1.875rem,4.5vw,2.75rem)] font-black leading-tight">
              O que entregamos
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-[#E9D7FF]">
              Soluções completas que cobrem todas as etapas do seu projeto
              digital.
            </p>
          </header>

          {/* CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* CARD 1 - Design de Marca */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white text-[#2A0243] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-orange-50">
                <Image
                  src="/branding-design-elements.jpg"
                  alt="Design de Marca"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-base font-bold leading-tight">
                  Design de Marca
                </h3>
                <p className="text-sm leading-relaxed text-[#4E3A6E]">
                  Criamos identidades visuais únicas e memoráveis que
                  representam a essência do seu negócio.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,122,41,0.4)] transition hover:shadow-[0_12px_28px_rgba(255,122,41,0.5)] hover:brightness-110">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 2 - UX/UI Design */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white text-[#2A0243] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-50">
                <Image
                  src="/ux-ui-design-interface.png"
                  alt="UX/UI Design"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-base font-bold leading-tight">
                  UX/UI Design
                </h3>
                <p className="text-sm leading-relaxed text-[#4E3A6E]">
                  Interfaces intuitivas e experiências de usuário que convertem
                  visitantes em clientes.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,122,41,0.4)] transition hover:shadow-[0_12px_28px_rgba(255,122,41,0.5)] hover:brightness-110">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 3 - Landing Pages & Sites */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white text-[#2A0243] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-50">
                <Image
                  src="/landing-page-website.jpg"
                  alt="Landing Pages & Sites"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-base font-bold leading-tight">
                  Landing Pages &amp; Sites
                </h3>
                <p className="text-sm leading-relaxed text-[#4E3A6E]">
                  Páginas otimizadas para conversão, responsivas e com
                  performance excepcional.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,122,41,0.4)] transition hover:shadow-[0_12px_28px_rgba(255,122,41,0.5)] hover:brightness-110">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 4 - Sistemas Complexos */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white text-[#2A0243] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-50">
                <Image
                  src="/complex-system-platform.jpg"
                  alt="Sistemas Complexos"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-base font-bold leading-tight">
                  Sistemas Complexos
                </h3>
                <p className="text-sm leading-relaxed text-[#4E3A6E]">
                  Aplicativos e plataformas robustas, escaláveis e preparadas
                  para o crescimento.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,122,41,0.4)] transition hover:shadow-[0_12px_28px_rgba(255,122,41,0.5)] hover:brightness-110">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUINTA SESSÃO - PORTFÓLIO */}
      <section className="w-full bg-[#F0540C] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
          {/* TÍTULO */}
          <h2 className="text-center text-[clamp(1.875rem,4.5vw,2.75rem)] font-black leading-tight">
            Confira nossos trabalhos
          </h2>

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-[#5122B0] shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID DE TRABALHOS */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredWorks.map((item) => (
              <div
                key={item.id}
                className="group relative h-[280px] w-full cursor-pointer overflow-hidden rounded-3xl bg-black shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Projeto ${item.category}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEXTA SESSÃO - CONTATO */}
      <section className="w-full bg-[#2B0050] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* COLUNA ESQUERDA - INFORMAÇÕES */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-balance text-[clamp(1.875rem,4.5vw,2.75rem)] font-black leading-tight">
                Vamos conversar sobre seu projeto?
              </h2>
              <p className="max-w-md text-balance text-base leading-relaxed text-[#E9D7FF]">
                Estamos prontos para transformar suas ideias em realidade. Entre
                em contato e vamos criar algo incrível juntos. Nossa equipe está
                pronta para ouvir o seu projeto e trazer as melhores soluções!
              </p>
            </div>

            {/* CONTATOS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#E9D7FF]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium">contato@voskofe.com</span>
              </div>

              <div className="flex items-center gap-3 text-[#E9D7FF]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-medium">(11) 91234-5678</span>
              </div>
            </div>

            {/* REDES SOCIAIS */}
            <div className="flex gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.137-.353-.3-.882-.344-1.857-.047-1.023-.058-1.351-.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 0 000-6.666z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

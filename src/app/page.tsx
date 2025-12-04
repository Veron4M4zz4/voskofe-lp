"use client";

import { QuintaSessao } from "@/components/fifth-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#2B0050] text-white flex flex-col items-center">
      {/* PRIMEIRA SESSÃO (HEADER + HERO) */}
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-8 min-h-screen">
        {/* NAVBAR EM CÁPSULA (Mantido estilo Page 1 com Logo SVG) */}
        <header className="flex justify-center mb-16 md:mb-20">
          <div className="flex w-full items-center justify-between rounded-full bg-white/95 px-5 md:px-8 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            {/* Logo (Mantido SVG) */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo-voskofe.svg"
                alt="Voskofe"
                width={187}
                height={42}
                className="h-8 w-auto cursor-pointer"
              />
            </div>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-10 text-lg text-[#3A245F] font-semibold">
              <button className="hover:text-[#FF7A29] transition-colors cursor-pointer">
                Serviços
              </button>
              <button className="hover:text-[#FF7A29] transition-colors cursor-pointer">
                Portfólio
              </button>
              <button className="hover:text-[#FF7A29] transition-colors cursor-pointer">
                Valores
              </button>
            </nav>

            {/* CTA */}
            <button className="rounded-full bg-gradient-to-r from-[#FF7A29] to-[#FFB445] px-5 py-2 text-sm font-semibold text-white shadow-md hover:brightness-110 hover:shadow-lg transition cursor-pointer">
              Fale com a gente
            </button>
          </div>
        </header>

        {/* HERO (Mistura: Background K do Page 1 + Tipografia Fluida do Page 2) */}
        <section className="relative mt-8 md:mt-16 grid gap-12 grid-cols-[1.1fr_1fr] items-center">
          {/* K gigante no fundo (Mantido Page 1) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-">
            <Image
              src="/k-background.svg"
              alt=""
              width={520}
              height={520}
              className="opacity-[0.5]"
            />
          </div>

          {/* Coluna esquerda */}
          <div className="space-y-8 md:space-y-10">
            <div className="text-[clamp(4rem,12vw,7rem)] font-extrabold leading-[0.85] tracking-tight">
              <Image
              src="/VOS-KO-FE.svg"
              alt=""
              width={219}
              height={265}
            />
            </div>

            <p className="max-w-[187px] text-balance text-[#F1DFFB] text-base leading-relaxed md:text-[15px]">
              Acelere o início de qualquer projeto com soluções completas e um
              atendimento direto ao ponto. Organize melhor suas ideias,
              economize tempo e entregue com mais confiança.
            </p>
          </div>

          {/* Coluna direita */}
          <div className="text-center text-right md:pl-8 space-y-4">
            <h1 className="text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.2]">
              <span>Transformamos ideias em </span>
              <span className="block md:inline font-extrabold text-[#FF9A3C]">
                produtos digitais que funcionam.
              </span>
            </h1>
          </div>
        </section>
      </div>

      {/* SEGUNDA SESSÃO (Design de Marca) */}
      <section className="relative w-full min-h-[85vh] bg-[#F2B24C] flex items-center justify-center text-[#2A0055] px-4">

          {/* Textos dos cantos (Adicionado hidden mobile do Page 2 para limpeza) */}

            <div className="absolute top-10 left-10 block text-sm sm:text-lg leading-3 sm:leading-4 font-medium lg:top-12 lg:left-12" >
              <p>projetos incomuns para</p>
              <p>empresas incomuns</p>
            </div>

            <div className="absolute top-10 right-10 block text-sm sm:text-lg leading-3 sm:leading-4 font-medium lg:top-12 lg:right-12">
              <p>criatividade + estratégia</p>
              <p>+ funcionalidade</p>
            </div>

            <div className="absolute bottom-10 left-10 block text-sm sm:text-lg leading-3 sm:leading-4 font-medium lg:bottom-12 lg:left-12">
              <p>metodologia</p>
              <p>check</p>
            </div>

            <div className="absolute bottom-10 right-10 block text-sm sm:text-lg leading-3 sm:leading-4 font-medium lg:bottom-12 lg:right-12">
              <p>quero ter um</p>
              <p>branding incomum</p>
            </div>

            {/* TÍTULO CENTRAL (Tipografia Fluida) */}
            <h2 className="text-center text-[clamp(3rem,5vw,7rem)] font-black tracking-tight text-[#2A0055] leading-none">
              DESIGN DE MARCA
            </h2>

      </section>

      {/* TERCEIRA SESSÃO – CASES */}
      <section className="w-full bg-[#F7F3EC] py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 md:px-8">
          {/* TÍTULO + SUBTÍTULO */}
          <header>
            <p className="text-sm font-semibold tracking-[0.1em] text-[#926FA6]">
              Confira nossos cases
            </p>
            <h2 className="mt-2 text-balance text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-[#3A0659]">
              Transformamos ideias em produtos de impacto.
            </h2>
          </header>

          {/* TABS (Estilo refinado) */}
          <div className="flex gap-6 overflow-x-auto border-[#4A1E7B] pb-px text-sm font-medium text-[#8737E180] bg-gradient-to-r from-[#4A1E7B] to-[#926FA6] bg-[length:100%_3px] bg-bottom bg-no-repeat">
            <button className="relative whitespace-nowrap pb-3 text-[#926FA6] transition-colors cursor-pointer">
              Recentes
            </button>
            <button className="whitespace-nowrap pb-3 hover:text-[#3A0659] transition-colors cursor-pointer">
              Sites
            </button>
            <button className="whitespace-nowrap pb-3 hover:text-[#3A0659] transition-colors cursor-pointer">
              E-Commerces
            </button>
            <button className="whitespace-nowrap pb-3 hover:text-[#3A0659] transition-colors cursor-pointer">
              Aplicativos
            </button>
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid gap-12 sm:grid-cols-2 items-center lg:gap-16">
            {/* TEXTO ESQUERDA */}
            <div className="space-y-7">
              <div className="space-y-4">
                <h3 className="text-balance text-[clamp(1.5rem,2vw,2.2rem)] font-semibold leading-tight text-[#3A0659]">
                  Plataforma de E-learning Interativa
                </h3>
                <p className="text-pretty text-base text-[#926FA6] leading-relaxed max-w-xs xl:max-w-md">
                  Desenvolvemos uma plataforma completa de ensino online com
                  sistema de gamificação, videoaulas e acompanhamento de
                  progresso em tempo real. O projeto integra IA para
                  personalização de conteúdo.
                </p>
              </div>

              {/* TAGS */}
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.1em] text-[#926FA6]">
                  Tecnologias utilizadas
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UX/UI Design", "Desenvolvimento", "Sistema Web"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#3A0659] px-4 py-2 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
                  <div className=" flex justify-center md:block">
              {/* BOTÃO */}
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8737E1] to-[#4A1E7B] px-20 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(77,19,158,0.3)] hover:shadow-[0_16px_32px_rgba(77,19,158,0.4)] hover:brightness-110 transition cursor-pointer">
                Ver case completo
              </button>
              </div>
            </div>

            {/* MOCKUP DIREITA (Mantida imagem do Page 1, mas com container melhorado do Page 2) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[320px] w-[260px] md:h-[380px] md:w-[500px] rounded-3xl bg-[#111111] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
                <Image
                  src="/cases/elearning-mockup.png" // Caminho Page 1
                  alt="Mockup do aplicativo de E-learning"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUARTA SESSÃO – O QUE ENTREGAMOS */}
      <section
        className="w-full py-16 md:py-24 bg-[#2B0050] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 md:px-8">
          {/* TÍTULO */}
          <header className="text-center space-y-3">
            <h2 className="text-balance text-[clamp(1.875rem,4.5vw,2.75rem)] font-extrabold leading-tight">
              O que entregamos
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-base text-[#E9D7FF] leading-relaxed">
              Soluções completas que cobrem todas as etapas do seu projeto
              digital.
            </p>
          </header>

          {/* CARDS (Com Hover e Animações do Page 2, mas Imagens do Page 1) */}
          <div className="grid gap-6 text-center sm:text-left grid-cols-2 lg:grid-cols-4">
            {/* CARD 1 */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#3A0659] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/services/design-marca.jpg" // Caminho Page 1
                  alt="Design de Marca"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-2xl font-semibold leading-tight">
                  Design de Marca
                </h3>
                <p className="sm:text-2xl leading-relaxed text-[#6B6B6B]">
                  Criamos identidades visuais únicas e memoráveis que
                  representam a essência do seu negócio.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-b from-[#FF7A29] to-[#FFB445] px-4 py-2.5 text-sm sm:text-xl font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition cursor-pointer">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#3A0659] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/services/ux-ui.jpg" // Caminho Page 1
                  alt="UX/UI Design"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-2xl font-semibold leading-tight">
                  UX/UI Design
                </h3>
                <p className="sm:text-2xl leading-relaxed text-[#6B6B6B]">
                  Interfaces intuitivas e experiências de usuário que convertem
                  visitantes em clientes.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-b from-[#FF7A29] to-[#FFB445] px-4 py-2.5 text-sm sm:text-xl font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition cursor-pointer">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#3A0659] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/services/landing-sites.jpg" // Caminho Page 1
                  alt="Landing Pages & Sites"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-2xl font-semibold leading-tight">
                  Landing Pages &amp; Sites
                </h3>
                <p className="sm:text-2xl leading-relaxed text-[#6B6B6B]">
                  Páginas otimizadas para conversão, responsivas e com
                  performance excepcional.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-b from-[#FF7A29] to-[#FFB445] px-4 py-2.5 text-sm sm:text-xl font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition cursor-pointer">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 4 */}
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#FDF9F5] text-[#3A0659] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/services/sistemas-complexos.jpg" // Caminho Page 1
                  alt="Sistemas Complexos"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-2xl font-semibold leading-tight">
                  Sistemas Complexos
                </h3>
                <p className="sm:text-2xl leading-relaxed text-[#6B6B6B]">
                  Aplicativos e plataformas robustas, escaláveis e preparadas
                  para o crescimento.
                </p>
                <div className="mt-auto">
                  <button className="w-full rounded-full bg-gradient-to-b from-[#FF7A29] to-[#FFB445] px-4 py-2.5 text-sm sm:text-xl font-semibold text-white shadow-[0_12px_24px_rgba(255,122,41,0.6)] hover:brightness-110 transition cursor-pointer">
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUINTA SESSÃO (Mantida Isolada) */}
      <QuintaSessao />

      {/* SEXTA SESSÃO - CONTATO (NOVA - Copiada do Page 2) */}
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

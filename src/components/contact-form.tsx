export default function ContactForm() {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Container Principal (Card) */}
      <div className="w-full max-w-[515px] rounded-[28px] p-6 bg-foreground sm:p-8 shadow-[0px_23px_29px_-5px_rgba(0,0,0,0.1)]">
        <form className="flex flex-col gap-3">

          {/* Campo Nome */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="font-semibold text-sm font-['Georama'] text-[var(--color-purple-primary)]"
            >
              Nome *
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full h-10 px-4 rounded-[9px] border-none outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder:opacity-60 text-sm bg-[var(--white-label)] text-[var(--color-purple-primary)] focus:ring-[var(--color-purple-primary)]"
            />
          </div>

          {/* Campo Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-sm font-['Georama'] text-[var(--color-purple-primary)]"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full h-10 px-4 rounded-[9px] border-none outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder:opacity-60 text-sm bg-[var(--white-label)] text-[var(--color-purple-primary)] focus:ring-[var(--color-purple-primary)]"
            />
          </div>

          {/* Campo Empresa */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="company"
              className="font-semibold text-sm font-['Georama'] text-[var(--color-purple-primary)]"
            >
              Empresa
            </label>
            <input
              id="company"
              type="text"
              placeholder="Nome da sua empresa"
              className="w-full h-10 px-4 rounded-[9px] border-none outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder:opacity-60 text-sm bg-[var(--white-label)] text-[var(--color-purple-primary)] focus:ring-[var(--color-purple-primary)]"
            />
          </div>

          {/* Campo Serviço (Select Customizado) */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="service"
              className="font-semibold text-sm font-['Georama'] text-[var(--color-purple-primary)]"
            >
              Serviço de interesse
            </label>
            <div className="relative">
              <select
                id="service"
                defaultValue=""
                className="w-full h-10 px-4 rounded-[9px] border-none outline-none focus:ring-2 focus:ring-opacity-50 transition-all text-sm bg-[var(--white-label)] text-[var(--color-purple-primary)] focus:ring-[var(--color-purple-primary)] appearance-none cursor-pointer"
              >
                <option value="" disabled className="opacity-60">
                  Selecione um serviço
                </option>
                <option value="web">Desenvolvimento Web</option>
                <option value="mobile">Desenvolvimento Mobile</option>
                <option value="design">Design</option>
                <option value="consulting">Consultoria</option>
              </select>

              {/* Ícone da seta SVG personalizado */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                <img
                  src="/down.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>

          {/* Campo Mensagem */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="font-semibold text-sm font-['Georama'] text-[var(--color-purple-primary)]"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Conte-nos mais sobre seu projeto..."
              className="w-full h-24 p-3 rounded-[9px] border-none outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder:opacity-60 text-sm bg-[var(--white-label)] text-[var(--color-purple-primary)] focus:ring-[var(--color-purple-primary)] resize-none"
            />
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="w-full h-12 rounded-full text-white font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-1 bg-[linear-gradient(266.29deg,#4A1E7B_19.49%,#8737E1_110.54%)] shadow-[0px_4px_23px_rgba(0,0,0,0.3)]"
          >
            <img src="/send.svg" alt="Ícone enviar" className="w-4 h-4" />
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

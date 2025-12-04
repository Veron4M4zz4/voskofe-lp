import { Instagram, Linkedin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ed] lg:p-12 p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-8 lg:pt-12">
          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#bebebe] leading-tight">
              Vamos conversar sobre seu projeto?
            </h1>
            <p className="text-lg text-[#bebebe] leading-relaxed">
              Estamos prontos para transformar sua visão em realidade. Entre em
              contato e descubra como podemos ajudar seu negócio a crescer.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[#bebebe] text-sm">Email</label>
              <p className="text-[#bebebe] text-lg">contato@voskore.com</p>
            </div>

            <div className="space-y-2">
              <label className="text-[#bebebe] text-sm">Telefone</label>
              <p className="text-[#bebebe] text-lg">(14) 99999-9999</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <p className="text-[#bebebe] text-sm">Siga-nos nas redes sociais</p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e5e7eb] transition-colors">
                <Instagram className="w-5 h-5 text-[#0a0a0a]" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e5e7eb] transition-colors">
                <Linkedin className="w-5 h-5 text-[#0a0a0a]" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#e5e7eb] transition-colors">
                <Facebook className="w-5 h-5 text-[#0a0a0a]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Form Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <form className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[#3a0659] font-semibold text-sm"
              >
                Nome <span className="text-[#3a0659]">*</span>
              </label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                className="bg-[#f3f3f5] border-0 text-[#717182] placeholder:text-[#717182] h-12 rounded-lg"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[#3a0659] font-semibold text-sm"
              >
                Email <span className="text-[#3a0659]">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="bg-[#f3f3f5] border-0 text-[#717182] placeholder:text-[#717182] h-12 rounded-lg"
              />
            </div>

            {/* Company Field */}
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-[#3a0659] font-semibold text-sm"
              >
                Empresa
              </label>
              <Input
                id="company"
                placeholder="Nome da sua empresa"
                className="bg-[#f3f3f5] border-0 text-[#717182] placeholder:text-[#717182] h-12 rounded-lg"
              />
            </div>

            {/* Service Select */}
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-[#3a0659] font-semibold text-sm"
              >
                Serviço de interesse
              </label>
              <Select>
                <SelectTrigger className="bg-[#f3f3f5] border-0 text-[#717182] h-12 rounded-lg">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Desenvolvimento Web</SelectItem>
                  <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="consulting">Consultoria</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[#3a0659] font-semibold text-sm"
              >
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Conte-nos mais sobre seu projeto..."
                className="bg-[#f3f3f5] border-0 text-[#717182] placeholder:text-[#717182] min-h-[160px] rounded-lg resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#926fa6] hover:bg-[#7d5c8f] text-white h-14 rounded-full text-base font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

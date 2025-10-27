'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Award, Shield, Clock, Star, ArrowRight, Command as CommandIcon } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@teleobra24h/ui/components/command';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
            TeleObra<span className="text-gold">24h</span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link href="/busca" className="text-sm hover:text-gold transition-colors">
              Buscar Profissionais
            </Link>
            <Link href="/sobre" className="text-sm hover:text-gold transition-colors">
              Sobre
            </Link>
            <Link href="/planos" className="text-sm hover:text-gold transition-colors">
              Planos
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-lg hover:border-gold transition-colors"
          >
            <CommandIcon className="w-4 h-4" />
            <span className="text-sm">Buscar</span>
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded bg-black/5 px-1.5 font-mono text-xs">
              ⌘K
            </kbd>
          </button>
        </div>
      </nav>

      {/* Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Busque por serviços, profissionais ou localização..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Categorias">
            <CommandItem onSelect={() => window.location.href = '/busca?categoria=pedreiro'}>
              <span>Pedreiro</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/busca?categoria=eletricista'}>
              <span>Eletricista</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/busca?categoria=encanador'}>
              <span>Encanador</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/busca?categoria=pintor'}>
              <span>Pintor</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Navegação">
            <CommandItem onSelect={() => window.location.href = '/busca'}>
              <span>Buscar Profissionais</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/sobre'}>
              <span>Sobre Nós</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = '/planos'}>
              <span>Planos Premium</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Hero Section - Minimal & Elegant */}
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
            Excelência em
            <br />
            <span className="text-gold">Cada Detalhe</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Profissionais altamente qualificados para projetos que exigem o mais alto padrão de qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/busca"
              className="inline-flex items-center justify-center px-12 py-5 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Explorar Profissionais
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/planos"
              className="inline-flex items-center justify-center px-12 py-5 border-2 border-black text-black hover:border-gold hover:text-gold transition-all duration-300 text-lg font-medium"
            >
              Ver Planos Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Statistics */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Stat */}
            <div className="md:col-span-2 p-16 border border-white/10 hover:border-gold/50 transition-colors">
              <div className="flex flex-col h-full justify-center">
                <div className="text-8xl font-heading font-bold text-gold mb-6">1.247</div>
                <p className="text-2xl font-light">Profissionais Certificados</p>
                <p className="text-white/50 mt-4 text-lg">
                  Rigorosamente selecionados e continuamente avaliados
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-12 border border-white/10 hover:border-gold/50 transition-colors">
              <div className="flex flex-col h-full justify-center">
                <div className="text-6xl font-heading font-bold text-gold mb-4">4.8</div>
                <p className="text-xl">Avaliação Média</p>
                <p className="text-white/50 mt-3">De 6.742 avaliações verificadas</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-12 border border-white/10 hover:border-gold/50 transition-colors">
              <div className="flex flex-col h-full justify-center">
                <div className="text-6xl font-heading font-bold text-gold mb-4">8.934</div>
                <p className="text-xl">Projetos Concluídos</p>
                <p className="text-white/50 mt-3">Com excelência comprovada</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="md:col-span-2 p-16 border border-white/10 hover:border-gold/50 transition-colors">
              <div className="flex flex-col h-full justify-center">
                <div className="text-7xl font-heading font-bold text-gold mb-6">2.5h</div>
                <p className="text-2xl font-light">Tempo Médio de Resposta</p>
                <p className="text-white/50 mt-4 text-lg">
                  Atendimento ágil sem comprometer a qualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline - Como Funciona */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-6xl font-bold text-center mb-24">Como Funciona</h2>

          <div className="space-y-24 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-black/10 hidden md:block" />

            {/* Step 1 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center font-heading text-2xl font-bold hidden md:flex">
                1
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-4">Defina Seu Projeto</h3>
                <p className="text-xl text-black/60 font-light leading-relaxed">
                  Descreva suas necessidades e requisitos específicos. Nossa plataforma inteligente identifica os profissionais mais adequados ao seu perfil.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center font-heading text-2xl font-bold hidden md:flex">
                2
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-4">Escolha o Profissional</h3>
                <p className="text-xl text-black/60 font-light leading-relaxed">
                  Compare portfolios, certificações e avaliações. Todos os profissionais passam por rigoroso processo de verificação.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center font-heading text-2xl font-bold hidden md:flex">
                3
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-4">Agende e Relaxe</h3>
                <p className="text-xl text-black/60 font-light leading-relaxed">
                  Combine detalhes diretamente com o profissional. Acompanhe o projeto e avalie ao final. Sua satisfação é nossa prioridade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Masonry Gallery */}
      <section className="py-32 px-8 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-6xl font-bold text-center mb-8">Trabalhos de Excelência</h2>
          <p className="text-center text-xl text-black/60 mb-20 max-w-2xl mx-auto">
            Cada projeto é executado com precisão e atenção aos mínimos detalhes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div
                key={item}
                className={`group relative overflow-hidden bg-black/5 hover:shadow-2xl transition-all duration-500 ${
                  idx === 0 || idx === 5 ? 'md:row-span-2 h-[600px]' : 'h-[280px]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-light mb-2">Reforma Premium</p>
                  <p className="font-heading text-2xl">Projeto Residencial</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Minimalist */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-6xl font-bold text-center mb-24">O Que Dizem Nossos Clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Testimonial 1 */}
            <div className="p-12 border border-black/5 hover:border-gold/30 transition-colors">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-2xl mb-8 leading-relaxed">
                "Encontrei um eletricista excelente. O atendimento foi rápido, o profissional muito competente e o preço justo."
              </p>
              <div>
                <p className="font-medium">Maria Clara Santos</p>
                <p className="text-black/50 text-sm">São Pedro da Aldeia, RJ <span className="text-xs">• em breve em todo Brasil</span></p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-12 border border-black/5 hover:border-gold/30 transition-colors">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-2xl mb-8 leading-relaxed">
                "Como profissional, o TeleObra24h transformou meu negócio. Recebo solicitações constantemente de clientes de qualidade."
              </p>
              <div>
                <p className="font-medium">Carlos Eduardo Silva</p>
                <p className="text-black/50 text-sm">Pedreiro Premium</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-12 border border-black/5 hover:border-gold/30 transition-colors md:col-span-2">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-3xl mb-8 leading-relaxed max-w-4xl">
                "Precisava reformar minha casa e estava perdido. No TeleObra24h encontrei todos os profissionais que precisava - todos verificados e com ótimas avaliações. A reforma ficou perfeita!"
              </p>
              <div>
                <p className="font-medium">Roberto Almeida</p>
                <p className="text-black/50 text-sm">Cabo Frio, RJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-6xl font-bold mb-8">Pronto Para Começar?</h2>
          <p className="text-2xl text-white/60 mb-12 font-light">
            Conecte-se com os melhores profissionais da sua região
          </p>
          <Link
            href="/busca"
            className="inline-flex items-center justify-center px-12 py-5 bg-gold text-black hover:bg-white transition-all duration-300 text-lg font-medium"
          >
            Encontrar Profissional
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer - Simple with Gold Accents */}
      <footer className="py-16 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="font-heading text-3xl font-bold mb-4">
                TeleObra<span className="text-gold">24h</span>
              </h3>
              <p className="text-black/60 mb-6 max-w-md">
                Plataforma premium de conexão entre profissionais qualificados e clientes que buscam excelência.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold">Navegação</h4>
              <ul className="space-y-3">
                <li><Link href="/busca" className="text-black/60 hover:text-gold transition-colors">Buscar</Link></li>
                <li><Link href="/sobre" className="text-black/60 hover:text-gold transition-colors">Sobre</Link></li>
                <li><Link href="/planos" className="text-black/60 hover:text-gold transition-colors">Planos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold">Contato</h4>
              <ul className="space-y-3">
                <li className="text-black/60">contato@teleobra24h.com</li>
                <li className="text-black/60">(22) 99999-9999</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 text-center text-black/50 text-sm">
            <p>2024 TeleObra24h. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Award, Clock, Heart, Users, TrendingUp, Download, CheckCircle, Star, Lock, Zap } from 'lucide-react';

// Counter animation hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export default function SobrePage() {
  const professionalsCount = useCounter(1247, 2500);
  const projectsCount = useCounter(8934, 2500);
  const citiesCount = useCounter(12, 2000);
  const satisfactionCount = useCounter(98, 2500);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-heading text-2xl font-bold tracking-tight">
              TeleObra<span className="text-gold">24h</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/busca" className="text-sm hover:text-gold transition-colors">
              Buscar
            </Link>
            <Link href="/planos" className="text-sm hover:text-gold transition-colors">
              Planos
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Minimalist */}
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Excelência
            <br />
            Como <span className="text-gold">Padrão</span>
          </h1>
          <p className="text-2xl text-black/60 font-light leading-relaxed max-w-3xl mx-auto">
            Conectamos clientes exigentes com os profissionais mais qualificados,
            garantindo resultados que superam expectativas
          </p>
        </div>
      </section>

      {/* Our Promise Section - Large Icons */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-5xl font-bold text-center mb-20">Nossa Promessa</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Promise 1 */}
            <div className="text-center p-12 border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gold flex items-center justify-center">
                <Shield className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Profissionais Verificados</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Processo rigoroso de seleção e verificação de antecedentes, certificações e referências
              </p>
            </div>

            {/* Promise 2 */}
            <div className="text-center p-12 border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gold flex items-center justify-center">
                <Award className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Qualidade Garantida</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Monitoramento contínuo de performance e avaliações verificadas de clientes reais
              </p>
            </div>

            {/* Promise 3 */}
            <div className="text-center p-12 border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gold flex items-center justify-center">
                <Clock className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Atendimento Premium</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Suporte dedicado e tempo de resposta garantido para todas as solicitações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter - Black BG, Gold Numbers */}
      <section className="py-32 px-8 bg-black border-y-2 border-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-heading font-bold text-gold mb-4">
                {professionalsCount.toLocaleString()}+
              </div>
              <p className="text-xl text-white/80">Profissionais Certificados</p>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-heading font-bold text-gold mb-4">
                {projectsCount.toLocaleString()}+
              </div>
              <p className="text-xl text-white/80">Projetos Concluídos</p>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-heading font-bold text-gold mb-4">
                {citiesCount}
              </div>
              <p className="text-xl text-white/80">Cidades Atendidas</p>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-heading font-bold text-gold mb-4">
                {satisfactionCount}%
              </div>
              <p className="text-xl text-white/80">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Showcase */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-5xl font-bold text-center mb-8">Por Que Confiar em Nós</h2>
          <p className="text-xl text-black/60 text-center mb-20 max-w-3xl mx-auto">
            Nosso compromisso com a excelência é respaldado por processos rigorosos e garantias reais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Badge 1 */}
            <div className="p-10 border-2 border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Verificação em 7 Etapas</h3>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Cada profissional passa por documentação, referências, certificações,
                    histórico criminal, teste prático, entrevista e período probatório
                  </p>
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="p-10 border-2 border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Avaliações Verificadas</h3>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Apenas clientes que contrataram através da plataforma podem avaliar,
                    garantindo autenticidade e transparência total
                  </p>
                </div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="p-10 border-2 border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Lock className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Seguro de Responsabilidade</h3>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Todos os profissionais premium possuem seguro de responsabilidade civil,
                    protegendo você e seu patrimônio
                  </p>
                </div>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="p-10 border-2 border-gold/30 bg-gold/5 hover:bg-gold/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Suporte Prioritário 24h</h3>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Equipe dedicada disponível 24 horas para emergências e suporte,
                    garantindo paz de espírito completa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="py-32 px-8 bg-black/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold mb-6">Exclusividade Premium</h2>
            <p className="text-xl text-black/60 max-w-3xl mx-auto">
              Nossa plataforma não é para todos. Mantemos padrões elevados para garantir
              que apenas os melhores profissionais e clientes mais exigentes se encontrem aqui
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div className="p-12 bg-white border-2 border-black/5 hover:border-gold/30 transition-all">
              <Users className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-6">Para Clientes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Acesso aos top 5% de profissionais do mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Consultoria personalizada para seu projeto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Garantia de satisfação ou reembolso total</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Acompanhamento dedicado do início ao fim</span>
                </li>
              </ul>
            </div>

            {/* For Professionals */}
            <div className="p-12 bg-white border-2 border-black/5 hover:border-gold/30 transition-all">
              <Award className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-6">Para Profissionais</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Clientes qualificados e projetos de alto valor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Visibilidade premium em sua região</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Ferramentas de gestão e relacionamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-lg">Desenvolvimento profissional contínuo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E-book CTA */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Download className="w-16 h-16 text-gold mx-auto" />
          </div>
          <h2 className="font-heading text-5xl font-bold mb-6">Guia Premium Gratuito</h2>
          <p className="text-2xl text-white/80 mb-4 font-light">
            "10 Erros Fatais ao Contratar Profissionais"
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Baixe nosso guia exclusivo e descubra como evitar prejuízos e garantir
            resultados excepcionais em seus projetos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-gold outline-none"
            />
            <button className="px-10 py-4 bg-gold text-black hover:bg-white transition-all duration-300 font-semibold whitespace-nowrap">
              Baixar Gratuitamente
            </button>
          </div>
          <p className="text-xs text-white/40 mt-4">
            Sem spam. Apenas conteúdo premium sobre construção e reformas.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-6xl font-bold mb-8">Pronto Para Começar?</h2>
          <p className="text-2xl text-black/60 mb-12 font-light">
            Junte-se a milhares de clientes que escolheram a excelência
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/busca"
              className="inline-flex items-center justify-center px-12 py-5 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Encontrar Profissionais
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

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-black/5 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black/50 text-sm">2024 TeleObra24h. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

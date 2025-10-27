'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Crown, Star, Sparkles, MessageCircle, Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@teleobra24h/ui/components/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@teleobra24h/ui/components/accordion';

const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    description: 'Ideal para profissionais iniciantes',
    price: 49,
    yearlyPrice: 490,
    featured: false,
    features: [
      'Perfil básico na plataforma',
      'Até 10 solicitações/mês',
      'Badge de verificação',
      'Suporte por email',
      'Portfolio com 5 fotos',
      'Respostas em até 24h',
    ],
  },
  {
    id: 'prata',
    name: 'Prata',
    description: 'Para profissionais estabelecidos',
    price: 99,
    yearlyPrice: 990,
    featured: false,
    features: [
      'Tudo do Bronze, mais:',
      'Solicitações ilimitadas',
      'Destaque em buscas',
      'Portfolio com 15 fotos',
      'Suporte prioritário',
      'Respostas em até 12h',
      'Estatísticas avançadas',
      'Certificado digital',
    ],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    description: 'Máxima visibilidade e recursos premium',
    price: 199,
    yearlyPrice: 1990,
    featured: true,
    features: [
      'Tudo do Prata, mais:',
      'Posição TOP nas buscas',
      'Badge Premium Verificado',
      'Portfolio ilimitado',
      'Suporte VIP 24/7',
      'Respostas imediatas',
      'Gerente de conta dedicado',
      'Marketing personalizado',
      'Prioridade em novos clientes',
      'Acesso a projetos exclusivos',
      'Treinamentos especializados',
      'Seguro de responsabilidade',
    ],
  },
];

const faqs = [
  {
    question: 'Como funciona o período de teste?',
    answer: 'Oferecemos 14 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do valor investido, sem perguntas.',
  },
  {
    question: 'Posso trocar de plano depois?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Em caso de upgrade, cobramos apenas a diferença proporcional.',
  },
  {
    question: 'O que está incluído no Suporte VIP?',
    answer: 'Suporte VIP inclui atendimento prioritário 24/7 via WhatsApp, telefone e email, com tempo de resposta garantido de até 1 hora.',
  },
  {
    question: 'Como funciona o desconto anual?',
    answer: 'Ao optar pelo pagamento anual, você economiza 2 meses. O valor é cobrado uma vez por ano com desconto automático aplicado.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, não há fidelidade. Você pode cancelar quando quiser e seu plano permanece ativo até o fim do período pago.',
  },
  {
    question: 'O que é o Serviço de Concierge?',
    answer: 'É um serviço premium exclusivo para membros Ouro, oferecendo atendimento personalizado, agendamento prioritário e suporte dedicado para projetos complexos.',
  },
];

export default function PlanosPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

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
            <Link href="/sobre" className="text-sm hover:text-gold transition-colors">
              Sobre
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Planos <span className="text-gold">Premium</span>
          </h1>
          <p className="text-2xl text-black/60 font-light leading-relaxed">
            Escolha o plano ideal para expandir seu negócio e conectar-se com clientes de alto padrão
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <div className="pb-16 px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-4 bg-black/5 p-2 rounded-full">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-black text-white'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-8 py-3 rounded-full font-medium transition-all relative ${
                billingPeriod === 'yearly'
                  ? 'bg-black text-white'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              Anual
              <Badge className="absolute -top-2 -right-2 bg-gold text-black border-0 text-xs px-2 py-0.5">
                -20%
              </Badge>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative ${
                  plan.featured
                    ? 'md:scale-110 md:-mt-8 z-10'
                    : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-6 left-0 right-0 flex justify-center">
                    <Badge className="bg-gold text-black border-0 px-6 py-2 text-sm font-semibold">
                      <Crown className="w-4 h-4 mr-2" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}

                <div
                  className={`p-10 border-2 transition-all ${
                    plan.featured
                      ? 'border-gold bg-gold/5 shadow-2xl'
                      : 'border-black/10 hover:border-gold/50 hover:shadow-xl'
                  }`}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-3xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-black/60">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8 pb-8 border-b border-black/10">
                    <div className="flex items-start justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold mt-2">R$</span>
                      <span className="text-6xl font-heading font-bold">
                        {billingPeriod === 'monthly' ? plan.price : Math.floor(plan.yearlyPrice / 12)}
                      </span>
                    </div>
                    <p className="text-black/60">
                      por mês{billingPeriod === 'yearly' && ', cobrado anualmente'}
                    </p>
                    {billingPeriod === 'yearly' && (
                      <p className="text-sm text-gold font-semibold mt-2">
                        Economize R$ {(plan.price * 12 - plan.yearlyPrice).toFixed(0)}/ano
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? 'text-gold' : 'text-black'
                        }`} />
                        <span className={feature.startsWith('Tudo do') ? 'font-semibold' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 font-semibold transition-all duration-300 ${
                      plan.featured
                        ? 'bg-black text-white hover:bg-gold hover:text-black'
                        : 'bg-black/5 hover:bg-black hover:text-white'
                    }`}
                  >
                    Começar Agora
                  </button>

                  {plan.featured && (
                    <p className="text-center text-sm text-black/60 mt-4">
                      14 dias de garantia incondicional
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Service Add-on for Ouro */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold mb-6">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
            <h2 className="font-heading text-5xl font-bold mb-6">Serviço de Concierge VIP</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Exclusivo para membros Ouro: atendimento personalizado e suporte dedicado
              para transformar seus projetos em experiências premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 border border-white/10">
              <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Linha Direta VIP</h3>
              <p className="text-white/70">
                Acesso direto ao seu gerente de conta via telefone, WhatsApp ou email
              </p>
            </div>

            <div className="text-center p-8 border border-white/10">
              <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Agendamento Prioritário</h3>
              <p className="text-white/70">
                Prioridade absoluta no agendamento de serviços e projetos especiais
              </p>
            </div>

            <div className="text-center p-8 border border-white/10">
              <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Consultoria Dedicada</h3>
              <p className="text-white/70">
                Acompanhamento personalizado do início ao fim de cada projeto
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gold text-black hover:bg-white transition-all duration-300 text-lg font-semibold">
              <Crown className="w-5 h-5" />
              Ativar Plano Ouro + Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-8 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-5xl font-bold text-center mb-16">Compare os Planos</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black/10">
                  <th className="text-left p-6 font-heading text-xl">Recursos</th>
                  <th className="text-center p-6 font-heading text-xl">Bronze</th>
                  <th className="text-center p-6 font-heading text-xl">Prata</th>
                  <th className="text-center p-6 font-heading text-xl bg-gold/10">Ouro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5">
                  <td className="p-6">Solicitações mensais</td>
                  <td className="text-center p-6">10</td>
                  <td className="text-center p-6">Ilimitadas</td>
                  <td className="text-center p-6 bg-gold/5">Ilimitadas</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Portfolio de fotos</td>
                  <td className="text-center p-6">5</td>
                  <td className="text-center p-6">15</td>
                  <td className="text-center p-6 bg-gold/5">Ilimitado</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Tempo de resposta</td>
                  <td className="text-center p-6">24h</td>
                  <td className="text-center p-6">12h</td>
                  <td className="text-center p-6 bg-gold/5">Imediato</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Suporte</td>
                  <td className="text-center p-6">Email</td>
                  <td className="text-center p-6">Prioritário</td>
                  <td className="text-center p-6 bg-gold/5">VIP 24/7</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Gerente de conta</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6 bg-gold/5">
                    <Check className="w-6 h-6 text-gold mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Projetos exclusivos</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6 bg-gold/5">
                    <Check className="w-6 h-6 text-gold mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-6">Seguro de responsabilidade</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6 bg-gold/5">
                    <Check className="w-6 h-6 text-gold mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section - Minimal Accordion */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl font-bold text-center mb-16">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-2 border-black/5 hover:border-gold/30 transition-colors px-8"
              >
                <AccordionTrigger className="text-left font-heading text-xl py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-black/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-6xl font-bold mb-8">Agende uma Consulta</h2>
          <p className="text-2xl text-white/80 mb-12 font-light">
            Ainda tem dúvidas? Fale com nosso time e descubra qual plano é ideal para você
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gold text-black hover:bg-white transition-all duration-300 text-lg font-semibold">
              <Calendar className="w-5 h-5" />
              Agendar Consulta Gratuita
            </button>
            <a
              href="https://wa.me/5522999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-16 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Star className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-semibold mb-1">Garantia de 14 dias</p>
              <p className="text-sm text-black/60">Satisfação garantida ou seu dinheiro de volta</p>
            </div>
            <div>
              <Check className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-semibold mb-1">Sem fidelidade</p>
              <p className="text-sm text-black/60">Cancele quando quiser, sem burocracia</p>
            </div>
            <div>
              <Crown className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-semibold mb-1">Upgrade facilitado</p>
              <p className="text-sm text-black/60">Mude de plano a qualquer momento</p>
            </div>
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

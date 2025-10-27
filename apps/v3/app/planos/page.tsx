'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  Sparkles,
  Zap,
  Award,
  Crown,
  Shield,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    description: 'Ideal para profissionais iniciantes',
    monthlyPrice: 49,
    yearlyPrice: 490,
    featured: false,
    icon: Shield,
    gradient: 'from-primary-600 to-primary-700',
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
    monthlyPrice: 99,
    yearlyPrice: 990,
    featured: false,
    icon: TrendingUp,
    gradient: 'from-secondary-500 to-secondary-700',
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
    monthlyPrice: 199,
    yearlyPrice: 1990,
    featured: true,
    icon: Crown,
    gradient: 'from-accent-500 to-accent-700',
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
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, sem taxas ou multas. O cancelamento é processado imediatamente e você mantém acesso até o fim do período pago.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos cartão de crédito, boleto, PIX e transferência bancária. Planos anuais têm 16% de desconto.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function PlanosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-primary-600" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-xl font-bold bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent">
                  TeleObra24h
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/busca" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Buscar
              </Link>
              <Link href="/sobre" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div className="text-center" {...fadeIn}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary-200 mb-8 shadow-lg"
            >
              <Award className="w-4 h-4 text-secondary-600" />
              <span className="text-sm font-medium text-primary-900">Planos Premium</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Expanda Seu Negócio
              </span>
              <br />
              <span className="text-primary-900">Com o Plano Ideal</span>
            </h1>

            <p className="text-xl text-primary-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano perfeito para alavancar sua carreira como profissional.
              <span className="font-semibold text-secondary-700"> 14 dias de garantia incondicional</span>
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full p-2 shadow-lg border border-primary-100">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-secondary text-white shadow-glow-cyan'
                    : 'text-primary-600 hover:text-secondary-600'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-secondary text-white shadow-glow-cyan'
                    : 'text-primary-600 hover:text-secondary-600'
                }`}
              >
                Anual
                <span className="text-xs px-2 py-0.5 bg-accent-500 text-white rounded-full">
                  -16%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-xs font-bold shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all h-full ${
                  plan.featured
                    ? 'border-accent-400 shadow-2xl'
                    : 'border-primary-100 hover:border-secondary-300 hover:shadow-xl'
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                  <p className="text-primary-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary-900">
                        R$ {billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                      </span>
                      <span className="text-primary-500">/mês</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-primary-500 mt-2">
                        R$ {plan.yearlyPrice} cobrado anualmente
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-bold text-lg mb-8 transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-glow-violet'
                      : 'bg-gradient-secondary text-white hover:shadow-glow-cyan'
                  }`}>
                    {plan.featured ? 'Começar Agora' : 'Escolher Plano'}
                  </button>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                          plan.featured ? 'bg-accent-100' : 'bg-secondary-100'
                        } flex items-center justify-center mt-0.5`}>
                          <Check className={`w-3 h-3 ${
                            plan.featured ? 'text-accent-600' : 'text-secondary-600'
                          }`} />
                        </div>
                        <span className="text-primary-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Por Que Escolher um Plano Premium?
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Invista no seu crescimento profissional
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: '3x Mais Clientes',
                description: 'Profissionais premium recebem em média 3x mais solicitações'
              },
              {
                icon: TrendingUp,
                title: 'ROI em 30 Dias',
                description: 'Maioria dos profissionais paga o plano com apenas 1-2 projetos'
              },
              {
                icon: Award,
                title: 'Maior Credibilidade',
                description: 'Badge premium aumenta confiança e taxa de conversão'
              },
              {
                icon: Shield,
                title: '100% Seguro',
                description: '14 dias de garantia incondicional de devolução'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-secondary flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2 text-lg">{benefit.title}</h3>
                <p className="text-primary-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-primary-600">
              Tire suas dúvidas sobre os planos
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl border border-primary-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50 transition-colors"
                >
                  <span className="font-semibold text-primary-900">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-primary-400 transition-transform ${
                    expandedFaq === index ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 text-primary-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary-600 via-secondary-500 to-accent-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl opacity-30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comece Hoje Sem Riscos
            </h2>
            <p className="text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
              14 dias de garantia incondicional. Cancele quando quiser, sem multas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-secondary-700 rounded-xl font-bold text-lg shadow-2xl hover:bg-primary-50 transition-all">
                Escolher Plano
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/busca"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-secondary-700 transition-all"
              >
                Ver Profissionais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

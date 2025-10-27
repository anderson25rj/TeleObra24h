'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OfferSchema } from '@/components/StructuredData';
import { Button, Card, CardContent, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@teleobra24h/ui';
import { Check, X, Star, Zap, Crown, Shield, TrendingUp, Award, MessageCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Import mock data
import { faq } from '@teleobra24h/mocks';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function PlanosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Bronze',
      subtitle: 'Gratuito',
      icon: Shield,
      color: 'amber',
      price: {
        monthly: 0,
        annual: 0
      },
      description: 'Perfeito para começar na plataforma',
      features: [
        { name: 'Perfil básico na plataforma', included: true },
        { name: 'Aparecer nas buscas', included: true },
        { name: 'Até 3 fotos no portfólio', included: true },
        { name: 'Receber avaliações de clientes', included: true },
        { name: 'Badge "Pro Verificado"', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Destaque nas buscas', included: false },
        { name: 'Badges especiais', included: false },
        { name: 'Vídeos no portfólio', included: false },
        { name: 'Resposta prioritária', included: false },
        { name: 'Estatísticas avançadas', included: false },
        { name: 'Suporte prioritário', included: false }
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      name: 'Prata',
      subtitle: 'Profissional',
      icon: Star,
      color: 'gray',
      price: {
        monthly: 49.90,
        annual: 39.90
      },
      description: 'Para profissionais que querem se destacar',
      features: [
        { name: 'Tudo do plano Bronze', included: true },
        { name: 'Até 10 fotos no portfólio', included: true },
        { name: 'Destaque moderado nas buscas', included: true },
        { name: 'Badge "Confiável"', included: true },
        { name: 'Badge "Resposta Rápida"', included: true },
        { name: '1 vídeo no portfólio', included: true },
        { name: 'Estatísticas básicas', included: true },
        { name: 'Suporte por telefone', included: true },
        { name: 'Máximo destaque nas buscas', included: false },
        { name: 'Todos os badges disponíveis', included: false },
        { name: 'Estatísticas avançadas', included: false },
        { name: 'Suporte prioritário 24/7', included: false }
      ],
      cta: 'Assinar Prata',
      popular: true
    },
    {
      name: 'Ouro',
      subtitle: 'Premium',
      icon: Crown,
      color: 'accent',
      price: {
        monthly: 99.90,
        annual: 79.90
      },
      description: 'Máxima visibilidade e todos os recursos',
      features: [
        { name: 'Tudo do plano Prata', included: true },
        { name: 'Portfólio ilimitado (fotos e vídeos)', included: true },
        { name: 'Máximo destaque nas buscas', included: true },
        { name: 'Aparece sempre no topo', included: true },
        { name: 'Todos os badges disponíveis', included: true },
        { name: 'Badge "Top Rated"', included: true },
        { name: 'Badge "5 Estrelas"', included: true },
        { name: 'Estatísticas avançadas e insights', included: true },
        { name: 'Suporte prioritário 24/7', included: true },
        { name: 'Gerente de conta dedicado', included: true },
        { name: 'Promoção em redes sociais', included: true },
        { name: 'Selo "Premium"', included: true }
      ],
      cta: 'Assinar Ouro',
      popular: false
    }
  ];

  const comparison = [
    { feature: 'Perfil na plataforma', bronze: true, prata: true, ouro: true },
    { feature: 'Fotos no portfólio', bronze: '3', prata: '10', ouro: 'Ilimitado' },
    { feature: 'Vídeos no portfólio', bronze: false, prata: '1', ouro: 'Ilimitado' },
    { feature: 'Badge "Verificado"', bronze: true, prata: true, ouro: true },
    { feature: 'Badges especiais', bronze: false, prata: '2', ouro: 'Todos' },
    { feature: 'Destaque nas buscas', bronze: 'Padrão', prata: 'Moderado', ouro: 'Máximo' },
    { feature: 'Posição nas buscas', bronze: 'Normal', prata: 'Prioridade', ouro: 'Topo' },
    { feature: 'Estatísticas', bronze: false, prata: 'Básicas', ouro: 'Avançadas' },
    { feature: 'Suporte', bronze: 'Email', prata: 'Email + Tel', ouro: '24/7 Prioritário' },
    { feature: 'Gerente de conta', bronze: false, prata: false, ouro: true },
    { feature: 'Promoção em redes', bronze: false, prata: false, ouro: true }
  ];

  const benefits = [
    {
      icon: Search,
      title: 'Maior Visibilidade',
      description: 'Apareça nas primeiras posições das buscas e receba mais solicitações de clientes.'
    },
    {
      icon: Star,
      title: 'Credibilidade',
      description: 'Badges e selos especiais transmitem confiança e profissionalismo aos clientes.'
    },
    {
      icon: TrendingUp,
      title: 'Mais Oportunidades',
      description: 'Profissionais Premium recebem até 5x mais solicitações de orçamento.'
    },
    {
      icon: Award,
      title: 'Destaque no Mercado',
      description: 'Diferencie-se da concorrência com recursos exclusivos e portfólio completo.'
    }
  ];

  const planFaq = faq.filter(f => f.category === 'Para Profissionais');

  return (
    <div className="min-h-screen bg-gray-50">
      <OfferSchema
        name="Plano Prata - Profissional"
        description="Plano para profissionais que querem se destacar no TeleObra24h com até 10 fotos, destaque nas buscas e badges especiais."
        price="49.90"
        url="https://teleobra24h.com.br/planos"
      />
      <OfferSchema
        name="Plano Ouro - Premium"
        description="Plano premium com máxima visibilidade, portfólio ilimitado, todos os badges, estatísticas avançadas e suporte prioritário 24/7."
        price="99.90"
        url="https://teleobra24h.com.br/planos"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Planos para Profissionais
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Escolha o plano ideal para impulsionar seu negócio e conquistar mais clientes
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2 max-w-sm mx-auto">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-primary-600 font-semibold'
                    : 'text-white hover:text-primary-100'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-primary-600 font-semibold'
                    : 'text-white hover:text-primary-100'
                }`}
              >
                Anual
                <Badge className="ml-2 bg-secondary-500 text-white">
                  -20%
                </Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;

              return (
                <motion.div
                  key={plan.name}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-1">
                        Mais Popular
                      </Badge>
                    </div>
                  )}

                  <Card className={`h-full ${
                    plan.popular
                      ? 'border-2 border-secondary-500 shadow-xl'
                      : 'border border-gray-200'
                  }`}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-${plan.color}-100 rounded-full flex items-center justify-center mb-4`}>
                        <Icon className={`w-8 h-8 text-${plan.color}-600`} />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>

                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-gray-900">
                            R$ {price.toFixed(2).replace('.', ',')}
                          </span>
                          {price > 0 && (
                            <span className="text-gray-600 ml-2">
                              /{billingCycle === 'monthly' ? 'mês' : 'mês*'}
                            </span>
                          )}
                        </div>
                        {billingCycle === 'annual' && price > 0 && (
                          <p className="text-sm text-gray-500 mt-1">
                            *Cobrado anualmente
                          </p>
                        )}
                      </div>

                      <Button
                        className={`w-full mb-6 ${
                          plan.popular
                            ? 'bg-secondary-500 hover:bg-secondary-600'
                            : 'bg-primary-600 hover:bg-primary-700'
                        }`}
                      >
                        {plan.cta}
                      </Button>

                      <div className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm ${
                              feature.included ? 'text-gray-700' : 'text-gray-400'
                            }`}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Por Que Investir em um Plano?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja como nossos planos podem transformar seu negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Compare os Planos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja lado a lado o que cada plano oferece
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Recurso
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-amber-700">
                    Bronze
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">
                    Prata
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-accent-700">
                    Ouro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.bronze === 'boolean' ? (
                        row.bronze ? (
                          <Check className="w-5 h-5 text-secondary-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.bronze}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.prata === 'boolean' ? (
                        row.prata ? (
                          <Check className="w-5 h-5 text-secondary-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.prata}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.ouro === 'boolean' ? (
                        row.ouro ? (
                          <Check className="w-5 h-5 text-secondary-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.ouro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Dúvidas Sobre os Planos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Respostas para as perguntas mais frequentes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {planFaq.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Pronto para Crescer?
            </h2>
            <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
              Escolha seu plano e comece a receber mais solicitações de clientes hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-600">
                Ver Demonstração
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

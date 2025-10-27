'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  TrendingUp,
  Users,
  Calendar,
  MessageCircle,
  Award,
  Shield,
  Sparkles,
  Calculator,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { useState, useRef } from 'react';

const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    icon: Award,
    price: { monthly: 149, annual: 1490 },
    color: 'from-orange-400 to-amber-600',
    description: 'Ideal para começar',
    features: [
      { name: 'Perfil Básico', included: true },
      { name: 'Até 10 fotos no portfólio', included: true },
      { name: 'Aparecer nas buscas', included: true },
      { name: 'Notificações de orçamentos', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'Selo de verificação', included: false },
      { name: 'Destaque nas buscas', included: false },
      { name: 'Vídeos no portfólio', included: false },
      { name: 'Analytics detalhado', included: false },
      { name: 'Suporte prioritário', included: false }
    ],
    limits: {
      photos: 10,
      videos: 0,
      monthlyLeads: 20
    }
  },
  {
    id: 'prata',
    name: 'Prata',
    icon: Star,
    price: { monthly: 249, annual: 2490 },
    color: 'from-gray-400 to-gray-600',
    description: 'O mais popular',
    popular: true,
    features: [
      { name: 'Perfil Completo', included: true },
      { name: 'Até 30 fotos no portfólio', included: true },
      { name: 'Aparecer nas buscas', included: true },
      { name: 'Notificações de orçamentos', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'Selo de verificação', included: true },
      { name: 'Destaque nas buscas', included: true },
      { name: 'Até 5 vídeos no portfólio', included: true },
      { name: 'Analytics detalhado', included: true },
      { name: 'Suporte prioritário', included: false }
    ],
    limits: {
      photos: 30,
      videos: 5,
      monthlyLeads: 50
    }
  },
  {
    id: 'ouro',
    name: 'Ouro',
    icon: Crown,
    price: { monthly: 399, annual: 3990 },
    color: 'from-yellow-400 to-amber-500',
    description: 'Para profissionais de elite',
    features: [
      { name: 'Perfil Premium', included: true },
      { name: 'Fotos ilimitadas', included: true },
      { name: 'Aparecer nas buscas', included: true },
      { name: 'Notificações de orçamentos', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'Selo de verificação', included: true },
      { name: 'Destaque nas buscas', included: true },
      { name: 'Vídeos ilimitados', included: true },
      { name: 'Analytics detalhado', included: true },
      { name: 'Suporte prioritário', included: true }
    ],
    limits: {
      photos: Infinity,
      videos: Infinity,
      monthlyLeads: 'Ilimitado'
    }
  }
];

const comparisonFeatures = [
  { category: 'Perfil', features: ['Personalização do perfil', 'Fotos no portfólio', 'Vídeos no portfólio', 'Certificações'] },
  { category: 'Visibilidade', features: ['Aparecer nas buscas', 'Destaque nas buscas', 'Badge "Top Professional"', 'Prioridade nos resultados'] },
  { category: 'Comunicação', features: ['Notificações de orçamentos', 'Chat direto com clientes', 'WhatsApp integrado', 'Respostas automáticas'] },
  { category: 'Gestão', features: ['Agenda de serviços', 'Analytics básico', 'Analytics avançado', 'Relatórios mensais'] },
  { category: 'Suporte', features: ['Email suporte', 'Chat suporte', 'Telefone suporte', 'Gerente de conta'] }
];

function PricingCard({ plan, billingCycle, index }: { plan: any; billingCycle: 'monthly' | 'annual'; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual / 12;
  const savings = billingCycle === 'annual' ? plan.price.monthly * 12 - plan.price.annual : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={`relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow ${
        plan.popular ? 'ring-4 ring-primary-500 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-vibrant text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          Mais Popular
        </div>
      )}

      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
        <plan.icon size={32} className="text-white" />
      </div>

      <h3 className="text-3xl font-heading font-black mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-6">{plan.description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black gradient-text">R$ {price.toFixed(0)}</span>
          <span className="text-gray-600">/mês</span>
        </div>
        {billingCycle === 'annual' && savings > 0 && (
          <div className="mt-2 text-sm text-green-600 font-bold">
            Economize R$ {savings} por ano
          </div>
        )}
        <div className="mt-2 text-sm text-gray-500">
          {billingCycle === 'annual' ? `R$ ${plan.price.annual}/ano` : 'Cobrado mensalmente'}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: any, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check size={14} className="text-green-600" />
              </div>
            ) : (
              <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                <X size={14} className="text-gray-400" />
              </div>
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all ${
          plan.popular
            ? 'bg-gradient-vibrant text-white'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Escolher {plan.name}
      </motion.button>
    </motion.div>
  );
}

export default function PlanosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [calculatorLeads, setCalculatorLeads] = useState(30);
  const [calculatorPlan, setCalculatorPlan] = useState('prata');
  const [showComparison, setShowComparison] = useState(false);

  const avgServiceValue = 450;
  const conversionRate = 0.3;
  const estimatedRevenue = calculatorLeads * avgServiceValue * conversionRate;
  const planCost = plans.find(p => p.id === calculatorPlan)?.price[billingCycle] || 0;
  const monthlyCost = billingCycle === 'monthly' ? planCost : planCost / 12;
  const estimatedProfit = estimatedRevenue - monthlyCost;
  const roi = ((estimatedProfit / monthlyCost) * 100).toFixed(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-vibrant text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles size={40} />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Escolha Seu Plano Ideal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Multiplique seus clientes e aumente sua renda com a melhor plataforma da Região dos Lagos
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-black mb-1">3x</div>
                <div className="text-sm text-white/80">Mais Clientes</div>
              </div>
              <div className="w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-black mb-1">98%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
              <div className="w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-black mb-1">&lt;1h</div>
                <div className="text-sm text-white/80">Resposta</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="inline-flex bg-white p-2 rounded-2xl shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-4 rounded-xl font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-4 rounded-xl font-bold transition-all relative ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-accent text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                Calcule Seus <span className="gradient-text">Ganhos</span>
              </h2>
              <p className="text-xl text-gray-600">
                Veja quanto você pode ganhar com a TeleObra24h
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3">
                      Quantos orçamentos você quer por mês?
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={calculatorLeads}
                      onChange={(e) => setCalculatorLeads(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-vibrant rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>10</span>
                      <span className="font-bold text-2xl gradient-text">{calculatorLeads}</span>
                      <span>100</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3">Escolha seu plano</label>
                    <select
                      value={calculatorPlan}
                      onChange={(e) => setCalculatorPlan(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border-2 border-white bg-white focus:border-primary-500 focus:outline-none text-lg font-medium"
                    >
                      <option value="bronze">Bronze - R$ {plans[0].price[billingCycle] / (billingCycle === 'annual' ? 12 : 1)}/mês</option>
                      <option value="prata">Prata - R$ {plans[1].price[billingCycle] / (billingCycle === 'annual' ? 12 : 1)}/mês</option>
                      <option value="ouro">Ouro - R$ {plans[2].price[billingCycle] / (billingCycle === 'annual' ? 12 : 1)}/mês</option>
                    </select>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Valor médio do serviço: R$ {avgServiceValue}</div>
                    <div>• Taxa de conversão estimada: {(conversionRate * 100)}%</div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-vibrant rounded-xl flex items-center justify-center">
                      <Calculator className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">Estimativa Mensal</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Orçamentos</span>
                      <span className="font-bold text-xl">{calculatorLeads}</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Serviços Fechados</span>
                      <span className="font-bold text-xl">{Math.round(calculatorLeads * conversionRate)}</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                      <span className="text-gray-600">Receita Estimada</span>
                      <span className="font-bold text-xl text-green-600">
                        R$ {estimatedRevenue.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Custo do Plano</span>
                      <span className="font-bold text-xl">
                        R$ {monthlyCost.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="border-t-2 border-gray-200 my-4" />

                    <div className="flex justify-between items-center p-4 bg-gradient-vibrant rounded-xl text-white">
                      <span className="font-bold">Lucro Estimado</span>
                      <span className="font-black text-2xl">
                        R$ {estimatedProfit.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="text-center p-4 bg-primary-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">ROI (Retorno sobre Investimento)</div>
                      <div className="text-3xl font-black gradient-text">{roi}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <p className="text-gray-600 mb-4">
                  * Valores estimados baseados em médias da plataforma. Resultados podem variar.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-vibrant text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Começar Agora
                  <ChevronRight size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Comparação <span className="gradient-text">Detalhada</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Veja todos os recursos de cada plano
            </p>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              {showComparison ? 'Ocultar' : 'Ver'} Comparação Completa
              <ChevronRight className={`transition-transform ${showComparison ? 'rotate-90' : ''}`} size={20} />
            </button>
          </motion.div>

          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-6xl mx-auto overflow-x-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-heading font-bold text-lg">Recursos</th>
                      {plans.map((plan) => (
                        <th key={plan.id} className="text-center py-4 px-6">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${plan.color} text-white font-bold`}>
                            <plan.icon size={20} />
                            {plan.name}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIndex) => (
                      <>
                        <tr key={`cat-${catIndex}`} className="bg-gray-50">
                          <td colSpan={4} className="py-3 px-6 font-bold text-sm uppercase text-gray-600">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={`${catIndex}-${featureIndex}`} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-6 text-gray-700">{feature}</td>
                            {plans.map((plan) => (
                              <td key={plan.id} className="py-4 px-6 text-center">
                                {Math.random() > 0.3 ? (
                                  <div className="inline-flex w-6 h-6 bg-green-100 rounded-full items-center justify-center">
                                    <Check size={16} className="text-green-600" />
                                  </div>
                                ) : (
                                  <div className="inline-flex w-6 h-6 bg-gray-100 rounded-full items-center justify-center">
                                    <X size={16} className="text-gray-400" />
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
              Dúvidas <span className="gradient-text">Frequentes</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'Posso mudar de plano depois?',
                  a: 'Sim! Você pode fazer upgrade ou downgrade a qualquer momento. O valor será proporcional ao tempo restante.'
                },
                {
                  q: 'Existe período de teste?',
                  a: 'Sim, oferecemos 14 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor.'
                },
                {
                  q: 'Como funciona o pagamento?',
                  a: 'Aceitamos cartão de crédito, boleto e PIX. O pagamento é processado de forma segura.'
                },
                {
                  q: 'Posso cancelar a qualquer momento?',
                  a: 'Sim, sem multas ou taxas. Você pode cancelar quando quiser pelo painel.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-vibrant text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Pronto para Multiplicar Seus Clientes?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a mais de 1.247 profissionais que já transformaram seus negócios
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
              >
                Começar Agora
                <ChevronRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
              >
                Falar com Especialista
              </motion.button>
            </div>

            <p className="text-sm text-white/70 mt-6">
              14 dias de garantia • Cancele quando quiser • Suporte dedicado
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

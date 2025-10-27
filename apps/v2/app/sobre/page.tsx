'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Heart,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Globe,
  Mail,
  CheckCircle,
  Sparkles,
  Target,
  Rocket,
  DollarSign,
  UserPlus
} from 'lucide-react';
import { useRef, useState } from 'react';

const values = [
  {
    icon: Heart,
    title: 'Compromisso com a Qualidade',
    description: 'Selecionamos rigorosamente cada profissional para garantir excelência em todos os serviços.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Segurança e Confiança',
    description: 'Todos os profissionais são verificados e avaliados continuamente pela nossa comunidade.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description: 'Conexão rápida entre clientes e profissionais, com tempo médio de resposta de menos de 1 hora.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Construímos uma rede forte de profissionais e clientes satisfeitos na Região dos Lagos • em breve em todo Brasil.',
    color: 'from-green-500 to-emerald-500'
  }
];

const timeline = [
  {
    year: '2023',
    title: 'Fundação',
    description: 'TeleObra24h nasce em Cabo Frio com a missão de conectar profissionais qualificados a clientes.'
  },
  {
    year: '2024',
    title: 'Expansão Regional',
    description: 'Expandimos para todas as 7 cidades da Região dos Lagos • em breve em todo Brasil, alcançando mais de 1.000 profissionais.'
  },
  {
    year: '2025',
    title: 'Inovação Contínua',
    description: 'Lançamento de novas funcionalidades e programa de afiliados para impulsionar ainda mais nossos parceiros.'
  }
];

const integrations = [
  { name: 'WhatsApp Business', logo: '💬', description: 'Comunicação direta' },
  { name: 'Google Maps', logo: '🗺️', description: 'Localização precisa' },
  { name: 'Mercado Pago', logo: '💳', description: 'Pagamentos seguros' },
  { name: 'Instagram', logo: '📸', description: 'Portfólio visual' }
];

const affiliateBeefits = [
  'Ganhe até 20% de comissão recorrente',
  'Material de divulgação personalizado',
  'Dashboard exclusivo para acompanhamento',
  'Suporte dedicado para afiliados',
  'Pagamentos mensais automáticos'
];

export default function SobrePage() {
  const [email, setEmail] = useState('');
  const heroRef = useRef(null);
  const valuesRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ['start end', 'end start']
  });

  const heroY = useTransform(heroProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const valuesY = useTransform(valuesProgress, [0, 1], [100, -100]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! Email ${email} cadastrado com sucesso!`);
    setEmail('');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-vibrant"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Sparkles size={48} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-heading font-black mb-6"
          >
            Transformando a Região dos Lagos <span className="text-3xl md:text-4xl font-normal text-gray-500">• em breve em todo Brasil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Conectamos pessoas aos melhores profissionais, criando oportunidades e construindo confiança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 text-white/90"
          >
            <div className="text-center">
              <div className="text-4xl font-black mb-2">1.247+</div>
              <div className="text-sm">Profissionais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">15.890+</div>
              <div className="text-sm">Serviços</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">7</div>
              <div className="text-sm">Cidades</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Nossa <span className="gradient-text">História</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nascemos da necessidade de criar uma ponte confiável entre profissionais talentosos
              e clientes que buscam qualidade. Em poucos anos, nos tornamos a principal plataforma
              da Região dos Lagos <span className="text-sm text-gray-500">• em breve em todo Brasil</span>, transformando vidas e negócios.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 pb-12 border-l-2 border-primary-200 last:border-transparent"
              >
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-vibrant rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-sm font-bold text-primary-600 mb-2">{item.year}</div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values with Parallax */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e ação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Program */}
      <section className="py-20 bg-gradient-to-br from-primary-500 via-purple-600 to-accent-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Rocket size={40} />
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                Programa de Afiliados
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Ganhe dinheiro indicando profissionais para nossa plataforma
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-2xl font-heading font-bold mb-6">Benefícios</h3>
                <ul className="space-y-4">
                  {affiliateBeefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl font-black mb-4">20%</div>
                  <p className="text-xl">de comissão recorrente</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Plano Bronze</span>
                    <span className="font-bold">R$ 30/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Plano Prata</span>
                    <span className="font-bold">R$ 50/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span>Plano Ouro</span>
                    <span className="font-bold">R$ 80/mês</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
              >
                <UserPlus size={24} />
                Quero Ser Afiliado
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              <span className="gradient-text">Integrações</span> Poderosas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conectados com as melhores ferramentas do mercado
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              >
                <div className="text-5xl mb-4">{integration.logo}</div>
                <h3 className="font-bold mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-vibrant rounded-full flex items-center justify-center">
                    <Mail size={32} className="text-white" />
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                  Fique por Dentro
                </h2>
                <p className="text-gray-600 text-lg">
                  Receba novidades, dicas e ofertas exclusivas diretamente no seu email
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-vibrant text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Inscrever-se Gratuitamente
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Sem spam. Cancele quando quiser. 🔒
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-vibrant text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de profissionais e clientes satisfeitos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Sou Cliente
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
              >
                Sou Profissional
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

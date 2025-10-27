'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  Target,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  Star,
  Zap
} from 'lucide-react';

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

export default function SobrePage() {
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
              <Link href="/planos" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Planos
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
              <Sparkles className="w-4 h-4 text-secondary-600" />
              <span className="text-sm font-medium text-primary-900">Sobre Nós</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Conectando Talentos
              </span>
              <br />
              <span className="text-primary-900">e Transformando Projetos</span>
            </h1>

            <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Somos a plataforma líder na conexão entre profissionais qualificados da construção civil
              e clientes que buscam excelência na <span className="font-semibold text-secondary-700">Região dos Lagos</span>.
              <span className="text-sm text-primary-500"> • em breve em todo Brasil</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: 'Nossa Missão',
                description: 'Facilitar a conexão entre profissionais qualificados e clientes, promovendo transparência, qualidade e confiança em cada projeto.',
                gradient: 'from-secondary-500 to-secondary-700'
              },
              {
                icon: Heart,
                title: 'Nossa Visão',
                description: 'Ser a plataforma #1 de serviços de construção civil no Brasil, reconhecida pela qualidade e inovação tecnológica.',
                gradient: 'from-accent-500 to-accent-700'
              },
              {
                icon: Shield,
                title: 'Nossos Valores',
                description: 'Transparência, qualidade, segurança, inovação e compromisso com a satisfação de profissionais e clientes.',
                gradient: 'from-secondary-600 to-accent-600'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-primary-100 hover:border-secondary-300 hover:shadow-2xl transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-primary-600">
              Como tudo começou
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                year: '2023',
                title: 'O Início',
                description: 'Identificamos a dificuldade que clientes enfrentam para encontrar profissionais confiáveis e que profissionais têm para conquistar novos clientes. Assim nasceu o TeleObra24h.'
              },
              {
                year: '2024',
                title: 'Crescimento Acelerado',
                description: 'Expandimos para todas as 7 cidades da Região dos Lagos, alcançando mais de 1.000 profissionais cadastrados e milhares de projetos concluídos com sucesso.'
              },
              {
                year: '2025',
                title: 'Liderança Regional',
                description: 'Nos tornamos a plataforma #1 na Região dos Lagos, com 98% de satisfação dos usuários. Agora planejamos expansão nacional.'
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-lg shadow-glow-cyan">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{milestone.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Por Que Escolher o TeleObra24h?
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Diferenciais que nos tornam únicos no mercado
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, title: 'Verificação Rigorosa', description: 'Todos os profissionais são verificados' },
              { icon: Star, title: 'Alta Qualidade', description: '4.9/5 de avaliação média' },
              { icon: Clock, title: 'Resposta Rápida', description: 'Tempo médio de 2 horas' },
              { icon: Award, title: 'Profissionais Premium', description: 'Melhores talentos da região' },
              { icon: CheckCircle, title: '98% Satisfação', description: 'Clientes e profissionais satisfeitos' },
              { icon: Zap, title: 'Plataforma Rápida', description: 'Tecnologia moderna e eficiente' },
              { icon: Users, title: '1.247+ Profissionais', description: 'Maior rede da região' },
              { icon: TrendingUp, title: 'Crescimento Constante', description: 'Sempre inovando e melhorando' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 border border-primary-100 hover:border-secondary-300 hover:shadow-xl transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-secondary flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')] bg-cover bg-center" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Processo simples e transparente para todos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Para Clientes */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-secondary-400" />
                  Para Clientes
                </h3>
                <div className="space-y-4">
                  {[
                    'Busque pelo serviço que você precisa',
                    'Compare perfis, avaliações e preços',
                    'Entre em contato direto com o profissional',
                    'Acompanhe o projeto e avalie ao final'
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-primary-200">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Para Profissionais */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent-400" />
                  Para Profissionais
                </h3>
                <div className="space-y-4">
                  {[
                    'Crie seu perfil profissional completo',
                    'Escolha seu plano (Bronze, Prata ou Ouro)',
                    'Receba solicitações de clientes qualificados',
                    'Construa sua reputação com avaliações'
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-primary-200">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: '1.247+', label: 'Profissionais Ativos' },
              { value: '8.934', label: 'Projetos Concluídos' },
              { value: '98%', label: 'Taxa de Satisfação' },
              { value: '7', label: 'Cidades Atendidas' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-600">{stat.label}</div>
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
              Pronto para Começar?
            </h2>
            <p className="text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
              Junte-se a milhares que já transformaram seus projetos conosco
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/busca"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-secondary-700 rounded-xl font-bold text-lg shadow-2xl hover:bg-primary-50 transition-all"
              >
                Buscar Profissionais
              </Link>
              <Link
                href="/planos"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-secondary-700 transition-all"
              >
                Ver Planos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

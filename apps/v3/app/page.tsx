'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  MapPin,
  Zap
} from 'lucide-react';
import { ThemeToggle } from '@teleobra24h/ui';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent">
                TeleObra24h
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/busca" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Buscar
              </Link>
              <Link href="/sobre" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Sobre
              </Link>
              <Link href="/planos" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Planos
              </Link>
              <ThemeToggle />
              <Link
                href="/busca"
                className="px-6 py-2.5 bg-gradient-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-glow-cyan transition-all"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')] bg-cover bg-center opacity-5" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            {...fadeIn}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-secondary-200 mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-secondary-600" />
              <span className="text-sm font-medium text-primary-900">
                Plataforma #1 na Região dos Lagos <span className="text-xs text-primary-500">• em breve em todo Brasil</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Conecte-se com
              </span>
              <br />
              <span className="text-primary-900">
                Profissionais de Elite
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A plataforma mais moderna e confiável para encontrar profissionais qualificados
              ou expandir sua base de clientes. <span className="font-semibold text-secondary-700">Rápido, seguro e eficiente.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/busca"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-secondary text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-glow-cyan transition-all"
                >
                  <Search className="w-5 h-5" />
                  Encontrar Profissionais
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/planos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary-200 text-primary-900 rounded-xl font-semibold text-lg shadow-lg hover:border-secondary-400 hover:shadow-xl transition-all"
                >
                  <Award className="w-5 h-5" />
                  Ver Planos Premium
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <span>Profissionais Verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary-600" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary-600" />
                <span>Resposta em 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent-600 fill-accent-600" />
                <span>4.9/5 Avaliação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, value: '1,247+', label: 'Profissionais Ativos', color: 'secondary' },
              { icon: CheckCircle, value: '8,934', label: 'Projetos Concluídos', color: 'accent' },
              { icon: MapPin, value: '7', label: 'Cidades Cobertas', color: 'secondary' },
              { icon: TrendingUp, value: '98%', label: 'Satisfação', color: 'accent' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 hover:border-secondary-300 hover:shadow-xl transition-all">
                  <stat.icon className={`w-12 h-12 mb-4 text-${stat.color}-600`} />
                  <div className="text-4xl font-bold text-primary-900 mb-2">{stat.value}</div>
                  <div className="text-primary-600">{stat.label}</div>
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Por que escolher o TeleObra24h?
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Tecnologia de ponta para conectar você aos melhores profissionais
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: 'Verificação Rigorosa',
                description: 'Todos os profissionais passam por processo completo de verificação de documentos e certificações.',
                gradient: 'from-secondary-500 to-secondary-700'
              },
              {
                icon: Zap,
                title: 'Resposta Imediata',
                description: 'Sistema inteligente que conecta você ao profissional ideal em menos de 2 horas.',
                gradient: 'from-accent-500 to-accent-700'
              },
              {
                icon: Award,
                title: 'Qualidade Garantida',
                description: 'Avaliações reais de clientes e sistema de badges para profissionais premium.',
                gradient: 'from-secondary-600 to-accent-600'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 hover:shadow-2xl transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{feature.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{feature.description}</p>

                  {/* Animated border */}
                  {hoveredCard === index && (
                    <motion.div
                      layoutId="hoverBorder"
                      className="absolute inset-0 rounded-2xl border-2 border-secondary-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
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
          <motion.div
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Três passos simples para encontrar o profissional perfeito
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-400 to-transparent" />

            {[
              {
                number: '01',
                title: 'Busque',
                description: 'Pesquise por categoria, localização ou nome. Use filtros avançados para encontrar exatamente o que precisa.',
                icon: Search
              },
              {
                number: '02',
                title: 'Compare',
                description: 'Veja perfis completos, portfolios, avaliações e certificações. Escolha com confiança.',
                icon: Users
              },
              {
                number: '03',
                title: 'Contrate',
                description: 'Entre em contato direto e seguro. Acompanhe o projeto e avalie ao final.',
                icon: CheckCircle
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-secondary flex items-center justify-center text-4xl font-bold shadow-glow-cyan relative z-10">
                  {step.number}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <step.icon className="w-8 h-8 text-secondary-400 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-primary-200 leading-relaxed text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              O Que Dizem Nossos Usuários
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Histórias reais de sucesso na nossa plataforma
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Ana Silva',
                role: 'Cliente',
                location: 'Cabo Frio, RJ',
                quote: 'Encontrei um eletricista excelente em minutos! O profissional era super qualificado e resolveu meu problema no mesmo dia.',
                rating: 5,
                avatar: 'AS'
              },
              {
                name: 'Carlos Mendes',
                role: 'Pedreiro',
                location: 'Arraial do Cabo, RJ',
                quote: 'Como profissional, esta plataforma triplicou meus clientes. Melhor investimento que fiz na minha carreira!',
                rating: 5,
                avatar: 'CM'
              },
              {
                name: 'Maria Santos',
                role: 'Cliente',
                location: 'Búzios, RJ',
                quote: 'Confiança total! Todos os profissionais são verificados e super competentes. Recomendo muito!',
                rating: 5,
                avatar: 'MS'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 hover:shadow-2xl transition-all"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-primary-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">{testimonial.name}</div>
                    <div className="text-sm text-primary-500">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-700 rounded-full blur-3xl opacity-30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-2xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de profissionais e clientes satisfeitos na plataforma líder da região
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/busca"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-secondary-700 rounded-xl font-bold text-lg shadow-2xl hover:bg-primary-50 transition-all"
                >
                  Buscar Profissionais
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/planos"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-secondary-700 transition-all"
                >
                  Sou Profissional
                  <Award className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-heading text-2xl font-bold">TeleObra24h</span>
              </div>
              <p className="text-primary-300 mb-6 max-w-md leading-relaxed">
                A plataforma mais moderna para conectar profissionais qualificados
                com clientes que buscam excelência na Região dos Lagos.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-secondary-400">Navegação</h4>
              <ul className="space-y-3">
                {['Buscar', 'Sobre', 'Planos', 'Blog', 'FAQ'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-primary-300 hover:text-secondary-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-secondary-400">Contato</h4>
              <ul className="space-y-3 text-primary-300">
                <li>contato@teleobra24h.com</li>
                <li>(22) 99999-9999</li>
                <li>Região dos Lagos, RJ</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 text-center text-primary-400 text-sm">
            <p>© 2024 TeleObra24h. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

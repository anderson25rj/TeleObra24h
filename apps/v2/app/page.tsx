'use client';

import type { Metadata } from 'next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Star, MapPin, Play, TrendingUp, Award, Clock, Sparkles } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@teleobra24h/ui';

// Mock data imports (we'll use inline data for now)
const stats = {
  professionals: 1247,
  services: 15890,
  satisfaction: 98,
  cities: 7,
  rating: 4.9
};

const testimonials = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Cliente',
    location: 'Cabo Frio',
    photo: 'https://i.pravatar.cc/150?img=1',
    quote: 'Serviço excepcional! Encontrei um eletricista em minutos e o problema foi resolvido no mesmo dia.',
    rating: 5,
    videoThumb: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?w=400&h=300'
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Profissional',
    location: 'Arraial do Cabo',
    photo: 'https://i.pravatar.cc/150?img=12',
    quote: 'A plataforma triplicou meus clientes! O melhor investimento que já fiz na minha carreira.',
    rating: 5,
    videoThumb: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300'
  },
  {
    id: '3',
    name: 'Maria Santos',
    role: 'Cliente',
    location: 'Búzios',
    photo: 'https://i.pravatar.cc/150?img=5',
    quote: 'Confiança total! Todos os profissionais são verificados e super competentes.',
    rating: 5,
    videoThumb: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?w=400&h=300'
  }
];

const blogPosts = [
  {
    id: '1',
    title: '5 Dicas para Escolher o Profissional Ideal',
    excerpt: 'Aprenda a avaliar portfólio, reviews e certificações antes de contratar.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=600&h=400',
    date: '15 Out 2025',
    category: 'Guias'
  },
  {
    id: '2',
    title: 'Manutenção Preventiva: Vale a Pena?',
    excerpt: 'Descubra como economizar evitando problemas antes que aconteçam.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400',
    date: '12 Out 2025',
    category: 'Dicas'
  },
  {
    id: '3',
    title: 'Como Aumentar sua Renda como Profissional',
    excerpt: 'Estratégias comprovadas para profissionais que querem crescer na plataforma.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=600&h=400',
    date: '10 Out 2025',
    category: 'Profissionais'
  }
];

function CounterAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'clients' | 'professionals'>('clients');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-secondary-100 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-vibrant rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-black bg-gradient-vibrant bg-clip-text text-transparent">
                TeleObra24h
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Início
              </Link>
              <Link href="/busca" className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Buscar
              </Link>
              <Link href="/sobre" className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Sobre
              </Link>
              <Link href="/planos" className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Planos
              </Link>
              <ThemeToggle />
              <Link
                href="/busca"
                className="px-6 py-2.5 bg-gradient-vibrant text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Começar Agora
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 pt-20">
        {/* Background Image - Grupo de pessoas em construção */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600')] bg-cover bg-center opacity-15" style={{ zIndex: 0 }} />

        <motion.div
          className="absolute inset-0 bg-gradient-vibrant opacity-10"
          style={{ y }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-gradient-vibrant text-white rounded-full text-sm font-semibold shadow-lg">
                  24/7 Disponível na Região dos Lagos - RJ <span className="text-xs opacity-75">• em breve em todo Brasil</span>
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                <span className="gradient-text">Conectamos</span>
                <br />
                Você ao Profissional
                <br />
                <span className="gradient-text">Ideal</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                A plataforma mais vibrante e moderna para encontrar profissionais qualificados
                ou conseguir mais clientes. Rápido, seguro e eficiente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  Sou Cliente
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-accent text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  Sou Profissional
                  <Briefcase className="group-hover:rotate-12 transition-transform" />
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black gradient-text">
                    <CounterAnimation end={stats.professionals} />+
                  </div>
                  <div className="text-sm text-gray-600">Profissionais</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black gradient-text">
                    <CounterAnimation end={stats.services} />+
                  </div>
                  <div className="text-sm text-gray-600">Serviços</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black gradient-text">
                    <CounterAnimation end={stats.satisfaction} />%
                  </div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Animated Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-accent rounded-full opacity-20 blur-3xl"
              />

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 right-20 bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">4.9</div>
                    <div className="text-sm text-gray-600">Avaliação</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-32 right-32 bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Award className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">100%</div>
                    <div className="text-sm text-gray-600">Verificados</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-vibrant rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Tabs Section: Para Clientes vs Para Profissionais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              A Solução <span className="gradient-text">Perfeita</span> para Todos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seja você cliente ou profissional, temos tudo o que você precisa
            </p>
          </motion.div>

          {/* Custom Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 p-2 rounded-2xl">
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all ${
                    activeTab === 'clients'
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Users className="inline-block mr-2" />
                  Para Clientes
                </button>
                <button
                  onClick={() => setActiveTab('professionals')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all ${
                    activeTab === 'professionals'
                      ? 'bg-gradient-accent text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Briefcase className="inline-block mr-2" />
                  Para Profissionais
                </button>
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl"
            >
              {activeTab === 'clients' ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Encontre o Profissional Ideal</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>Busca Inteligente</strong>
                          <p className="text-gray-600">Filtros avançados por categoria, localização e avaliação</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>100% Verificados</strong>
                          <p className="text-gray-600">Todos os profissionais passam por verificação rigorosa</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>Orçamento Grátis</strong>
                          <p className="text-gray-600">Solicite orçamentos sem compromisso</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full h-64 bg-gradient-primary rounded-2xl flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=400&h=300&fit=crop"
                        alt="Cliente feliz com profissional"
                        className="w-full h-full object-cover rounded-2xl opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent rounded-2xl" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-3xl font-bold">1.247</div>
                        <div className="text-sm">Profissionais Prontos</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Multiplique Seus Clientes</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>Mais Visibilidade</strong>
                          <p className="text-gray-600">Apareça para milhares de clientes em potencial</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>Gestão Simplificada</strong>
                          <p className="text-gray-600">Controle seus serviços e agenda em um só lugar</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <strong>Planos Flexíveis</strong>
                          <p className="text-gray-600">Escolha o plano ideal para o seu momento</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full h-64 bg-gradient-accent rounded-2xl flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?w=400&h=300&fit=crop"
                        alt="Profissional trabalhando na construção"
                        className="w-full h-full object-cover rounded-2xl opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-900/80 to-transparent rounded-2xl" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-3xl font-bold">3x</div>
                        <div className="text-sm">Mais Clientes</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Histórias <span className="gradient-text">Reais</span>
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos usuários têm a dizer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.videoThumb}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <Play className="text-primary-600 ml-1" size={24} />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-vibrant px-3 py-1 rounded-full text-white text-sm font-bold">
                    {testimonial.role}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin size={12} />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Cobrimos Toda a <span className="gradient-text">Região dos Lagos - RJ</span> <span className="text-lg font-normal text-gray-500">• em breve em todo Brasil</span>
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais qualificados em 7 cidades
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl p-8 overflow-hidden shadow-2xl">
              {/* Mock Map */}
              <div className="relative h-96 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Região dos Lagos - RJ <span className="text-sm font-normal text-gray-500">• em breve em todo Brasil</span></h3>
                  <p className="text-gray-600">Mapa interativo em desenvolvimento</p>
                </div>

                {/* Floating city badges */}
                {[
                  { name: 'Cabo Frio', top: '20%', left: '30%', professionals: 342 },
                  { name: 'Búzios', top: '15%', left: '60%', professionals: 156 },
                  { name: 'Arraial do Cabo', top: '50%', left: '25%', professionals: 189 },
                  { name: 'Iguaba Grande', top: '60%', left: '55%', professionals: 128 },
                  { name: 'São Pedro da Aldeia', top: '40%', left: '70%', professionals: 234 },
                  { name: 'Araruama', top: '70%', left: '40%', professionals: 142 },
                  { name: 'Saquarema', top: '80%', left: '65%', professionals: 56 }
                ].map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="absolute bg-white rounded-xl px-4 py-2 shadow-lg cursor-pointer"
                    style={{ top: city.top, left: city.left }}
                  >
                    <div className="font-bold text-sm">{city.name}</div>
                    <div className="text-xs text-gray-600">{city.professionals} profissionais</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Counters */}
      <section className="py-20 bg-gradient-vibrant text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Profissionais Ativos', value: 1247, suffix: '+' },
              { icon: Briefcase, label: 'Serviços Concluídos', value: 15890, suffix: '+' },
              { icon: Star, label: 'Avaliação Média', value: 4.9, suffix: '/5.0', decimals: 1 },
              { icon: Clock, label: 'Tempo Médio Resposta', value: 2, suffix: 'h' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-4"
                >
                  <stat.icon size={48} className="mx-auto" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  <CounterAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
                Últimas do <span className="gradient-text">Blog</span>
              </h2>
              <p className="text-xl text-gray-600">
                Dicas, guias e novidades
              </p>
            </div>
            <Link href="/blog" className="text-primary-600 font-bold hover:underline flex items-center gap-2">
              Ver todos
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-vibrant px-3 py-1 rounded-full text-white text-sm font-bold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ler mais
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-black mb-4 gradient-text">
                TeleObra24h
              </h3>
              <p className="text-white/70">
                Conectando você aos melhores profissionais da Região dos Lagos - RJ <span className="text-xs opacity-60">• em breve em todo Brasil</span>.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Para Clientes</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/busca" className="hover:text-white transition-colors">Buscar Profissionais</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Como Funciona</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Garantias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Para Profissionais</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/planos" className="hover:text-white transition-colors">Planos</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Seja um Parceiro</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Programa de Afiliados</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2025 TeleObra24h. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

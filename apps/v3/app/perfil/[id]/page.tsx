'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Star,
  Award,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
  Calendar,
  TrendingUp,
  Sparkles,
  Shield,
  Briefcase
} from 'lucide-react';

// Mock professional data
const professional = {
  id: 'prof-001',
  name: 'Carlos Eduardo Silva',
  category: 'Pedreiro',
  location: 'São Pedro da Aldeia, RJ',
  rating: 4.9,
  reviews_count: 87,
  verified: true,
  subscription_plan: 'ouro',
  hourly_rate: 65,
  daily_rate: 450,
  years_experience: 15,
  completed_jobs: 234,
  response_time: '2 horas',
  bio: 'Pedreiro profissional com mais de 15 anos de experiência em construção e reformas. Especializado em alvenaria estrutural, revestimentos e acabamentos de qualidade. Trabalho com pontualidade e compromisso.',
  specialties: ['Alvenaria estrutural', 'Revestimentos', 'Muros', 'Reformas completas'],
  certifications: ['NR-18 Segurança no Trabalho', 'Curso de Alvenaria Estrutural', 'Técnico em Edificações'],
  phone: '(22) 98765-4321',
  whatsapp: '5522987654321',
  member_since: '2023-01-15',
};

const portfolio = [
  { id: 1, title: 'Construção de Muro', description: 'Alvenaria estrutural residencial', category: 'Alvenaria', image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?w=400&h=300' },
  { id: 2, title: 'Reforma Completa', description: 'Casa residencial de 120m²', category: 'Reforma', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=400&h=300' },
  { id: 3, title: 'Revestimento de Fachada', description: 'Aplicação de pastilhas premium', category: 'Acabamento', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300' },
  { id: 4, title: 'Construção de Churrasqueira', description: 'Área de lazer completa', category: 'Lazer', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=400&h=300' },
  { id: 5, title: 'Ampliação Residencial', description: 'Novo quarto e banheiro', category: 'Ampliação', image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?w=400&h=300' },
  { id: 6, title: 'Piso Cerâmico', description: 'Instalação em 80m²', category: 'Acabamento', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300' },
];

const reviews = [
  {
    id: 1,
    client_name: 'Maria Silva',
    rating: 5,
    date: '2024-10-15',
    comment: 'Profissional excepcional! Trabalho impecável, pontual e muito atencioso. Recomendo fortemente para qualquer projeto.',
    service_type: 'Reforma completa',
  },
  {
    id: 2,
    client_name: 'João Santos',
    rating: 5,
    date: '2024-09-28',
    comment: 'Carlos é um mestre no que faz. A qualidade do acabamento superou todas as expectativas. Muito profissional.',
    service_type: 'Revestimento',
  },
  {
    id: 3,
    client_name: 'Ana Costa',
    rating: 4,
    date: '2024-09-10',
    comment: 'Ótimo trabalho, apenas atrasou um dia mas avisou com antecedência. Resultado final ficou excelente.',
    service_type: 'Construção de muro',
  },
  {
    id: 4,
    client_name: 'Roberto Lima',
    rating: 5,
    date: '2024-08-22',
    comment: 'Profissionalismo do início ao fim. Trabalho limpo, organizado e de altíssima qualidade. Voltarei a contratar.',
    service_type: 'Ampliação',
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
      staggerChildren: 0.1
    }
  }
};

export default function PerfilPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'reviews'>('portfolio');

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/busca" className="flex items-center gap-3">
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
              <Link href="/sobre" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Sobre
              </Link>
              <Link href="/planos" className="text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors">
                Planos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <motion.div {...fadeIn} className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 border border-primary-100 shadow-xl sticky top-24">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-4xl font-bold shadow-glow-cyan">
                  {professional.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    Premium Verificado
                  </div>
                </div>

                {/* Name & Category */}
                <h1 className="text-3xl font-bold text-primary-900 text-center mb-2">
                  {professional.name}
                </h1>
                <p className="text-lg text-primary-600 text-center mb-6">{professional.category}</p>

                {/* Location & Rating */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center gap-2 text-primary-600">
                    <MapPin className="w-5 h-5 text-secondary-600" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                      ))}
                    </div>
                    <span className="font-bold text-lg text-primary-900">{professional.rating}</span>
                    <span className="text-primary-500">({professional.reviews_count})</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-primary-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-700 mb-1">{professional.years_experience}</div>
                    <div className="text-xs text-primary-600">Anos</div>
                  </div>
                  <div className="text-center border-x border-primary-200">
                    <div className="text-2xl font-bold text-secondary-700 mb-1">{professional.completed_jobs}</div>
                    <div className="text-xs text-primary-600">Projetos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-700 mb-1">{professional.response_time}</div>
                    <div className="text-xs text-primary-600">Resposta</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-8 p-4 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-xl border border-secondary-200">
                  <div className="flex items-baseline gap-2 justify-center mb-1">
                    <span className="text-3xl font-bold text-primary-900">R$ {professional.hourly_rate}</span>
                    <span className="text-primary-500">/hora</span>
                  </div>
                  <div className="text-center text-sm text-primary-600">
                    ou R$ {professional.daily_rate}/diária
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-4 bg-gradient-secondary text-white rounded-xl font-semibold hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Solicitar Consulta
                  </button>
                  <a
                    href={`https://wa.me/${professional.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white border-2 border-primary-200 text-primary-900 rounded-xl font-semibold hover:border-secondary-400 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${professional.phone}`}
                    className="w-full py-4 bg-white border-2 border-primary-200 text-primary-900 rounded-xl font-semibold hover:border-secondary-400 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    {professional.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio Section */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 border border-primary-100 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Sobre o Profissional</h2>
                <p className="text-primary-700 leading-relaxed mb-6">{professional.bio}</p>

                <h3 className="font-semibold text-primary-900 mb-3">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {professional.specialties.map((spec, idx) => (
                    <div key={idx} className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg text-sm font-medium">
                      {spec}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 border border-primary-100 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Certificações</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professional.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 border border-secondary-200 rounded-xl hover:border-secondary-400 hover:bg-secondary-50 transition-all">
                      <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tabs */}
              <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-8 border border-primary-100 shadow-lg">
                {/* Tab Buttons */}
                <div className="flex gap-2 mb-8 bg-primary-50 p-2 rounded-xl">
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'portfolio'
                        ? 'bg-gradient-secondary text-white shadow-lg'
                        : 'text-primary-600 hover:text-secondary-600'
                    }`}
                  >
                    <Briefcase className="w-5 h-5 inline-block mr-2" />
                    Portfolio
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'reviews'
                        ? 'bg-gradient-secondary text-white shadow-lg'
                        : 'text-primary-600 hover:text-secondary-600'
                    }`}
                  >
                    <Star className="w-5 h-5 inline-block mr-2" />
                    Avaliações
                  </button>
                </div>

                {/* Portfolio Tab */}
                {activeTab === 'portfolio' && (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                  >
                    {portfolio.map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={fadeIn}
                        className="group rounded-xl overflow-hidden border border-primary-100 hover:border-secondary-300 hover:shadow-xl transition-all"
                      >
                        <div className="relative h-48 bg-primary-100 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute top-3 left-3">
                            <div className="px-3 py-1 bg-secondary-600 text-white rounded-full text-xs font-semibold">
                              {item.category}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-primary-900 mb-2 group-hover:text-secondary-700 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <motion.div
                    className="space-y-6"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                  >
                    {reviews.map((review) => (
                      <motion.div
                        key={review.id}
                        variants={fadeIn}
                        className="p-6 border border-primary-100 rounded-xl hover:border-secondary-300 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'fill-accent-500 text-accent-500' : 'text-primary-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="font-semibold text-primary-900">{review.client_name}</p>
                            <p className="text-sm text-primary-500">{review.service_type}</p>
                          </div>
                          <p className="text-sm text-primary-500">{new Date(review.date).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <p className="text-primary-700 leading-relaxed italic">
                          "{review.comment}"
                        </p>
                      </motion.div>
                    ))}

                    {/* Review Stats */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl text-white">
                      <h3 className="font-bold text-lg mb-6 text-center">Estatísticas de Avaliação</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-secondary-400 mb-1">{professional.rating}</div>
                          <div className="text-xs text-primary-200">Média Geral</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-secondary-400 mb-1">96%</div>
                          <div className="text-xs text-primary-200">Recomendações</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-secondary-400 mb-1">100%</div>
                          <div className="text-xs text-primary-200">Pontualidade</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-secondary-400 mb-1">98%</div>
                          <div className="text-xs text-primary-200">Qualidade</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary-600 via-secondary-500 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto Para Começar Seu Projeto?
            </h2>
            <p className="text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
              Agende uma consulta gratuita e receba um orçamento personalizado
            </p>
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-secondary-700 rounded-xl font-bold text-lg shadow-2xl hover:bg-primary-50 transition-all">
              <Calendar className="w-5 h-5" />
              Solicitar Consulta Gratuita
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

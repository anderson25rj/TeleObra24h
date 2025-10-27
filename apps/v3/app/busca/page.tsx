'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Star,
  Award,
  Clock,
  Grid3x3,
  List,
  SlidersHorizontal,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

// Mock data
const professionals = [
  {
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
    response_time: '2 horas',
    badges: ['Pro Verificado', 'Top Rated', 'Resposta Rápida'],
    description: 'Especialista em alvenaria e reformas residenciais com mais de 15 anos de experiência.',
  },
  {
    id: 'prof-002',
    name: 'Ana Paula Costa',
    category: 'Eletricista',
    location: 'Cabo Frio, RJ',
    rating: 4.8,
    reviews_count: 64,
    verified: true,
    subscription_plan: 'prata',
    hourly_rate: 75,
    daily_rate: 520,
    response_time: '3 horas',
    badges: ['Pro Verificado', 'Resposta Rápida'],
    description: 'Eletricista residencial e comercial com certificação NR10.',
  },
  {
    id: 'prof-003',
    name: 'Roberto Mendes',
    category: 'Encanador',
    location: 'Búzios, RJ',
    rating: 4.7,
    reviews_count: 52,
    verified: true,
    subscription_plan: 'ouro',
    hourly_rate: 70,
    daily_rate: 480,
    response_time: '1 hora',
    badges: ['Pro Verificado', 'Top Rated'],
    description: 'Especialista em instalações hidráulicas e manutenção preventiva.',
  },
  {
    id: 'prof-004',
    name: 'Juliana Santos',
    category: 'Pintor',
    location: 'Araruama, RJ',
    rating: 4.9,
    reviews_count: 91,
    verified: true,
    subscription_plan: 'ouro',
    hourly_rate: 60,
    daily_rate: 420,
    response_time: '2 horas',
    badges: ['Pro Verificado', 'Top Rated', 'Resposta Rápida'],
    description: 'Pintura residencial e comercial, texturas e acabamentos especiais.',
  },
  {
    id: 'prof-005',
    name: 'Fernando Oliveira',
    category: 'Marceneiro',
    location: 'Cabo Frio, RJ',
    rating: 4.8,
    reviews_count: 73,
    verified: true,
    subscription_plan: 'prata',
    hourly_rate: 80,
    daily_rate: 550,
    response_time: '4 horas',
    badges: ['Pro Verificado'],
    description: 'Móveis planejados e marcenaria sob medida de alta qualidade.',
  },
  {
    id: 'prof-006',
    name: 'Patricia Lima',
    category: 'Gesseiro',
    location: 'Búzios, RJ',
    rating: 4.9,
    reviews_count: 68,
    verified: true,
    subscription_plan: 'ouro',
    hourly_rate: 65,
    daily_rate: 450,
    response_time: '2 horas',
    badges: ['Pro Verificado', 'Top Rated'],
    description: 'Instalação de gesso, sancas, forros e molduras decorativas.',
  },
];

const categories = ['Todos', 'Pedreiro', 'Eletricista', 'Encanador', 'Pintor', 'Marceneiro', 'Gesseiro'];
const cities = ['Todas', 'São Pedro da Aldeia', 'Cabo Frio', 'Búzios', 'Araruama', 'Iguaba Grande'];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function BuscaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProfessionals = professionals.filter(prof => {
    const matchesCategory = selectedCategory === 'Todos' || prof.category === selectedCategory;
    const matchesCity = selectedCity === 'Todas' || prof.location.includes(selectedCity);
    const matchesSearch = prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prof.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCity && matchesSearch;
  });

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

      {/* Hero/Search Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Encontre o Profissional <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">Ideal</span>
            </h1>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              {filteredProfessionals.length} profissionais qualificados prontos para atender você
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nome ou categoria..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-xl font-medium hover:shadow-glow-cyan transition-all"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filtros
                </button>
              </div>

              {/* Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-primary-100"
                >
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Categoria
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Localização
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-primary-600">
              Mostrando <span className="font-semibold text-primary-900">{filteredProfessionals.length}</span> resultados
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-secondary-100 text-secondary-700'
                    : 'bg-white text-primary-400 hover:bg-primary-50'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-secondary-100 text-secondary-700'
                    : 'bg-white text-primary-400 hover:bg-primary-50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Professionals Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {filteredProfessionals.map((prof, index) => (
              <motion.div
                key={prof.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/perfil/${prof.id}`}>
                  <div className="group bg-white rounded-2xl p-6 border border-primary-100 hover:border-secondary-300 hover:shadow-2xl transition-all h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-900 mb-1 group-hover:text-secondary-700 transition-colors">
                          {prof.name}
                        </h3>
                        <p className="text-primary-600 text-sm">{prof.category}</p>
                      </div>
                      {prof.subscription_plan === 'ouro' && (
                        <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Premium
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-primary-600 text-sm mb-4 line-clamp-2">
                      {prof.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                        <span className="font-semibold text-primary-900">{prof.rating}</span>
                        <span className="text-primary-500">({prof.reviews_count})</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary-600">
                        <MapPin className="w-4 h-4" />
                        <span>{prof.location.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {prof.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-secondary-50 text-secondary-700 rounded-lg text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verificado
                        </div>
                      )}
                      <div className="flex items-center gap-1 px-2 py-1 bg-accent-50 text-accent-700 rounded-lg text-xs font-medium">
                        <Clock className="w-3 h-3" />
                        {prof.response_time}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-primary-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-primary-500 mb-1">A partir de</p>
                          <p className="text-2xl font-bold text-primary-900">
                            R$ {prof.hourly_rate}
                            <span className="text-sm font-normal text-primary-500">/hora</span>
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-gradient-secondary text-white rounded-lg font-medium hover:shadow-glow-cyan transition-all">
                          Ver Perfil
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProfessionals.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Nenhum profissional encontrado
              </h3>
              <p className="text-primary-600 mb-6">
                Tente ajustar seus filtros de busca
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSelectedCity('Todas');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-secondary text-white rounded-xl font-medium hover:shadow-glow-cyan transition-all"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

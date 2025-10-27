'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Star, MapPin, Award, Clock, DollarSign, ChevronDown, Sparkles, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Mock professionals data
const mockProfessionals = [
  {
    id: '1',
    name: 'João Silva',
    category: 'Eletricista',
    location: { city: 'Cabo Frio' },
    rating: 4.9,
    reviews_count: 142,
    verified: true,
    badges: ['Top Rated', 'Fast Response'],
    bio: 'Especialista em instalações residenciais e comerciais',
    hourly_rate: 85,
    daily_rate: 450,
    years_experience: 12,
    photo: 'https://i.pravatar.cc/300?img=11',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400' }
    ]
  },
  {
    id: '2',
    name: 'Maria Santos',
    category: 'Pedreiro',
    location: { city: 'Búzios' },
    rating: 5.0,
    reviews_count: 89,
    verified: true,
    badges: ['Top Professional', 'Certified'],
    bio: 'Construções e reformas com excelência',
    hourly_rate: 95,
    daily_rate: 520,
    years_experience: 15,
    photo: 'https://i.pravatar.cc/300?img=5',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400' }
    ]
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    category: 'Encanador',
    location: { city: 'Cabo Frio' },
    rating: 4.8,
    reviews_count: 76,
    verified: true,
    badges: ['24/7 Available'],
    bio: 'Atendimento emergencial e manutenção preventiva',
    hourly_rate: 80,
    daily_rate: 420,
    years_experience: 8,
    photo: 'https://i.pravatar.cc/300?img=12',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400' }
    ]
  },
  {
    id: '4',
    name: 'Ana Paula',
    category: 'Pintor',
    location: { city: 'Arraial do Cabo' },
    rating: 4.9,
    reviews_count: 103,
    verified: true,
    badges: ['Top Rated', 'Eco-Friendly'],
    bio: 'Pinturas residenciais e comerciais com acabamento premium',
    hourly_rate: 75,
    daily_rate: 400,
    years_experience: 10,
    photo: 'https://i.pravatar.cc/300?img=9',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400' }
    ]
  },
  {
    id: '5',
    name: 'Roberto Lima',
    category: 'Marceneiro',
    location: { city: 'São Pedro da Aldeia' },
    rating: 5.0,
    reviews_count: 67,
    verified: true,
    badges: ['Certified', 'Custom Work'],
    bio: 'Móveis planejados e marcenaria de alta qualidade',
    hourly_rate: 100,
    daily_rate: 550,
    years_experience: 18,
    photo: 'https://i.pravatar.cc/300?img=15',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400' }
    ]
  },
  {
    id: '6',
    name: 'Patricia Costa',
    category: 'Eletricista',
    location: { city: 'Búzios' },
    rating: 4.7,
    reviews_count: 54,
    verified: true,
    badges: ['Fast Response'],
    bio: 'Instalações elétricas e automação residencial',
    hourly_rate: 85,
    daily_rate: 450,
    years_experience: 7,
    photo: 'https://i.pravatar.cc/300?img=26',
    portfolio: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400' }
    ]
  }
];

const categories = ['Todos', 'Eletricista', 'Pedreiro', 'Encanador', 'Pintor', 'Marceneiro', 'Mestre de Obras'];
const cities = ['Todas', 'Cabo Frio', 'Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia', 'Iguaba Grande'];
const badges = ['Top Rated', 'Certified', 'Fast Response', '24/7 Available'];

export default function BuscaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [displayedProfessionals, setDisplayedProfessionals] = useState(6);
  const [sortBy, setSortBy] = useState('rating');

  const filteredProfessionals = mockProfessionals
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchesCity = selectedCity === 'Todas' || p.location.city === selectedCity;
      const matchesBadges = selectedBadges.length === 0 || selectedBadges.some(b => p.badges.includes(b));

      return matchesSearch && matchesCategory && matchesCity && matchesBadges;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews_count - a.reviews_count;
      if (sortBy === 'price_low') return a.daily_rate - b.daily_rate;
      if (sortBy === 'price_high') return b.daily_rate - a.daily_rate;
      return 0;
    });

  const topProfessionals = filteredProfessionals.filter(p => p.badges.includes('Top Rated'));

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev =>
      prev.includes(badge) ? prev.filter(b => b !== badge) : [...prev, badge]
    );
  };

  const loadMore = () => {
    setDisplayedProfessionals(prev => Math.min(prev + 6, filteredProfessionals.length));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-vibrant text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-4">
              Encontre Seu Profissional
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Mais de 1.247 profissionais verificados prontos para atender
            </p>

            {/* Search Bar */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="Buscar por profissional, categoria ou serviço..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="sticky top-4 space-y-6">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full bg-gradient-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
              </button>

              {/* Category Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="text-primary-600" size={20} />
                  Categoria
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-primary text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* City Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="text-accent-600" size={20} />
                  Localização
                </h3>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <motion.button
                      key={city}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedCity(city)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                        selectedCity === city
                          ? 'bg-gradient-accent text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {city}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Badges Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="text-primary-600" size={20} />
                  Selos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <motion.button
                      key={badge}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleBadge(badge)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedBadges.includes(badge)
                          ? 'bg-gradient-vibrant text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {badge}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'Todos' || selectedCity !== 'Todas' || selectedBadges.length > 0 || searchTerm) && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSelectedCity('Todas');
                    setSelectedBadges([]);
                    setSearchTerm('');
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold transition-all"
                >
                  Limpar Filtros
                </motion.button>
              )}
            </div>
          </motion.aside>

          {/* Results */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="text-gray-600">
                <span className="font-bold text-2xl gradient-text">{filteredProfessionals.length}</span>
                {' '}profissionais encontrados
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="rating">Melhor Avaliados</option>
                  <option value="reviews">Mais Avaliações</option>
                  <option value="price_low">Menor Preço</option>
                  <option value="price_high">Maior Preço</option>
                </select>
              </div>
            </div>

            {/* Top Professionals Section */}
            {topProfessionals.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-accent-500 to-primary-600 text-white p-6 rounded-2xl mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={32} />
                    <h2 className="text-2xl font-heading font-black">Top Profissionais</h2>
                  </div>
                  <p className="text-white/90">
                    Os profissionais mais bem avaliados da plataforma
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {topProfessionals.slice(0, 2).map((professional, index) => (
                    <ProfessionalCard key={professional.id} professional={professional} featured index={index} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Professional Grid with Masonry Effect */}
            <AnimatePresence mode="wait">
              {filteredProfessionals.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredProfessionals.slice(0, displayedProfessionals).map((professional, index) => (
                    <ProfessionalCard
                      key={professional.id}
                      professional={professional}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nenhum profissional encontrado</h3>
                  <p className="text-gray-600 mb-6">
                    Tente ajustar os filtros ou buscar por outros termos
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('Todos');
                      setSelectedCity('Todas');
                      setSelectedBadges([]);
                      setSearchTerm('');
                    }}
                    className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Limpar Filtros
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button */}
            {displayedProfessionals < filteredProfessionals.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={loadMore}
                  className="px-8 py-4 bg-gradient-vibrant text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Carregar Mais Profissionais
                  <ChevronDown size={20} />
                </motion.button>
                <p className="text-gray-500 mt-4">
                  Mostrando {displayedProfessionals} de {filteredProfessionals.length}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfessionalCard({
  professional,
  featured = false,
  index
}: {
  professional: any;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer ${
        featured ? 'ring-2 ring-accent-500' : ''
      }`}
    >
      <Link href={`/perfil/${professional.id}`}>
        {/* Header Image */}
        <div className="relative h-48 overflow-hidden">
          {professional.portfolio[0] && (
            <img
              src={professional.portfolio[0].url}
              alt={professional.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Verified Badge */}
          {professional.verified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
            >
              <Award className="text-primary-600" size={20} />
            </motion.div>
          )}

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4 bg-gradient-vibrant px-3 py-1 rounded-full text-white text-sm font-bold flex items-center gap-1">
              <TrendingUp size={14} />
              Top Professional
            </div>
          )}

          {/* Profile Photo */}
          <div className="absolute bottom-4 left-4">
            <img
              src={professional.photo}
              alt={professional.name}
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-1">
              {professional.name}
            </h3>
            <p className="text-gray-600">{professional.category}</p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-accent-500 fill-accent-500" />
              <span className="font-bold">{professional.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{professional.reviews_count} avaliações</span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
            <MapPin size={14} />
            {professional.location.city}
            <span className="text-gray-400">•</span>
            <Clock size={14} />
            {professional.years_experience} anos
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {professional.badges.slice(0, 2).map((badge: string) => (
              <span
                key={badge}
                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {professional.bio}
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary-600" />
              <div>
                <div className="text-sm text-gray-500">Diária a partir de</div>
                <div className="font-bold text-lg">R$ {professional.daily_rate}</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-primary text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Ver Perfil
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

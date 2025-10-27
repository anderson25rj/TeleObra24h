'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { Button, Card, CardContent, Badge } from '@teleobra24h/ui';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Import mock data
import { professionals, services } from '@teleobra24h/mocks';

export default function BuscaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Filter professionals
  const filteredProfessionals = professionals.filter((prof) => {
    if (selectedCategory && prof.category !== selectedCategory) return false;
    if (selectedCity && prof.location.city !== selectedCity) return false;
    if (prof.rating < minRating) return false;
    if (prof.hourly_rate && prof.hourly_rate > maxPrice) return false;
    return true;
  });

  // Sort professionals
  const sortedProfessionals = [...filteredProfessionals].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return (a.hourly_rate || 0) - (b.hourly_rate || 0);
    if (sortBy === 'price-high') return (b.hourly_rate || 0) - (a.hourly_rate || 0);
    return 0; // relevance (default order)
  });

  const cities = Array.from(new Set(professionals.map((p) => p.location.city))).sort();
  const categories = Array.from(new Set(professionals.map((p) => p.category))).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Buscar Profissionais
          </h1>
          <p className="text-xl text-primary-100">
            Encontre o profissional perfeito para seu projeto
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filtros
                  </h2>
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedCity('');
                      setMinRating(0);
                      setMaxPrice(1000);
                    }}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Limpar
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Todas as categorias</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Localização
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Todas as cidades</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Avaliação mínima: {minRating.toFixed(1)} ⭐
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0</span>
                      <span>5</span>
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preço máximo por hora: R$ {maxPrice}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>R$ 0</span>
                      <span>R$ 200+</span>
                    </div>
                  </div>

                  {/* Badges Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Selos
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded text-primary-600" />
                        <span className="text-sm text-gray-700">Verificado</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded text-primary-600" />
                        <span className="text-sm text-gray-700">Top Rated</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded text-primary-600" />
                        <span className="text-sm text-gray-700">Resposta Rápida</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded text-primary-600" />
                        <span className="text-sm text-gray-700">Emergência 24h</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Results */}
          <main className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {sortedProfessionals.length} profissionais encontrados
                </h2>
                <p className="text-gray-600 mt-1">
                  {selectedCategory && `em ${selectedCategory}`}
                  {selectedCity && ` • ${selectedCity}`}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">
                    Ordenar por:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="relevance">Relevância</option>
                    <option value="rating">Maior avaliação</option>
                    <option value="price-low">Menor preço</option>
                    <option value="price-high">Maior preço</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProfessionals.map((professional, index) => (
                <motion.div
                  key={professional.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProfessionalCard professional={professional} />
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {sortedProfessionals.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nenhum profissional encontrado
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tente ajustar seus filtros para ver mais resultados
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedCity('');
                      setMinRating(0);
                      setMaxPrice(1000);
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Pagination (Mock) */}
            {sortedProfessionals.length > 0 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button variant="outline" disabled>
                  Anterior
                </Button>
                <Button className="bg-primary-600 hover:bg-primary-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Próximo</Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

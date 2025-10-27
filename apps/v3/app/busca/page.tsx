'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, Star, Award, Clock, Grid3x3, List, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@teleobra24h/ui/components/sheet';
import { Badge } from '@teleobra24h/ui/components/badge';

// Mock data - in production, this would come from API/packages/mocks
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
  },
];

const categories = ['Todos', 'Pedreiro', 'Eletricista', 'Encanador', 'Pintor', 'Marceneiro', 'Gesseiro'];
const cities = ['Todas', 'São Pedro da Aldeia', 'Cabo Frio', 'Búzios', 'Araruama', 'Iguaba Grande'];

export default function BuscaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-heading text-2xl font-bold tracking-tight">
              TeleObra<span className="text-gold">24h</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/sobre" className="text-sm hover:text-gold transition-colors">
              Sobre
            </Link>
            <Link href="/planos" className="text-sm hover:text-gold transition-colors">
              Planos
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-heading text-6xl font-bold mb-6">Encontre Profissionais</h1>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Conecte-se com especialistas verificados e altamente qualificados
            </p>
          </div>

          {/* Search & Filters Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
              <input
                type="text"
                placeholder="Buscar por nome, especialidade ou localização..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 border-2 border-black/10 focus:border-gold outline-none text-lg transition-colors"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                {/* Category Quick Filters */}
                <div className="flex gap-2">
                  {categories.slice(0, 4).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2.5 text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-black text-white'
                          : 'bg-black/5 hover:bg-black/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Advanced Filters Sheet */}
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="flex items-center gap-2 px-6 py-2.5 border border-black/10 hover:border-gold transition-colors">
                      <SlidersHorizontal className="w-4 h-4" />
                      <span className="text-sm font-medium">Filtros Avançados</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md bg-white">
                    <SheetHeader>
                      <SheetTitle className="font-heading text-2xl">Filtros Avançados</SheetTitle>
                      <SheetDescription>
                        Refine sua busca para encontrar o profissional ideal
                      </SheetDescription>
                    </SheetHeader>

                    <div className="mt-8 space-y-8">
                      {/* Category Filter */}
                      <div>
                        <label className="block text-sm font-semibold mb-4">Categoria</label>
                        <div className="space-y-2">
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`w-full text-left px-4 py-3 border transition-colors ${
                                selectedCategory === cat
                                  ? 'border-gold bg-gold/5'
                                  : 'border-black/10 hover:border-gold/50'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* City Filter */}
                      <div>
                        <label className="block text-sm font-semibold mb-4">Cidade</label>
                        <div className="space-y-2">
                          {cities.map((city) => (
                            <button
                              key={city}
                              onClick={() => setSelectedCity(city)}
                              className={`w-full text-left px-4 py-3 border transition-colors ${
                                selectedCity === city
                                  ? 'border-gold bg-gold/5'
                                  : 'border-black/10 hover:border-gold/50'
                              }`}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <label className="block text-sm font-semibold mb-4">Avaliação Mínima</label>
                        <div className="space-y-2">
                          {[5, 4.5, 4, 3.5].map((rating) => (
                            <button
                              key={rating}
                              className="w-full text-left px-4 py-3 border border-black/10 hover:border-gold/50 transition-colors flex items-center gap-2"
                            >
                              <Star className="w-4 h-4 fill-gold text-gold" />
                              <span>{rating}+</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Plan Filter */}
                      <div>
                        <label className="block text-sm font-semibold mb-4">Plano</label>
                        <div className="space-y-2">
                          {['Todos', 'Ouro', 'Prata', 'Bronze'].map((plan) => (
                            <button
                              key={plan}
                              className="w-full text-left px-4 py-3 border border-black/10 hover:border-gold/50 transition-colors"
                            >
                              {plan}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-black/5 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' ? 'bg-black text-white' : 'hover:bg-black/10'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${
                    viewMode === 'list' ? 'bg-black text-white' : 'hover:bg-black/10'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-black/60">
              <span className="font-semibold text-black">{professionals.length}</span> profissionais encontrados
            </p>
          </div>

          {/* Professionals Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.map((prof) => (
                <Link
                  key={prof.id}
                  href={`/perfil/${prof.id}`}
                  className="group border border-black/5 hover:border-gold/50 hover:shadow-xl transition-all duration-300 p-8"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-black/5 rounded-full mb-6 mx-auto flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-gold">
                      {prof.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {prof.name}
                    </h3>
                    <p className="text-black/60 mb-3">{prof.category}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-black/50">
                      <MapPin className="w-4 h-4" />
                      <span>{prof.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-semibold">{prof.rating}</span>
                    <span className="text-black/50 text-sm">({prof.reviews_count})</span>
                  </div>

                  {/* Badges */}
                  {prof.subscription_plan === 'ouro' && (
                    <div className="flex justify-center mb-6">
                      <Badge className="bg-gold text-black border-0 px-4 py-1.5">
                        <Award className="w-3 h-3 mr-1" />
                        Premium Verificado
                      </Badge>
                    </div>
                  )}

                  {/* Info */}
                  <div className="border-t border-black/5 pt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-black/60">Diária</span>
                      <span className="font-semibold">R$ {prof.daily_rate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black/60">Resposta</span>
                      <span className="font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {prof.response_time}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 py-3 bg-black text-white group-hover:bg-gold group-hover:text-black transition-all duration-300 font-medium">
                    Ver Perfil
                  </button>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {professionals.map((prof) => (
                <Link
                  key={prof.id}
                  href={`/perfil/${prof.id}`}
                  className="group flex items-center gap-8 border border-black/5 hover:border-gold/50 hover:shadow-xl transition-all duration-300 p-8"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-heading font-bold text-gold">
                      {prof.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-1 group-hover:text-gold transition-colors">
                          {prof.name}
                        </h3>
                        <p className="text-black/60">{prof.category}</p>
                      </div>
                      {prof.subscription_plan === 'ouro' && (
                        <Badge className="bg-gold text-black border-0">
                          <Award className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-black/40" />
                        <span className="text-black/60">{prof.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                          ))}
                        </div>
                        <span className="font-semibold">{prof.rating}</span>
                        <span className="text-black/50">({prof.reviews_count})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-black/40" />
                        <span className="text-black/60">Responde em {prof.response_time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div>
                        <span className="text-sm text-black/60">Diária: </span>
                        <span className="font-semibold text-lg">R$ {prof.daily_rate}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="px-8 py-3 bg-black text-white group-hover:bg-gold group-hover:text-black transition-all duration-300 font-medium">
                    Ver Perfil
                  </button>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="px-6 py-3 border border-black/10 hover:border-gold transition-colors disabled:opacity-30" disabled>
              Anterior
            </button>
            <button className="px-6 py-3 bg-black text-white">1</button>
            <button className="px-6 py-3 border border-black/10 hover:border-gold transition-colors">2</button>
            <button className="px-6 py-3 border border-black/10 hover:border-gold transition-colors">3</button>
            <button className="px-6 py-3 border border-black/10 hover:border-gold transition-colors">
              Próxima
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-black/5 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black/50 text-sm">2024 TeleObra24h. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

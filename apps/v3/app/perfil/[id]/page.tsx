'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Star, Award, Clock, Phone, MessageCircle, CheckCircle, Calendar, TrendingUp } from 'lucide-react';
import { Badge } from '@teleobra24h/ui/components/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@teleobra24h/ui/components/tabs';

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
  { id: 1, title: 'Construção de Muro', description: 'Alvenaria estrutural residencial', category: 'Alvenaria' },
  { id: 2, title: 'Reforma Completa', description: 'Casa residencial de 120m²', category: 'Reforma' },
  { id: 3, title: 'Revestimento de Fachada', description: 'Aplicação de pastilhas premium', category: 'Acabamento' },
  { id: 4, title: 'Construção de Churrasqueira', description: 'Área de lazer completa', category: 'Lazer' },
  { id: 5, title: 'Ampliação Residencial', description: 'Novo quarto e banheiro', category: 'Ampliação' },
  { id: 6, title: 'Piso Cerâmico', description: 'Instalação em 80m²', category: 'Acabamento' },
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

export default function PerfilPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/busca" className="flex items-center gap-3">
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

      {/* Hero Header - Large & Elegant */}
      <section className="pt-32 pb-20 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Avatar */}
            <div className="w-40 h-40 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-6xl font-heading font-bold text-black">
                {professional.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <Badge className="bg-gold text-black border-0 px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Premium Verificado
                </Badge>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-gold">
                {professional.name}
              </h1>

              <p className="text-2xl text-white/80 mb-6">{professional.category}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-white/80">{professional.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-bold text-xl">{professional.rating}</span>
                  <span className="text-white/60">({professional.reviews_count} avaliações)</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-heading font-bold text-gold mb-1">{professional.years_experience}</div>
                  <div className="text-sm text-white/60">Anos de Experiência</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-heading font-bold text-gold mb-1">{professional.completed_jobs}</div>
                  <div className="text-sm text-white/60">Projetos Concluídos</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-heading font-bold text-gold mb-1">{professional.response_time}</div>
                  <div className="text-sm text-white/60">Tempo de Resposta</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black hover:bg-white transition-all duration-300 font-semibold">
                  <Calendar className="w-5 h-5" />
                  Solicitar Consulta
                </button>
                <a
                  href={`https://wa.me/${professional.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${professional.phone}`}
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Prominent Gold Badges */}
      <section className="py-20 px-8 border-b border-black/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Certificações & Qualificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professional.certifications.map((cert, idx) => (
              <div key={idx} className="p-8 border-2 border-gold/30 bg-gold/5 hover:border-gold hover:bg-gold/10 transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{cert}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-8 bg-black/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">Sobre o Profissional</h2>
          <p className="text-xl text-black/70 leading-relaxed mb-8">{professional.bio}</p>

          <div>
            <h3 className="font-semibold text-lg mb-4">Especialidades</h3>
            <div className="flex flex-wrap gap-3">
              {professional.specialties.map((spec, idx) => (
                <Badge key={idx} className="bg-black text-white border-0 px-4 py-2 text-sm">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - Portfolio & Reviews */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-black/5 p-1">
              <TabsTrigger
                value="portfolio"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Avaliações
              </TabsTrigger>
            </TabsList>

            {/* Portfolio Grid with Fade */}
            <TabsContent value="portfolio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolio.map((item) => (
                  <div
                    key={item.id}
                    className="group border border-black/5 hover:border-gold/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Image Placeholder */}
                    <div className="h-64 bg-black/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gold text-black border-0">{item.category}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-black/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Reviews - Elegant Cards */}
            <TabsContent value="reviews" className="mt-0">
              <div className="space-y-8">
                {reviews.map((review) => (
                  <div key={review.id} className="p-8 border border-black/5 hover:border-gold/30 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating ? 'fill-gold text-gold' : 'text-black/20'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="font-semibold text-lg">{review.client_name}</p>
                        <p className="text-sm text-black/50">{review.service_type}</p>
                      </div>
                      <p className="text-sm text-black/50">{new Date(review.date).toLocaleDateString('pt-BR')}</p>
                    </div>

                    <p className="font-heading text-xl leading-relaxed text-black/80">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Review Stats */}
              <div className="mt-12 p-8 bg-black text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold mb-2">{professional.rating}</div>
                    <div className="text-sm text-white/60">Avaliação Média</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold mb-2">96%</div>
                    <div className="text-sm text-white/60">Recomendações</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold mb-2">100%</div>
                    <div className="text-sm text-white/60">Pontualidade</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-gold mb-2">98%</div>
                    <div className="text-sm text-white/60">Qualidade</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section - Floating Glass Effect */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-black text-white overflow-hidden">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />

            <div className="relative z-10 text-center">
              <h2 className="font-heading text-4xl font-bold mb-6">Pronto Para Começar Seu Projeto?</h2>
              <p className="text-xl text-white/80 mb-8">
                Agende uma consulta gratuita e receba um orçamento personalizado
              </p>
              <button className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gold text-black hover:bg-white transition-all duration-300 text-lg font-semibold">
                <Calendar className="w-5 h-5" />
                Solicitar Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black/50 text-sm">2024 TeleObra24h. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent } from '@teleobra24h/ui';
import { MapPin, Star, Clock, Phone, MessageCircle, CheckCircle, Award, Briefcase, Calendar, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

// Import mock data
import { professionals, reviews } from '@teleobra24h/mocks';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PerfilPage({ params }: PageProps) {
  const { id } = use(params);

  // Find professional
  const professional = professionals.find((p) => p.id === id);

  if (!professional) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Profissional não encontrado</h1>
          <p className="text-gray-600">O profissional que você está procurando não existe.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Get reviews for this professional
  const professionalReviews = reviews.filter((r) => r.professional_id === id);

  const initials = professional.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <PersonSchema
        name={professional.name}
        jobTitle={professional.category}
        description={professional.bio}
        image={`https://api.dicebear.com/7.x/initials/svg?seed=${professional.name}`}
        telephone={professional.phone}
        address={{
          addressLocality: professional.location.city,
          addressRegion: professional.location.state,
          addressCountry: 'BR',
        }}
        aggregateRating={{
          ratingValue: professional.rating,
          reviewCount: professional.reviews_count,
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Início', url: 'https://teleobra24h.com.br' },
          { name: 'Buscar', url: 'https://teleobra24h.com.br/busca' },
          { name: professional.name, url: `https://teleobra24h.com.br/perfil/${id}` },
        ]}
      />
      <Header />

      {/* Professional Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${professional.name}`} alt={professional.name} />
                <AvatarFallback className="bg-primary-100 text-primary-700 text-3xl font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-4xl font-heading font-bold mb-2">
                  {professional.name}
                </h1>
                <p className="text-xl text-primary-100 mb-4">{professional.category}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-accent-400 text-accent-400" />
                    <span className="font-semibold text-lg">{professional.rating.toFixed(1)}</span>
                    <span className="text-primary-200">
                      ({professional.reviews_count} avaliações)
                    </span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <MapPin className="w-5 h-5 mr-1" />
                    <span>
                      {professional.location.city}, {professional.location.state}
                    </span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>Responde em {professional.response_time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {professional.verified && (
                    <Badge className="bg-secondary-500 hover:bg-secondary-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verificado
                    </Badge>
                  )}
                  {professional.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sobre</h2>
                  <p className="text-gray-700 leading-relaxed">{professional.bio}</p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {professional.years_experience}
                        </div>
                        <div className="text-sm text-gray-600">anos de experiência</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-secondary-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {professional.completed_jobs}
                        </div>
                        <div className="text-sm text-gray-600">trabalhos concluídos</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-accent-600" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {professional.availability}
                        </div>
                        <div className="text-sm text-gray-600">disponibilidade</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Especialidades</h2>
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {professional.certifications && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-accent-600" />
                        Certificações
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {professional.certifications.map((cert, index) => (
                          <Badge key={index} className="bg-accent-100 text-accent-700 hover:bg-accent-200">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Portfólio</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {professional.portfolio.map((item, index) => (
                      <div key={index} className="relative group">
                        {item.type === 'image' ? (
                          <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-150430765125${index}?w=800&h=600&fit=crop`}
                              alt={item.description}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                            <Play className="w-16 h-16 text-white opacity-80" />
                          </div>
                        )}
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Avaliações ({professionalReviews.length})
                  </h2>

                  <div className="space-y-6">
                    {professionalReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                              <span className="text-primary-700 font-semibold text-sm">
                                {review.client_name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{review.client_name}</div>
                              <div className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString('pt-BR', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <div className="mt-2">
                          <Badge variant="outline" className="text-xs">
                            {review.service_type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Valores</h3>
                    {professional.hourly_rate && (
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-primary-600">
                          R$ {professional.hourly_rate}
                        </div>
                        <div className="text-sm text-gray-600">por hora</div>
                      </div>
                    )}
                    {professional.daily_rate && (
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gray-900">
                          R$ {professional.daily_rate}
                        </div>
                        <div className="text-sm text-gray-600">por dia</div>
                      </div>
                    )}
                    <Button className="w-full bg-secondary-500 hover:bg-secondary-600">
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
                    <div className="space-y-3">
                      <a
                        href={`tel:${professional.phone}`}
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>{professional.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${professional.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-700 hover:text-secondary-600 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Plan Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Plano</h3>
                    <Badge
                      className={`text-sm ${
                        professional.subscription_plan === 'ouro'
                          ? 'bg-accent-500 hover:bg-accent-600'
                          : professional.subscription_plan === 'prata'
                          ? 'bg-gray-400 hover:bg-gray-500'
                          : 'bg-amber-700 hover:bg-amber-800'
                      }`}
                    >
                      {professional.subscription_plan.toUpperCase()}
                    </Badge>
                    <p className="mt-3 text-sm text-gray-600">
                      Membro desde{' '}
                      {new Date(professional.member_since).toLocaleDateString('pt-BR', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

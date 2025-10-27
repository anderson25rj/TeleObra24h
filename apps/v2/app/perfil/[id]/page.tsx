'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Star,
  MapPin,
  Award,
  Clock,
  Briefcase,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  TrendingUp,
  Calendar,
  CheckCircle,
  DollarSign,
  Play,
  X,
  ChevronRight
} from 'lucide-react';
import { useState, useRef } from 'react';
import Link from 'next/link';

// Mock professional data
const professionalData = {
  id: '1',
  name: 'João Silva',
  category: 'Eletricista',
  location: { city: 'Cabo Frio', state: 'RJ' },
  rating: 4.9,
  reviews_count: 142,
  verified: true,
  badges: ['Top Rated', 'Fast Response', 'Certified'],
  bio: 'Especialista em instalações residenciais e comerciais com mais de 12 anos de experiência. Atendimento 24/7 para emergências.',
  hourly_rate: 85,
  daily_rate: 450,
  years_experience: 12,
  completed_jobs: 387,
  response_time: 'Menos de 1 hora',
  photo: 'https://i.pravatar.cc/400?img=11',
  cover: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=400&fit=crop',
  phone: '(22) 98765-4321',
  whatsapp: '5522987654321',
  specialties: [
    'Instalações Elétricas',
    'Manutenção Preventiva',
    'Automação Residencial',
    'Sistemas de Segurança',
    'Energia Solar'
  ],
  certifications: ['NR-10', 'SEP', 'ABRACOPEL'],
  portfolio: [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600',
      description: 'Instalação elétrica completa em residência de alto padrão'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600',
      description: 'Quadro elétrico trifásico industrial'
    },
    {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
      description: 'Instalação de sistema de automação residencial'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905252472-74d7c3a2ce93?w=600',
      description: 'Sistema de iluminação LED inteligente'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600',
      description: 'Retrofit elétrico em apartamento'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905252472-74d7c3a2ce93?w=300&h=400&fit=crop',
      description: 'Instalação de tomadas e interruptores'
    }
  ],
  timeline: [
    {
      date: 'Outubro 2025',
      title: 'Instalação Elétrica Residencial',
      client: 'Maria S.',
      location: 'Cabo Frio',
      description: 'Instalação completa em casa de 3 quartos'
    },
    {
      date: 'Setembro 2025',
      title: 'Automação Comercial',
      client: 'Pedro L.',
      location: 'Búzios',
      description: 'Sistema de automação para loja'
    },
    {
      date: 'Agosto 2025',
      title: 'Manutenção Preventiva',
      client: 'Ana C.',
      location: 'Cabo Frio',
      description: 'Manutenção elétrica preventiva em condomínio'
    },
    {
      date: 'Julho 2025',
      title: 'Sistema Solar',
      client: 'Roberto M.',
      location: 'Arraial do Cabo',
      description: 'Instalação de sistema fotovoltaico'
    }
  ],
  reviews: [
    {
      id: '1',
      client_name: 'Maria Santos',
      rating: 5,
      comment: 'Excelente profissional! Pontual, educado e muito competente. Resolveu o problema rapidamente.',
      date: '15 Out 2025',
      service_type: 'Instalação Elétrica',
      verified_purchase: true
    },
    {
      id: '2',
      client_name: 'Pedro Lima',
      rating: 5,
      comment: 'Superou minhas expectativas. Trabalho impecável e preço justo. Recomendo!',
      date: '10 Out 2025',
      service_type: 'Automação Residencial',
      verified_purchase: true
    },
    {
      id: '3',
      client_name: 'Ana Costa',
      rating: 4,
      comment: 'Muito bom profissional. Apenas demorou um pouco mais do que o esperado.',
      date: '5 Out 2025',
      service_type: 'Manutenção',
      verified_purchase: true
    }
  ]
};

export default function PerfilPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section ref={heroRef} className="relative h-96 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={professionalData.cover}
            alt={professionalData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-end"
        >
          <div className="container mx-auto px-4 pb-8 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <img
                  src={professionalData.photo}
                  alt={professionalData.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white shadow-2xl"
                />
                {professionalData.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-gradient-vibrant p-3 rounded-full shadow-lg">
                    <Shield className="text-white" size={20} />
                  </div>
                )}
              </motion.div>

              {/* Info */}
              <div className="flex-1 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl font-heading font-black mb-2">
                    {professionalData.name}
                  </h1>
                  <p className="text-xl text-white/90 mb-3">{professionalData.category}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Star size={20} className="text-accent-500 fill-accent-500" />
                      <span className="font-bold text-lg">{professionalData.rating}</span>
                      <span className="text-white/70">({professionalData.reviews_count} avaliações)</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin size={16} />
                      {professionalData.location.city}, {professionalData.location.state}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {professionalData.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowContact(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-vibrant text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-black mb-4 flex items-center gap-2">
                <Briefcase className="text-primary-600" />
                Sobre
              </h2>
              <p className="text-gray-700 leading-relaxed">{professionalData.bio}</p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-black mb-6">Especialidades</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {professionalData.specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl"
                  >
                    <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                    <span className="font-medium">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Portfolio - Bento Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-black mb-6">Portfólio</h2>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Large item - spans 2x2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(professionalData.portfolio[0].url)}
                  className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={professionalData.portfolio[0].url}
                    alt={professionalData.portfolio[0].description}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm">{professionalData.portfolio[0].description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Regular items */}
                {professionalData.portfolio.slice(1, 3).map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(item.url)}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={item.url}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="text-primary-600 ml-1" size={20} />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Tall item - spans 1x2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(professionalData.portfolio[5].url)}
                  className="row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={professionalData.portfolio[5].url}
                    alt={professionalData.portfolio[5].description}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* More regular items */}
                {professionalData.portfolio.slice(3, 5).map((item, index) => (
                  <motion.div
                    key={index + 3}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(item.url)}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={item.url}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-black mb-6 flex items-center gap-2">
                <Calendar className="text-primary-600" />
                Projetos Recentes
              </h2>

              <div className="space-y-6">
                {professionalData.timeline.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary-200"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-vibrant rounded-full" />
                    <div className="text-sm text-gray-500 mb-1">{project.date}</div>
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <div className="text-sm text-gray-600 mb-2">
                      Cliente: {project.client} • {project.location}
                    </div>
                    <p className="text-gray-700">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-black mb-6">Avaliações</h2>

              {/* Rating Chart */}
              <div className="mb-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-black gradient-text mb-2">
                      {professionalData.rating}
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-accent-500 fill-accent-500" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {professionalData.reviews_count} avaliações
                    </div>
                  </div>

                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2 mb-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stars === 5 ? 85 : stars === 4 ? 10 : 5}%` }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-vibrant"
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12">
                          {stars === 5 ? 85 : stars === 4 ? 10 : 5}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {professionalData.reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 rounded-2xl"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-bold mb-1">{review.client_name}</div>
                        <div className="flex mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-accent-500 fill-accent-500" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-white rounded-full text-gray-600">
                        {review.service_type}
                      </span>
                      {review.verified_purchase && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                          <CheckCircle size={14} />
                          Verificado
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-heading font-bold text-lg mb-4">Estatísticas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl">{professionalData.completed_jobs}</div>
                      <div className="text-sm text-gray-600">Serviços Concluídos</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl">{professionalData.years_experience} anos</div>
                      <div className="text-sm text-gray-600">de Experiência</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-vibrant rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl">{professionalData.response_time}</div>
                      <div className="text-sm text-gray-600">Tempo de Resposta</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-heading font-bold text-lg mb-4">Valores</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Hora</span>
                    <span className="font-bold text-2xl">R$ {professionalData.hourly_rate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Diária</span>
                    <span className="font-bold text-2xl">R$ {professionalData.daily_rate}</span>
                  </div>
                </div>
                <p className="text-sm text-white/80 mt-4">
                  * Valores podem variar conforme o serviço
                </p>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="text-primary-600" />
                  Certificações
                </h3>
                <div className="space-y-2">
                  {professionalData.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl"
                    >
                      <CheckCircle className="text-primary-600" size={16} />
                      <span className="font-medium text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${professionalData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-gradient-vibrant text-white py-4 rounded-2xl font-bold text-center shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </motion.a>

              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-white border-2 border-primary-500 text-primary-600 py-4 rounded-2xl font-bold text-center hover:bg-primary-50 transition-all"
              >
                Solicitar Orçamento
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

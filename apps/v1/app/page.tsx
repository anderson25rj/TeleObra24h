'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceSchema } from '@/components/StructuredData';
import { Button, Card, CardContent, Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@teleobra24h/ui';
import { Search, MapPin, Hammer, Zap, Wrench, PaintBucket, CheckCircle, Users, Shield, Clock, Star, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Import mock data
import { professionals, services, testimonials, stats, faq } from '@teleobra24h/mocks';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const categoryIcons: { [key: string]: any } = {
    'Alvenaria': Hammer,
    'Elétrica': Zap,
    'Hidráulica': Wrench,
    'Pintura': PaintBucket,
    'Marcenaria': Hammer,
    'Reparos Gerais': Wrench,
    'Reformas': Hammer,
    'Emergências': Zap,
  };

  // Get 8 popular services
  const popularServices = services.filter(s => s.popular).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="Marketplace de Profissionais da Construção Civil"
        description="Conectamos você aos melhores profissionais da construção civil na Região dos Lagos - RJ. Pedreiros, eletricistas, encanadores, pintores e mais."
        serviceType="Marketplace"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Profissionais de Confiança para Sua Obra
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Conectamos você aos melhores profissionais da construção civil na Região dos Lagos - RJ <span className="text-sm font-normal opacity-80">• em breve em todo Brasil</span>
            </p>

            {/* Search Bar */}
            <Card className="bg-white text-gray-900 shadow-2xl">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      O que você precisa?
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecione o serviço</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Onde?
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecione a cidade</option>
                      {stats.region_lagos.cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-1 flex items-end">
                    <Link href="/busca" className="w-full">
                      <Button size="lg" className="w-full bg-secondary-500 hover:bg-secondary-600 text-white">
                        <Search className="w-5 h-5 mr-2" />
                        Buscar Profissionais
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span>Profissionais Verificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary-400" />
                <span>Avaliações Reais</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary-400" />
                <span>Resposta Rápida</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontrar o profissional ideal nunca foi tão fácil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                icon: Search,
                title: 'Busque o Serviço',
                description: 'Procure pelo tipo de serviço que você precisa e filtre por localização, preço e avaliações.'
              },
              {
                step: '2',
                icon: Users,
                title: 'Compare Profissionais',
                description: 'Veja perfis detalhados, portfólios, avaliações de clientes e escolha o melhor para você.'
              },
              {
                step: '3',
                icon: CheckCircle,
                title: 'Contrate com Segurança',
                description: 'Entre em contato direto com o profissional verificado e inicie seu projeto com confiança.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Serviços Disponíveis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados para cada necessidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, index) => {
              const Icon = categoryIcons[service.name] || Hammer;
              return (
                <motion.div
                  key={service.id}
                  {...fadeIn}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/busca?categoria=${service.slug}`}>
                    <Card className="hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center text-sm text-primary-600 font-medium">
                          <span>Ver profissionais</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: stats.platform.total_professionals.toLocaleString(), label: 'Profissionais Cadastrados', icon: Users },
              { value: stats.platform.completed_services.toLocaleString(), label: 'Serviços Concluídos', icon: CheckCircle },
              { value: stats.platform.cities_covered, label: 'Cidades Atendidas', icon: MapPin },
              { value: `${stats.satisfaction.client_satisfaction}%`, label: 'Satisfação dos Clientes', icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-secondary-400" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Usuários
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confiança construída através de resultados reais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-700 font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossa plataforma
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faq.slice(0, 6).map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
              Encontre o profissional perfeito para seu projeto hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/busca">
                <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                  Buscar Profissionais
                </Button>
              </Link>
              <Link href="/planos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-600">
                  Quero ser um Profissional
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

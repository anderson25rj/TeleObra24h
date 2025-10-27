'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button, Card, CardContent, Badge } from '@teleobra24h/ui';
import { Target, Heart, Shield, CheckCircle, Users, Award, TrendingUp, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import mock data
import { stats } from '@teleobra24h/mocks';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function SobrePage() {
  const team = [
    {
      name: 'Carlos Silva',
      role: 'CEO & Fundador',
      bio: 'Engenheiro civil com 20 anos de experiência no mercado de construção.',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=Carlos Silva'
    },
    {
      name: 'Maria Santos',
      role: 'Diretora de Operações',
      bio: 'Especialista em gestão de operações e atendimento ao cliente.',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=Maria Santos'
    },
    {
      name: 'João Oliveira',
      role: 'CTO',
      bio: 'Desenvolvedor full-stack com foco em plataformas escaláveis.',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=Joao Oliveira'
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de Qualidade',
      bio: 'Responsável por garantir a qualidade dos profissionais cadastrados.',
      image: 'https://api.dicebear.com/7.x/initials/svg?seed=Ana Costa'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Sobre o TeleObra24h
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Conectamos profissionais qualificados da construção civil com clientes que buscam
              serviços de qualidade, confiança e transparência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossa Missão</h3>
                  <p className="text-gray-600">
                    Facilitar a conexão entre profissionais qualificados e clientes,
                    promovendo transparência, segurança e qualidade em cada serviço.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossos Valores</h3>
                  <p className="text-gray-600">
                    Confiança, transparência, qualidade e compromisso com a satisfação
                    de clientes e profissionais.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossa Visão</h3>
                  <p className="text-gray-600">
                    Ser a plataforma líder de conexão de profissionais da construção
                    civil em todo o Brasil.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo simples e transparente para conectar você aos melhores profissionais
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Busca Personalizada',
                  description: 'O cliente busca pelo serviço desejado, filtrando por categoria, localização, preço e avaliações. Nossa plataforma apresenta os profissionais mais adequados.',
                  icon: Users
                },
                {
                  step: '02',
                  title: 'Análise de Perfis',
                  description: 'Compare perfis detalhados com portfólios, avaliações reais de outros clientes, certificações e experiência profissional comprovada.',
                  icon: CheckCircle
                },
                {
                  step: '03',
                  title: 'Contato Direto',
                  description: 'Entre em contato diretamente com o profissional escolhido, solicite orçamentos e tire todas as suas dúvidas antes de contratar.',
                  icon: Shield
                },
                {
                  step: '04',
                  title: 'Serviço Executado',
                  description: 'O profissional realiza o serviço com qualidade e profissionalismo. Após a conclusão, avalie o trabalho e ajude outros clientes.',
                  icon: Star
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Confiança e Segurança
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entenda como garantimos a qualidade dos profissionais cadastrados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Verificação de Identidade',
                description: 'Todos os profissionais passam por verificação de documentos pessoais e comprovante de endereço.',
                badge: 'Pro Verificado'
              },
              {
                icon: Award,
                title: 'Análise de Certificações',
                description: 'Validamos certificados profissionais, cursos técnicos e registros em conselhos quando aplicável.',
                badge: 'Certificado'
              },
              {
                icon: Star,
                title: 'Sistema de Avaliações',
                description: 'Avaliações reais de clientes que contrataram os serviços. Transparência total no histórico.',
                badge: 'Top Rated'
              },
              {
                icon: CheckCircle,
                title: 'Histórico Verificado',
                description: 'Checamos referências profissionais e histórico de trabalhos anteriores.',
                badge: 'Confiável'
              },
              {
                icon: Clock,
                title: 'Monitoramento Contínuo',
                description: 'Acompanhamos constantemente a qualidade através das avaliações e feedbacks dos clientes.',
                badge: 'Monitorado'
              },
              {
                icon: Users,
                title: 'Suporte Dedicado',
                description: 'Nossa equipe está sempre disponível para mediar e resolver qualquer problema.',
                badge: 'Suporte 24/7'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {item.badge}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Números que Falam
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados concretos da nossa plataforma
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: stats.platform.total_professionals.toLocaleString(), label: 'Profissionais' },
              { value: stats.platform.completed_services.toLocaleString(), label: 'Serviços Realizados' },
              { value: `${stats.satisfaction.client_satisfaction}%`, label: 'Satisfação' },
              { value: stats.platform.cities_covered, label: 'Cidades' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais dedicados a conectar você com os melhores serviços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-semibold text-primary-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Faça Parte do TeleObra24h
            </h2>
            <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
              Seja cliente ou profissional, junte-se à nossa comunidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/busca">
                <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                  Encontrar Profissionais
                </Button>
              </Link>
              <Link href="/planos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-600">
                  Cadastrar como Profissional
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

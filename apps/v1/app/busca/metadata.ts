import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar Profissionais da Construção Civil',
  description:
    'Encontre os melhores pedreiros, eletricistas, encanadores, pintores e outros profissionais da construção civil na Região dos Lagos - RJ. Compare perfis, avaliações e preços.',
  keywords: [
    'buscar pedreiro',
    'buscar eletricista',
    'buscar encanador',
    'buscar pintor',
    'profissionais construção região dos lagos',
    'contratar pedreiro são pedro da aldeia',
    'contratar eletricista cabo frio',
    'profissionais verificados',
    'marketplace construção',
  ],
  openGraph: {
    title: 'Buscar Profissionais da Construção Civil | TeleObra24h',
    description:
      'Compare e escolha entre centenas de profissionais qualificados na Região dos Lagos. Avaliações reais e profissionais verificados.',
    url: 'https://teleobra24h.com.br/busca',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-busca-v1.jpg',
        width: 1200,
        height: 630,
        alt: 'Buscar Profissionais da Construção Civil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buscar Profissionais da Construção Civil',
    description:
      'Compare e escolha entre centenas de profissionais qualificados na Região dos Lagos.',
    images: ['https://teleobra24h.com.br/og-image-busca-v1.jpg'],
  },
  alternates: {
    canonical: '/busca',
  },
};

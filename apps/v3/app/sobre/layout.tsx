import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre o TeleObra24h Premium - Nossa Missão e Valores',
  description:
    'Conheça o TeleObra24h Premium, o marketplace líder em conectar profissionais qualificados da construção civil com clientes na Região dos Lagos - RJ. Transparência, segurança e qualidade garantida.',
  keywords: [
    'sobre teleobra24h',
    'marketplace construção',
    'profissionais verificados',
    'construção civil região dos lagos',
    'empresa confiável',
    'plataforma profissionais',
    'missão valores',
  ],
  openGraph: {
    title: 'Sobre o TeleObra24h Premium | Marketplace de Profissionais',
    description:
      'Conectamos profissionais qualificados da construção civil com clientes que buscam serviços de qualidade, confiança e transparência na Região dos Lagos.',
    url: 'https://teleobra24h.com.br/sobre',
    type: 'website',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-sobre-v1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sobre o TeleObra24h Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre o TeleObra24h Premium',
    description:
      'Marketplace líder em conectar profissionais da construção civil com clientes na Região dos Lagos.',
    images: ['https://teleobra24h.com.br/og-image-sobre-v1.jpg'],
  },
  alternates: {
    canonical: '/sobre',
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

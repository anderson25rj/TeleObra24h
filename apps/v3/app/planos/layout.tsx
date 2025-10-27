import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planos para Profissionais - Bronze, Prata e Ouro',
  description:
    'Escolha o melhor plano para impulsionar seu negócio de construção civil. Desde R$ 49,90/mês. Destaque nas buscas, badges especiais, estatísticas avançadas e mais visibilidade na Região dos Lagos.',
  keywords: [
    'planos profissionais',
    'assinatura profissional',
    'plano pedreiro',
    'plano eletricista',
    'destaque marketplace',
    'anunciar serviços',
    'cadastro profissional',
    'visibilidade online',
    'plano bronze prata ouro',
  ],
  openGraph: {
    title: 'Planos para Profissionais | TeleObra24h Premium',
    description:
      'Impulsione seu negócio com nossos planos. Mais visibilidade, mais clientes, mais oportunidades. A partir de R$ 49,90/mês.',
    url: 'https://teleobra24h.com.br/planos',
    type: 'website',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-planos-v1.jpg',
        width: 1200,
        height: 630,
        alt: 'Planos para Profissionais TeleObra24h Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planos para Profissionais',
    description:
      'Impulsione seu negócio com nossos planos. Mais visibilidade, mais clientes. A partir de R$ 49,90/mês.',
    images: ['https://teleobra24h.com.br/og-image-planos-v1.jpg'],
  },
  alternates: {
    canonical: '/planos',
  },
};

export default function PlanosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

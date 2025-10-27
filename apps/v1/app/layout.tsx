import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'TeleObra24h - Encontre Profissionais da Construção Civil na Região dos Lagos',
    template: '%s | TeleObra24h',
  },
  description:
    'Marketplace de profissionais da construção civil na Região dos Lagos - RJ. Encontre pedreiros, eletricistas, encanadores, pintores e mais em São Pedro da Aldeia, Cabo Frio, Arraial do Cabo e região.',
  keywords: [
    'construção civil',
    'pedreiro',
    'eletricista',
    'encanador',
    'pintor',
    'região dos lagos',
    'são pedro da aldeia',
    'cabo frio',
    'arraial do cabo',
    'búzios',
    'iguaba grande',
    'araruama',
    'saquarema',
    'profissionais construção',
    'reforma',
    'obra',
    'manutenção residencial',
    'manutenção comercial',
    'marketplace construção',
    'contratar pedreiro',
    'contratar eletricista',
  ],
  authors: [{ name: 'TeleObra24h' }],
  creator: 'TeleObra24h',
  publisher: 'TeleObra24h',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://teleobra24h.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://teleobra24h.com.br',
    title: 'TeleObra24h - Profissionais da Construção Civil na Região dos Lagos',
    description:
      'Conecte-se com os melhores profissionais da construção civil na Região dos Lagos. Avaliações reais, profissionais verificados e atendimento rápido.',
    siteName: 'TeleObra24h',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-v1.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleObra24h - Marketplace de Profissionais da Construção Civil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleObra24h - Profissionais da Construção Civil',
    description:
      'Encontre os melhores profissionais da construção civil na Região dos Lagos - RJ. Avaliações reais e profissionais verificados.',
    images: ['https://teleobra24h.com.br/og-image-v1.jpg'],
    creator: '@teleobra24h',
    site: '@teleobra24h',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
    },
  },
  other: {
    'geo.region': 'BR-RJ',
    'geo.placename': 'São Pedro da Aldeia',
    'geo.position': '-22.8431;-42.1015',
    'ICBM': '-22.8431, -42.1015',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

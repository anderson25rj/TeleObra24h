import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'TeleObra24h - Profissionais Premium da Construção Civil na Região dos Lagos',
    template: '%s | TeleObra24h Premium',
  },
  description:
    'Marketplace premium de profissionais de elite da construção civil na Região dos Lagos - RJ. Mestres de obras, eletricistas especializados, encanadores certificados e arquitetos. Qualidade superior, garantia estendida e atendimento VIP.',
  keywords: [
    'construção civil premium',
    'profissionais elite construção',
    'mestre de obras região dos lagos',
    'eletricista certificado',
    'encanador especializado',
    'arquiteto são pedro da aldeia',
    'reforma de luxo',
    'construção premium rj',
    'profissionais top construção',
    'serviços vip construção',
    'garantia estendida obra',
    'atendimento premium',
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
    title: 'TeleObra24h Premium - Profissionais de Elite da Construção',
    description:
      'Acesso exclusivo aos melhores profissionais da construção civil na Região dos Lagos. Qualidade superior, garantia estendida e atendimento VIP personalizado.',
    siteName: 'TeleObra24h Premium',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-v3-premium.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleObra24h Premium - Profissionais de Elite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleObra24h Premium - Profissionais de Elite',
    description:
      'Marketplace premium de profissionais de elite da construção civil. Qualidade superior e atendimento VIP na Região dos Lagos.',
    images: ['https://teleobra24h.com.br/og-image-v3-premium.jpg'],
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
    'geo.placename': 'Região dos Lagos',
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

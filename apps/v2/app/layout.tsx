import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from '@/components/StructuredData';
import { MarcioDemoWidget } from '@teleobra24h/ui';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'TeleObra24h - Conecte-se com Profissionais da Construção na Região dos Lagos',
    template: '%s | TeleObra24h',
  },
  description:
    'Plataforma moderna para encontrar profissionais da construção civil na Região dos Lagos - RJ. Pedreiros, eletricistas, encanadores, pintores e marceneiros verificados. Compare avaliações e escolha o melhor.',
  keywords: [
    'construção civil',
    'profissionais construção',
    'pedreiro região dos lagos',
    'eletricista cabo frio',
    'encanador arraial do cabo',
    'pintor búzios',
    'marceneiro são pedro da aldeia',
    'reforma',
    'obra',
    'manutenção',
    'marketplace construção civil',
    'profissionais verificados rj',
    'contratar profissional construção',
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
    title: 'TeleObra24h - Profissionais da Construção na Região dos Lagos',
    description:
      'Plataforma moderna para conectar você com profissionais qualificados da construção civil. Avaliações verificadas, resposta rápida e qualidade garantida.',
    siteName: 'TeleObra24h',
    images: [
      {
        url: 'https://teleobra24h.com.br/og-image-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'TeleObra24h - Marketplace Moderno de Construção Civil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeleObra24h - Profissionais da Construção',
    description:
      'Plataforma moderna para encontrar profissionais da construção civil na Região dos Lagos - RJ. Avaliações verificadas e resposta rápida.',
    images: ['https://teleobra24h.com.br/og-image-v2.jpg'],
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
    'geo.placename': 'Região dos Lagos - RJ',
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
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;

                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    if (systemTheme === 'dark') {
                      root.classList.add('dark');
                    }
                  } else if (theme === 'dark') {
                    root.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
        <MarcioDemoWidget
          primaryColor="#764ba2"
          accentColor="#F97316"
          greeting="E aí! 👋 Márcio aqui! Em breve vou te ajudar a encontrar o profissional perfeito. Aguarde as novidades! ⚡"
          version="v2"
        />
      </body>
    </html>
  );
}

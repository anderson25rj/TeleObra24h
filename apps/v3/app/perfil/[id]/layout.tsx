import { Metadata } from 'next';
import { professionals } from '@teleobra24h/mocks';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const professional = professionals.find((p) => p.id === id);

  if (!professional) {
    return {
      title: 'Profissional não encontrado',
      description: 'O profissional que você está procurando não foi encontrado.',
    };
  }

  return {
    title: `${professional.name} - ${professional.category}`,
    description: `${professional.bio.substring(0, 155)}... Avaliação: ${professional.rating.toFixed(1)} estrelas. ${professional.reviews_count} avaliações. ${professional.location.city}, ${professional.location.state}.`,
    keywords: [
      professional.category.toLowerCase(),
      ...professional.specialties.map((s) => s.toLowerCase()),
      `${professional.category.toLowerCase()} ${professional.location.city.toLowerCase()}`,
      professional.location.city.toLowerCase(),
      'profissional verificado',
      'avaliações reais',
    ],
    openGraph: {
      title: `${professional.name} - ${professional.category} | TeleObra24h`,
      description: `${professional.bio.substring(0, 200)}... Avaliação: ${professional.rating.toFixed(1)}/5.0 (${professional.reviews_count} avaliações). ${professional.years_experience} anos de experiência.`,
      url: `https://teleobra24h.com.br/perfil/${id}`,
      type: 'profile',
      images: [
        {
          url: `https://teleobra24h.com.br/professionals/${id}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Perfil de ${professional.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${professional.name} - ${professional.category}`,
      description: `Avaliação: ${professional.rating.toFixed(1)}/5.0. ${professional.years_experience} anos de experiência em ${professional.location.city}.`,
      images: [`https://teleobra24h.com.br/professionals/${id}/og-image.jpg`],
    },
    alternates: {
      canonical: `/perfil/${id}`,
    },
  };
}

export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

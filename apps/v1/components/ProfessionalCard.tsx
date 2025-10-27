import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent } from '@teleobra24h/ui';
import { MapPin, Star, Clock } from 'lucide-react';

interface Professional {
  id: string;
  name: string;
  category: string;
  location: {
    city: string;
    state: string;
  };
  rating: number;
  reviews_count: number;
  verified: boolean;
  badges: string[];
  hourly_rate?: number;
  response_time: string;
}

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const initials = professional.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Link href={`/perfil/${professional.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 h-full cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${professional.name}`} alt={professional.name} />
              <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 truncate">
                    {professional.name}
                  </h3>
                  <p className="text-sm text-gray-600">{professional.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <span className="font-semibold text-gray-900">{professional.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">
                  ({professional.reviews_count} avaliações)
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {professional.location.city}, {professional.location.state}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {professional.verified && (
                  <Badge variant="default" className="bg-secondary-500 hover:bg-secondary-600 text-xs">
                    Verificado
                  </Badge>
                )}
                {professional.badges.slice(0, 2).map((badge, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Responde em {professional.response_time}</span>
                </div>
                {professional.hourly_rate && (
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-600">
                      R$ {professional.hourly_rate}
                    </p>
                    <p className="text-xs text-gray-500">por hora</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

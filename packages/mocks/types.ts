// Type definitions for TeleObra24h Mock Data

export interface Location {
  city: string;
  state: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PortfolioItem {
  type: 'image' | 'video';
  url: string;
  description: string;
}

export type SubscriptionPlan = 'bronze' | 'prata' | 'ouro';

export type ProfessionalCategory =
  | 'Pedreiro'
  | 'Eletricista'
  | 'Encanador'
  | 'Pintor'
  | 'Marceneiro'
  | 'Mestre de Obras'
  | 'Gesseiro'
  | 'Serralheiro';

export interface Professional {
  id: string;
  name: string;
  category: ProfessionalCategory;
  location: Location;
  rating: number;
  reviews_count: number;
  verified: boolean;
  badges: string[];
  bio: string;
  hourly_rate: number;
  daily_rate: number;
  subscription_plan: SubscriptionPlan;
  years_experience: number;
  completed_jobs: number;
  response_time: string;
  availability: string;
  portfolio: PortfolioItem[];
  specialties: string[];
  certifications?: string[];
  phone: string;
  whatsapp: string;
  member_since: string;
}

export interface Review {
  id: string;
  professional_id: string;
  client_name: string;
  rating: number;
  comment: string;
  date: string;
  service_type: string;
  verified_purchase: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
  unit?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  typical_duration: string;
  price_range: PriceRange;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  average_price_range: PriceRange;
  subcategories: Subcategory[];
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Cliente' | 'Profissional';
  location: string;
  photo: string;
  quote: string;
  rating: number;
  service_used?: string;
  professional_category?: ProfessionalCategory;
  date: string;
}

export interface CityStats {
  name: string;
  professionals: number;
  completed_services: number;
}

export interface RegionStats {
  total_professionals: number;
  cities: CityStats[];
}

export interface CategoryRequest {
  category: string;
  requests: number;
  percentage: number;
}

export interface SatisfactionMetrics {
  client_satisfaction: number;
  would_recommend: number;
  return_rate: number;
  average_rating: number;
  five_star_reviews: number;
  four_star_reviews: number;
  three_star_reviews: number;
  two_star_reviews: number;
  one_star_reviews: number;
}

export interface ResponseTimes {
  under_1_hour: number;
  '1_to_3_hours': number;
  '3_to_6_hours': number;
  '6_to_12_hours': number;
  over_12_hours: number;
}

export interface ServiceCompletion {
  on_time: number;
  early: number;
  delayed_acceptable: number;
  delayed_significant: number;
}

export interface Growth {
  monthly_new_professionals: number;
  monthly_new_clients: number;
  monthly_growth_rate: number;
  year_over_year_growth: number;
}

export interface EmergencyServices {
  total_emergency_calls: number;
  average_response_time: string;
  '24h_availability': number;
  emergency_satisfaction: number;
}

export interface PaymentMethods {
  pix: number;
  credit_card: number;
  debit_card: number;
  cash: number;
}

export interface Financial {
  total_transactions: number;
  average_service_value: number;
  total_platform_volume: number;
  payment_methods: PaymentMethods;
}

export interface SubscriptionPlanStats {
  count: number;
  percentage: number;
}

export interface SubscriptionPlans {
  bronze: SubscriptionPlanStats;
  prata: SubscriptionPlanStats;
  ouro: SubscriptionPlanStats;
}

export interface Certifications {
  verified_professionals: number;
  with_certifications: number;
  nr10_certified: number;
  technical_diploma: number;
  professional_license: number;
}

export interface PlatformStats {
  platform: {
    total_professionals: number;
    active_professionals: number;
    verified_professionals: number;
    total_clients: number;
    completed_services: number;
    ongoing_services: number;
    cities_covered: number;
    average_response_time: string;
    platform_rating: number;
    total_reviews: number;
  };
  region_lagos: RegionStats;
  categories: {
    most_requested: CategoryRequest[];
  };
  satisfaction: SatisfactionMetrics;
  response_times: ResponseTimes;
  service_completion: ServiceCompletion;
  growth: Growth;
  emergency_services: EmergencyServices;
  financial: Financial;
  subscription_plans: SubscriptionPlans;
  certifications: Certifications;
  last_updated: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  order: number;
  helpful_count: number;
}

// Type guards
export function isProfessional(obj: any): obj is Professional {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.rating === 'number' &&
    typeof obj.verified === 'boolean'
  );
}

export function isReview(obj: any): obj is Review {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.professional_id === 'string' &&
    typeof obj.rating === 'number' &&
    typeof obj.comment === 'string'
  );
}

// Utility types
export type ProfessionalWithReviews = Professional & {
  reviews: Review[];
};

export type FilterOptions = {
  category?: ProfessionalCategory;
  city?: string;
  minRating?: number;
  maxRate?: number;
  verified?: boolean;
  availability?: string;
  badges?: string[];
};

export type SortOptions =
  | 'rating_desc'
  | 'rating_asc'
  | 'price_asc'
  | 'price_desc'
  | 'reviews_desc'
  | 'experience_desc';

// Mock data exports
export type {
  Professional as ProfessionalData,
  Review as ReviewData,
  ServiceCategory as ServiceCategoryData,
  Testimonial as TestimonialData,
  PlatformStats as StatsData,
  FAQ as FAQData
};

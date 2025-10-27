// Main entry point for TeleObra24h mock data
import professionals from './professionals.json' assert { type: 'json' };
import reviews from './reviews.json' assert { type: 'json' };
import services from './services.json' assert { type: 'json' };
import testimonials from './testimonials.json' assert { type: 'json' };
import stats from './stats.json' assert { type: 'json' };
import faq from './faq.json' assert { type: 'json' };

export { professionals, reviews, services, testimonials, stats, faq };

// Utility functions
export function getProfessionalById(id) {
  return professionals.find(p => p.id === id);
}

export function getReviewsByProfessionalId(professionalId) {
  return reviews.filter(r => r.professional_id === professionalId);
}

export function getProfessionalsByCategory(category) {
  return professionals.filter(p => p.category === category);
}

export function getProfessionalsByCity(city) {
  return professionals.filter(p => p.location.city === city);
}

export function getTopRatedProfessionals(limit = 5) {
  return [...professionals]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}

export function getPopularServices() {
  return services.filter(s => s.popular);
}

export function searchProfessionals(filters = {}) {
  let results = [...professionals];

  if (filters.category) {
    results = results.filter(p => p.category === filters.category);
  }

  if (filters.city) {
    results = results.filter(p => p.location.city === filters.city);
  }

  if (filters.minRating) {
    results = results.filter(p => p.rating >= filters.minRating);
  }

  if (filters.maxRate) {
    results = results.filter(p => p.daily_rate <= filters.maxRate);
  }

  if (filters.verified !== undefined) {
    results = results.filter(p => p.verified === filters.verified);
  }

  if (filters.availability) {
    results = results.filter(p => p.availability === filters.availability);
  }

  if (filters.badges && filters.badges.length > 0) {
    results = results.filter(p =>
      filters.badges.some(badge => p.badges.includes(badge))
    );
  }

  return results;
}

export function sortProfessionals(professionals, sortBy = 'rating_desc') {
  const sorted = [...professionals];

  switch (sortBy) {
    case 'rating_desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'rating_asc':
      return sorted.sort((a, b) => a.rating - b.rating);
    case 'price_asc':
      return sorted.sort((a, b) => a.daily_rate - b.daily_rate);
    case 'price_desc':
      return sorted.sort((a, b) => b.daily_rate - a.daily_rate);
    case 'reviews_desc':
      return sorted.sort((a, b) => b.reviews_count - a.reviews_count);
    case 'experience_desc':
      return sorted.sort((a, b) => b.years_experience - a.years_experience);
    default:
      return sorted;
  }
}

export function getFAQByCategory(category) {
  return faq.filter(f => f.category === category);
}

export function getTestimonialsByRole(role) {
  return testimonials.filter(t => t.role === role);
}

// Statistics helpers
export function getCategoryStats() {
  return stats.categories.most_requested;
}

export function getRegionStats() {
  return stats.region_lagos;
}

export function getPlatformSummary() {
  return {
    professionals: stats.platform.total_professionals,
    services: stats.platform.completed_services,
    satisfaction: stats.satisfaction.client_satisfaction,
    cities: stats.platform.cities_covered,
    rating: stats.platform.platform_rating
  };
}

export default {
  professionals,
  reviews,
  services,
  testimonials,
  stats,
  faq,
  // Utility functions
  getProfessionalById,
  getReviewsByProfessionalId,
  getProfessionalsByCategory,
  getProfessionalsByCity,
  getTopRatedProfessionals,
  getServiceBySlug,
  getPopularServices,
  searchProfessionals,
  sortProfessionals,
  getFAQByCategory,
  getTestimonialsByRole,
  getCategoryStats,
  getRegionStats,
  getPlatformSummary
};

# TeleObra24h Mock Data

Comprehensive mock data package for the TeleObra24h construction marketplace platform.

## Overview

This package provides realistic Brazilian Portuguese mock data for all aspects of the TeleObra24h platform, including professionals, reviews, services, testimonials, statistics, and FAQs.

## Installation

```bash
npm install @teleobra24h/mocks
```

## Data Files

### professionals.json
12 mock construction professionals from Região dos Lagos - RJ (RJ):
- 3 Pedreiros (Masons)
- 3 Eletricistas (Electricians)
- 2 Encanadores (Plumbers)
- 2 Pintores (Painters)
- 2 Marceneiros (Carpenters)

Each professional includes:
- Complete profile information
- Location with coordinates
- Ratings and reviews count
- Verification status and badges
- Portfolio items (images/videos)
- Pricing (hourly and daily rates)
- Subscription plan (bronze/prata/ouro)
- Contact information
- Specialties and certifications

### reviews.json
38 authentic mock reviews in Portuguese:
- Linked to professionals
- Ratings from 4-5 stars
- Realistic comments (positive and constructive)
- Service types
- Verified purchase status
- Dates

### services.json
8 main service categories with 42 subcategories:
- Alvenaria (Masonry)
- Elétrica (Electrical)
- Hidráulica (Plumbing)
- Pintura (Painting)
- Marcenaria (Carpentry)
- Reparos Gerais (General Repairs)
- Reformas (Renovations)
- Emergências (Emergencies)

Each includes:
- Icons and descriptions
- Price ranges
- Typical durations
- Subcategory details

### testimonials.json
6 platform testimonials:
- 3 from clients
- 3 from professionals
- Authentic quotes in Portuguese
- Ratings and service details

### stats.json
Comprehensive platform statistics:
- Platform overview (1,247 professionals, 8,934 completed services)
- Region-specific data (Região dos Lagos - RJ)
- Category breakdown
- Satisfaction metrics (96.8% client satisfaction)
- Response times
- Financial data
- Growth metrics
- Emergency services stats
- Subscription distribution
- Certification data

### faq.json
10 common questions and answers:
- General platform info
- Client guidelines
- Payment information
- Emergency services
- Professional registration
- Guarantees
- Support contact

### types.ts
Complete TypeScript type definitions:
- All data structures
- Type guards
- Utility types
- Filter and sort options

## Usage

### Basic Import

```javascript
import { professionals, reviews, services, testimonials, stats, faq } from '@teleobra24h/mocks';

// Use individual data files
console.log(professionals); // Array of 12 professionals
console.log(reviews); // Array of 38 reviews
console.log(services); // Array of 8 service categories
```

### Using Utility Functions

```javascript
import mockData from '@teleobra24h/mocks';

// Get professional by ID
const professional = mockData.getProfessionalById('prof-001');

// Get reviews for a professional
const professionalReviews = mockData.getReviewsByProfessionalId('prof-001');

// Get professionals by category
const electricians = mockData.getProfessionalsByCategory('Eletricista');

// Get professionals by city
const cabofrioPros = mockData.getProfessionalsByCity('Cabo Frio');

// Get top rated professionals
const topPros = mockData.getTopRatedProfessionals(5);

// Search with filters
const filtered = mockData.searchProfessionals({
  category: 'Pedreiro',
  city: 'São Pedro da Aldeia',
  minRating: 4.5,
  verified: true
});

// Sort professionals
const sorted = mockData.sortProfessionals(professionals, 'rating_desc');

// Get service by slug
const service = mockData.getServiceBySlug('eletrica');

// Get popular services
const popularServices = mockData.getPopularServices();

// Get FAQ by category
const clientFAQ = mockData.getFAQByCategory('Para Clientes');

// Get testimonials by role
const clientTestimonials = mockData.getTestimonialsByRole('Cliente');

// Get platform summary
const summary = mockData.getPlatformSummary();
```

### TypeScript Support

```typescript
import type { Professional, Review, ServiceCategory, PlatformStats } from '@teleobra24h/mocks/types';
import { isProfessional, isReview } from '@teleobra24h/mocks/types';

const prof: Professional = {
  // ... professional data
};

// Type guards
if (isProfessional(someObject)) {
  // TypeScript knows this is a Professional
  console.log(someObject.name);
}
```

## Data Statistics

### Professionals
- **Total**: 12 professionals
- **Categories**: 5 different categories
- **Locations**: 4 cities in Região dos Lagos
- **Verification**: 100% verified
- **Plans**: Bronze (1), Prata (5), Ouro (6)
- **Average Rating**: 4.77/5.0
- **Total Portfolio Items**: 29 items

### Reviews
- **Total**: 38 reviews
- **Average Rating**: 4.84/5.0
- **5-star reviews**: 31 (81.6%)
- **4-star reviews**: 7 (18.4%)
- **Verification**: 100% verified purchases

### Services
- **Main Categories**: 8
- **Subcategories**: 42
- **Popular Categories**: 6 marked as popular
- **Price Ranges**: All included with min/max

### Platform Stats (Mocked)
- **Total Professionals**: 1,247
- **Completed Services**: 8,934
- **Client Satisfaction**: 96.8%
- **Cities Covered**: 12
- **Platform Rating**: 4.8/5.0
- **Total Reviews**: 6,742

## Cities Covered

All professionals are from Região dos Lagos - RJ, RJ:
- São Pedro da Aldeia
- Cabo Frio
- Búzios
- Araruama

## Professional Categories

- Pedreiro (Mason)
- Eletricista (Electrician)
- Encanador (Plumber)
- Pintor (Painter)
- Marceneiro (Carpenter)

## Subscription Plans

- **Bronze**: Basic visibility
- **Prata**: Enhanced visibility with extra badges
- **Ouro**: Maximum visibility, priority placement

## Badges Available

- Pro Verificado (Verified Pro)
- Top Rated
- 5 Estrelas (5 Stars)
- Resposta Rápida (Quick Response)
- Confiável (Reliable)
- Especialista (Specialist)
- Emergência 24h (24h Emergency)

## Filter Options

Search professionals by:
- Category
- City
- Minimum rating
- Maximum daily rate
- Verification status
- Availability
- Badges

## Sort Options

- rating_desc (Rating: High to Low)
- rating_asc (Rating: Low to High)
- price_asc (Price: Low to High)
- price_desc (Price: High to Low)
- reviews_desc (Most Reviews)
- experience_desc (Most Experience)

## Development

### Validation

```bash
npm run validate
```

## License

MIT

## Author

TeleObra24h Team

---

**Note**: All data is fictional and created for development purposes. Names, locations, and reviews are realistic but not based on real people or services.

// Validation script for TeleObra24h mock data
import professionals from './professionals.json' assert { type: 'json' };
import reviews from './reviews.json' assert { type: 'json' };
import services from './services.json' assert { type: 'json' };
import testimonials from './testimonials.json' assert { type: 'json' };
import stats from './stats.json' assert { type: 'json' };
import faq from './faq.json' assert { type: 'json' };

console.log('🔍 Validating TeleObra24h Mock Data...\n');

// Validate professionals
console.log('✅ Professionals:');
console.log(`   - Total: ${professionals.length}`);
console.log(`   - Categories: ${[...new Set(professionals.map(p => p.category))].join(', ')}`);
console.log(`   - Cities: ${[...new Set(professionals.map(p => p.location.city))].join(', ')}`);
console.log(`   - Verified: ${professionals.filter(p => p.verified).length}/${professionals.length}`);
console.log(`   - Average rating: ${(professionals.reduce((sum, p) => sum + p.rating, 0) / professionals.length).toFixed(2)}`);
console.log(`   - Total portfolio items: ${professionals.reduce((sum, p) => sum + p.portfolio.length, 0)}`);

// Validate reviews
console.log('\n✅ Reviews:');
console.log(`   - Total: ${reviews.length}`);
console.log(`   - Average rating: ${(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2)}`);
console.log(`   - Verified purchases: ${reviews.filter(r => r.verified_purchase).length}/${reviews.length}`);
const ratingDist = [1, 2, 3, 4, 5].map(star => ({
  star,
  count: reviews.filter(r => r.rating === star).length
}));
console.log(`   - Distribution: ${ratingDist.map(d => `${d.star}⭐: ${d.count}`).join(', ')}`);

// Validate services
console.log('\n✅ Services:');
console.log(`   - Main categories: ${services.length}`);
console.log(`   - Total subcategories: ${services.reduce((sum, s) => sum + s.subcategories.length, 0)}`);
console.log(`   - Popular categories: ${services.filter(s => s.popular).length}`);
console.log(`   - Categories: ${services.map(s => s.name).join(', ')}`);

// Validate testimonials
console.log('\n✅ Testimonials:');
console.log(`   - Total: ${testimonials.length}`);
console.log(`   - Clients: ${testimonials.filter(t => t.role === 'Cliente').length}`);
console.log(`   - Professionals: ${testimonials.filter(t => t.role === 'Profissional').length}`);
console.log(`   - Average rating: ${(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(2)}`);

// Validate stats
console.log('\n✅ Platform Stats:');
console.log(`   - Total professionals: ${stats.platform.total_professionals.toLocaleString()}`);
console.log(`   - Completed services: ${stats.platform.completed_services.toLocaleString()}`);
console.log(`   - Client satisfaction: ${stats.satisfaction.client_satisfaction}%`);
console.log(`   - Cities covered: ${stats.platform.cities_covered}`);
console.log(`   - Platform rating: ${stats.platform.platform_rating}/5.0`);

// Validate FAQ
console.log('\n✅ FAQ:');
console.log(`   - Total questions: ${faq.length}`);
const faqCategories = [...new Set(faq.map(f => f.category))];
console.log(`   - Categories: ${faqCategories.join(', ')}`);
faqCategories.forEach(cat => {
  console.log(`     - ${cat}: ${faq.filter(f => f.category === cat).length} questions`);
});

// Cross-reference validation
console.log('\n🔗 Cross-Reference Validation:');
const professionalIds = new Set(professionals.map(p => p.id));
const reviewProfIds = new Set(reviews.map(r => r.professional_id));
const unmatchedReviews = [...reviewProfIds].filter(id => !professionalIds.has(id));
console.log(`   - All reviews reference valid professionals: ${unmatchedReviews.length === 0 ? '✅' : '❌'}`);
if (unmatchedReviews.length > 0) {
  console.log(`     Unmatched IDs: ${unmatchedReviews.join(', ')}`);
}

// Check for duplicate IDs
const checkDuplicates = (arr, field, name) => {
  const ids = arr.map(item => item[field]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  console.log(`   - No duplicate ${name} IDs: ${duplicates.length === 0 ? '✅' : '❌'}`);
  if (duplicates.length > 0) {
    console.log(`     Duplicates: ${[...new Set(duplicates)].join(', ')}`);
  }
};

checkDuplicates(professionals, 'id', 'professional');
checkDuplicates(reviews, 'id', 'review');
checkDuplicates(services, 'id', 'service');
checkDuplicates(testimonials, 'id', 'testimonial');
checkDuplicates(faq, 'id', 'FAQ');

console.log('\n✨ Validation complete!\n');

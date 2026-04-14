import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { images } from '../../lib/constants/images';
import { CornerAccent } from '../shared/Decorative';

const testimonials = [
  {
    quote: 'I went from dreading Monday mornings to actually looking forward to the community check-ins. This is the peer support I needed for years.',
    author: 'Dr. Amina K.',
    role: 'General Practitioner, 8 yrs',
    avatar: images.avatar1,
  },
  {
    quote: 'My mentor helped me land a public health fellowship I didn\'t think I qualified for. That one conversation changed my whole trajectory.',
    author: 'James T.',
    role: 'Pharmacist, Early Career',
    avatar: images.avatar2,
  },
  {
    quote: 'The scholarship database alone was worth signing up. Found three opportunities I\'d never heard of, and got one.',
    author: 'Sarah M.',
    role: 'Final-Year Medical Student',
    avatar: images.avatar3,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding position-relative overflow-hidden">
      <CornerAccent position="top-right" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="section-header">
          <span className="section-label">Member Stories</span>
          <h2>Don't Take Our Word for It</h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={t.author}>
              <motion.div
                className="card-glow h-100 p-4 d-flex flex-column"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="d-flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={15} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>

                <p className="flex-grow-1 mb-4" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                  "{t.quote}"
                </p>

                <div className="d-flex align-items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.author} className="avatar avatar-lg" loading="lazy" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.9375rem' }}>{t.author}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-500)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

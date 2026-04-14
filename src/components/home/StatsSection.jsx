import { motion } from 'framer-motion';
import { Users, UserCheck, Calendar, Building2 } from 'lucide-react';
import { AnimatedCounter } from '../shared/Decorative';

const stats = [
  { icon: Users, number: '1,000+', label: 'Healthcare Professionals', color: '#fff' },
  { icon: UserCheck, number: '50+', label: 'Mentors Available', color: 'var(--color-accent)' },
  { icon: Calendar, number: '100+', label: 'Events Hosted', color: '#fff' },
  { icon: Building2, number: '20+', label: 'Partner Organizations', color: 'var(--color-accent)' },
];

export default function StatsSection() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        padding: '5rem 0',
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-4">
          {stats.map((stat, i) => (
            <div className="col-6 col-md-3" key={stat.label}>
              <motion.div
                className="stat-visual"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.12)',
                  }}
                >
                  <stat.icon size={26} color={stat.color} />
                </div>
                <div className="stat-number" style={{ color: '#fff' }}>
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="stat-divider" />
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Building2, Award, Globe, Stethoscope, GraduationCap, HeartPulse } from 'lucide-react';

const partners = [
  { name: 'Regional Health Authority', icon: Stethoscope },
  { name: 'Anderson Prep. Academy', icon: Building2 },
  { name: 'National Nurses Association', icon: HeartPulse },
  { name: 'Global Health Foundation', icon: Globe },
  { name: 'MedEd International', icon: GraduationCap },
  { name: 'Wellness Outreach Alliance', icon: Award },
];

export default function PartnersSection() {
  return (
    <section className="section-padding bg-light-custom">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Partners</span>
          <h2>Who We Work With</h2>
        </div>

        <div className="row g-3 g-lg-4 justify-content-center">
          {partners.map((p, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={p.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="d-flex flex-column align-items-center gap-2 p-3 p-lg-4 text-center h-100"
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-neutral-200)',
                  cursor: 'default',
                }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary-light)' }}
                >
                  <p.icon size={24} color="var(--color-primary)" />
                </div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-neutral-600)', lineHeight: 1.3 }}>
                  {p.name}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

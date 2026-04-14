import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, HeartHandshake } from 'lucide-react';
import { images } from '../../lib/constants/images';
import { DotPattern } from '../shared/Decorative';

const pillars = [
  { icon: HeartHandshake, title: 'Peer Support', text: 'A safe space built by healthcare workers, for healthcare workers.', color: 'primary' },
  { icon: Lightbulb, title: 'Real Growth', text: 'Mentorship, events, and opportunities that actually move your career forward.', color: 'accent' },
  { icon: ShieldCheck, title: 'Wellbeing First', text: 'Burnout prevention and mental health tools baked into everything we do.', color: 'primary' },
];

export default function MissionSection() {
  return (
    <section className="section-padding bg-light-custom position-relative overflow-hidden">
      <DotPattern color="rgba(27,95,168,0.05)" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Mobile: stacked header + image + pillars.  Desktop: side-by-side. */}
        <div className="row align-items-center g-4 g-lg-5">

          {/* Image — on mobile appears after the heading via order classes */}
          <div className="col-lg-5 order-2 order-lg-1">
            {/* Desktop: offset stack image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="d-none d-lg-block img-stack"
            >
              <img
                src={images.mission}
                alt="Healthcare team collaborating"
                loading="lazy"
              />
            </motion.div>

            {/* Mobile: clean rounded image, no offset stack */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="d-lg-none position-relative"
            >
              <img
                src={images.mission}
                alt="Healthcare team collaborating"
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'block',
                }}
              />
              {/* Gradient overlay on mobile for polish */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'var(--radius-xl)',
                  background: 'linear-gradient(to top, rgba(27,95,168,0.15) 0%, transparent 40%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="col-lg-7 order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Mobile: centered header.  Desktop: left-aligned. */}
              <div className="text-center text-lg-start">
                <span className="section-label">Why We Exist</span>
                <h2
                  className="mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.25rem)', fontWeight: 800 }}
                >
                  The support system healthcare forgot to build.
                </h2>
                <p
                  className="mb-4 mx-auto mx-lg-0"
                  style={{ color: 'var(--color-neutral-600)', lineHeight: 1.8, maxWidth: 520 }}
                >
                  Burnout, isolation, fragmented resources — the people who care for
                  everyone else rarely get the same in return. We built HPS Network
                  to change that.
                </p>
              </div>

              {/* Pillars — cards on mobile, inline list on desktop */}
              <div className="d-none d-lg-flex flex-column gap-3">
                {pillars.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
                    className="d-flex align-items-start gap-3"
                  >
                    <div className={`icon-circle icon-circle-${item.color} flex-shrink-0`} style={{ width: 44, height: 44 }}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{item.title}</h6>
                      <p className="mb-0" style={{ color: 'var(--color-neutral-600)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile pillar cards — full-width, after image */}
          <div className="col-12 order-3 d-lg-none">
            <div className="row g-3">
              {pillars.map((item, i) => (
                <div className="col-12" key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.1 }}
                    className="card-glow p-3 d-flex align-items-center gap-3"
                  >
                    <div
                      className={`icon-badge icon-badge-${item.color} flex-shrink-0`}
                      style={{ width: 52, height: 52 }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ fontSize: '0.9375rem' }}>
                        {item.title}
                      </h6>
                      <p
                        className="mb-0"
                        style={{ color: 'var(--color-neutral-600)', fontSize: '0.8125rem', lineHeight: 1.5 }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

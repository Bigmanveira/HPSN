import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FloatingShapes, GradientBlob } from './Decorative';

export default function CTABanner({
  title = 'Ready to Join Our Community?',
  description = 'Connect with healthcare professionals, access mentorship, and grow your career with the support you deserve.',
  primaryLabel = 'Join Us Today',
  primaryLink = '/signup',
  secondaryLabel = 'Learn More',
  secondaryLink = '/about',
}) {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          className="cta-banner position-relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <GradientBlob color1="#6DB33F" color2="#fff" size={350} top="-40%" right="-10%" opacity={0.1} />
          <GradientBlob color1="#fff" color2="#6DB33F" size={250} bottom="-30%" left="-8%" opacity={0.06} delay={2} />
          <FloatingShapes count={6} color="rgba(255,255,255,0.4)" />

          <div className="position-relative" style={{ zIndex: 2 }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to={primaryLink} className="btn-white btn-lg">
                {primaryLabel} <ArrowRight size={18} />
              </Link>
              {secondaryLabel && (
                <Link
                  to={secondaryLink}
                  className="btn-lg d-inline-flex align-items-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    textDecoration: 'none',
                  }}
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

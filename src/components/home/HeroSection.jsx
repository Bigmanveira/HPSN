import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { images } from '../../lib/constants/images';
import { GradientBlob, FloatingShapes } from '../shared/Decorative';

export default function HeroSection() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-900) 100%)',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <GradientBlob color1="#6DB33F" color2="#1B5FA8" size={500} top="-10%" right="-8%" opacity={0.1} />
      <GradientBlob color1="#fff" color2="#6DB33F" size={350} bottom="-5%" left="-5%" opacity={0.06} delay={3} />
      <FloatingShapes count={8} color="rgba(255,255,255,0.5)" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-full)',
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="pulse-dot d-inline-block" style={{
                  width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)',
                }} />
                Nonprofit Healthcare Community
              </motion.span>

              <h1
                className="mb-4"
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.12,
                }}
              >
                Your Career. Your Wellbeing.{' '}
                <span style={{ color: 'var(--color-accent)' }}>Your Community.</span>
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: '480px',
                  lineHeight: 1.7,
                }}
              >
                Mentorship, peer connection, and real resources for healthcare
                professionals at every career stage.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/signup" className="btn-white btn-lg">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  to="/programs"
                  className="btn-lg d-inline-flex align-items-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    textDecoration: 'none',
                  }}
                >
                  <Play size={16} fill="#fff" /> See How It Works
                </Link>
              </div>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="d-flex align-items-center gap-3"
              >
                <div className="d-flex" style={{ marginLeft: '4px' }}>
                  {[images.avatar1, images.avatar2, images.avatar3].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="avatar avatar-md"
                      style={{ marginLeft: i > 0 ? '-12px' : 0, zIndex: 3 - i }}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                  Join <strong style={{ color: '#fff' }}>1,000+</strong> healthcare
                  <br />professionals in the network
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero image — clean, no duplicate stat cards */}
          <div className="col-lg-6 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="position-relative"
            >
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src={images.heroDoctor}
                  alt="Healthcare professionals collaborating"
                  style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                  loading="eager"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(27,95,168,0.35) 0%, transparent 50%)',
                  borderRadius: '1.5rem',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Single floating card — social proof, not stat duplication */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="glass-card position-absolute d-flex align-items-center gap-3 p-3"
                style={{ bottom: -16, left: -16, zIndex: 3 }}
              >
                <div className="d-flex" style={{ marginLeft: 2 }}>
                  {[images.avatar3, images.avatar1].map((src, i) => (
                    <img key={i} src={src} alt="" className="avatar avatar-sm" style={{ marginLeft: i > 0 ? '-8px' : 0 }} loading="lazy" />
                  ))}
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: '0.875rem' }}>Active right now</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>Members online today</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

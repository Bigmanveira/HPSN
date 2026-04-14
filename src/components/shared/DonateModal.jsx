import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ExternalLink, Sparkles } from 'lucide-react';

// Replace with your GoFundMe URL when ready
const DONATE_URL = '#';

export default function DonateModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 20, 40, 0.55)',
              backdropFilter: 'blur(6px)',
              zIndex: 2000,
            }}
          />

          {/* Centering wrapper */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Donate to HPS Network"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: 400,
                pointerEvents: 'auto',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 32px 64px -16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {/* Header */}
              <div
                className="position-relative text-center"
                style={{
                  background: 'linear-gradient(160deg, var(--color-primary) 0%, #0f3d73 100%)',
                  padding: '2.25rem 1.5rem 1.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative blobs */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: '-40%', right: '-20%',
                  width: 220, height: 220, borderRadius: '50%',
                  background: 'rgba(109,179,63,0.15)', filter: 'blur(30px)',
                  pointerEvents: 'none',
                }} />
                <div aria-hidden="true" style={{
                  position: 'absolute', bottom: '-30%', left: '-15%',
                  width: 160, height: 160, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)', filter: 'blur(20px)',
                  pointerEvents: 'none',
                }} />

                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(255,255,255,0.12)',
                    border: 'none', borderRadius: '0.5rem',
                    width: 32, height: 32, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                >
                  <X size={16} color="#fff" />
                </button>

                {/* Heart icon with ring */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.12)',
                    border: '2px solid rgba(255,255,255,0.15)',
                    position: 'relative', zIndex: 1,
                  }}
                >
                  <Heart size={26} color="#fff" fill="#fff" />
                </motion.div>

                <h3 className="fw-bold mb-1" style={{ color: '#fff', fontSize: '1.25rem', position: 'relative', zIndex: 1 }}>
                  Support Our Mission
                </h3>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', position: 'relative', zIndex: 1 }}>
                  Help us keep HPS Network free for everyone.
                </p>
              </div>

              {/* Body */}
              <div style={{ background: '#fff', padding: '1.5rem' }}>
                {/* Impact highlights */}
                <div
                  className="d-flex justify-content-center gap-4 mb-3 pb-3"
                  style={{ borderBottom: '1px solid var(--color-neutral-100)' }}
                >
                  {[
                    { num: '1,000+', label: 'Members' },
                    { num: '50+', label: 'Mentors' },
                    { num: '100+', label: 'Events' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="fw-bold" style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>{s.num}</div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--color-neutral-400)', fontWeight: 500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-center mb-3" style={{ color: 'var(--color-neutral-600)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  Your donation funds mentorship, wellness resources, and events
                  for healthcare professionals who need them most.
                </p>

                {/* CTA button */}
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.625rem',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(109,179,63,0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(109,179,63,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(109,179,63,0.3)'; }}
                >
                  <Heart size={16} fill="#fff" /> Donate via GoFundMe <ExternalLink size={13} />
                </a>

                <p className="text-center mt-3 mb-0" style={{ fontSize: '0.6875rem', color: 'var(--color-neutral-400)' }}>
                  HPS Network is a registered nonprofit organization.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

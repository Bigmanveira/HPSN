import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — HPS Network</title>
      </Helmet>

      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '80vh',
          paddingTop: '5rem',
          background: 'var(--color-neutral-50)',
        }}
      >
        <div className="container text-center" style={{ maxWidth: 520 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1
              className="text-gradient mb-3"
              style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1 }}
            >
              404
            </h1>
            <h2 className="fw-bold mb-3">Page Not Found</h2>
            <p
              className="mb-4"
              style={{ color: 'var(--color-neutral-600)', fontSize: '1.0625rem' }}
            >
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/" className="btn-primary-custom">
                <Home size={18} /> Go Home
              </Link>
              <button
                className="btn-outline-custom"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={18} /> Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

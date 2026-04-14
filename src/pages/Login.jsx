import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, Info } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Helmet>
        <title>Log In — HPS Network</title>
        <meta name="description" content="Log in to your HPS Network account to access the community, events, resources, and more." />
      </Helmet>

      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          paddingTop: '5rem',
          paddingBottom: '3rem',
          background: 'var(--color-neutral-50)',
        }}
      >
        <div className="container" style={{ maxWidth: 460 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 p-md-5"
            style={{
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-neutral-200)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2">Welcome Back</h2>
              <p style={{ color: 'var(--color-neutral-500)' }}>
                Log in to your HPS Network account
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div
              className="d-flex align-items-start gap-2 mb-4 p-3"
              style={{
                background: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                color: 'var(--color-primary-dark)',
              }}
            >
              <Info size={18} className="flex-shrink-0 mt-1" />
              <span>
                Login is coming soon — we're putting the finishing touches on the
                member platform.
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label-custom">
                  Email Address
                </label>
                <div className="position-relative">
                  <Mail
                    size={18}
                    className="position-absolute"
                    style={{
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-neutral-400)',
                    }}
                  />
                  <input
                    type="email"
                    id="email"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label-custom">
                  Password
                </label>
                <div className="position-relative">
                  <Lock
                    size={18}
                    className="position-absolute"
                    style={{
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-neutral-400)',
                    }}
                  />
                  <input
                    type="password"
                    id="password"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-custom btn-lg w-100 justify-content-center"
                disabled
                style={{ opacity: 0.6 }}
              >
                <LogIn size={18} /> Log In
              </button>
            </form>

            <div className="text-center mt-4">
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-neutral-500)' }}>
                Don't have an account?{' '}
                <Link to="/signup" className="fw-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

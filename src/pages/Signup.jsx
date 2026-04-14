import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, Info, CheckCircle2 } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up — HPS Network</title>
        <meta
          name="description"
          content="Create your free HPS Network account and join a community of healthcare professionals committed to mutual support and growth."
        />
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
              <h2 className="fw-bold mb-2">Join HPS Network</h2>
              <p style={{ color: 'var(--color-neutral-500)' }}>
                Create your free account and join the community
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
                Registration opens soon — we're finalizing the member platform.
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label-custom">
                  Full Name
                </label>
                <div className="position-relative">
                  <User
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
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>

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
                    name="email"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>

              <div className="mb-3">
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
                    name="password"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label-custom">
                  Confirm Password
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
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control-custom"
                    style={{ paddingLeft: '2.5rem' }}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                <UserPlus size={18} /> Create Account
              </button>
            </form>

            {/* Benefits Preview */}
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-neutral-200)' }}>
              <p className="fw-semibold mb-2" style={{ fontSize: '0.875rem' }}>
                Members get access to:
              </p>
              {['Community forum', 'Mentorship program', 'Events & workshops', 'Full resource library'].map((item) => (
                <div
                  key={item}
                  className="d-flex align-items-center gap-2 mb-1"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-600)' }}
                >
                  <CheckCircle2 size={14} color="var(--color-accent)" />
                  {item}
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-neutral-500)' }}>
                Already have an account?{' '}
                <Link to="/login" className="fw-semibold">
                  Log In
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

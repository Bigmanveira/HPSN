import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Heart } from 'lucide-react';
import { publicNav } from '../../lib/constants/navigation';

export default function MobileNav({ open, onClose, onDonate }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div
        className={`mobile-nav-overlay${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`mobile-nav-panel${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="fw-bold fs-5" style={{ color: 'var(--color-primary)' }}>
            HPS Network
          </span>
          <button
            className="btn border-0 p-1"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} color="var(--color-neutral-600)" />
          </button>
        </div>

        <nav>
          {publicNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-4 d-grid gap-2">
          <button
            className="btn-accent text-center"
            style={{ border: 'none', justifyContent: 'center' }}
            onClick={onDonate}
          >
            <Heart size={16} /> Donate
          </button>
          <Link
            to="/login"
            className="btn-outline-custom text-center"
            onClick={onClose}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="btn-primary-custom text-center"
            onClick={onClose}
          >
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
}

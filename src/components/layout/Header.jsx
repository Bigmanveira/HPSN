import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Heart } from 'lucide-react';
import { publicNav } from '../../lib/constants/navigation';
import MobileNav from './MobileNav';
import DonateModal from '../shared/DonateModal';
import logo from '../../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar-custom fixed-top${scrolled ? ' scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-brand-custom">
            <img src={logo} alt="HPS Network" />
            <span>HPS Network</span>
          </Link>

          <div className="d-none d-lg-flex align-items-center">
            {publicNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Action buttons — separated visually */}
            <div className="navbar-actions">
              <button
                onClick={() => setDonateOpen(true)}
                className="btn-accent btn-sm"
                style={{ border: 'none' }}
              >
                <Heart size={14} /> Donate
              </button>
              <Link to="/signup" className="btn-primary-custom btn-sm">
                Join Us
              </Link>
            </div>
          </div>

          <button
            className="d-lg-none btn border-0 p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} color="var(--color-neutral-700)" />
          </button>
        </div>
      </nav>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onDonate={() => { setMobileOpen(false); setDonateOpen(true); }}
      />
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
}

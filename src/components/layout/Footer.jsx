import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin } from 'lucide-react';
import { footerLinks } from '../../lib/constants/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">HPS Network</h5>
            <p className="mb-3" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Community, mentorship, and wellbeing support for healthcare
              professionals worldwide.
            </p>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.875rem' }}>
              <span className="d-flex align-items-center gap-2">
                <Mail size={16} /> hello@healthcareprofessionalssupportnetwork.com
              </span>
              <span className="d-flex align-items-center gap-2">
                <MapPin size={16} /> Global Community
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5>Platform</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5>Get Involved</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5>Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0" style={{ fontSize: '0.875rem' }}>
            &copy; {currentYear} HPS Network. All rights reserved.
          </p>
          <p className="mb-0 d-flex align-items-center gap-1" style={{ fontSize: '0.875rem' }}>
            Made with <Heart size={14} color="var(--color-accent)" fill="var(--color-accent)" /> for healthcare professionals
          </p>
        </div>
      </div>
    </footer>
  );
}

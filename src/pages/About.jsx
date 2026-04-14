import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Users, Lightbulb, HandHeart } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import CTABanner from '../components/shared/CTABanner';
import { images } from '../lib/constants/images';
import { CornerAccent } from '../components/shared/Decorative';
import alexOrigImg from '../assets/Alex.jpeg';
import alexImg from '../assets/Alex2.jpeg';
import dariusImg from '../assets/Darius.jpeg';
import frederickImg from '../assets/Frederick.jpeg';

const values = [
  { icon: Shield, title: 'Trust & Safety', desc: 'A moderated, credible space — no misinformation, no judgment.', color: 'primary' },
  { icon: Users, title: 'Belonging', desc: 'Cross-specialty connections that break professional isolation.', color: 'accent' },
  { icon: Lightbulb, title: 'Real Impact', desc: 'Programs measured by outcomes, not vanity metrics.', color: 'primary' },
  { icon: HandHeart, title: 'Wellbeing First', desc: 'Burnout prevention and mental health are core — not afterthoughts.', color: 'accent' },
];

const team = [
  { name: 'Alexandria Green', role: 'Founder & Executive Director', avatar: alexOrigImg, bio: 'Leads the vision, strategy, and day-to-day direction of HPS Network.' },
  { name: 'Michael Darius Johnson', role: 'Director of Funding & Donor Relations', avatar: dariusImg, bio: 'Drives fundraising strategy and builds relationships with donors and sponsors.' },
  { name: 'Frederick Da-Silveira', role: 'Director of Technology & Digital Strategy', avatar: frederickImg, bio: 'Architects the platform and shapes the digital experience for members.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — HPS Network</title>
        <meta name="description" content="Learn about HPS Network — a nonprofit supporting healthcare professionals through community, mentorship, and professional development." />
        <meta property="og:title" content="About Us — HPS Network" />
        <meta property="og:description" content="A nonprofit building a trusted support ecosystem for healthcare professionals worldwide." />
      </Helmet>

      <PageHero
        title="About HPS Network"
        description="A trusted digital home for healthcare professionals — connect, grow, and find support."
      />

      {/* Story — concise with image */}
      <SectionWrapper>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: 800 }}>
                We built what we wished existed.
              </h2>
              <p style={{ color: 'var(--color-neutral-600)', lineHeight: 1.8 }}>
                Healthcare workers pour everything into their patients — but when
                they need support themselves, there's no dedicated place to go.
                Just scattered WhatsApp groups, unmoderated forums, and institutional
                silos.
              </p>
              <p style={{ color: 'var(--color-neutral-600)', lineHeight: 1.8 }}>
                HPS Network is the platform we wished we had as early-career
                professionals: structured mentorship, real community, curated
                resources, and wellness support — all in one trusted space.
              </p>

              {/* Founder attribution */}
              <div className="mt-4">
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-neutral-900)', fontWeight: 600 }}>
                  — Alexandria Green
                </span>
                <br />
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                  Founder & Executive Director
                </span>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="img-stack"
            >
              <img src={alexImg} alt="Alex — HPS Network founder" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission + Vision — compact banner instead of two near-identical blocks */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
          padding: '4rem 0',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="container position-relative text-center" style={{ zIndex: 1, maxWidth: 720 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="d-inline-block mb-3 px-3 py-1" style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 'var(--radius-full)', color: '#fff', fontSize: '0.8125rem', fontWeight: 600 }}>
              Our Mission
            </span>
            <h2 className="mb-0" style={{ color: '#fff', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1.5 }}>
              Empower healthcare professionals through community, mentorship,
              and real services that support their wellbeing — at work and at home.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Values — 4 instead of 6 */}
      <section className="section-padding position-relative overflow-hidden bg-pattern-dots">
        <CornerAccent position="bottom-left" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>What We Stand For</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {values.map((v, i) => (
              <div className="col-md-6 col-lg-3" key={v.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card-glow p-4 h-100 text-center"
                >
                  <div className={`icon-badge icon-badge-${v.color} mx-auto mb-3`}>
                    <v.icon size={26} />
                  </div>
                  <h6 className="fw-bold mb-2">{v.title}</h6>
                  <p className="mb-0" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    {v.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <SectionWrapper bg="bg-light-custom">
        <div className="section-header">
          <span className="section-label">Our People</span>
          <h2>The Team Behind HPS Network</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {team.map((m, i) => (
            <div className="col-md-4" key={m.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glow text-center p-4 h-100"
              >
                <img src={m.avatar} alt={m.name} className="avatar avatar-xl mx-auto mb-3" loading="lazy" />
                <h6 className="fw-bold mb-1">{m.name}</h6>
                <span className="badge-primary mb-2 d-inline-block">{m.role}</span>
                <p className="mb-0" style={{ color: 'var(--color-neutral-600)', fontSize: '0.9375rem' }}>
                  {m.bio}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Want to Be Part of Our Story?"
        description="Join a growing community of healthcare professionals supporting each other."
        primaryLabel="Join the Community"
        primaryLink="/signup"
        secondaryLabel="Get Involved"
        secondaryLink="/get-involved"
      />
    </>
  );
}

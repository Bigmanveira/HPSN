import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserPlus, UserCheck, HandHeart, Building2,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';
import { images } from '../lib/constants/images';

const roles = [
  {
    icon: UserPlus, title: 'Join as a Member',
    desc: 'One free account gives you access to community, mentorship, events, resources, and opportunities.',
    benefits: ['Community forums & peer support', 'Mentorship matching', 'Full resource library', 'Event registration & recordings'],
    cta: 'Sign Up Free', link: '/signup', color: 'primary', image: images.joinTeam,
  },
  {
    icon: UserCheck, title: 'Become a Mentor',
    desc: 'Share your experience with someone who needs it. Flexible commitment, real impact.',
    benefits: ['Matched by specialty & goals', 'Flexible scheduling on your terms', 'Mentor recognition in the community'],
    cta: 'Apply as Mentor', link: '/signup', color: 'accent', image: images.mentorHelp,
  },
  {
    icon: HandHeart, title: 'Volunteer',
    desc: 'Help us run programs — content, events, moderation, outreach, or technical contributions.',
    benefits: ['Choose your contribution area', 'Work alongside the founding team', 'Shape what the platform becomes'],
    cta: 'Get in Touch', link: '/contact', color: 'primary', image: images.volunteer,
  },
  {
    icon: Building2, title: 'Partner With Us',
    desc: 'Hospitals, NGOs, and training institutions — collaborate to reach healthcare professionals at scale.',
    benefits: ['Co-host events & workshops', 'Share opportunities with members', 'Visibility to a targeted healthcare audience'],
    cta: 'Start a Conversation', link: '/contact', color: 'accent', image: images.partnership,
  },
];

export default function GetInvolved() {
  return (
    <>
      <Helmet>
        <title>Get Involved — HPS Network</title>
        <meta name="description" content="Join HPS Network as a member, mentor, volunteer, or partner." />
        <meta property="og:title" content="Get Involved — HPS Network" />
        <meta property="og:description" content="Multiple ways to join the mission — member, mentor, volunteer, or partner." />
      </Helmet>

      <PageHero
        title="Get Involved"
        description="Looking for support or want to give back? There's a place for you."
      />

      {roles.map((r, i) => {
        const even = i % 2 === 0;
        return (
          <section key={r.title} className={`section-padding ${!even ? 'bg-light-custom' : ''}`}>
            <div className="container">
              <div className={`row align-items-center g-5 ${!even ? 'flex-row-reverse' : ''}`}>
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, x: even ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="img-feature"
                    style={{ borderRadius: 'var(--radius-xl)' }}
                  >
                    <img
                      src={r.image} alt={r.title} loading="lazy"
                      style={{ height: 340, objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to top, ${r.color === 'primary' ? 'rgba(27,95,168,0.2)' : 'rgba(109,179,63,0.15)'} 0%, transparent 40%)`,
                      borderRadius: 'var(--radius-xl)', pointerEvents: 'none',
                    }} />
                  </motion.div>
                </div>

                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, x: even ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`icon-badge icon-badge-${r.color}`}>
                        <r.icon size={26} />
                      </div>
                      <h3 className="fw-bold mb-0" style={{ fontSize: '1.5rem' }}>{r.title}</h3>
                    </div>

                    <p className="mb-3" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>
                      {r.desc}
                    </p>

                    <div className="d-flex flex-column gap-2 mb-4">
                      {r.benefits.map((b) => (
                        <div key={b} className="d-flex align-items-center gap-2">
                          <CheckCircle2 size={17} color={r.color === 'primary' ? 'var(--color-primary)' : 'var(--color-accent)'} />
                          <span style={{ color: 'var(--color-neutral-700)', fontWeight: 500, fontSize: '0.9375rem' }}>{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={r.link} className="btn-primary-custom">
                      {r.cta} <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        title="Make a Difference Today"
        description="Join healthcare professionals building a stronger, more supportive community."
        primaryLabel="Join HPS Network"
        primaryLink="/signup"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

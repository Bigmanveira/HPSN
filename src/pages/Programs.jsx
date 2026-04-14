import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield, Dog, Baby, Sun, Leaf, GraduationCap,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';
import { images } from '../lib/constants/images';

const services = [
  {
    icon: Shield, title: 'Third-Party Support Groups', tagline: 'Safe. Anonymous. Always.',
    desc: 'Confidential support group services where anonymity is guaranteed and privacy is protected. A safe space to talk — no names, no judgment, just support from people who understand.',
    features: ['Complete anonymity guaranteed', 'Licensed third-party facilitation', 'Privacy-protected environment'],
    color: 'primary', link: '/contact', cta: 'Learn More', image: images.supportGroup,
  },
  {
    icon: Dog, title: 'Dog Walking Community', tagline: 'Healing walks for everyone',
    desc: 'From pet-owner walking groups to sponsored weekly animal shelter days — brightening the day for shelter animals while healing our healthcare professionals at the same time.',
    features: ['Community pet walking groups', 'Weekly animal shelter volunteer days', 'Therapeutic animal interaction'],
    color: 'accent', link: '/contact', cta: 'Get Involved', image: images.dogWalking,
  },
  {
    icon: Baby, title: '24-Hour Weekend Childcare', tagline: 'Work your shift. We\'ve got your kids.',
    desc: 'Reliable childcare from 5 AM Friday through 7:30 AM Monday. We create space for single parents in healthcare to know their child is safe, cared for, and loved while they\'re out saving lives.',
    features: ['Friday 5 AM – Monday 7:30 AM coverage', 'Built for single parents in healthcare', 'Safe, supervised, nurturing environment'],
    color: 'primary', link: '/contact', cta: 'Enroll Your Child', image: images.childcare,
  },
  {
    icon: Sun, title: 'Summer Camp', tagline: 'Their best summer yet',
    desc: 'A summer camp experience where kids can learn, play, explore, and build friendships — giving healthcare parents peace of mind and their children memories that last.',
    features: ['Structured activities and learning', 'Outdoor recreation and sports', 'A safe space for kids to thrive'],
    color: 'accent', link: '/contact', cta: 'Register Interest', image: images.summerCamp,
  },
  {
    icon: Leaf, title: 'Lawn & Laundry Service', tagline: 'One less thing on your plate',
    desc: 'After a 12-hour shift, the last thing you want to think about is mowing the lawn or doing laundry. We handle it — so you can rest, recover, and be present at home.',
    features: ['Lawn care and yard maintenance', 'Laundry pickup and delivery', 'Flexible scheduling around your shifts'],
    color: 'primary', link: '/contact', cta: 'Request Service', image: images.lawnLaundry,
  },
  {
    icon: GraduationCap, title: 'Matched Youth Mentorship', tagline: 'Building tomorrow\'s innovators',
    desc: 'Connecting underprivileged youth with experienced healthcare professionals through our matched mentor system. Placing an interest early for a career that doesn\'t just know the science, but innovates it.',
    features: ['One-on-one professional mentoring', 'Career preparation and guidance', 'Focused on underserved communities'],
    color: 'accent', link: '/contact', cta: 'Become a Mentor', image: images.youthMentor,
  },
];

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Our Services — HPS Network</title>
        <meta name="description" content="HPS Network services: support groups, dog walking community, 24hr weekend childcare, summer camp, lawn & laundry, and youth mentorship for healthcare professionals." />
        <meta property="og:title" content="Our Services — HPS Network" />
        <meta property="og:description" content="Real services that support healthcare professionals at work and at home." />
      </Helmet>

      <PageHero
        title="Our Services"
        description="Real support that meets healthcare professionals where they are — at work and at home."
      />

      {services.map((s, i) => {
        const even = i % 2 === 0;
        return (
          <section key={s.title} className={`section-padding ${!even ? 'bg-light-custom' : ''}`}>
            <div className="container">
              <div className={`row align-items-center g-5 ${!even ? 'flex-row-reverse' : ''}`}>
                {/* Image */}
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
                      src={s.image} alt={s.title} loading="lazy"
                      style={{ height: 340, objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to top, ${s.color === 'primary' ? 'rgba(27,95,168,0.2)' : 'rgba(109,179,63,0.15)'} 0%, transparent 40%)`,
                      borderRadius: 'var(--radius-xl)', pointerEvents: 'none',
                    }} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="col-lg-6">
                  <motion.div
                    initial={{ opacity: 0, x: even ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`icon-badge icon-badge-${s.color}`}>
                        <s.icon size={26} />
                      </div>
                      <div>
                        <span className={`badge-${s.color}`}>{s.tagline}</span>
                        <h3 className="fw-bold mb-0 mt-1" style={{ fontSize: '1.5rem' }}>{s.title}</h3>
                      </div>
                    </div>

                    <p className="mb-3" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.7 }}>
                      {s.desc}
                    </p>

                    <div className="d-flex flex-column gap-2 mb-4">
                      {s.features.map((f) => (
                        <div key={f} className="d-flex align-items-center gap-2">
                          <CheckCircle2 size={17} color={s.color === 'primary' ? 'var(--color-primary)' : 'var(--color-accent)'} />
                          <span style={{ color: 'var(--color-neutral-700)', fontWeight: 500, fontSize: '0.9375rem' }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={s.link} className="btn-primary-custom">
                      {s.cta} <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        title="Need Support?"
        description="Reach out to learn more about any of our services — we're here to help."
        primaryLabel="Contact Us"
        primaryLink="/contact"
        secondaryLabel="Get Involved"
        secondaryLink="/get-involved"
      />
    </>
  );
}

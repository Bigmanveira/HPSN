import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, MapPin, Users, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import CTABanner from '../components/shared/CTABanner';
import { images } from '../lib/constants/images';

const upcomingEvents = [
  {
    id: 1, title: 'HPS Network Founding Fundraiser',
    description: 'Join us for our inaugural fundraiser as we officially launch HPS Network — an evening of connection, purpose, and support for healthcare professionals.',
    date: 'July 25, 2026', time: 'TBA', category: 'Fundraiser', locationType: 'hybrid',
    registrationCount: 0, capacity: 200, image: images.events,
  },
];

const pastEvents = [
  { title: 'Healthcare Leadership in the Digital Age', date: 'March 10, 2026', category: 'Webinar', attendees: 142 },
  { title: 'Mindfulness for Clinicians', date: 'February 26, 2026', category: 'Wellness', attendees: 68 },
  { title: 'Getting Your First Research Published', date: 'February 12, 2026', category: 'Workshop', attendees: 91 },
];

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events — HPS Network</title>
        <meta name="description" content="Upcoming webinars, workshops, networking sessions, and wellness events for healthcare professionals." />
        <meta property="og:title" content="Events — HPS Network" />
        <meta property="og:description" content="Events designed for healthcare professionals — webinars, workshops, wellness, and more." />
      </Helmet>

      <PageHero title="Events" description="Webinars, workshops, and networking designed for healthcare professionals." />

      {/* Upcoming */}
      <section className="section-padding position-relative bg-pattern-dots">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="section-header">
            <span className="section-label">Coming Up</span>
            <h2>Upcoming Events</h2>
          </div>

          <div className="row g-4">
            {upcomingEvents.map((e, i) => (
              <div className="col-md-6" key={e.id}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card-glow card-image-hover h-100"
                >
                  <img src={e.image} alt={e.title} className="card-img-top" loading="lazy" />
                  <div className="p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge-primary">{e.category}</span>
                      <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.75rem', color: 'var(--color-neutral-400)' }}>
                        {e.locationType === 'hybrid' ? <><MapPin size={13} /> In Person & Online</> : <><Video size={13} /> Online</>}
                      </span>
                    </div>

                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.0625rem' }}>{e.title}</h5>
                    <p className="flex-grow-1 mb-3" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                      {e.description}
                    </p>

                    <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-500)' }}>
                      <span className="d-flex align-items-center gap-1"><Calendar size={13} /> {e.date}</span>
                      <span className="d-flex align-items-center gap-1"><Clock size={13} /> {e.time}</span>
                      <span className="d-flex align-items-center gap-1"><Users size={13} /> {e.registrationCount}/{e.capacity}</span>
                    </div>

                    {/* Capacity bar */}
                    <div className="mb-3" style={{ height: 4, background: 'var(--color-neutral-100)', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${(e.registrationCount / e.capacity) * 100}%`, background: 'var(--color-accent)', borderRadius: 2 }} />
                    </div>

                    <Link to="/signup" className="btn-primary-custom btn-sm align-self-start">
                      Register <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <SectionWrapper bg="bg-light-custom">
        <div className="section-header">
          <span className="section-label">Catch Up</span>
          <h2>Past Events</h2>
        </div>

        <div className="row g-4">
          {pastEvents.map((e, i) => (
            <div className="col-md-4" key={e.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glow p-4 h-100"
              >
                <span className="badge-accent mb-2 d-inline-block">{e.category}</span>
                <h6 className="fw-bold mb-3">{e.title}</h6>
                <div className="d-flex gap-3" style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-500)' }}>
                  <span className="d-flex align-items-center gap-1"><Calendar size={13} /> {e.date}</span>
                  <span className="d-flex align-items-center gap-1"><Users size={13} /> {e.attendees} attended</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Never Miss an Event"
        description="Members get early access, event recordings, and priority registration."
        primaryLabel="Join Now"
        primaryLink="/signup"
        secondaryLabel="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Heart, GraduationCap, Award, FileText,
  ArrowRight, Lock,
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import CTABanner from '../components/shared/CTABanner';
import { images } from '../lib/constants/images';
import { CornerAccent } from '../components/shared/Decorative';

export const categories = [
  { slug: 'mentorship', icon: Users, title: 'Mentorship', count: 8, color: 'accent', image: images.mentorship, description: 'Guides and tools to get the most out of mentoring relationships.' },
  { slug: 'wellness', icon: Heart, title: 'Wellness', count: 15, color: 'primary', image: images.mentalHealth, description: 'Mental health, burnout prevention, and self-care resources.' },
  { slug: 'professional-growth', icon: GraduationCap, title: 'Professional Growth', count: 10, color: 'accent', image: images.professionalDev, description: 'Training materials, research tools, and development resources.' },
  { slug: 'scholarships', icon: Award, title: 'Scholarships & Grants', count: 6, color: 'primary', image: images.scholarship, description: 'Funding opportunities for healthcare students and professionals.' },
  { slug: 'templates', icon: FileText, title: 'Templates & Guides', count: 9, color: 'accent', image: images.resources, description: 'Ready-to-use templates, checklists, and how-to guides.' },
];

const featured = [
  { title: 'Burnout Prevention Guide', desc: '40-page PDF with evidence-based interventions used by our mentor network.', cat: 'Wellness', type: 'PDF · 40 pages', pub: true, catSlug: 'wellness', resSlug: 'burnout-prevention-guide' },
  { title: 'Healthcare CV Templates', desc: 'Editable Word/PDF templates tailored for clinical and non-clinical roles.', cat: 'Templates', type: 'Template Pack · 6 files', pub: true, catSlug: 'templates', resSlug: 'healthcare-cv-templates' },
  { title: 'Scholarship Database', desc: '200+ scholarships and grants for health sciences students, updated monthly.', cat: 'Scholarships', type: 'Searchable Database', pub: false, catSlug: 'scholarships', resSlug: 'scholarship-database' },
  { title: 'Guided Mindfulness Series', desc: '10 audio sessions (5–15 min each) designed for breaks between shifts.', cat: 'Wellness', type: 'Audio · 10 sessions', pub: false, catSlug: 'wellness', resSlug: 'guided-mindfulness-series' },
  { title: 'Research Publication Toolkit', desc: 'Checklists, submission trackers, and a step-by-step writing guide.', cat: 'Professional Growth', type: 'Toolkit · 8 files', pub: false, catSlug: 'professional-growth', resSlug: 'research-publication-toolkit' },
];

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources — HPS Network</title>
        <meta name="description" content="Wellness tools, scholarship databases, mentorship guides, and templates for healthcare professionals." />
        <meta property="og:title" content="Resources — HPS Network" />
        <meta property="og:description" content="Curated wellness, mentorship, and professional development resources for healthcare workers." />
      </Helmet>

      <PageHero title="Resources" description="Guides, tools, and templates built for healthcare professionals." />

      {/* Categories */}
      <section className="section-padding position-relative overflow-hidden">
        <CornerAccent position="top-right" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="section-header">
            <span className="section-label">Browse</span>
            <h2>Resource Categories</h2>
          </div>

          <div className="row g-4">
            {categories.map((c, i) => (
              <div className="col-md-6 col-lg-4" key={c.slug}>
                <Link to={`/resources/${c.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="card-glow card-image-hover h-100"
                  >
                    <div style={{ position: 'relative' }}>
                      <img src={c.image} alt={c.title} className="card-img-top" style={{ height: 150 }} loading="lazy" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)', pointerEvents: 'none' }} />
                      <div className={`icon-badge icon-badge-${c.color} position-absolute`} style={{ bottom: -18, left: 16, zIndex: 2 }}>
                        <c.icon size={24} />
                      </div>
                    </div>
                    <div className="p-4 pt-5">
                      <h6 className="fw-bold mb-1">{c.title}</h6>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-500)' }}>{c.count} resources</span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <SectionWrapper bg="bg-light-custom">
        <div className="section-header">
          <span className="section-label">Featured</span>
          <h2>Most Popular</h2>
        </div>

        <div className="row g-4">
          {featured.map((r, i) => (
            <div className="col-md-6 col-lg-4" key={r.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-glow h-100"
              >
                <div className="p-4 d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Link to={`/resources/${r.catSlug}`} className="badge-primary" style={{ fontSize: '0.75rem', textDecoration: 'none' }}>{r.cat}</Link>
                    {!r.pub && (
                      <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.7rem', color: 'var(--color-neutral-400)' }}>
                        <Lock size={12} /> Members
                      </span>
                    )}
                  </div>
                  <h6 className="fw-bold mb-2">{r.title}</h6>
                  <p className="flex-grow-1 mb-3" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    {r.desc}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge-accent" style={{ fontSize: '0.7rem' }}>{r.type}</span>
                    <Link
                      to={`/resources/${r.catSlug}/${r.resSlug}`}
                      className="d-flex align-items-center gap-1 fw-semibold"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      View <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Unlock the Full Library"
        description="Members get access to every resource, including templates, toolkits, and the scholarship database."
        primaryLabel="Become a Member"
        primaryLink="/signup"
        secondaryLabel="Learn More"
        secondaryLink="/programs"
      />
    </>
  );
}

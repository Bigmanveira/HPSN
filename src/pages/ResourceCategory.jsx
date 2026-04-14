import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import CTABanner from '../components/shared/CTABanner';
import { categories } from './Resources';
import { resourcesByCategory } from '../lib/constants/resourceData';

export default function ResourceCategory() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/resources" replace />;

  const resources = resourcesByCategory[slug] || [];

  return (
    <>
      <Helmet>
        <title>{category.title} Resources — HPS Network</title>
        <meta name="description" content={`${category.description} Browse ${category.title} resources for healthcare professionals.`} />
      </Helmet>

      <PageHero title={category.title} description={category.description} />

      <SectionWrapper>
        <div className="mb-4">
          <Link
            to="/resources"
            className="d-inline-flex align-items-center gap-2 fw-semibold"
            style={{ fontSize: '0.875rem' }}
          >
            <ArrowLeft size={16} /> All Resources
          </Link>
        </div>

        <div className="row g-4">
          {resources.map((r, i) => (
            <div className="col-md-6 col-lg-4" key={r.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-glow h-100"
              >
                <div className="p-4 d-flex flex-column h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge-accent" style={{ fontSize: '0.7rem' }}>{r.type}</span>
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
                  <div>
                    <Link
                      to={`/resources/${slug}/${r.slug}`}
                      className="d-flex align-items-center gap-1 fw-semibold"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      View Resource <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Want Access to Everything?"
        description="Members unlock the full resource library across all categories."
        primaryLabel="Become a Member"
        primaryLink="/signup"
        secondaryLabel="Browse All Categories"
        secondaryLink="/resources"
      />
    </>
  );
}

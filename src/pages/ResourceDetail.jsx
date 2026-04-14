import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Lock, Download, CheckCircle2, FileText,
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import CTABanner from '../components/shared/CTABanner';
import { categories } from './Resources';
import { findResource, resourcesByCategory } from '../lib/constants/resourceData';

export default function ResourceDetail() {
  const { slug, resourceSlug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const resource = findResource(slug, resourceSlug);

  if (!category || !resource) return <Navigate to="/resources" replace />;

  const Icon = category.icon;

  return (
    <>
      <Helmet>
        <title>{resource.title} — HPS Network Resources</title>
        <meta name="description" content={resource.desc} />
      </Helmet>

      <PageHero title={resource.title} description={resource.desc} />

      <SectionWrapper>
        {/* Breadcrumb */}
        <div className="d-flex flex-wrap align-items-center gap-2 mb-4" style={{ fontSize: '0.875rem' }}>
          <Link to="/resources" className="d-inline-flex align-items-center gap-1 fw-semibold">
            <ArrowLeft size={15} /> Resources
          </Link>
          <span style={{ color: 'var(--color-neutral-300)' }}>/</span>
          <Link to={`/resources/${slug}`} className="fw-semibold">
            {category.title}
          </Link>
          <span style={{ color: 'var(--color-neutral-300)' }}>/</span>
          <span style={{ color: 'var(--color-neutral-500)' }}>{resource.title}</span>
        </div>

        <div className="row g-5">
          {/* Main content */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Meta bar */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <span className="badge-primary">{category.title}</span>
                <span className="badge-accent" style={{ fontSize: '0.75rem' }}>{resource.type}</span>
                {!resource.pub && (
                  <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.75rem', color: 'var(--color-neutral-400)' }}>
                    <Lock size={13} /> Members Only
                  </span>
                )}
              </div>

              {/* Content paragraphs */}
              {resource.content.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    color: 'var(--color-neutral-600)',
                    lineHeight: 1.8,
                    fontSize: '1.0625rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Highlights */}
              {resource.highlights && (
                <div
                  className="mt-4 p-4"
                  style={{
                    background: 'var(--color-neutral-50)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--color-neutral-200)',
                  }}
                >
                  <h5 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>
                    What's Inside
                  </h5>
                  <div className="row g-2">
                    {resource.highlights.map((h) => (
                      <div className="col-md-6" key={h}>
                        <div className="d-flex align-items-center gap-2">
                          <CheckCircle2 size={17} color="var(--color-accent)" />
                          <span style={{ color: 'var(--color-neutral-700)', fontWeight: 500, fontSize: '0.9375rem' }}>
                            {h}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Access / Download CTA */}
              <div className="mt-4">
                {resource.pub ? (
                  <button
                    className="btn-primary-custom btn-lg"
                    onClick={() => alert('Downloads will be available once the member platform launches.')}
                  >
                    <Download size={18} /> Download Resource
                  </button>
                ) : (
                  <div
                    className="p-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3"
                    style={{
                      background: 'var(--color-primary-light)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-primary-200)',
                    }}
                  >
                    <Lock size={22} color="var(--color-primary)" />
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: '0.9375rem' }}>
                        This resource is available to members
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-600)' }}>
                        Sign up for free to access the full resource library.
                      </div>
                    </div>
                    <Link to="/signup" className="btn-primary-custom btn-sm flex-shrink-0">
                      Join Free
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Resource info card */}
              <div
                className="card-glow p-4 mb-4"
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className={`icon-badge icon-badge-${category.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.9375rem' }}>{resource.type}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-500)' }}>
                      {resource.pub ? 'Free access' : 'Members only'}
                    </div>
                  </div>
                </div>
                <div
                  style={{ height: 1, background: 'var(--color-neutral-200)', margin: '0.75rem 0' }}
                />
                <div className="d-flex align-items-center gap-2 mb-2">
                  <FileText size={15} color="var(--color-neutral-400)" />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-neutral-600)' }}>
                    Category: {category.title}
                  </span>
                </div>
              </div>

              {/* More from this category */}
              <div>
                <h6 className="fw-bold mb-3">More in {category.title}</h6>
                <div className="d-flex flex-column gap-2">
                  {(resourcesByCategory[slug] || [])
                    .filter((r) => r.slug !== resourceSlug)
                    .slice(0, 3)
                    .map((r) => (
                      <Link
                        key={r.slug}
                        to={`/resources/${slug}/${r.slug}`}
                        className="d-flex align-items-start gap-2 p-3"
                        style={{
                          background: 'var(--color-neutral-50)',
                          borderRadius: 'var(--radius-md)',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'background 0.15s ease',
                          border: '1px solid var(--color-neutral-100)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-primary-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-neutral-50)'}
                      >
                        <div className="flex-grow-1">
                          <div className="fw-semibold" style={{ fontSize: '0.875rem' }}>{r.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>{r.type}</div>
                        </div>
                        {!r.pub && <Lock size={13} color="var(--color-neutral-400)" className="flex-shrink-0 mt-1" />}
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Explore More Resources"
        description="Browse our full library of guides, templates, and tools."
        primaryLabel="All Resources"
        primaryLink="/resources"
        secondaryLabel="Join Free"
        secondaryLink="/signup"
      />
    </>
  );
}

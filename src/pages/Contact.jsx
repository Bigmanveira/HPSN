import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, Building2, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionWrapper from '../components/shared/SectionWrapper';
import { images } from '../lib/constants/images';
import { GradientBlob, FloatingShapes } from '../components/shared/Decorative';

const contactInfo = [
  { icon: Mail, title: 'Email', detail: 'hello@healthcareprofessionalssupportnetwork.com', description: 'General inquiries & support' },
  { icon: MapPin, title: 'Location', detail: 'Global Online Community', description: 'Healthcare professionals worldwide' },
  { icon: Clock, title: 'Response Time', detail: 'Within 48 hours', description: 'All messages answered' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — HPS Network</title>
        <meta name="description" content="Get in touch with HPS Network for membership, partnerships, volunteering, or general support." />
        <meta property="og:title" content="Contact Us — HPS Network" />
        <meta property="og:description" content="Have questions? Reach out to the HPS Network team." />
      </Helmet>

      <PageHero
        title="Contact Us"
        description="Have a question, idea, or want to explore a partnership? We'd love to hear from you."
      />

      <SectionWrapper>
        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glow p-4 p-lg-5"
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="icon-badge icon-badge-primary">
                  <MessageCircle size={26} />
                </div>
                <h3 className="fw-bold mb-0">Send Us a Message</h3>
              </div>

              {submitted ? (
                <div className="text-center py-5">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="d-flex justify-content-center mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--color-accent-light)' }}
                      >
                        <CheckCircle2 size={40} color="var(--color-accent)" />
                      </div>
                    </div>
                    <h4 className="fw-bold mb-2">Message Sent!</h4>
                    <p style={{ color: 'var(--color-neutral-600)' }}>
                      Thank you for reaching out. We'll get back to you within 48 hours.
                    </p>
                    <button
                      className="btn-primary-custom mt-2"
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label-custom">Full Name *</label>
                      <input type="text" id="name" name="name" className={`form-control-custom${errors.name ? ' border-danger' : ''}`} placeholder="Your full name" value={formData.name} onChange={handleChange} />
                      {errors.name && <small className="text-danger mt-1 d-block">{errors.name}</small>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label-custom">Email Address *</label>
                      <input type="email" id="email" name="email" className={`form-control-custom${errors.email ? ' border-danger' : ''}`} placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                      {errors.email && <small className="text-danger mt-1 d-block">{errors.email}</small>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label-custom">Subject *</label>
                      <input type="text" id="subject" name="subject" className={`form-control-custom${errors.subject ? ' border-danger' : ''}`} placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} />
                      {errors.subject && <small className="text-danger mt-1 d-block">{errors.subject}</small>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label-custom">Message *</label>
                      <textarea id="message" name="message" rows="5" className={`form-control-custom${errors.message ? ' border-danger' : ''}`} placeholder="Your message..." value={formData.message} onChange={handleChange} />
                      {errors.message && <small className="text-danger mt-1 d-block">{errors.message}</small>}
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-primary-custom btn-lg">
                        <Send size={18} /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="d-flex flex-column gap-4"
            >
              {/* Contact image */}
              <div className="img-feature" style={{ borderRadius: 'var(--radius-xl)', height: 200 }}>
                <img
                  src={images.contactHero}
                  alt="Get in touch"
                  style={{ height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(27,95,168,0.4) 0%, transparent 60%)',
                  borderRadius: 'var(--radius-xl)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Info cards */}
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  className="card-glow d-flex gap-3 p-4"
                >
                  <div className="icon-circle icon-circle-primary flex-shrink-0">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{info.title}</h6>
                    <div className="fw-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{info.detail}</div>
                    <small style={{ color: 'var(--color-neutral-500)' }}>{info.description}</small>
                  </div>
                </motion.div>
              ))}

              {/* Partnership CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-4 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                  borderRadius: 'var(--radius-xl)',
                  color: '#fff',
                }}
              >
                <GradientBlob color1="#6DB33F" color2="#fff" size={200} top="-30%" right="-20%" opacity={0.1} />
                <FloatingShapes count={4} color="rgba(255,255,255,0.35)" />
                <div className="d-flex align-items-start gap-3 position-relative" style={{ zIndex: 1 }}>
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-lg)',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <Building2 size={24} color="#fff" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: '1.0625rem' }}>Partnership Inquiries</h5>
                    <p className="mb-3" style={{ opacity: 0.85, fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Represent a hospital, NGO, or training institution?
                      Mention it in your message — we'll connect you with our partnerships team.
                    </p>
                    <Link
                      to="/get-involved"
                      className="d-inline-flex align-items-center gap-2"
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        color: '#fff',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      Learn About Partnerships <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

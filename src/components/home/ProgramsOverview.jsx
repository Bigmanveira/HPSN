import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Dog,
  Baby,
  Sun,
  Leaf,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { images } from '../../lib/constants/images';

const services = [
  { icon: Shield, title: 'Support Groups', desc: 'Anonymous, privacy-protected third-party support for healthcare professionals.', image: images.supportGroup, color: 'primary' },
  { icon: Dog, title: 'Dog Walking Community', desc: 'Pet groups and weekly animal shelter days that brighten lives — theirs and yours.', image: images.dogWalking, color: 'accent' },
  { icon: Baby, title: '24hr Weekend Childcare', desc: 'Friday 5 AM to Monday 7:30 AM — so single parents can save lives knowing their child is safe.', image: images.childcare, color: 'primary' },
  { icon: Sun, title: 'Summer Camp', desc: 'A place for kids to learn, play, and grow while their parents focus on what they do best.', image: images.summerCamp, color: 'accent' },
  { icon: Leaf, title: 'Lawn & Laundry', desc: 'One less thing to worry about after a long shift — we handle the yard and the laundry.', image: images.lawnLaundry, color: 'primary' },
  { icon: GraduationCap, title: 'Youth Mentorship', desc: 'Connecting underprivileged youth with experienced professionals to build the next generation of healthcare innovators.', image: images.youthMentor, color: 'accent' },
];

export default function ProgramsOverview() {
  return (
    <section className="section-padding position-relative bg-pattern-dots">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>How We Support You</h2>
          <p>Real services that meet healthcare professionals where they are — at work and at home.</p>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-glow card-image-hover h-100"
              >
                <img src={s.image} alt={s.title} className="card-img-top" loading="lazy" />
                <div className="p-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className={`icon-circle icon-circle-${s.color}`} style={{ width: 38, height: 38 }}>
                      <s.icon size={18} />
                    </div>
                    <h5 className="fw-bold mb-0">{s.title}</h5>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--color-neutral-600)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/programs" className="btn-primary-custom btn-lg">
            Explore All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

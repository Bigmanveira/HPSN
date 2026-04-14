import { motion } from 'framer-motion';
import { FloatingShapes, GradientBlob } from './Decorative';

export default function PageHero({ title, description, children }) {
  return (
    <section className="page-hero position-relative overflow-hidden">
      {/* Decorative elements */}
      <GradientBlob color1="#6DB33F" color2="#1B5FA8" size={400} top="-20%" right="-10%" opacity={0.1} />
      <GradientBlob color1="#fff" color2="#6DB33F" size={300} bottom="-15%" left="-8%" opacity={0.06} delay={2} />
      <FloatingShapes count={6} color="rgba(255,255,255,0.5)" />

      {/* Pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

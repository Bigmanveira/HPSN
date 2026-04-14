import { motion } from 'framer-motion';

export default function SectionWrapper({
  children,
  className = '',
  bg = '',
  id,
}) {
  return (
    <section
      id={id}
      className={`section-padding ${bg} ${className}`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

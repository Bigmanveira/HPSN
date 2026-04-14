import { motion } from 'framer-motion';

/* ───── Floating dots grid ───── */
export function DotPattern({ className = '', color = 'rgba(27,95,168,0.07)', size = 4, gap = 28 }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  );
}

/* ───── Gradient blob ───── */
export function GradientBlob({
  color1 = 'var(--color-primary)',
  color2 = 'var(--color-accent)',
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.12,
  delay = 0,
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 10, -5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color1}, ${color2})`,
        opacity,
        filter: 'blur(60px)',
        top,
        left,
        right,
        bottom,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

/* ───── Wave divider (top or bottom) ───── */
export function WaveDivider({ position = 'bottom', color = '#fff', flip = false }) {
  const isTop = position === 'top';
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        [isTop ? 'top' : 'bottom']: -1,
        left: 0,
        right: 0,
        lineHeight: 0,
        transform: flip ? 'scaleX(-1)' : undefined,
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 60, display: 'block', transform: isTop ? 'rotate(180deg)' : undefined }}
      >
        <path
          d="M0 30C240 65 480 0 720 30C960 60 1200 10 1440 40V80H0V30Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ───── Animated floating shapes (circles, crosses, rings) ───── */
export function FloatingShapes({ count = 5, color = 'var(--color-primary)' }) {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 8 + Math.random() * 20,
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 4,
    type: ['circle', 'ring', 'cross'][i % 3],
  }));

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {shapes.map((s) => (
        <motion.div
          key={s.id}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          style={{ position: 'absolute', left: s.x, top: s.y }}
        >
          {s.type === 'circle' && (
            <div style={{ width: s.size, height: s.size, borderRadius: '50%', background: color, opacity: 0.15 }} />
          )}
          {s.type === 'ring' && (
            <div style={{ width: s.size, height: s.size, borderRadius: '50%', border: `2px solid ${color}`, opacity: 0.15 }} />
          )}
          {s.type === 'cross' && (
            <div style={{ width: s.size, height: s.size, opacity: 0.12, position: 'relative' }}>
              <div style={{ position: 'absolute', top: '45%', left: 0, width: '100%', height: '10%', background: color, borderRadius: 2 }} />
              <div style={{ position: 'absolute', left: '45%', top: 0, width: '10%', height: '100%', background: color, borderRadius: 2 }} />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ───── Geometric corner accent ───── */
export function CornerAccent({ position = 'top-right', color = 'var(--color-primary)', opacity = 0.06 }) {
  const posStyle = {
    'top-right': { top: 0, right: 0 },
    'top-left': { top: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
  }[position];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        ...posStyle,
        width: 300,
        height: 300,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
        <circle cx="300" cy="0" r="200" fill={color} opacity={opacity} />
        <circle cx="300" cy="0" r="280" stroke={color} strokeWidth="1" opacity={opacity * 0.7} fill="none" />
        <circle cx="300" cy="0" r="140" stroke={color} strokeWidth="1" opacity={opacity * 0.5} fill="none" />
      </svg>
    </div>
  );
}

/* ───── Animated counter ───── */
export function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  // Parse numeric part
  const numericStr = value.replace(/[^0-9.]/g, '');
  const prefix = value.replace(/[0-9.,+]+/g, '').trim();
  const num = parseInt(numericStr) || 0;
  const hasPlus = value.includes('+');

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <CountUp target={num} duration={duration} />
      {hasPlus && '+'}
      {suffix}
    </motion.span>
  );
}

function CountUp({ target, duration }) {
  const ref = { current: null };
  return (
    <motion.span
      ref={(el) => { ref.current = el; }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!ref.current) return;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (ref.current) {
            ref.current.textContent = Math.floor(eased * target).toLocaleString();
          }
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }}
    >
      0
    </motion.span>
  );
}

/* ───── Image with gradient overlay ───── */
export function ImageOverlay({ src, alt, gradient, className = '', style = {} }) {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {gradient && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: gradient,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}

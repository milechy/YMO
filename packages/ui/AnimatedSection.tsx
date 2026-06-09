'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: 'up' | 'left' | 'fade';
}

const variants = {
  up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function AnimatedSection({ children, className = '', style, delay = 0, direction = 'up' }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

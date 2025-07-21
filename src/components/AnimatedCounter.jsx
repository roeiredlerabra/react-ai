import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, title, icon: Icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only start animation when component comes into view and hasn't animated before
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      // Start with a small value and animate up to the target
      setCount(0);
      countRef.current = 0;
      startTimeRef.current = null;
      
      // Animate the counter
      const animateCount = (timestamp) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutExpo for a nice animation curve
        const easeOutExpo = 1 - Math.pow(1 - progress, 3);
        const nextCount = Math.floor(easeOutExpo * value);

        if (nextCount !== countRef.current) {
          setCount(nextCount);
          countRef.current = nextCount;
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };

      rafRef.current = requestAnimationFrame(animateCount);
    }
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, value, duration]);

  return (
    <motion.div 
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6"
    >
      <div className="bg-primary/10 p-4 rounded-full mb-4">
        {Icon && <Icon className="w-8 h-8 text-primary" />}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
        {count.toLocaleString()}
        {title.includes("Days") && <span className="ml-1">+</span>}
      </h3>
      <p className="text-gray-600 text-center font-medium">{title}</p>
    </motion.div>
  );
};

export default AnimatedCounter;

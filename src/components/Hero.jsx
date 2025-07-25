import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedStat = ({ value, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const startCount = () => {
      let start = 0;
      const step = Math.ceil(value / 50); // Divide animation into 50 steps
      const timer = setInterval(() => {
        start += step;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30); // Update every 30ms
      
      return () => clearInterval(timer);
    };
    
    // Start the animation after the delay
    const timeout = setTimeout(() => {
      startCount();
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [value, delay]);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 bg-gray-900 text-white"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary bg-opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-secondary mb-2">JULY 25-27, 2025</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4">
            ECHO<span className="text-primary">FEST</span> 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate music festival with world-class artists, immersive art installations, and unforgettable moments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
        >
          <a
            href="#tickets"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Get Tickets
          </a>
          <a
            href="#lineup"
            className="bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
          >
            View Lineup
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <AnimatedStat value={3} label="Days" delay={0.7} />
            <AnimatedStat value={48} label="Artists" suffix="+" delay={0.9} />
            <AnimatedStat value={6} label="Stages" delay={1.1} />
            <AnimatedStat value={25000} label="Attendees" suffix="+" delay={1.3} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

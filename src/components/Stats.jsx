import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { CalendarDaysIcon, UserGroupIcon, MusicalNoteIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    {
      value: 3,
      title: 'Festival Days',
      icon: CalendarDaysIcon,
      duration: 1500,
    },
    {
      value: 48,
      title: 'Amazing Artists',
      icon: MusicalNoteIcon,
      duration: 2000,
    },
    {
      value: 6,
      title: 'Different Stages',
      icon: MapPinIcon,
      duration: 1700,
    },
    {
      value: 25000,
      title: 'Expected Attendees',
      icon: UserGroupIcon,
      duration: 2500,
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70"></div>
      <div className="hidden md:block absolute -left-16 top-1/4 w-40 h-40 rounded-full bg-primary opacity-10"></div>
      <div className="hidden md:block absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-secondary opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-800">
            ECHOFEST 2025 By The Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of music lovers for an unforgettable festival experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              title={stat.title}
              icon={stat.icon}
              duration={stat.duration}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#tickets" 
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            Secure Your Spot
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

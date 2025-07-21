import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const faqs = [
    {
      question: "What are the festival hours?",
      answer: "The festival gates open at 12:00 PM and close at 12:00 AM each day. Performance schedules vary by stage and day, please check the schedule for details."
    },
    {
      question: "What items are prohibited at the festival?",
      answer: "Prohibited items include outside food and drinks, weapons, drugs, professional cameras/recording equipment, and pets (except service animals). See our full policy on the festival rules page."
    },
    {
      question: "Is there an age restriction?",
      answer: "The festival is all ages, but attendees under 18 must be accompanied by an adult. Some areas like VIP lounges and bars are 21+ only."
    },
    {
      question: "What happens if it rains?",
      answer: "The festival will proceed rain or shine. We recommend bringing weather-appropriate attire. In the event of severe weather, performances may be delayed or cancelled for safety reasons."
    },
    {
      question: "Are tickets refundable?",
      answer: "All ticket sales are final and non-refundable. However, tickets may be transferred to another person through our official ticket exchange platform."
    },
    {
      question: "What food and drink options will be available?",
      answer: "The festival will feature a variety of food vendors offering diverse cuisines, as well as multiple bars serving alcoholic and non-alcoholic beverages. There will be options for various dietary restrictions including vegetarian, vegan, and gluten-free."
    },
    {
      question: "Is there medical assistance on-site?",
      answer: "Yes, medical tents will be located throughout the festival grounds, staffed by professional medical personnel. First aid services are free for all attendees."
    },
    {
      question: "Can I leave and re-enter the festival?",
      answer: "Yes, we allow re-entry to the festival grounds. You must get your hand stamped and show your ticket when exiting, and you must present both to re-enter."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the festival
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className={`border rounded-lg overflow-hidden ${
                  activeIndex === index ? 'border-primary' : 'border-gray-700'
                } bg-gray-800 bg-opacity-50`}
              >
                <button
                  className={`w-full flex justify-between items-center p-5 text-left focus:outline-none ${
                    activeIndex === index ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeIndex === index ? 'transform rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 border-t border-gray-700 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Didn't find what you're looking for?
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Tickets = () => {
  const ticketTypes = [
    {
      name: "General Admission",
      price: "$199",
      features: [
        "3-Day Access to All Stages",
        "Access to Food and Merchandise Areas",
        "Access to General Festival Grounds",
        "Access to Water Stations",
      ],
      popular: false,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "VIP Pass",
      price: "$399",
      features: [
        "Everything in General Admission",
        "VIP Entry Lane",
        "VIP Viewing Areas at Main Stages",
        "VIP Lounge Access with Air-Conditioning",
        "Complimentary VIP Parking",
        "Exclusive VIP Bar Access",
      ],
      popular: true,
      color: "from-primary to-secondary",
    },
    {
      name: "Platinum Experience",
      price: "$899",
      features: [
        "Everything in VIP Pass",
        "Backstage Access",
        "Meet & Greet with Select Artists",
        "Exclusive Festival Merchandise Pack",
        "Complimentary Food and Drinks",
        "On-Site Concierge Service",
      ],
      popular: false,
      color: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section id="tickets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Get Your Tickets</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect ticket package for your festival experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${
                ticket.popular ? 'transform md:-translate-y-4' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-0 inset-x-0 bg-primary text-white text-center py-2 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div
                className={`bg-gradient-to-br ${ticket.color} text-white py-8 px-6 text-center`}
              >
                <h3 className="text-2xl font-bold mb-1">{ticket.name}</h3>
                <div className="text-4xl font-bold font-heading">{ticket.price}</div>
                <p className="mt-2 text-sm text-white text-opacity-80">per person</p>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-4 mb-8">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                    ticket.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                      : 'bg-gray-100 text-dark hover:bg-gray-200'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Group rates available for parties of 10 or more. Contact us for details.
          </p>
          <a href="#" className="text-primary font-medium hover:underline">
            View Ticket FAQs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tickets;

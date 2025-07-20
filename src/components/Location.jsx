import { motion } from 'framer-motion';
import { MapPinIcon, BoltIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Festival Location</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us at our spectacular venue with breathtaking natural surroundings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.744998400252!2d-118.33880274229321!3d34.10028065184902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf23c9c2643b%3A0x65eee8df2fa917ae!2sHollywood%20Bowl!5e0!3m2!1sen!2sus!4v1659033476829!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Festival location map"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Venue Address</h3>
                  <p className="text-gray-300">
                    Echo Park Festival Grounds<br />
                    2301 North Highland Avenue<br />
                    Los Angeles, CA 90068
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                  <BoltIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Getting There</h3>
                  <p className="text-gray-300">
                    We offer shuttle services from downtown LA and major hotels. Public transportation options are available with special event routes during the festival.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <TruckIcon className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Parking</h3>
                  <p className="text-gray-300">
                    Limited parking is available on-site for VIP ticket holders. General parking is available at nearby lots with shuttle service to the main entrance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <ShieldCheckIcon className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
                  <p className="text-gray-300">
                    Check out our partner hotels offering special rates for festival attendees. On-site camping options are also available for the full festival experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-white hover:border-primary hover:text-primary text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
          >
            View Travel Guide
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;

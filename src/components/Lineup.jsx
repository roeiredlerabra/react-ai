import { motion } from 'framer-motion';

const Lineup = () => {
  // Mock data for festival artists
  const headliners = [
    { id: 1, name: 'Electric Pulse', genre: 'Electronic', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'The Resonance', genre: 'Alternative Rock', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
    { id: 3, name: 'Sonic Wave', genre: 'Pop/Rock', image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  ];

  const artists = [
    { id: 1, name: 'Melodic Drift', genre: 'Indie Pop' },
    { id: 2, name: 'Rhythm Collective', genre: 'R&B / Soul' },
    { id: 3, name: 'Neon Skyline', genre: 'Synthwave' },
    { id: 4, name: 'Velvet Thunder', genre: 'Rock' },
    { id: 5, name: 'Lunar Echo', genre: 'Dream Pop' },
    { id: 6, name: 'Cosmic Beats', genre: 'EDM' },
    { id: 7, name: 'Azure Heights', genre: 'Alternative' },
    { id: 8, name: 'Silver Pulse', genre: 'Electronic' },
    { id: 9, name: 'Crimson Wave', genre: 'Indie Rock' },
    { id: 10, name: 'Emerald Sky', genre: 'Folk/Rock' },
    { id: 11, name: 'Golden Horizon', genre: 'Pop' },
    { id: 12, name: 'Midnight Groove', genre: 'Hip-Hop' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="lineup" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4"
          >
            Lineup
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience performances from the world's best artists across multiple genres
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-center mb-10">Headliners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {headliners.map((artist) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{artist.name}</h4>
                  <p className="text-secondary">{artist.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{artist.name}</h4>
              <p className="text-gray-500 text-sm">{artist.genre}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">And many more artists to be announced...</p>
          <a 
            href="#" 
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            See full lineup →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Lineup;

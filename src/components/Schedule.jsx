import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

const Schedule = () => {
  // Mock data for schedule
  const days = [
    {
      date: "July 25, 2025",
      stages: [
        {
          name: "Main Stage",
          performances: [
            { time: "5:00 PM", artist: "Azure Heights" },
            { time: "6:30 PM", artist: "Emerald Sky" },
            { time: "8:00 PM", artist: "Rhythm Collective" },
            { time: "10:00 PM", artist: "The Resonance" },
          ]
        },
        {
          name: "Electronic Stage",
          performances: [
            { time: "5:30 PM", artist: "Silver Pulse" },
            { time: "7:00 PM", artist: "Neon Skyline" },
            { time: "8:30 PM", artist: "Cosmic Beats" },
            { time: "10:30 PM", artist: "Electric Pulse" },
          ]
        },
      ]
    },
    {
      date: "July 26, 2025",
      stages: [
        {
          name: "Main Stage",
          performances: [
            { time: "4:00 PM", artist: "Golden Horizon" },
            { time: "5:30 PM", artist: "Crimson Wave" },
            { time: "7:00 PM", artist: "Velvet Thunder" },
            { time: "9:00 PM", artist: "Sonic Wave" },
          ]
        },
        {
          name: "Indie Stage",
          performances: [
            { time: "4:30 PM", artist: "Lunar Echo" },
            { time: "6:00 PM", artist: "Melodic Drift" },
            { time: "7:30 PM", artist: "Midnight Groove" },
            { time: "9:30 PM", artist: "Acoustic Dreams" },
          ]
        },
      ]
    },
    {
      date: "July 27, 2025",
      stages: [
        {
          name: "Main Stage",
          performances: [
            { time: "3:00 PM", artist: "New Horizons" },
            { time: "4:30 PM", artist: "Desert Mirage" },
            { time: "6:00 PM", artist: "Crystal Echoes" },
            { time: "8:00 PM", artist: "Festival All-Stars" },
          ]
        },
        {
          name: "Sunset Stage",
          performances: [
            { time: "3:30 PM", artist: "Ocean Waves" },
            { time: "5:00 PM", artist: "Mountain Sound" },
            { time: "6:30 PM", artist: "Valley Mist" },
            { time: "8:30 PM", artist: "Closing Ceremony" },
          ]
        },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Festival Schedule</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Plan your perfect festival experience with our day-by-day lineup
          </p>
        </motion.div>

        {/* Day tabs */}
        <div className="mb-10 flex flex-wrap justify-center">
          {days.map((day, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full mx-2 mb-4 font-medium transition-colors ${
                activeTab === index
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <CalendarDaysIcon className="w-5 h-5 inline-block mr-2" />
              {day.date}
            </button>
          ))}
        </div>

        {/* Schedule content */}
        <div className="max-w-5xl mx-auto">
          {days[activeTab].stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-medium mb-6 flex items-center">
                <MusicalNoteIcon className="w-6 h-6 mr-2 text-secondary" />
                {stage.name}
              </h3>
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
                {stage.performances.map((performance, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center p-4 ${
                      idx !== stage.performances.length - 1 ? 'border-b border-gray-700' : ''
                    }`}
                  >
                    <div className="flex items-center text-gray-400 w-24">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{performance.time}</span>
                    </div>
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-medium text-white">{performance.artist}</h4>
                    </div>
                    <div>
                      <button className="text-sm text-primary hover:underline">
                        Add to My Schedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-primary hover:bg-primary text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
          >
            Download Full Schedule
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;

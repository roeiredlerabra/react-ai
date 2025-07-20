import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, MusicalNoteIcon, CheckIcon } from '@heroicons/react/24/outline';

const Schedule = () => {
  // State for my schedule
  const [mySchedule, setMySchedule] = useState([]);
  
  // Load saved schedule from localStorage on component mount
  useEffect(() => {
    const savedSchedule = localStorage.getItem('myFestivalSchedule');
    if (savedSchedule) {
      setMySchedule(JSON.parse(savedSchedule));
    }
  }, []);

  // Save schedule to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('myFestivalSchedule', JSON.stringify(mySchedule));
  }, [mySchedule]);

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
  const [showMySchedule, setShowMySchedule] = useState(false);

  // Function to generate and download the schedule as a CSV file
  const downloadSchedule = () => {
    // Create CSV content
    let csvContent = "Day,Time,Stage,Artist\n";
    
    // If showing my schedule, only include selected performances
    if (showMySchedule && mySchedule.length > 0) {
      mySchedule.forEach(item => {
        csvContent += `"${item.day}","${item.time}","${item.stage}","${item.artist}"\n`;
      });
    } else {
      // Include all performances from all days
      days.forEach(day => {
        day.stages.forEach(stage => {
          stage.performances.forEach(performance => {
            csvContent += `"${day.date}","${performance.time}","${stage.name}","${performance.artist}"\n`;
          });
        });
      });
    }
    
    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set up download
    const filename = showMySchedule ? 'my-echofest-schedule.csv' : 'echofest-full-schedule.csv';
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                      {mySchedule.some(item => 
                        item.day === days[activeTab].date && 
                        item.stage === stage.name && 
                        item.artist === performance.artist && 
                        item.time === performance.time
                      ) ? (
                        <button 
                          className="text-sm text-green-500 hover:text-green-400 flex items-center"
                          onClick={() => {
                            const newSchedule = mySchedule.filter(item => 
                              !(item.day === days[activeTab].date && 
                                item.stage === stage.name && 
                                item.artist === performance.artist && 
                                item.time === performance.time)
                            );
                            setMySchedule(newSchedule);
                          }}
                        >
                          <CheckIcon className="w-4 h-4 mr-1" />
                          Added to Schedule
                        </button>
                      ) : (
                        <button 
                          className="text-sm text-primary hover:underline"
                          onClick={() => {
                            setMySchedule([...mySchedule, {
                              day: days[activeTab].date,
                              stage: stage.name,
                              artist: performance.artist,
                              time: performance.time
                            }]);
                          }}
                        >
                          Add to My Schedule
                        </button>
                      )}
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
          {mySchedule.length > 0 && (
            <div className="mb-6">
              <button
                onClick={() => setShowMySchedule(!showMySchedule)}
                className={`px-6 py-3 rounded-full mx-2 mb-4 font-medium transition-colors ${
                  showMySchedule
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {showMySchedule ? 'Showing My Schedule' : 'Show My Schedule'}
              </button>
              
              {showMySchedule && (
                <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-6 mt-4">
                  <h3 className="text-xl font-bold mb-4">My Schedule</h3>
                  {mySchedule.length > 0 ? (
                    <div>
                      {mySchedule.map((item, idx) => (
                        <div key={idx} className="mb-3 pb-3 border-b border-gray-700 last:border-0">
                          <div className="font-medium">{item.artist}</div>
                          <div className="text-sm text-gray-400">
                            {item.day} • {item.time} • {item.stage}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No performances added to your schedule yet.</p>
                  )}
                </div>
              )}
            </div>
          )}
          
          <button
            onClick={downloadSchedule}
            className="inline-block bg-transparent border-2 border-primary hover:bg-primary text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
          >
            Download {showMySchedule ? 'My' : 'Full'} Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;

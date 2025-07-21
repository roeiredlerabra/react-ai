import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, MusicalNoteIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Schedule = () => {
  const [mySchedule, setMySchedule] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  // Load saved schedule from localStorage on component mount
  useEffect(() => {
    const savedSchedule = localStorage.getItem('myEchofestSchedule');
    if (savedSchedule) {
      setMySchedule(JSON.parse(savedSchedule));
    }
  }, []);
  
  // Save schedule to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('myEchofestSchedule', JSON.stringify(mySchedule));
  }, [mySchedule]);
  
  // Handle notifications
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

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
    <section id="schedule" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 relative">
        {/* Notification */}
        {notification.show && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 z-50 py-3 px-6 rounded-lg shadow-lg ${
              notification.type === 'add' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <p className="text-white text-center">{notification.message}</p>
          </motion.div>
        )}
        
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
                    className={`flex flex-col sm:flex-row items-start sm:items-center p-4 ${
                      idx !== stage.performances.length - 1 ? 'border-b border-gray-700' : ''
                    }`}
                  >
                    <div className="flex items-center text-gray-400 w-24 mb-2 sm:mb-0">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{performance.time}</span>
                    </div>
                    <div className="flex-1 ml-0 sm:ml-4 mb-3 sm:mb-0">
                      <h4 className="text-lg font-medium text-white">{performance.artist}</h4>
                    </div>
                    <div className="ml-0 sm:ml-4 mt-2 sm:mt-0">
                      <button 
                        onClick={() => {
                          const performanceId = `${days[activeTab].date}-${stage.name}-${performance.time}-${performance.artist}`;
                          if (mySchedule.includes(performanceId)) {
                            setMySchedule(mySchedule.filter(id => id !== performanceId));
                            showNotification(`Removed ${performance.artist} from your schedule`, 'remove');
                          } else {
                            setMySchedule([...mySchedule, performanceId]);
                            showNotification(`Added ${performance.artist} to your schedule`, 'add');
                          }
                        }}
                        className="text-sm hover:underline flex items-center px-3 py-1 border border-primary rounded-full"
                      >
                        {mySchedule.includes(`${days[activeTab].date}-${stage.name}-${performance.time}-${performance.artist}`) ? (
                          <>
                            <CheckCircleIcon className="w-4 h-4 mr-1 text-green-400" />
                            <span className="text-green-400">Added to Schedule</span>
                          </>
                        ) : (
                          <span className="text-primary">Add to Schedule</span>
                        )}
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
          <button
            onClick={() => {
              // Create a text representation of the schedule
              let scheduleText = "ECHOFEST 2025 - FESTIVAL SCHEDULE\n\n";
              
              days.forEach(day => {
                scheduleText += `=== ${day.date} ===\n\n`;
                
                day.stages.forEach(stage => {
                  scheduleText += `${stage.name}\n`;
                  scheduleText += "--------------------\n";
                  
                  stage.performances.forEach(performance => {
                    scheduleText += `${performance.time} - ${performance.artist}\n`;
                  });
                  
                  scheduleText += "\n";
                });
                
                scheduleText += "\n";
              });
              
              // Create a blob and download link
              const blob = new Blob([scheduleText], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'ECHOFEST_2025_Schedule.txt';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
              
              // Show notification
              showNotification('Full schedule downloaded successfully', 'add');
            }}
            className="inline-block bg-transparent border-2 border-primary hover:bg-primary text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
          >
            Download Full Schedule
          </button>
        </motion.div>
        
        {/* My Schedule Modal */}
        {mySchedule.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-6 mt-10 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CalendarDaysIcon className="w-5 h-5 mr-2 text-secondary" />
              My Personal Schedule
            </h3>
            
            <div className="space-y-4">
              {days.map((day) => {
                // Check if there are any performances from this day in mySchedule
                const dayHasScheduled = day.stages.some(stage => 
                  stage.performances.some(performance => 
                    mySchedule.includes(`${day.date}-${stage.name}-${performance.time}-${performance.artist}`)
                  )
                );
                
                if (!dayHasScheduled) return null;
                
                return (
                  <div key={day.date} className="border-b border-gray-700 pb-4">
                    <h4 className="font-medium mb-2">{day.date}</h4>
                    {day.stages.map(stage => {
                      const scheduledPerformances = stage.performances.filter(performance => 
                        mySchedule.includes(`${day.date}-${stage.name}-${performance.time}-${performance.artist}`)
                      );
                      
                      if (scheduledPerformances.length === 0) return null;
                      
                      return (
                        <div key={stage.name} className="ml-4 mb-3">
                          <p className="text-gray-400 text-sm">{stage.name}</p>
                          {scheduledPerformances.map((performance, idx) => (
                            <div key={idx} className="ml-2 flex items-center text-sm py-1">
                              <span className="text-gray-500 w-16">{performance.time}</span>
                              <span className="text-white">{performance.artist}</span>
                              <button 
                                className="ml-auto text-red-400 text-xs hover:underline"
                                onClick={() => {
                                  const performanceId = `${day.date}-${stage.name}-${performance.time}-${performance.artist}`;
                                  setMySchedule(mySchedule.filter(id => id !== performanceId));
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 flex justify-between">
              <button 
                onClick={() => {
                  setMySchedule([]);
                  showNotification('Your schedule has been cleared', 'remove');
                }}
                className="text-sm text-red-400 hover:underline"
              >
                Clear My Schedule
              </button>
              <button
                onClick={() => {
                  // Create a text representation of my personal schedule
                  let myScheduleText = "MY ECHOFEST 2025 SCHEDULE\n\n";
                  
                  days.forEach(day => {
                    // Check if there are any performances from this day in mySchedule
                    const dayHasScheduled = day.stages.some(stage => 
                      stage.performances.some(performance => 
                        mySchedule.includes(`${day.date}-${stage.name}-${performance.time}-${performance.artist}`)
                      )
                    );
                    
                    if (!dayHasScheduled) return;
                    
                    myScheduleText += `=== ${day.date} ===\n\n`;
                    
                    day.stages.forEach(stage => {
                      const scheduledPerformances = stage.performances.filter(performance => 
                        mySchedule.includes(`${day.date}-${stage.name}-${performance.time}-${performance.artist}`)
                      );
                      
                      if (scheduledPerformances.length === 0) return;
                      
                      myScheduleText += `${stage.name}\n`;
                      myScheduleText += "--------------------\n";
                      
                      scheduledPerformances.forEach(performance => {
                        myScheduleText += `${performance.time} - ${performance.artist}\n`;
                      });
                      
                      myScheduleText += "\n";
                    });
                    
                    myScheduleText += "\n";
                  });
                  
                  // Create a blob and download link
                  const blob = new Blob([myScheduleText], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'My_ECHOFEST_2025_Schedule.txt';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  URL.revokeObjectURL(url);
                  
                  // Show notification
                  showNotification('Your personal schedule downloaded successfully', 'add');
                }}
                className="text-sm text-primary hover:underline"
              >
                Download My Schedule
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Schedule;

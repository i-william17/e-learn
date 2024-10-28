import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ev1 from '../../assets/event1.jpg';
import ev2 from '../../assets/event2.jpg';
import ev3 from '../../assets/event3.jpg';
import ev4 from '../../assets/pexels-divinetechygirl-1181467.jpg';

const events = [
  {
    id: 1,
    image: ev4,
    date: '2024-10-30',
    category: 'Webinar',
    title: 'Introduction to React',
    location: 'Online',
    tags: ['JavaScript', 'React'],
  },
  {
    id: 2,
    image: ev3,
    date: '2024-11-05',
    category: 'Workshop',
    title: 'JavaScript Essentials',
    location: 'New York, NY',
    tags: ['JavaScript', 'Frontend'],
  },
  {
    id: 3,
    image: ev1,
    date: '2024-11-15',
    category: 'Conference',
    title: 'Tech Innovations Conference',
    location: 'San Francisco, CA',
    tags: ['Technology', 'Innovation'],
  },
  {
    id: 4,
    image: ev2,
    date: '2024-11-25',
    category: 'Networking',
    title: 'Connect with Industry Leaders',
    location: 'Los Angeles, CA',
    tags: ['Networking', 'Leadership'],
  },
  // Add more events as needed
];

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start mx-auto py-16 px-6 lg:px-16 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Side */}
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-red-600 mb-4 animate__animated animate__fadeIn">Upcoming Events</h2>
        <p className="text-gray-700 mb-4">
          Stay updated with our upcoming events. Join us for insightful sessions and workshops led by industry experts.
        </p>
        <a href="/events" className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300">
          View All Events <FaChevronRight className="inline ml-2" />
        </a>
      </div>

      {/* Right Side - Event Cards */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            role="article"
            aria-labelledby={`event-title-${event.id}`}
            aria-describedby={`event-description-${event.id}`}
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm" id={`event-date-${event.id}`}>
                {event.date}
              </p>
              <p className="text-red-500 text-xs font-semibold">{event.category}</p>
              <h3 className="text-lg font-bold text-gray-800" id={`event-title-${event.id}`}>
                {event.title}
              </h3>
              <p className="text-gray-600" id={`event-location-${event.id}`}>
                {event.location}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap mt-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

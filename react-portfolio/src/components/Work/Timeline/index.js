import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'May 2023 - August 2023',
      title: 'Simeio',
      description: [
        '•	Implemented the integration of AngularJS front end with a MySQL database through RESTful API endpoints to store user account data, leading to a 90% increase in user data retention.',
        '•	Debugged backend Java errors related to user CRUD operations by tracing API path request URLs from the IO webpage to the backend codebase, reducing the web app’s time-to-market by 70%.',
        '•	Collaborated with cross-functional teams to transition the webpage from a monolithic to a microservices framework in Spring Boot, resulting in a 70% boost in system scalability.',
      ],
      expanded: false,
    },
    {
      date: 'January 2023 - May 2023',
      title: 'Georgia Tech CEE',
      description: [
        '•	Teamed with MIT professors to implement rigorous testing and data structure optimization of MITs tRIBS Distributed Model in C++, resulting in a 40% improvement in weather data processing speed.',
        '•	Engineered an alert system in C++ for South American regions, notifying residents and first responders about imminent life-threatening disasters, resulting in a 55% reduction in notification time.',
      ],
      expanded: false,
    },
    {
      date: 'September 2022 - December 2022',
      title: 'AI-based Discovery and Innovation',
      description: [
        '•	Architected a GAN model to synthesize design parameters/reflectance spectra and generate data samples provided.',
        '•	Utilized a cGAN model for the inverse design problem, achieving a design parameter generation accuracy of 95%.',
        '•	Optimized the network architecture of the generator and discriminator model, incorporating multiple nodes to enhance the GAN’s capability to learn complex data distributions, resulting in an increased accuracy rate of up to 98%.',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

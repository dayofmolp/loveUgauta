import React from 'react';
import { MapPin, Heart, Star } from 'lucide-react';

const RelationshipJourneyMap = () => {
  const journeyEvents = [
    { date: "November 4, 2024", title: "Our Story Begins", description: "The magical day we first connected", icon: <Heart color="red" size={32} /> },
    { date: "November 11, 2024", title: "First Week Milestone", description: "A week of beautiful moments together", icon: <Star color="gold" size={32} /> },
    { date: "November 21, 2024", title: "Today's Journey", description: "Continuing our love story", icon: <MapPin color="purple" size={32} /> }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl text-center text-purple-700">Our Love Journey</h1>
        <div className="border-l-4 border-purple-300 pl-6">
          {journeyEvents.map((event, index) => (
            <div key={index} className="mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-2xl">{event.date}</h2>
                <h3 className="text-xl">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationshipJourneyMap;

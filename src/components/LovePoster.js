import React from 'react';
import { Heart, Star } from 'lucide-react';

const LovePoster = () => {
  return (
    <div className="bg-gradient-to-br from-pink-200 to-red-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-5xl font-bold text-red-600 mb-4">My Love for Gauta</h1>
        <Heart color="red" size={64} className="animate-pulse" />

        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-pink-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-700">Reasons I Love You</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Your beautiful smile</li>
              <li>Your kind heart</li>
              <li>Our special moments together</li>
              <li>The way you make me laugh</li>
            </ul>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg text-center">
            <Star color="gold" fill="gold" size={48} className="mb-4" />
            <p className="text-xl text-red-800">You are the brightest star in my universe.</p>
          </div>
        </div>
        <p className="text-3xl italic text-red-900">"Gauta, you mean everything to me."</p>
      </div>
    </div>
  );
};

export default LovePoster;

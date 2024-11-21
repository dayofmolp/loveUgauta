import React from 'react';
import Navbar from './components/Navbar';
import LovePoster from './components/LovePoster';
import RelationshipJourneyMap from './components/RelationshipJourneyMap';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <LovePoster />
      </div>
      <div id="journey">
        <RelationshipJourneyMap />
      </div>
    </div>
  );
}

export default App;

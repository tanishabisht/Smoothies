import React from 'react';
import './App.css';
import lessons from './data/lessons.json';

function App() {
  return (
    <div className="App">
      <h1>Welcome to SmoothiesMania!!</h1>
      {/* Add buttons for Start Learning and Assess */}
      <h2>Ditch the Powder: Go Natural with Your Protein!</h2>
      <p>Why spend more on protein powder when you can get all you need from nature? Not only can excessive intake of protein powders be costly, but it might also lead you to miss out on the whole foods essential for a balanced diet. What's more, too much protein powder could stress your kidneys and liver.</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => alert('Start Learning button clicked')}>Start Learning</button>
        <button onClick={() => alert('Assess button clicked')}>Assess</button>
      </div>
    </div>
  );
}

export default App;

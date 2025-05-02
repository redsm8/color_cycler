// Redon Malo
// CSCI 39548
// May 2 2025
// Assignment 2
// App.jsx

import { useState } from 'react';
import './App.css';

function App() {
  // background colors
  const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

  // useState to track the current index
  const [index, setIndex] = useState(0);

  // update the index and loop back to the start
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    // Set background color using the current index and make container take full screen
    <div
      className="container"
      style={{ backgroundColor: colors[index], height: '100vh', width: '100vw' }}
    >
      {/* Button that triggers the color change */}
      <button className="cycle-button" onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
}

export default App;

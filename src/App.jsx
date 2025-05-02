import { useState } from 'react';
import './App.css';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: colors[index], height: '100vh', width: '100vw' }}
    >
      <button className="cycle-button" onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
}

export default App;

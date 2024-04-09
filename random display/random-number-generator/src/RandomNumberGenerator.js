// RandomNumberGenerator.js
import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  return (
    <div className="random-number-generator">
      <h2>Random Number Generator</h2>
      <div>
        <label>Minimum:</label>
        <input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Maximum:</label>
        <input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value))} />
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <h3>Random Number: {randomNumber}</h3>}
    </div>
  );
};

export default RandomNumberGenerator;

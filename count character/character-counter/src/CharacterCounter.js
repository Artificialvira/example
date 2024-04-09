// CharacterCounter.js
import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (e) => {
    const newText = e.target.value;
  
    const textWithoutSpaces = newText.replace(/\s/g, '');
    setText(newText);
    setCharacterCount(textWithoutSpaces.length);
  };

  return (
    <div className="character-counter">
      <h2>Character Counter</h2>
      <textarea value={text} onChange={handleInputChange} rows="4" cols="50" />
      <p>Number of characters (excluding spaces): {characterCount}</p>
    </div>
  );
};

export default CharacterCounter;

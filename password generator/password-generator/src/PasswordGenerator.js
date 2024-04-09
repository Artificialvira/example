// PasswordGenerator.js
import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}[]';

    let validChars = lowercaseLetters;
    if (includeUppercase) validChars += uppercaseLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <div>
        <label>Password Length:</label>
        <input type="number" value={passwordLength} onChange={(e) => setPasswordLength(parseInt(e.target.value))} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && <p>Your password: {password}</p>}
    </div>
  );
};

export default PasswordGenerator;

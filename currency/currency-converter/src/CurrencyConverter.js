import React, { useState, useEffect } from 'react';


function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        setRates(data.rates);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRates({});
      }
    };

    fetchRates();
  }, []);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConvert = () => {
    const rate = rates[toCurrency] / rates[fromCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="input-section">
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <button onClick={handleConvert}>&rarr;</button>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="result">
        {error && <div className="error">{error}</div>}
        {!error && <p>{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}</p>}
      </div>
    </div>
  );
}

export default CurrencyConverter;

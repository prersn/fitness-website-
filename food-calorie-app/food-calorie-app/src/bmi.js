// BMI.js

import React, { useState } from 'react';
import './bmi1.css'; // Make sure to create this CSS file

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const bmi = weight / Math.pow(height / 100, 2);
    setResult(bmi.toFixed(2));
  };

  return (
    <div id="bmi-calculator" className="bmi-calculator">
      <div className="introduction">
        <h1>Body Mass Index (BMI) Calculator</h1>
        <p>
          BMI is a measure of body fat based on weight and height. Calculate your BMI by entering your weight (in kilograms) and height (in centimeters).
        </p>
      </div>

      <div className="form-container">
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>

        <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>

        {result && <div className="result">Your BMI is: {result}</div>}
      </div>

      <div className="footer">
        <p>&copy; 2023 BMI Calculator. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BMI;

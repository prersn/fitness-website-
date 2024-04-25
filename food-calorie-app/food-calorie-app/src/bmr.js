// BMR.js

import React, { useState } from 'react';
import './bmr1.css'; // Make sure to create this CSS file

const BMR = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // Default gender
  const [result, setResult] = useState(null);

  const calculateBMR = () => {
    // BMR Calculation (using Harris-Benedict equation)
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    setResult(bmr.toFixed(2));
  };

  return (
    <div id="bmr-calculator" className="bmr-calculator">
      <div className="introduction">
        <h1>Basal Metabolic Rate (BMR) Calculator</h1>
        <p>
          BMR represents the number of calories your body needs at rest to maintain normal bodily functions.
          Calculate your BMR using the Harris-Benedict equation based on your weight, height, age, and gender.
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
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button className="calculate-button" onClick={calculateBMR}>Calculate BMR</button>

        {result && <div className="result">Your BMR is: {result} calories/day</div>}
      </div>

      <div className="footer">
        <p>&copy; 2023 BMR Calculator. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BMR;

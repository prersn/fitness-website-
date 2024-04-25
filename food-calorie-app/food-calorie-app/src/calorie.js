// FoodCalorieApp.js

import React, { useState } from 'react';
import axios from 'axios';
import './calorie.css'; // Import the CSS file
import foodImage from './food.jpg';

const FoodCalorieApp = () => {
  const [foodName, setFoodName] = useState('');
  const [calorie, setCalorie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`YOUR_BACKEND_API_URL/food/calorie?name=${foodName}`);
      setCalorie(response.data.calorie);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCalorie(null);
      setError('Food not found');
    }
  };

  return (
    <div>
      
      <div id="app-bar">
        <h1>FOOD CALORIE</h1>
      </div>

      <div id="search-container">
        <img id="food-image" src={foodImage} alt="Food" />
        <input
          id="search-bar"
          type="text"
          placeholder="Enter food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
        <div id="result-container">
          {calorie !== null && <p>{`Calorie: ${calorie}`}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default FoodCalorieApp;

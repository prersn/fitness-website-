// ExerciseApp.js

import React, { useState } from 'react';
import './exercise.css';
import pic1 from'./ex_of_day.gif';
import pic2 from'./work_of_day.jpg';
import pic3 from'./mon_chall.gif';


const ExerciseApp = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const ExerciseResult = ({ exerciseName, detailedStepsLink, caloriesBurned }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswer = () => {
      setIsAnswerVisible(!isAnswerVisible);
    };

    const addExerciseCalories = () => {
      setTotalCalories(totalCalories + caloriesBurned);
      // You can update the UI or make API calls for adding calories to the server.
    };

    return (
      <div className="question" onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
        <h3>{exerciseName}</h3>
        {isAnswerVisible && (
          <div className="answer">
            <p>For detailed steps, visit: <a href={detailedStepsLink} target="_blank" rel="noopener noreferrer">Exercise Steps</a></p>
            <p>Calories burned in 60 minutes: {caloriesBurned}</p>
            <button onClick={addExerciseCalories}>Add Calories</button>
          </div>
        )}
      </div>
    );
  };

  const performSearch = () => {
      const exercises = [
        { exerciseName: 'Push-ups', description: 'Description for Push-ups.', detailedStepsLink: 'https://example.com/push-ups', caloriesBurned: 200 },
        { exerciseName: 'Squats', description: 'Description for Squats.', detailedStepsLink: 'https://example.com/squats', caloriesBurned: 150 },
        { exerciseName: 'Jumping Jacks', description: 'Description for Jumping Jacks.', detailedStepsLink: 'https://example.com/jumping-jacks', caloriesBurned: 100 },
        { exerciseName: 'Burpees', description: 'Description for Burpees.', detailedStepsLink: 'https://example.com/burpees', caloriesBurned: 250 },
        { exerciseName: 'Plank', description: 'Description for Plank.', detailedStepsLink: 'https://example.com/plank', caloriesBurned: 120 },
        { exerciseName: 'Running', description: 'Description for Running.', detailedStepsLink: 'https://example.com/running', caloriesBurned: 300 },
        { exerciseName: 'Cycling', description: 'Description for Cycling.', detailedStepsLink: 'https://example.com/cycling', caloriesBurned: 180 },
        { exerciseName: 'Lunges', description: 'Description for Lunges.', detailedStepsLink: 'https://example.com/lunges', caloriesBurned: 160 },
        { exerciseName: 'Yoga', description: 'Description for Yoga.', detailedStepsLink: 'https://example.com/yoga', caloriesBurned: 90 },
        { exerciseName: 'Swimming', description: 'Description for Swimming.', detailedStepsLink: 'https://example.com/swimming', caloriesBurned: 250 },
        { exerciseName: 'Rowing', description: 'Description for Rowing.', detailedStepsLink: 'https://example.com/rowing', caloriesBurned: 220 },
        { exerciseName: 'Jump Rope', description: 'Description for Jump Rope.', detailedStepsLink: 'https://example.com/jump-rope', caloriesBurned: 130 },
        { exerciseName: 'Biking', description: 'Description for Biking.', detailedStepsLink: 'https://example.com/biking', caloriesBurned: 170 },
        { exerciseName: 'Deadlifts', description: 'Description for Deadlifts.', detailedStepsLink: 'https://example.com/deadlifts', caloriesBurned: 240 },
        { exerciseName: 'Bench Press', description: 'Description for Bench Press.', detailedStepsLink: 'https://example.com/bench-press', caloriesBurned: 190 },
        { exerciseName: 'Sit-ups', description: 'Description for Sit-ups.', detailedStepsLink: 'https://example.com/sit-ups', caloriesBurned: 140 },
        { exerciseName: 'Mountain Climbers', description: 'Description for Mountain Climbers.', detailedStepsLink: 'https://example.com/mountain-climbers', caloriesBurned: 110 },
        { exerciseName: 'Dumbbell Curls', description: 'Description for Dumbbell Curls.', detailedStepsLink: 'https://example.com/dumbbell-curls', caloriesBurned: 160 },
        { exerciseName: 'Leg Press', description: 'Description for Leg Press.', detailedStepsLink: 'https://example.com/leg-press', caloriesBurned: 210 },
        { exerciseName: 'Jump Squats', description: 'Description for Jump Squats.', detailedStepsLink: 'https://example.com/jump-squats', caloriesBurned: 170 },
      ];
    const filteredExercises = exercises.filter(exercise =>
      exercise.exerciseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredExercises);
  };

  return (
    <div>
      <header>
        <h1>Exercises</h1>
      </header>
      <main>
        <section className="exercise-card">
          <h2>Exercise of the Day</h2>
          <img src={pic1} alt="Exercise Image" />
        </section>

        <section className="workout-card">
          <h2>Workout of the Day</h2>
          <img src={pic2} alt="Workout Image" />
        </section>

        <section className="challenge-card">
          <h2>Monthly Challenge</h2>
          <img src={pic3} alt="Challenge Image" />
        </section>

        <section className="search-section">
          <label htmlFor="exercise-search">Search for an exercise:</label>
          <input
            type="text"
            id="exercise-search"
            placeholder="Enter exercise name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button id="search-button" onClick={performSearch}>Search</button>
        </section>

        <section className="results-section" id="results-section">
          <h2 id="search-results-heading" style={{ display: searchResults.length > 0 ? 'block' : 'none' }}>
            Search Results
          </h2>
          <ul id="exercise-results">
            {searchResults.map(exercise => (
              <li key={exercise.exerciseName}>
                <ExerciseResult
                  exerciseName={exercise.exerciseName}
                  detailedStepsLink={exercise.detailedStepsLink}
                  caloriesBurned={exercise.caloriesBurned}
                />
              </li>
            ))}
          </ul>
          <p id="no-results-message" style={{ display: searchResults.length === 0 ? 'block' : 'none' }}>
            No results found.
          </p>
        </section>

        <section id="total-calories-section">
          <h2>Total Calories</h2>
          <div id="total-calories-details"></div>
          <p>Total Calories: <span id="total-calories">{totalCalories}</span></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Exercise Lookup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExerciseApp;
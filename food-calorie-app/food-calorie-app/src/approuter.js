import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './homepage.js'; // Import the HomePage component
import TestingPage from './testing.js';
import CalorieCounterPage from './calorie.js';
import Exercise from './exercise.js';
import Contact from './contact_us.js';
import Testimo from './testi.js';
import Blog from './blogs.js';
import QA from './qa.js';
import Appr from './appr.js';
import Bmi from './bmi.js';
import Bmr from './bmr.js';
import './homepage.css'; 
import './approuter.css'; // Import the CSS file
import logoPic from './randomLogo.jpg';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <div id="top-bar">
          <img src={logoPic} alt="Logo" id="logo" />
          
        </div>

          <div className="header-content">
              <h1>My Fitness Pal</h1>
              <nav>
                <Link to="/Homepage">Homepage</Link>
                <Link to="/testing">Testing</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/nutrition">Nutrition</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/bmi">BMI</Link>
                <Link to="/bmr">BMR</Link>
                <Link to="/appr">App recommendations</Link>
                <Link to="/testimo">Testimony</Link>
                <Link to="/q-and-a">Q&A</Link>
                <Link to="/contact">Contact us</Link>
              </nav>
            </div>

        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Add a route for the HomePage */}
          <Route path="/testing" element={<TestingPage />} />
          <Route path="/nutrition" element={<CalorieCounterPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/workouts" element={<Exercise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/q-and-a" element={<QA />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/testimo" element={<Testimo />} />
          <Route path="/appr" element={<Appr />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<Bmr />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;

// TestingConsultationApp.js
import React from 'react';
import './testing.css'; // Import the CSS file
import profImage from './profile4.png';

const TestingConsultationApp = () => {
  return (
    <div>
      

      <div id="app-bar">
        <h1>TESTING AND CONSULTATION</h1>
      </div>

      <div id="testing-section">
        <h2>Individual</h2>
        <div className="circle-container">
          <img id="circle-image" src={profImage} alt="Test 1" />
          <p className="circle-name">Test 1</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Test 2" />
          <p className="circle-name">Test 2</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Test 3" />
          <p className="circle-name">Test 3</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Test 4" />
          <p className="circle-name">Test 4</p>
        </div>
      </div>

      <div id="packages-section">
        <h2>Packages</h2>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Package 1" />
          <p className="circle-name">Package 1</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Package 2" />
          <p className="circle-name">Package 2</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Package 3" />
          <p className="circle-name">Package 3</p>
        </div>
        <div className="circle-container">
        <img id="circle-image" src={profImage} alt="Package " />
          <p className="circle-name">Package 4</p>
        </div>
      </div>
    </div>
  );
};

export default TestingConsultationApp;





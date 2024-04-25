import React from 'react';
import './test1.css'; 
import eyetest from './child1.png';
import eyetest1 from './child3.jpg';

const EyeCheckupPage = () => {
  return (
    <div className="eyeCheckupPage">
      <div className="titleContainer">
        <div className="labelContainer">
          <img className="labelImage" src={eyetest} alt="Eye Checkup Label" />
        </div>
        <div className="titleContentContainer">
          <h1>Eye test information</h1>
          <h4>All you need to know</h4>
        </div>
      </div>
      <div>
        <div className="Book">
          <h2>Book an Eye Test</h2>
          <h4>There are over 100 ways of testing your eyes.</h4>
          <p>Our opticians will select the tests that are best for you.</p>
        </div>
      </div>
      <div>
        <div className="whyBook">
          <h2>Why is an eye test important?</h2>
          <p>Eye tests can tell us whether your eyesight has changed, as well as detect any eye health conditions and even some general health issues.</p>
        </div>
      </div>
      <div>
        <div className="howOften">
          <img src={eyetest1} alt="Eye Test" /> 
          <h2>How often do you need an eye test?</h2>
          <p>Having regular eye tests means you can keep on top of your prescription and eye health. How often you should have your eyes checked will depend on your eye health. The NHS recommend adults over 16 have an eye test every two years. However, your optician will be able to let you know how often is best for you.If you’re experiencing recent changes to your vision, book an appointment with your closest Vision Express optician.</p>
        </div>
      </div>
      <div>
        <div className="whatDetect">
          <h2>What can eye test detect?</h2>
          <p>An eye test can detect underlying health problems that you aren't aware of, such as Diabetes, High Blood Pressure, some brain tumours, and multiple sclerosis. The eye test will detect if your vision can be improved. You may just be used to seeing less clearly so don't realise it can be improved upon.</p>
        </div>
      </div>
    
      <div className="featuresContainer">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>
    </div>
  );
};

export default EyeCheckupPage;

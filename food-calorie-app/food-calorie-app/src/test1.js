import React from 'react';
import './test1.css'; 
import eyetest from './blood1.png';
import eyetest1 from './blood2.webp';

const EyeCheckupPage = () => {
  return (
    <div className="eyeCheckupPage">
      <div className="titleContainer">
        <div className="labelContainer">
          <img className="labelImage" src={eyetest} alt="Eye Checkup Label" />
        </div>
        <div className="titleContentContainer">
          <h1>Blood test information</h1>
          <h4>All you need to know</h4>
        </div>
      </div>
      <div>
        <div className="Book">
          <h2>Book an Blood Test</h2>
          <p>In a typical comprehensive metabolic panel or complete blood count, there may be around 20 or more individual components measured.</p>
        </div>
      </div>
      <div>
        <div className="whyBook">
          <h2>Why is a blood test important?</h2>
          <p>Blood tests are crucial for diagnosing diseases, monitoring organ function, and assessing overall health. They provide vital information on conditions like diabetes, infections, and nutritional deficiencies.</p>
        </div>
      </div>
      <div>
        <div className="howOften">
          <img src={eyetest1} alt="Eye Test" /> 
          <h2>How often do you need a blood test?</h2>
          <p>The frequency of blood tests depends on individual health factors and medical conditions. For routine check-ups, annually is common, while those with chronic conditions or specific concerns may require more frequent testing.</p>
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

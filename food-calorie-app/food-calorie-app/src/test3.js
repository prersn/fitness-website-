import React from 'react';
import './test1.css'; 
import eyetest from './thy1.avif';
import eyetest1 from './thy2.jpg';

const EyeCheckupPage = () => {
  return (
    <div className="eyeCheckupPage">
      <div className="titleContainer">
        <div className="labelContainer">
          <img className="labelImage" src={eyetest} alt="Eye Checkup Label" />
        </div>
        <div className="titleContentContainer">
          <h1>Thyroid test information</h1>
          <h4>All you need to know</h4>
        </div>
      </div>
      <div>
        <div className="Book">
          <h2>Book a thyroid Test</h2>
          <p>There are several types of thyroid tests, but a common thyroid panel typically includes 6 to 7 tests to assess thyroid function comprehensively.</p>
        </div>
      </div>
      <div>
        <div className="whyBook">
          <h2>Why is a thyroid test important?</h2>
          <p>Thyroid tests are important because they assess the functioning of the thyroid gland, a crucial regulator of metabolism, energy production, and overall body function. </p>
        </div>
      </div>
      <div>
        <div className="howOften">
          <img src={eyetest1} alt="Eye Test" /> 
          <h2>How often do you need a thyroid test?</h2>
          <p>Thyroid checkups are typically done annually, but the frequency may vary based on individual health factors and conditions. Individuals with thyroid disorders or undergoing thyroid treatment may require more frequent monitoring as advised by their healthcare provider. Regular checkups ensure timely detection and management of thyroid-related issues.</p>
        </div>
      </div>
      <div>
        <div className="whatDetect">
          <h2>What can thyroid test detect?</h2>
          <p>Thyroid tests can detect abnormalities in thyroid hormone levels, helping diagnose conditions like hypothyroidism and hyperthyroidism. They are crucial for assessing thyroid function and guiding appropriate medical interventions.</p>
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

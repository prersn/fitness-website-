import React, { useState } from 'react';
import './testing.css';
import profImage from './profile4.png';
import Test1 from './test1.js';
import Test2 from './test2.js';
import Test3 from './test3.js';
import Test4 from './test4.js';
import Test5 from './test5.js';
import Test6 from './test6.js';
import Test7 from './test7.js';
import Test8 from './test8.js';

const TestingConsultationApp = () => {
  const [currentPage, setCurrentPage] = useState('both');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'both':
        return (
          <div>
            <div id="testing-section">
             
              <div className="circle-container" onClick={() => handleNavigation('test1')}>
                <img id="circle-image" src={profImage} alt="Test 1" />
                <p className="circle-name">Blood Test</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test2')}>
                <img id="circle-image" src={profImage} alt="Test 2" />
                <p className="circle-name">Eye Test</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test3')}>
                <img id="circle-image" src={profImage} alt="Test 3" />
                <p className="circle-name">Thyroid Test</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test4')}>
                <img id="circle-image" src={profImage} alt="Test 4" />
                <p className="circle-name">MRI Scan</p>
              </div>
            </div>
            
            <div id="testing-section">
              
              <div className="circle-container" onClick={() => handleNavigation('test5')}>
                <img id="circle-image" src={profImage} alt="Test 5" />
                <p className="circle-name">Full Body Checkup</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test6')}>
                <img id="circle-image" src={profImage} alt="Test 6" />
                <p className="circle-name">Test 6</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test7')}>
                <img id="circle-image" src={profImage} alt="Test 7" />
                <p className="circle-name">Test 7</p>
              </div>
              <div className="circle-container" onClick={() => handleNavigation('test8')}>
                <img id="circle-image" src={profImage} alt="Test 8" />
                <p className="circle-name">Test 8</p>
              </div>
            </div>
          </div>
        );
      case 'test1':
        return <Test1 />;
      case 'test2':
        return <Test2 />;
      case 'test3':
        return <Test3 />;
      case 'test4':
        return <Test4 />;
      case 'test5':
        return <Test5 />;
      case 'test6':
        return <Test6 />;
      case 'test7':
        return <Test7 />;
      case 'test8':
        return <Test8 />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div id="app-bar">
        <h1>TESTING AND CONSULTATION</h1>
      </div>

      {renderContent()}
    </div>
  );
};

export default TestingConsultationApp;

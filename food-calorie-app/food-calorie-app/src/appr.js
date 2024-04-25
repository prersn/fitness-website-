import React from 'react';
//import './appr.css'; 
import app1 from './app1.jpg';
import app2 from './app2.jpg';
import app3 from './app3.jpg';
import app4 from './app4.jpg';
import app5 from './app5.jpg';
import app6 from './app6.jpg';

const App = () => 
{
  return (
    <div>
      <header>

        <div className="header">
          <h1>Additional Apps</h1>
        </div>
      </header>
      <div id="content">

        <div id="rounded-rectangle">
          {/* Images positioned in rows and columns within the rounded rectangle */}
          <img src={app1} className="circle-image" alt="Image 1" />
          <img src={app2}  className="circle-image" alt="Image 2" />
          <img src={app3}  className="circle-image" alt="Image 3" />
          <img src={app4}  className="circle-image" alt="Image 4" />
          <img src={app5}  className="circle-image" alt="Image 5" />
          <img src={app6}  className="circle-image" alt="Image 6" />
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <a href="https://www.fitbit.com/global/us/technology/fitbit-app">
              <img src={app1} className="circle-image" alt="Image 1" />
            </a>
            fitbit is designed to keep up with your goals and boost your motivation
          </div>
          <div className="grid-item">
            <a href="#">
              <img src={app2} className="circle-image" alt="Image 2" />
            </a>
            Apple Health is an exclusive service for iOS users where they get to log their health-related information
          </div>
          <div className="grid-item">
            <a href="#">
              <img src={app3} className="circle-image" alt="Image 3" />
            </a>
            Google fit aims to help users achieve their fitness goals via customized coaching and actionable tips based on user health and activity history
          </div>
          <div className="grid-item">
            <a href="#">
              <img src={app4} className="circle-image" alt="Image 4" />
            </a>
            Strava lets the user track their running and riding. Everything (hikes, yoga, and many more sports) can be kept recorded
          </div>
          <div className="grid-item">
            <a href="#">
              <img src={app5} className="circle-image" alt="Image 5" />
            </a>
            Withings Health Mate helps the user in understanding and fully personalized tracking of health.
          </div>
          <div className="grid-item">
            <a href="#">
              <img src={app6} className="circle-image" alt="Image 6" />
            </a>
            MapMyFitness mainly focuses on working out and exercises. You can discover new workout routines to crush your goals
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

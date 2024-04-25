// HomePage.js

import React from 'react';
import './homepage.css'; // Import the CSS fil
import ReactDOM from 'react-dom';
import step1 from './goal_step1.jpg';
import step2 from './goal_step2.jpg';
import step3 from './goal_step3.jpg';
import sync from './sync_img.jpg';
import track from './food_track.jpg';
import work from './workout_tracker.jpg';
import foo from './nutrition_tracker.jpg';


const HomePage = () => {
  const toggleAnswer = (answerId) => {
    const answerElement = document.getElementById(answerId);
    answerElement.style.display =
      answerElement.style.display === 'none' || answerElement.style.display === ''
        ? 'block'
        : 'none';
  };

  return (
    <div className="homepage">
      <header>
          </header>
          <section className="hero">
            <div className="hero-content">
              <h2>Your Fitness Journey Starts Here</h2>
              <p>Track your workouts, monitor your nutrition, and achieve your fitness goals.</p>
              
            </div>
          </section>
          <section id="features" className="features">
            <div className="feature">
              <h3>Workout Tracker</h3>
             
              <p>Log your workouts and track your progress over time.</p>
            </div>
            <div className="feature">
              <h3>Nutrition Diary</h3>
              <p>Keep a record of your meals and monitor your nutritional intake.</p>
            </div>
          </section>
          <section id="why-choose-us" className="why-choose-us">
            <div className="why-choose-us-content">
              <h2>Why Choose Us</h2>
              <p>Our platform is designed with your success in mind. Here are some reasons to choose us:</p>
              <ul>
                <li>Comprehensive workout tracking</li>
                <li>Personalized nutrition insights</li>
                <li>Community support and motivation</li>
                <li>Easy-to-use mobile app</li>
              </ul>
            </div>
          </section>
          <section id="testimonials" className="testimonials">
            <div className="testimonials-content">
              <h2>What Our Users Say</h2>
              <div className="testimonial">
                <p>"I love how easy it is to track my workouts and stay on top of my fitness goals. The community support
                  is fantastic!"</p>
                <p>- Jane Doe</p>
              </div>
              <div className="testimonial">
                <p>"The nutrition diary has been a game-changer for me. I can easily see what I'm eating and make
                  healthier choices."</p>
                <p>- John Smith</p>
              </div>
            </div>
          </section>
 
<section id="hit-goals" class="hit-goals">
  <div class="hit-goals-content">
    <h2>Hit Your Health Goals in 1-2-3</h2>
    <div class="goal-step">
      <div class="step-text left">
        <h3>Track food, fitness & fasting</h3>
        <p>Tracking calories and macros is easy with our barcode scanner and device integration.</p>
      </div>
      <div class="step-image right">
        <img src={step1} alt="Track Food Image" style={{ width: '200px', height: '150px' }}/> 
      </div>
    </div>
    <div class="goal-step">
      <div class="step-image left">
        <img src={step2} alt="Learn What Works Image" style={{ width: '200px', height: '150px' }}/>
      </div>
      <div class="step-text right">
        <h3>Learn what works</h3>
        <p>Personalized nutrition insights reveal what's working so you can make smarter choices.</p>
      </div>
    </div>
    <div class="goal-step">
      <div class="step-text left">
        <h3>Change your habits and reach your goals</h3>
        <p>Now you have the tools and knowledge to build healthy habits for life.</p>
      </div>
      <div class="step-image right">
        <img src={step3} alt="Change Habits Image" style={{ width: '200px', height: '150px' }}/>
      </div>
    </div>
  </div>
</section>
<section id="sync-section" className="sync-section">
  <div className="sync-content">
    <div className="sync-text">
      <h2>35+ Apps and Devices</h2>
      <p>Sync steps, weight, workouts & more with our integrated platform. Connect with your favorite apps and devices to track your progress effortlessly.</p>
    </div>
    <div className="sync-image">
      <img src={sync} alt="Sync Image" />
    </div>
  </div>
</section>
<section id="food-logging" className="blog-section">
          <div className="blog-content">
            <h2>Essential Guide to Food Logging</h2>
            <p>Whether your goal is to lose weight, build strength, perform at your peak or improve your overall health, keeping an accurate food journal of what you eat and drink is essential. It provides valuable insight into your nutrition habits, so you can see trends and make adjustments as needed.</p>
            <a href="https://www.myfitnesspal.com/blog/food-logging" target="_blank">Read more on our blog ›</a>
          </div>
        </section>
                 
        <section id="things-learn" className="blog-section">
          <div className="blog-content">
            <h2>11 Things You will Learn Using MyFitnessPal</h2>
            <p>There is no easier way to track your food, activity, steps, water, weight, and measurements than MyFitnessPal. That’s why more than 200 million people use the app to achieve their health and fitness goals.</p>
            <a href="https://www.myfitnesspal.com/blog/things-youll-learn" target="_blank">Read more on our blogs ›</a>
          </div>
        </section>
        
        <section id="healthy-eating" className="blog-section">
          <div className="blog-content">
            <h2>Essential Guide to Healthy Eating</h2>
            <p>When you start learning more about nutrition, it can seem overwhelming. For people who are interested, there is definitely a lot to learn and explore, but, in the end, basic nutrition is quite simple. It’s so simple, in fact, that we know you can eat better by focusing on these eight things.</p>
            <a href="https://www.myfitnesspal.com/blog/healthy-eating" target="_blank">Read more on our blogs ›</a>
          </div>
        </section>
        <section id="food-tracking" className="food-tracking">
  <div className="food-tracking-content">
    <div className="food-tracking-text">
      <h2>If it is edible, it is in here</h2>
      <p>Food tracking app with 18 million global foods. Search food calories, macros, and more to stay on top of your nutrition.</p>
    </div>
    <div className="food-tracking-image">
      <img src={track} alt="Food Tracking Image" />
    </div>
  </div>
</section>

        <section id="q-and-a" className="q-and-a">
          <div className="q-and-a-content">
            <h2>Q&A</h2>
            <div className="question" onClick={() => toggleAnswer('answer1')}>
              <h3>How can I track my workouts?  </h3>
              <p id="answer1" className="answer">Our workout tracker allows you to log your exercises, set goals, and track your progress over time. Simply navigate to the "Workouts" section in the app and start logging your activities.</p>
            </div>
            <div className="question" onClick={() => toggleAnswer('answer2')}>
              <h3>Is there a community for sharing fitness tips? </h3>
              <p id="answer2" className="answer">Yes! We have a vibrant community where you can connect with other users, share your achievements, and get advice from fitness enthusiasts. Join the community and stay motivated!</p>
            </div>
            <div className="question" onClick={() => toggleAnswer('answer3')}>
              <h3>How does the nutrition diary work? </h3>
              <p id="answer3" className="answer">Our nutrition diary lets you record your meals, track your calorie intake, and monitor your nutritional balance. You can easily add food items, set nutritional goals, and make informed choices for a healthier lifestyle.</p>
            </div>
          </div>
          </section>
          <section id="download" className="download">
            <div className="download-content">
              <h2>Download Our App</h2>
              <p>Start your fitness journey with our mobile app. Available on iOS and Android.</p>
              <div className="app-buttons">
                <button>Download on the App Store</button>
                <button>Get it on Google Play</button>
              </div>
            </div>
          </section>
          <section id="sign-up" className="sign-up">
            <div className="sign-up-content">
              <h2>Sign Up Today</h2>
              <p>Join our community and take control of your fitness.</p>
              <button>Sign Up</button>
            </div>
          </section>
          <section id="about-us" className="about-us">
            <div className="about-us-content">
              <h2>About Us</h2>
              <p>We are dedicated to helping you achieve your fitness goals. Our team of experts is passionate about
                providing you with the tools and support you need on your fitness journey. Whether you're a seasoned
                athlete or just starting, we're here to support you every step of the way.</p>
            </div>
          </section>
          <footer>
            <div className="footer-content">
              <p>&copy; 2023 My Fitness Website. All rights reserved.</p>
              <nav>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </nav>
            </div>
          </footer>
        </div>
      );
    };

    // Render the React app
    const rootElement = document.getElementById('root');
    ReactDOM.render(<HomePage />, rootElement);
export default HomePage;

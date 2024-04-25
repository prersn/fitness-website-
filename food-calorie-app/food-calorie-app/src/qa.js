// QAPage.js

import React, { useState } from 'react';
import './q&a1.css'; // Import your stylesheet

const QAPage = () => {
  const [answersVisibility, setAnswersVisibility] = useState({
    'qa-answer1': false,
    'qa-answer2': false,
    'qa-answer3': false,
    'qa-answer4': false,
    'qa-answer5': false,
    'qa-answer6': false,
    // Add more entries as needed
  });

  const toggleAnswer = (answerId) => {
    setAnswersVisibility((prevVisibility) => ({
      ...prevVisibility,
      [answerId]: !prevVisibility[answerId],
    }));
  };

  return (
    <div className="q-and-a">
      <div className="q-and-a-content">
        <h2 className='heads'>Frequently Asked Question and Answers</h2>
        <div className="question" onClick={() => toggleAnswer('qa-answer1')}>
          <h3>How can I track my workouts? </h3>
          <p className={`answer ${answersVisibility['qa-answer1'] ? 'visible' : ''}`}>
            Our workout tracker allows you to log your exercises, set goals, and track your progress over time. Simply navigate to the "Workouts" section in the app and start logging your activities.
          </p>
        </div>

        <div className="question" onClick={() => toggleAnswer('qa-answer2')}>
          <h3>Is there a community for sharing fitness tips? </h3>
          <p className={`answer ${answersVisibility['qa-answer2'] ? 'visible' : ''}`}>
            Yes! We have a vibrant community where you can connect with other users, share your achievements, and get advice from fitness enthusiasts. Join the community and stay motivated!
          </p>
        </div>

        <div className="question" onClick={() => toggleAnswer('qa-answer3')}>
          <h3>How does the nutrition diary work? </h3>
          <p className={`answer ${answersVisibility['qa-answer3'] ? 'visible' : ''}`}>
            Our nutrition diary lets you record your meals, track your calorie intake, and monitor your nutritional balance. You can easily add food items, set nutritional goals, and make informed choices for a healthier lifestyle.
          </p>
        </div>
        <div className="question" onClick={() => toggleAnswer('qa-answer4')}>
              <h3>Can I customize my workout goals?</h3>
              <p className={`answer ${answersVisibility['qa-answer4'] ? 'visible' : ''}`}>Absolutely! Our app provides flexibility for setting personalized workout goals. You can customize the type, duration, and intensity of your exercises to align with your fitness objectives.</p>
        </div>
        <div className="question" onClick={() => toggleAnswer('qa-answer5')}>
              <h3>Is the app available on all devices?</h3>
              <p className={`answer ${answersVisibility['qa-answer5'] ? 'visible' : ''}`}>Yes, My Fitness Pal is available on iOS and Android devices. You can seamlessly switch between your phone, tablet, or any other supported device to access your fitness data.</p>
        </div>
        <div className="question" onClick={() => toggleAnswer('qa-answer6')}>
              <h3>What features make the nutrition diary unique?</h3>
              <p className={`answer ${answersVisibility['qa-answer6'] ? 'visible' : ''}`}>Our nutrition diary stands out with features like barcode scanning, personalized nutritional insights, and a vast database of food items. It's designed to provide a comprehensive view of your dietary habits.</p>
        </div>
      </div>
    </div>
  );
};

export default QAPage;

import React, { useState } from 'react';
import './blogs.css';
import nutr from './nutr.jpg';
import exer from './exer.jpg';
import rec from './rec.jpg';
import NutContent from './nut.js'; // Import your .js files
import ExerContent from './exer.js';
import RecContent from './rec.js';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case '/nut':
        return <NutContent />;
      case '/exer':
        return <ExerContent />;
      case '/rec':
        return <RecContent />;
      default:
        return (
          <div>
            <header>
              <div className="header">
                <h1>BLOGS</h1>
              </div>
            </header>

            <div className="blog-item" onClick={() => handleNavigate('/nut')}>
              <img id='img' src={nutr} alt="Nutrition" />
              <p>Welcome to our dedicated space for nutrition! Dive into 
                the science of nourishing your body for optimal health. Uncover the latest 
                research, practical tips, and expert advice on creating a nutrition plan that 
                aligns with your wellness goals. From understanding essential nutrients to decoding 
                dietary myths, we're here to empower you on your journey to a healthier lifestyle. 
                Let's navigate the intricacies of nutrition together and make informed choices for a
                vibrant, well-nourished life.</p>
            </div>

            <div className="blog-item" onClick={() => handleNavigate('/exer')}>
              <img id='img' src={exer} alt="Exercise" />
              <p>Step into a world of movement and vitality with our exercise blog. Unleash the 
                power of physical activity as we guide you through effective workouts, fitness tips, 
                and the latest trends in the exercise world. Whether you're a seasoned fitness enthusiast
                or just starting your wellness journey, find inspiration, motivation, and expert insights 
                to sculpt a stronger, healthier version of yourself. Get ready to embrace the joy of movement
                and transform your exercise routine into a rewarding lifestyle. Let's embark on this journey 
                to a fitter, more energetic you!</p>
            </div>

            <div className="blog-item" onClick={() => handleNavigate('/rec')}>
              <img id='img' src={rec} alt="Recipes" />
              <p>Embark on a journey to optimal health and wellness with our nutrition blog. 
                Discover a wealth of information on balanced diets, wholesome recipes, and expert insights.
                From nourishing your body to understanding the power of superfoods. Dive into our articles, explore delicious recipes, 
                and embrace a vibrant, nutrition-packed lifestyle. Let's elevate your 
                well-being together!</p>
            </div>

            <button className="add-button">Add</button>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default BlogPage;

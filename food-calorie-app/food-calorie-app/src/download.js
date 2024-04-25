// DownloadPage.js

import React from 'react';
import './download1.css'; // Import your stylesheet

const DownloadPage = () => {
  return (
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
  );
};

export default DownloadPage;


import React from 'react';
import './App.css';

function App() {
  const scrollToDashboard = () => {
    const target = document.getElementById('dashboard');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      <h1 className="title-glow">
        Machine Automated Data-Driven Yieldbot - <span className="maddy-pink">M A D D Y</span>
      </h1>

      <div className="content-row">
        <div className="intro-text">
          <h2>Hi, I'm Maddy</h2>
          <p>I am going to change <br /> your life.</p>
          <button className="launch-button" onClick={scrollToDashboard}>Launch Maddy</button>
        </div>

        <div className="video-wrapper">
          <video
            src="/maddy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="maddy-video"
          ></video>
        </div>
      </div>

      <div id="dashboard" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  );
}

export default App;

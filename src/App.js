
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
        Machine Automated Data-Driven Yieldbot - <span style={{ color: '#ec4899' }}>M A D D Y</span>
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '24rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Hi, I'm Maddy</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            I am going to change <br /> your life.
          </p>
          <button style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#ec4899',
            border: 'none',
            borderRadius: '0.375rem',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Launch Maddy
          </button>
        </div>

        <div style={{ width: '100%', maxWidth: '36rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}>
          <video
            src={require("./Maddy Black Background 3.mp4")}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './features.css';
import laa from '../../assets/laa.png'
import goethe from '../../assets/goethe.png'

const Features = () => {
  return (
      <div className="laa__contribute-container">
        <h3 id="contribute-text">Contribute to Library Tracker</h3>
        <div className="laa__contribute">
          <h1 className="headline">Become A Library Administrator</h1>
          <h4 className="description">Are you a library administrator? Apply to manage your Library data on Library Tracker.</h4>
          <button type='button' className="signup-btn">Sign Up</button>
        </div>

        <div className="laa__track">
          <h1 className="track-cta">Start tracking a library now</h1>
        </div>

        <div className="laa__logos">
          <img src={laa} alt="library-logo" />
          <img src={goethe} alt="library-logo" />
        </div>
      </div>



  )
}

export default Features
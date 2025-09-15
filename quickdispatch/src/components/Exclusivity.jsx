import React from 'react';
import './exclusivity.css';
import featuredImage from '../assets/featured.jpg';


const Exclusivity = () => {
  return (
    <div className='exclusivity'>
      <div 
        className='exclusivity-image' 
        style={{ backgroundImage: `url(${featuredImage})` }}>
      </div>
      <div className='exclusivity-container'>
        <h1 className='exclusivity-title'>BEYOND THE DAYS - EXCLUSIVITY LIST</h1>
        <p className='exclusivity-subtitle'>
          Get access before the public launch and extra 20% OFF once we launch!
        </p>
        <form className='exclusivity-form'>
          <input type="text" placeholder="YOUR NAME" className="exclusivity-input" />
          <input type="email" placeholder="EMAIL ADDRESS" className="exclusivity-input" />
          <button type="submit" className="exclusivity-button">
            SUBSCRIBE 
            <span className="arrow-icon">➔</span>
          </button>
        </form>
        <p className='exclusivity-privacy'>We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
}

export default Exclusivity;
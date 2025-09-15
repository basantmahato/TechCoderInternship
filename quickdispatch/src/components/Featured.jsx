import './Featured.css'
import featuredImage from '../assets/featured.jpg';


const Featured = () => {
  return (
    <div className='featured-container' style={{ backgroundImage: `url(${featuredImage})` }}>

      <div>
        <button className='featured-button1'>
          Join over 5,500+ Customers who have trusted us.
        </button>
      </div>

      <div className='featured-text'>
        <h2>
          Get the fastest delivery with our interconnected massive network in
          all over India.
        </h2>
      </div>

      <div className='featured-p'>
        <p>
          Inside Beyond the Days you’ll find a proven 90-day system to become a
          consistent creator, equipped with the knowledge to build a personal
          brand that truly represents who you are — powered by the Consistency
          Tracker App and Tim’s learning materials. 
        </p>
      </div>

      <div>
        <button className='featured-button2'>
          📈 Join 64 Customers who have already on the exclusivity list
        </button>
      </div>

      <div>
        <button className='primary-button'>
          Get Fastest Delivery
        </button>
      </div>

      <div className='featured-p2'>
        <p>
          No payment required - just your email and phone number.
        </p>
      </div>

      <div class="scroll-wrapper">
        <div class="scroll-container">
          <div class="pill">Monthly review</div>
          <div class="pill">1 on 1 Chat</div>
          <div class="pill">Private Community</div>
          <div class="pill">Certificate</div>
          

          <div class="pill">Monthly review</div>
          <div class="pill"> 1 on 1 Chat</div>
          <div class="pill">Private Community</div>
          <div class="pill">Certificate</div>

          <div class="pill">Monthly review</div>
          <div class="pill"> 1 on 1 Chat</div>
          <div class="pill">Private Community</div>
          <div class="pill">Certificate</div>

          <div class="pill">Monthly review</div>
          <div class="pill"> 1 on 1 Chat</div>
          <div class="pill">Private Community</div>
          <div class="pill">Certificate</div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;

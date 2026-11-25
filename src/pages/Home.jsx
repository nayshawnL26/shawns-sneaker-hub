
import { Link } from "react-router";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO THE HUB</p>
          <h1>Find Your Next Favorite Sneaker.</h1>
          <p>
            Discover fresh styles, classic designs, and everyday sneakers
            at Shawn's Sneaker Hub. Your style starts from the ground up.
          </p>

          <Link to="/shop" className="primary-button">
            Explore Sneakers
          </Link>
        </div>

        <div className="hero-visual">
          <span className="hero-shoe">👟</span>
          <p>STYLE THAT MOVES WITH YOU</p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p className="eyebrow">WHY SHOP WITH US</p>
          <h2>More Than Just Sneakers</h2>
          <p>Find the style and comfort that fit your everyday life.</p>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon="👟"
            title="Fresh Styles"
            description="Explore sneaker styles for different tastes and occasions."
          />

          <FeatureCard
            icon="⭐"
            title="Classic Favorites"
            description="Discover timeless looks and popular sneaker designs."
          />

          <FeatureCard
            icon="💯"
            title="Everyday Comfort"
            description="Find footwear that looks good and feels comfortable."
          />
        </div>
      </section>

      <section className="home-cta">
        <h2>Your Next Pair Is Waiting</h2>
        <p>Browse the collection and find your next favorite look.</p>
        <Link to="/shop" className="primary-button">
          Shop Now
        </Link>
      </section>
    </div>
  );
}

export default Home;

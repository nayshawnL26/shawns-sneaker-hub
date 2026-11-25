
import { Link } from "react-router";

function NotFound() {
  return (
    <section className="message-page">
      <p className="eyebrow">404 ERROR</p>
      <h1>Looks Like You Took a Wrong Turn!</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="primary-button">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;

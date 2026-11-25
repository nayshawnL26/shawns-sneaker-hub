
import { Link, useParams } from "react-router";
import sneakers from "../data/sneakers.json";

function SneakerDetails() {
  const { id } = useParams();

  const sneaker = sneakers.find((item) => item.id === id);

  if (!sneaker) {
    return (
      <section className="message-page">
        <h1>Sneaker Not Found</h1>
        <p>Sorry, we couldn't find that sneaker.</p>
        <Link to="/shop" className="primary-button">
          Return to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="details-page">
      <div className="details-image">
        <img src={sneaker.image} alt={sneaker.name} />
      </div>

      <div className="details-information">
        <p className="eyebrow">{sneaker.brand}</p>
        <h1>{sneaker.name}</h1>
        <p className="details-price">${sneaker.price.toFixed(2)}</p>
        <p className="details-category">
          Category: {sneaker.category}
        </p>
        <p>{sneaker.description}</p>

        <Link to="/shop" className="primary-button">
          Back to Sneakers
        </Link>
      </div>
    </section>
  );
}

export default SneakerDetails;

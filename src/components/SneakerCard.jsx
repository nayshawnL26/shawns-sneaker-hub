
import { Link } from "react-router";

function SneakerCard({ sneaker }) {
  return (
    <article className="sneaker-card">
      <Link to={`/sneakers/${sneaker.id}`} className="sneaker-image-link">
        <img
          src={sneaker.image}
          alt={sneaker.name}
          className="sneaker-image"
          onError={(event) => {
            console.log("Image failed to load:", sneaker.image);
          }}
        />
      </Link>

      <div className="sneaker-card-info">
        <p className="sneaker-brand">{sneaker.brand}</p>
        <h3>{sneaker.name}</h3>
        <p className="sneaker-price">${sneaker.price.toFixed(2)}</p>

        <Link to={`/sneakers/${sneaker.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default SneakerCard;

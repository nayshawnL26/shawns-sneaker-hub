
import { useEffect, useState } from "react";
import sneakers from "../data/sneakers.json";
import SneakerCard from "../components/SneakerCard";
import SearchBar from "../components/SearchBar";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

  useEffect(() => {
    const results = sneakers.filter((sneaker) => {
      const search = searchTerm.toLowerCase();

      return (
        sneaker.name.toLowerCase().includes(search) ||
        sneaker.brand.toLowerCase().includes(search) ||
        sneaker.category.toLowerCase().includes(search)
      );
    });

    setFilteredSneakers(results);
  }, [searchTerm]);

  return (
    <section className="shop-page">
      <div className="page-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Shop Sneakers</h1>
        <p>Find your next favorite pair from our sneaker collection.</p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <p className="results-count">
        {filteredSneakers.length} sneaker(s) found
      </p>

      {filteredSneakers.length > 0 ? (
        <div className="sneaker-grid">
          {filteredSneakers.map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      ) : (
        <p className="no-results">
          No sneakers found. Try another search.
        </p>
      )}
    </section>
  );
}

export default Shop;

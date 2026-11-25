
function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search sneakers by name or brand..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
        aria-label="Search sneakers"
      />
    </div>
  );
}

export default SearchBar;

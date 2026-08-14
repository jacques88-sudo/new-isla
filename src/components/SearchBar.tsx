function SearchBar() {
  return (
    <section id="search" className="search-panel">
      <h2>Search tours</h2>
      <div className="search-grid">
        <input type="text" placeholder="Keyword" />
        <select defaultValue="">
          <option value="" disabled>
            Select island
          </option>
          <option>Tenerife</option>
          <option>Gran Canaria</option>
          <option>Lanzarote</option>
          <option>Fuerteventura</option>
        </select>
        <select defaultValue="">
          <option value="" disabled>
            Category
          </option>
          <option>Boat</option>
          <option>Adventure</option>
          <option>Food</option>
          <option>Family</option>
        </select>
        <button className="primary-button">Search</button>
      </div>
    </section>
  )
}

export default SearchBar

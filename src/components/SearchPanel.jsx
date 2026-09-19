function SearchPanel({
  query,
  onQueryChange,
  types,
  selectedType,
  onTypeChange,
  resultCount,
  totalCount,
  onClearFilters,
}) {
  const hasFilters = query.trim() !== "" || selectedType !== "All";

  return (
    <div className="search-controls" role="search">
      <div className="search-field">
        <label htmlFor="pokemon-search">Search by name</label>
        <input
          id="pokemon-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Try Pikachu or Bulbasaur"
          autoComplete="off"
        />
      </div>

      <fieldset className="type-filter">
        <legend>Filter by type</legend>
        <div className="type-filter-list">
          <button
            className="filter-button"
            type="button"
            aria-pressed={selectedType === "All"}
            onClick={() => onTypeChange("All")}
          >
            All
          </button>
          {types.map((type) => (
            <button
              className="filter-button"
              type="button"
              key={type}
              aria-pressed={selectedType === type}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="search-actions">
        <p className="result-count" aria-live="polite">
          Showing {resultCount} of {totalCount} sample Pokémon
        </p>
        <button
          className="clear-button"
          type="button"
          onClick={onClearFilters}
          disabled={!hasFilters}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default SearchPanel;

import PokemonCard from "./PokemonCard.jsx";

function PokemonGallery({ items, selectedId, onSelect }) {
  if (items.length === 0) {
    return (
      <div className="empty-state" role="status">
        <h3>No Pokémon found</h3>
        <p>Try a different name or clear the type filter.</p>
      </div>
    );
  }

  return (
    <ul className="gallery-grid" aria-label="Sample Pokémon gallery">
      {items.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          selected={pokemon.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

export default PokemonGallery;

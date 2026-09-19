function PokemonCard({ pokemon, selected, onSelect }) {
  const initials = pokemon.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2);

  return (
    <li className="gallery-item">
      <button
        className={`pokemon-card${selected ? " is-selected" : ""}`}
        type="button"
        onClick={() => onSelect(pokemon.id)}
      >
        <div className="pokemon-art" aria-hidden="true">
          <span className="pokemon-initials">{initials}</span>
          <span className="pokemon-art-mark" />
        </div>
        <span className="pokemon-card-copy">
          <span className="pokemon-name">{pokemon.name}</span>
          <span className="type-chips">
            {pokemon.types.map((type) => (
              <span className="type-chip" key={type}>
                {type}
              </span>
            ))}
          </span>
        </span>
      </button>
    </li>
  );
}

export default PokemonCard;

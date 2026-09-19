function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return (
      <div className="details-empty" role="status">
        Select a Pokémon card to view its sample details and stats.
      </div>
    );
  }

  const initials = pokemon.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2);

  return (
    <article className="details-panel" aria-live="polite">
      <div className="details-art" aria-hidden="true">
        <span className="pokemon-initials">{initials}</span>
        <span className="pokemon-art-mark" />
      </div>

      <div className="details-content">
        <div className="details-heading">
          <p className="eyebrow">Selected sample</p>
          <h3>{pokemon.name}</h3>
          <div className="type-chips">
            {pokemon.types.map((type) => (
              <span className="type-chip" key={type}>
                {type}
              </span>
            ))}
          </div>
        </div>

        <p className="details-description">{pokemon.description}</p>

        <div className="details-block">
          <h4>Abilities</h4>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        </div>

        <dl className="stats-grid">
          <div>
            <dt>HP</dt>
            <dd>{pokemon.hp}</dd>
          </div>
          <div>
            <dt>Attack</dt>
            <dd>{pokemon.attack}</dd>
          </div>
          <div>
            <dt>Defense</dt>
            <dd>{pokemon.defense}</dd>
          </div>
          <div>
            <dt>Speed</dt>
            <dd>{pokemon.speed}</dd>
          </div>
        </dl>

        <p className="sample-notice">
          These values are illustrative sample data, not official stats.
        </p>
      </div>
    </article>
  );
}

export default PokemonDetails;

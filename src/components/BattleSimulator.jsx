import BattleResult from "./BattleResult.jsx";

function BattleSimulator({
  pokemon,
  selectionA,
  selectionB,
  result,
  onSelectA,
  onSelectB,
  onSimulate,
}) {
  return (
    <div className="battle-simulator">
      <div className="battle-selectors">
        <div className="battle-select">
          <label htmlFor="battle-pokemon-a">Pokémon A</label>
          <select
            id="battle-pokemon-a"
            value={selectionA}
            onChange={(event) => onSelectA(event.target.value)}
          >
            <option value="">Choose Pokémon A</option>
            {pokemon.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.name}
              </option>
            ))}
          </select>
        </div>

        <div className="battle-versus" aria-hidden="true">
          VS
        </div>

        <div className="battle-select">
          <label htmlFor="battle-pokemon-b">Pokémon B</label>
          <select
            id="battle-pokemon-b"
            value={selectionB}
            onChange={(event) => onSelectB(event.target.value)}
          >
            <option value="">Choose Pokémon B</option>
            {pokemon.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="primary-action battle-action"
        type="button"
        onClick={onSimulate}
        disabled={!selectionA || !selectionB}
      >
        Simulate battle
      </button>

      <p className="battle-note">
        This is a simplified fan simulation using sample stats, not official
        competitive rules.
      </p>

      {result && <BattleResult result={result} />}
    </div>
  );
}

export default BattleSimulator;

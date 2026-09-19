function BattleResult({ result }) {
  return (
    <article
      className={`battle-result${result.tie ? " is-tie" : " is-win"}`}
      role="status"
      aria-live="polite"
    >
      <p className="eyebrow">{result.tie ? "Sample result" : "Sample winner"}</p>
      <h3>{result.tie ? "It's a tie!" : `${result.winnerName} wins!`}</h3>
      <p>{result.message}</p>
      <dl className="battle-scores">
        <div>
          <dt>{result.nameA}</dt>
          <dd>{result.scoreA}</dd>
        </div>
        <div>
          <dt>{result.nameB}</dt>
          <dd>{result.scoreB}</dd>
        </div>
      </dl>
    </article>
  );
}

export default BattleResult;

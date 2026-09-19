function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">A playful Pokémon fan lab</p>
        <h1 id="hero-title">Find your next favorite Pokémon.</h1>
        <p className="hero-description">
          Browse a small sample catalogue, explore stats, and run a friendly
          battle simulation.
        </p>
        <a className="primary-action" href="#search">
          Explore Pokémon
        </a>
        <p className="sample-notice">
          <strong>Sample fan data:</strong> the catalogue and battle are
          illustrative, not an official Pokémon product or rules engine.
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-card">
          <svg viewBox="0 0 120 120" role="presentation">
            <path d="M68 8 26 68h25L42 112 88 47H60l8-39Z" />
          </svg>
          <span className="visual-label">Battle lab</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

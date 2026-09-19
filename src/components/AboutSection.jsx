function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">About the project</p>
        <h2 id="about-title">Built for curious fans</h2>
        <p className="section-intro">
          A focused fan interface for browsing Pokémon information and trying a
          simple local battle idea.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-panel">
          <h3>Purpose</h3>
          <p>
            Make Pokémon facts feel easy to explore through a clear,
            responsive, and playful interface.
          </p>
        </div>

        <div className="about-panel">
          <h3>Version-One features</h3>
          <ul className="about-list">
            <li>Sample catalogue and search</li>
            <li>Pokémon detail view</li>
            <li>Simple battle simulation</li>
            <li>Mobile-friendly layout</li>
          </ul>
        </div>

        <div className="about-panel">
          <h3>Technologies</h3>
          <ul className="tech-list">
            <li>Vite</li>
            <li>React</li>
            <li>Plain CSS</li>
            <li>Bundled sample data</li>
          </ul>
          <p className="sample-notice">
            The battle result is an illustrative fan simulation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

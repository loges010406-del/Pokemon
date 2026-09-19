import { useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import BattleSimulator from "./components/BattleSimulator.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";
import PokemonGallery from "./components/PokemonGallery.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import { pokemon } from "./data/pokemon.js";

function getSampleScore(entry) {
  return entry.attack * 2 + entry.defense + entry.speed + entry.hp;
}

function calculateBattleResult(entryA, entryB) {
  const scoreA = getSampleScore(entryA);
  const scoreB = getSampleScore(entryB);

  if (entryA.id === entryB.id) {
    return {
      tie: true,
      nameA: entryA.name,
      nameB: entryB.name,
      scoreA,
      scoreB,
      message: `${entryA.name} meets an identical sample profile, so the illustrative result is a tie.`,
    };
  }

  const winner = scoreA >= scoreB ? entryA : entryB;
  const loser = scoreA >= scoreB ? entryB : entryA;
  return {
    tie: false,
    winnerName: winner.name,
    nameA: entryA.name,
    nameB: entryB.name,
    scoreA,
    scoreB,
    message: `${winner.name} has the higher sample score in this simplified fan simulation.`,
  };
}

function App() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [battleSelectionA, setBattleSelectionA] = useState("");
  const [battleSelectionB, setBattleSelectionB] = useState("");
  const [battleResult, setBattleResult] = useState(null);

  const availableTypes = Array.from(
    new Set(pokemon.flatMap((entry) => entry.types)),
  ).sort();

  const filteredPokemon = pokemon.filter((entry) => {
    const matchesName = entry.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesType =
      selectedType === "All" || entry.types.includes(selectedType);
    return matchesName && matchesType;
  });

  const selectedPokemon = pokemon.find(
    (entry) => entry.id === selectedPokemonId,
  );

  const battlePokemonA = pokemon.find(
    (entry) => entry.id === battleSelectionA,
  );
  const battlePokemonB = pokemon.find(
    (entry) => entry.id === battleSelectionB,
  );

  function clearFilters() {
    setQuery("");
    setSelectedType("All");
  }

  function simulateBattle() {
    if (!battlePokemonA || !battlePokemonB) return;
    setBattleResult(calculateBattleResult(battlePokemonA, battlePokemonB));
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Hero />

        <section className="section" id="search" aria-labelledby="search-title">
          <div className="section-heading">
            <p className="eyebrow">01 · Explore</p>
            <h2 id="search-title">Search Pokémon</h2>
            <p className="section-intro">
              Search the sample catalogue by name and narrow the results by type.
            </p>
          </div>
          <SearchPanel
            query={query}
            onQueryChange={setQuery}
            types={availableTypes}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            resultCount={filteredPokemon.length}
            totalCount={pokemon.length}
            onClearFilters={clearFilters}
          />
        </section>

        <section className="section" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading">
            <p className="eyebrow">02 · Browse</p>
            <h2 id="gallery-title">Pokémon Gallery</h2>
            <p className="section-intro">
              Select a card to inspect its sample details.
            </p>
          </div>
          <PokemonGallery
            items={filteredPokemon}
            selectedId={selectedPokemonId}
            onSelect={setSelectedPokemonId}
          />
        </section>

        <section className="section" id="details" aria-labelledby="details-title">
          <div className="section-heading">
            <p className="eyebrow">03 · Inspect</p>
            <h2 id="details-title">Pokémon Details</h2>
            <p className="section-intro">
              Review the selected Pokémon’s sample profile and stats.
            </p>
          </div>
          <PokemonDetails pokemon={selectedPokemon} />
        </section>

        <section className="section" id="battle" aria-labelledby="battle-title">
          <div className="section-heading">
            <p className="eyebrow">04 · Compare</p>
            <h2 id="battle-title">Battle Simulator</h2>
            <p className="section-intro">
              Choose two sample Pokémon and reveal an illustrative result.
            </p>
          </div>
          <BattleSimulator
            pokemon={pokemon}
            selectionA={battleSelectionA}
            selectionB={battleSelectionB}
            result={battleResult}
            onSelectA={setBattleSelectionA}
            onSelectB={setBattleSelectionB}
            onSimulate={simulateBattle}
          />
        </section>

        <AboutSection />
      </main>
    </div>
  );
}

export default App;

import {useState} from "react";
import pokemons from "./data/pokemon";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import "./App.css";

const types = [...new Set(pokemons.map(pokemon => pokemon.type))];

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [ownedIds, setOwnedIds] = useState([]);

  const toggleOwner = (id) => {
    if (ownedIds.includes(id)) {
      setOwnedIds(ownedIds.filter((ownedId) => ownedId !== id));
    } else {
      setOwnedIds([...ownedIds,id]);
    }
  };

  const visiblePokemons = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((pokemon) =>
      selectedType === "All" || pokemon.type === selectedType
    )
    .sort((a,b) => a.id - b.id);

    return (
      <div className = "app"> 
        <header className = "header">
          <h1>Pokemon Card Collection</h1>
          <p className = "subtitle">
            {ownedIds.length} of {pokemons.length} cards owned
          </p>
        </header>

        <div className = "controls">
          <SearchBar search={search} onSearchChange={setSearch} />
          <TypeFilter
            types = {types}
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />
        </div>

        <p className="result-count">
          Showing {visiblePokemons.length} of {pokemons.length} cards
        </p>

        {visiblePokemons.length === 0 && (
          <p className="empty-message">
            No Pokemon match your search.
          </p>
        )}

        <div className="card-grid">
          {visiblePokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isOwned={ownedIds.includes(pokemon.id)}
              onToggledOwned={toggleOwner}
            />
          ))}
        </div>

      </div>
    );
};

export default App;
const SearchBar = ({ search, onSearchChange}) => {
    return (
        <input
            className = "search"
            type = "text"
            placeholder = "Search Pokémon..."
            value = {search}
            onChange = {(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;
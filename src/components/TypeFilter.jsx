const TypeFilter = ({ types, selectedType, onSelectType}) => {
    return (
        <div className = "type-filter">
            {["All",...types].map((type) => (
                <button
                    key = {type}
                    className = {selectedType === type ? "filter active" : "filter"}
                    onClick = {() => onSelectType(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default TypeFilter;
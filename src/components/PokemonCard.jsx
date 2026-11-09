import typeColors from '../data/typeColors';
import StatBar from './StatBar';

const SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokemonCard = ({ pokemon, isOwned, onToggledOwned}) => {
    const {id, name, type, hp, attack} = pokemon;
    const color = typeColors[type];
    const imageURL = SPRITE_URL + id + '.png';

return  (
    <div
        className = {isOwned ? "card owned" : "card"}
        style = {{ borderColor: color}}
    >
         <div 
               className = "card-top"
               style = {{ backgroundColor: color + "33" }}>
                    <span className = "card-number">#{id}</span>
                    <img src={imageURL} alt = {name} width={96} height={96} />
       </div>

        <div className = "card-body">
         <h3>{name}</h3>
           <span className = "type-badge" style = {{backgroundColor: color}}>
                {type}
            </span>

            <div className="stats">
                <StatBar label = "HP" value = {hp} color = {color} />
                <StatBar label = "Attack" value = {attack} color = {color} />
            </div>

            <button onClick = {() => onToggledOwned(id)}>
                {isOwned ? "Owned" : "Mark as Owned"}
            </button>
        </div>
    </div>
    );
};

export default PokemonCard;
pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(pokemon => {
            console.log(pokemon.name);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
} 
async function fetchPokemonNames() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const pokemonNames = data.results.map(pokemon => {
        return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    });
    console.log('Nombres de los Pokémon:', pokemonNames);
}

fetchPokemonNames();
async function fetchPokemonDetails(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = await response.json();
    
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    const stats = data.stats.map(statInfo => {
        return `${statInfo.stat.name}: ${statInfo.base_stat}`;
    }).join(', ');
    
    console.log(`Nombre: ${name}`);
    console.log(`Tipo(s): ${types}`);
    console.log(`Habilidades: ${abilities}`);
    console.log(`Stats: ${stats}`);
}

// Ejemplo de uso con el Pokémon "pikachu"
fetchPokemonDetails('pikachu');

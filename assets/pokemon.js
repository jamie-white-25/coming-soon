let defaultPokemonList = window.onload() = getDefaultPokemonList();


async function getPokemon() {
    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        let pokemonArray = res.data.results;
        console.log(pokemonArray);
        creatPokemonlist(pokemonArray);
        // let PokemonUrlArray = pokemonArray.map(pokemon => pokemon.url);
        // indiviualPokemonData(PokemonUrlArray);
    } catch (error) {
        console.error(error);
    }
}

let placeHolder = ()=>{
    let card = '<col-md-4>';
    card += '<card mb-4 showow>';
    card += ''
}
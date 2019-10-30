
async function getPokemon() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
        let pokemonArray = response.data.results;
        console.log(pokemonArray);
        listResponseArray(pokemonArray);
    } catch (error) {
        console.error(error);
    }
}

const listResponseArray = (pokemonArray)=>{
    pokemonArray.forEach(pokemon => {
        let li = document.createElement("LI");  
        var text = document.createTextNode(pokemon.name);
        li.appendChild(text);                              
        document.getElementById("pokemon-list").appendChild(li); 
    });
}


document.querySelector('#get').addEventListener('click', () => { getPokemon(); })
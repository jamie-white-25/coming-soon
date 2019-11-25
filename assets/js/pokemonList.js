let pokemonArrayNameUrl = [];
let pokemonAllDataList = [];

let getPokemon = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(function (response) {
            // handle success
            let resultsArray = response.data.results;
            resultsArray.forEach(pokemon => {
                pokemonArrayNameUrl[pokemon.name] = pokemon.name;
                getAllPokemonData(pokemon);
            });
            return;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

let getAllPokemonData = async (pokemon)=>{
    loadCardPlaceHolder(pokemon.name);
    axios(pokemon.url).then(function (response) {
        // handle success
        pokemonAllDataList[response.data.name] = response.data;
        setCardToPokemonData(response.data);
        return;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

let setCardToPokemonData = (Pokemondata)=>{
    let pokemonCard = document.querySelector('#'+Pokemondata.name);
    pokemonCard.innerHTML=  
    `<div class="card-body d-flex flex-column">
    <img class="img-fluid mx-auto" src="${Pokemondata.sprites.front_default}" alt="...">
    <h5 class="card-title text-center">${Pokemondata.name}</h5>
    <p class="card-text mx-auto">#${Pokemondata.id}</p>
    </div>        
   `;
}

let loadCardPlaceHolder = (pokemonName)=>{
    console.log(pokemonName);
    let placeHolder = '<div class="card mb-4 shadow" id="'+pokemonName+'">';
    placeHolder += '<div class="spinner-border text-success mx-auto p-3 my-5" role="status">';        
    placeHolder +=  '<span class="sr-only">Loading...</span>';
    placeHolder += '</div>';
    placeHolder += '</div>';
    placeHolder += '</div>';

    let node = document.createElement("DIV");  
    node.className ="col-md-4 col-10 mx-auto px-4 bg-pokemon"  
    node.setAttribute("id", pokemonName);             // Create a <li> node         // Create a text node
    node.innerHTML= placeHolder;                              // Append the text to <li>
    document.getElementById("pokemon-list").appendChild(node); 
    return;    // Append <li> to <ul> with id="myList" 
}

window.onload = getPokemon();
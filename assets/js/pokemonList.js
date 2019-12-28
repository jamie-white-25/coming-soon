
let pokemonArrayNameUrl = [];
let pokemonAllDataList = [];
let numPokemon = 151;

let getPokemon = async (limit, offset) => {
    await axios.get("https://pokeapi.co/api/v2/pokemon",{
        params: {
            limit,
            offset, 
          }
        })
        .then(function (response) {
            // handle success
            console.log(response);
            let resultsArray = response.data.results;
            pokemonArrayNameUrl['count'] = response.data.count;
            pokemonArrayNameUrl['next'] = response.data.next;
            console.log(pokemonArrayNameUrl['next']);
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

const SetPokemonLimit = (pokemonNumber, offset)=>{
    // getPokemon(pokemonNumber, offset);
};

let gen1 = document.querySelector('#gen1');
let gen2 = document.querySelector('#gen2');
let gen3 = document.querySelector('#gen3');
let gen4 = document.querySelector('#gen4');
let gen5 = document.querySelector('#gen5');
let gen6 = document.querySelector('#gen6');
let gen6 = document.querySelector('#class');

gen1.addEventListener('click', ()=> {getPokemon(151,0); gen1.style.display = "none"; });
gen2.addEventListener('click', ()=> {getPokemon(100,151); gen2.style.display = "none";});
gen3.addEventListener('click', ()=> {getPokemon(135,251); gen3.style.display = "none";});
gen4.addEventListener('click', ()=> {getPokemon(107,386); gen4.style.display = "none";});
gen5.addEventListener('click', ()=> {getPokemon(156,493); gen5.style.display = "none";});
gen6.addEventListener('click', ()=> {getPokemon(494,649); gen6.style.display = "none";});

gen6.addEventListener('click', ()=> {});

// window.onload = getPokemon();
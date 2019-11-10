
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

const creatPokemonlist = (PokemonArray) => {
    console.log(PokemonArray);
    // let li = document.createElement("DIV");  
    // var text = document.createTextNode(PokemonArray.name);
    // li.appendChild(text);             
    let data = '<div class="row">';

    PokemonArray.forEach((pokemon) => {
        // data += '<div class="col-md-4"><div class="card text-center" id="'+ pokemon.name +'">'+ pokemon.name +'</div></div>';
        let pokemonData = getAllData(pokemon.name);
        console.log(pokemonData);
        data += '<div class="col-md-4 px-4">';
        data += '<div class="card mb-4 shadow" id="'+pokemon.name+'">';
        data += '<div class="spinner-border text-success mx-auto p-3 my-5" role="status">';        
        data +=  '<span class="sr-only">Loading...</span>';
        data += '</div>';
        data += '</div>';
        data += '</div>';
    })

    data += '</div>';

    document.getElementById("pokemon-list").innerHTML = data;

};

async function getAllPokemonData (PokemonUrl){
    axios.get(PokemonUrl, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(function (response) {
            // handle success
            listResponseArray(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

async function getAllData (pokemonName){
    axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonName, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector('#'+pokemonName).innerHTML=
            `<div class="card-body d-flex flex-column">
             <img class="img-fluid mx-auto" src="${response.data.sprites.front_default}" alt="...">
             <h5 class="card-title text-center">${pokemonName}</h5>
             <p class="card-text mx-auto">#${response.data.id}</p>
             </div>        
            `;
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

async function indiviualPokemonData(PokemonArray) {
    PokemonArray.forEach(pokemon => {
        console.log(pokemon);
        axios.get(pokemon, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(function (response) {
                // handle success
                listResponseArray(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })

};


const listResponseArray = (Pokemon) => {
    console.log(Pokemon);
    let li = document.createElement("DIV");
    var text = document.createTextNode(Pokemon.species.name);
    li.appendChild(text);
    document.getElementById("pokemon-list").appendChild(li);
}

window.onload = getPokemon();
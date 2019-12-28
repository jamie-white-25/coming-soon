import Apicall from './axios.js';

let pokemonArray = [];

let pokemonBtn = document.querySelector('.get-btn');
let pokemonSelectList = document.querySelector('#pokemonSelectionList');
pokemonBtn.addEventListener('click',() => {GetPokemonGenerations(pokemonSelectList.value); });

function GetPokemonGenerations(seletionValue)
{
    let limit;
    let offset;

    seletionValue === "1" ? (limit = 151, offset = 0):'';
    seletionValue === "2" ? (limit = 100, offset = 151):'';
    seletionValue === "3" ? (limit = 135, offset = 251):'';
    seletionValue === "4" ? (limit = 107, offset = 386):'';
    seletionValue === "5" ? (limit = 156, offset = 493):'';
    seletionValue === "6" ? (limit = 494, offset = 649):'';

    let api = new Apicall();
    api.params = ["https://pokeapi.co/api/v2/pokemon/", limit, offset];
    api.getData();
    console.log(api.params);

}
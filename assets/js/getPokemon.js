export function GetPokemonGenerations(seletionValue)
{
    let limit;
    let offset;

    seletionValue === "1" ? (limit = 151, offset = 0):'';
    seletionValue === "2" ? (limit = 151, offset = 0):'';
    seletionValue === "3" ? (limit = 151, offset = 0):'';
    seletionValue === "4" ? (limit = 151, offset = 0):'';
    seletionValue === "5" ? (limit = 151, offset = 0):'';
    seletionValue === "6" ? (limit = 151, offset = 0):'';
    
    let api = new Apicall("https://pokeapi.co/api/v2/pokemon/",limit,offset,pokemonArray);
    api.getData();
}
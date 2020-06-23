type ApiPokemon = {
        name: string,
        url: string,
    }


const apiPokemonToPokemon = (apiPokemon: ApiPokemon): string => {
    return apiPokemon.name
};

export const fetchPokemonsFromApi = (typeFilter?: string) => {
    // limit=-1 :(
    // Some lazy loading // virtualization would be nice, or just pagination

    if(typeFilter) {
        // Again in real redux this will be handle by some async library eg. saga, rxjs, thunk + proper action
        return fetch(`https://pokeapi.co/api/v2/type/${typeFilter}`)
            .then(res => res.json())
            .then(res => {
                return (res.pokemon || []).map(({pokemon}: {pokemon: ApiPokemon})=> apiPokemonToPokemon(pokemon))
            });
    }

    return fetch("https://pokeapi.co/api/v2/pokemon?limit=-1")
        .then(res => res.json())
        .then(res => {
            console.log('org', res)
            return (res.results || []).map(apiPokemonToPokemon)
        });
};
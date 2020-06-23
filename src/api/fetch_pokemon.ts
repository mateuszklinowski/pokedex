import {Pokemon, PokeStats, Stat, Type} from "../list/interfaces";

type ApiType = {
    slot: number,
    type: {
        name: Type,
        url: string
    }
}

type ApiStat = {
    base_stat: number,
    effort: number,
    stat: {
        name: Stat,
        url: string,
    }
}

type ApiPokemon = {
    name: string,
    sprites: {
        front_default: string,
        [key: string]: string
    },
    types: ApiType[],
    stats: ApiStat[]
}


const apiPokemonToPokemon = (apiPokemon: ApiPokemon): Pokemon => {
    return {
        name: apiPokemon.name,
        image: apiPokemon.sprites.front_default,
        types: apiPokemon.types.map(({type}) => ({
            name: type.name
        })),
        stats: apiPokemon.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
        })).reduce((stats, stat) => {
            return {
                ...stats,
                [stat.name]: stat
            }
        }, {} as PokeStats)
    }
};

export const fetchPokemonFromApi = (name: string): Promise<Pokemon> => {
    // limit=-1 :(
    // Some lazy loading // virtualization would be nice, or just pagination

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(res => {
            return apiPokemonToPokemon(res)
        });
};
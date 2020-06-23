import {FETCH_POKEMON_SUCCESS, FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS} from "./actions";
import {Pokemon} from "../list/interfaces";
import {Action} from "./store";

export const fetchPokemons = (): Action => ({
    type: FETCH_POKEMONS,
});

export const fetchPokemonsSuccess = (pokemons: string[]): Action => ({
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons
});

export const fetchPokemonSuccess = (pokemon: Pokemon): Action => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon
});

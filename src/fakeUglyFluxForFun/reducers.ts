import {Action, PokeState, Reducer} from "./store";
import {
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMONS,
    FETCH_POKEMONS_FAILURE,
    FETCH_POKEMONS_SUCCESS,
    FILTER_BY_NAME,
    FILTER_BY_TYPE
} from "./actions";

export const appReducer: Reducer<PokeState> = (state: PokeState, action: Action): PokeState => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload,
            };
        case FETCH_POKEMONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                list: [],
            };

        case FILTER_BY_NAME:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name: action.payload
                },
            };
        case FILTER_BY_TYPE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    type: action.payload,
                },
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    [action.payload.name]: action.payload
                }
            }
        default:
            return state
    }
};


export const reducers = [appReducer];
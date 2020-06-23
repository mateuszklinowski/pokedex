import React, {useState} from 'react';
import {useAppState} from "../fakeUglyFluxForFun/useAppState";
import {PokemonDetails} from "./Details";
import {Pokemon} from "./interfaces";
import {PokemonDetailsPlaceholder} from "./DetailsPlaceholder";
import {fetchPokemonFromApi} from "../api/fetch_pokemon";
import {fetchPokemonSuccess} from "../fakeUglyFluxForFun/actionCreators";

type ConnectedDetailsProps = {
    name: string
}

export const ConnectedDetails: React.FunctionComponent<ConnectedDetailsProps> = (props) => {
    const { name } = props;
    const {state: { pokemons }, dispatch} = useAppState();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const pokemon: Pokemon | undefined = pokemons[name];

    // How to spot getting close to deadline if -> if

    if(!pokemon) {
        if(!isLoading){
            setIsLoading(true);
            fetchPokemonFromApi(name).then(pokemon => {
                dispatch(fetchPokemonSuccess(pokemon));
            })
        }


        return <PokemonDetailsPlaceholder/>
    }

    return (
        <PokemonDetails pokemon={pokemon}/>
    )

};
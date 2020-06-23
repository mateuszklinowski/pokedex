import React, {useEffect} from 'react';
import {List, Row} from "./List";
import {useAppState} from "../fakeUglyFluxForFun/useAppState";
import {fetchPokemons, fetchPokemonsSuccess} from "../fakeUglyFluxForFun/actionCreators";
import {fetchPokemonsFromApi} from "../api/fetch_pokemons";
import {ConnectedDetails} from "./ConnectedDetails";


const pokemonNameToRow = (name: string): Row => ({
    id: name,
    name:name,
    children: <ConnectedDetails name={name}/>
});

const getFilteredRows = (list: string[], nameFilter: string = ""): Row[] => {
    return list.filter(pokemonName => pokemonName.includes(nameFilter)).map(pokemonNameToRow)
};

export const PokeList: React.FunctionComponent<any> = () => {
    const {state: {list, filters}, dispatch} = useAppState();


    useEffect(() => {
        dispatch(fetchPokemons());
        fetchPokemonsFromApi(filters.type).then(pokemonsNames => {
            dispatch(fetchPokemonsSuccess(pokemonsNames))
        })
    }, [filters.type]);



    const filteredList = getFilteredRows(list, filters.name);

    return <List rows={filteredList}/>
};
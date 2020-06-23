import React from 'react';
import Grid from "@material-ui/core/Grid";
import {PokemonTypes} from "./Types";
import {PokemonStats} from "./Stats";
import {Pokemon} from "./interfaces";


type DetailsProps = {
    pokemon: Pokemon
}

export const PokemonDetails: React.FunctionComponent<DetailsProps> = (props) => {
    const {pokemon: {types, stats, image, name}} = props;
    return (
        <>
            <Grid container alignItems="center" justify="space-between">
                <img src={image} alt={`${name} icon`} className="poke-img"/>
                <PokemonTypes types={types}/>
            </Grid>
            <PokemonStats stats={stats}/>
        </>
    )
};
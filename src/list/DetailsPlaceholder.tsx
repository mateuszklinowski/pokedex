import React from 'react';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import {PokemonStats} from "./Stats";
import {PokeStats, Stat} from "./interfaces";


const emptyStats = Object.values(Stat).map(statName => ({
    name: statName,
    value: "-"
})).reduce((stats, stat) => {
    return {
        ...stats,
        [stat.name]: stat
    }
}, {}) as PokeStats;

export const PokemonDetailsPlaceholder: React.FunctionComponent<{}> = () => {

    return (
        <>
            <Grid container alignItems="center" justify="space-between">
                <span className="poke-img__placeholder"/>
                <Chip label="" className="poke-type__placeholder"/>
            </Grid>
            <PokemonStats stats={emptyStats}/>
        </>
    )
};
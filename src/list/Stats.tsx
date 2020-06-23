import React from 'react'
import {PokeStat, PokeStats, Stat} from "./interfaces";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type PokemonStatsProps = {
    stats: PokeStats
}

export const PokemonStats: React.FunctionComponent<PokemonStatsProps> = (props) => {
    const {stats} = props;

    const statsOrder: Stat[] = [
        Stat.Hp,
        Stat.Attack,
        Stat.Defense,
        Stat.SpecialAttack,
        Stat.SpecialDefense,
        Stat.Speed
    ];

    return (
        <Grid container spacing={3}>
            {statsOrder.map((statName, idx) => {
                return  (
                    <React.Fragment key={idx}>
                        <Grid item xs={4} sm={2}>
                            <SingleStat stat={stats[statName]}/>
                        </Grid>
                    </React.Fragment>
                )
            })}
        </Grid>
    )
};

type SingleStatProps = {
    stat: PokeStat
}


const StatLabels = {
    [Stat.Hp]: 'HP',
    [Stat.Attack]: 'Attack',
    [Stat.Defense]: 'Defense',
    [Stat.SpecialAttack]: 'SP. Atk',
    [Stat.SpecialDefense]: 'SP. Def',
    [Stat.Speed]: 'Speed',
}

const SingleStat: React.FunctionComponent<SingleStatProps> = ({ stat: {name, value} }) => {
    return (
        <div>
            <Typography className="stat-name" align="center" variant="body2">
                {StatLabels[name]}
            </Typography>
            <Typography align="center" variant="body1">
                {value}
            </Typography>
        </div>
    )
};
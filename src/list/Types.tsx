import React from 'react'
import Chip from '@material-ui/core/Chip';

import {PokeType} from "./interfaces";

type TypesProps = {
    types: PokeType[]
}

export const PokemonTypes: React.FunctionComponent<TypesProps> = (props) => {
    const {types} = props;

    return (
        <>
            {types.map((type) => {
                return (
                    <React.Fragment key={type.name}>
                        <Chip label={type.name}/>
                    </React.Fragment>
                )
            })}
        </>)
}
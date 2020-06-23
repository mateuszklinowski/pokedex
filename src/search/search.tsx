import React from 'react';
import {Autocomplete, Option} from "./autocomplete";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Type} from "../list/interfaces";
import {useAppState} from "../fakeUglyFluxForFun/useAppState";
import {FILTER_BY_NAME, FILTER_BY_TYPE} from "../fakeUglyFluxForFun/actions";

type PokeSearchProps = {
    onSearchChange?: any
}

const typeOptions = Object.values(Type).map(type => ({
    label: type,
    value: type
}));

export const PokeSearch: React.FunctionComponent<PokeSearchProps> = () => {
    const {state: {list}, dispatch} = useAppState();

    const handleNameSearch = (option: Option | undefined) => {
        const selectedValue = (option || {}).value || "";
        dispatch({
            type: FILTER_BY_NAME,
            payload: selectedValue
        })
    };

    const handleTypeSearch = (option: Option | undefined) => {
        const selectedValue = (option || {}).value || "";
        dispatch({
            type: FILTER_BY_TYPE,
            payload: selectedValue
        })
    };

    const nameOptions = list.map(name => ({
        label: name,
        value: name
    }));

    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Box m={2}>
                    <Autocomplete options={nameOptions} onChange={handleNameSearch} label="Search by name"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box m={2}>
                    <Autocomplete options={typeOptions} onChange={handleTypeSearch} label="Search by type"/>
                </Box>
            </Grid>
        </Grid>
    )
}
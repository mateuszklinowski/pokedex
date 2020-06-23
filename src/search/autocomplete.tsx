import React from 'react';
import {TextField} from "@material-ui/core";
import MaterialAutocomplete from '@material-ui/lab/Autocomplete';
import {get} from "../functions/get";
import {noop} from "../functions/noop";

export type Option = {
    label: string;
    value: any
}

type AutocompleteProps = {
    options: Option[];
    label?: string;
    onChange?: (newValue: Option['value']) => void
}

export const Autocomplete: React.FunctionComponent<AutocompleteProps> = (props) => {
    const {options, label = "", onChange = noop} = props;

    const handleChange = (event: object, value: any) => {
        onChange(value);
    };

    return (<MaterialAutocomplete
        options={options}
        getOptionLabel={get<Option>('label')}
        onChange={handleChange}
        getOptionSelected={(option: Option, value: Option) => {
            return option.value === value.value
        }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined"/>}
    />)
}


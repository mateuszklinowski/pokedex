import React, {ReactNode, useState} from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import MaterialList from '@material-ui/core/List'
import {noop} from "../functions/noop";
import {ID} from "../interfaces";
import {Paper} from "@material-ui/core";


export type Row = {
    id: ID
    name: string;
    onClick?: (id: ID) => void;
    children?: React.ReactNode;
}

type ListProps = {
    rows: Row[],
}


export const List: React.FunctionComponent<ListProps> = ({rows: rawRows}) => {

    const [expanded, setExpanded] = useState<ID>('');
    const toggleExpanded = (id: ID) => {
        expanded === id ? setExpanded('') : setExpanded(id)
    };

    const rows = rawRows.map<Row>(({onClick = noop, children = null, ...row}) => ({
        ...row,
        onClick: (id: ID) => {
            toggleExpanded(id);
            onClick(id)
        },
        children: row.id === expanded ? children : null
    }));

    return (
        <MaterialList dense role="list" className="poke-list">
            {rows.map(toListItem)}
        </MaterialList>
    )
};

const toListItem = (row: Row): ReactNode => {
    const {id, name, onClick = noop, children = null} = row;
    const handleClick = () => {
        onClick(id)
    };

    return (
        <ListItem onClick={handleClick} key={id}>
            <Paper className="poke-row">
                <ListItemText
                    primary={name}
                />
                {children}
            </Paper>
        </ListItem>
    )
};
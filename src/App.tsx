import React from 'react';
import {Container} from "@material-ui/core";
import {PokeSearch} from "./search/search";
import {PokeList} from "./list/PokeList";


function App() {
    return (
        <Container fixed maxWidth="sm" className="wrapper">
            <PokeSearch/>
            <PokeList/>
        </Container>
    );
}

export default App;

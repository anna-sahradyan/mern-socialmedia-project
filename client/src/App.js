import React from 'react';
import {Container} from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import {Routes, Route} from "react-router-dom";
const App = () => {

    return (
        <>
            <Container maxWidth={"lg"}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default App;
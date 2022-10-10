import React from 'react';
import {Container} from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {


    return (
        <>
            <Container maxWidth={"xl"}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/auth"} element={<Auth/>}/>
                    <Route path="/" element={<Navigate replace to="/posts"/>}/>
                    <Route path={"/posts/search"} element={<Home/>}/>
                    <Route path={"/posts"} element={<Home/>}/>
                    <Route path={"/posts/:id"} element={<PostDetails/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default App;
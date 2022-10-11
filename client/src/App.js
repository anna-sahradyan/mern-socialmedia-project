import React from "react";
import { Container } from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from './components/Auth/Auth';
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Container maxWidth={"xl"}>
        <Nav />
        <Routes>
          <Route path={"/posts"} element={<Home />} />
          <Route path={"/"} element={<Home />} />
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path={"/posts/search"} element={<Home />} />
          <Route path={"/posts/:id"} element={<PostDetails />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate replace to="/posts" />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;

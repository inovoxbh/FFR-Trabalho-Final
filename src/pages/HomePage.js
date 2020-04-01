import React from "react";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";

export const HomePage = () => {
    return (
        <div>
          <Header />
          <NavBar />
          <p>Todo sobre as temporadas da fórmula 1!</p>
          <Footer />
        </div>
      )
};

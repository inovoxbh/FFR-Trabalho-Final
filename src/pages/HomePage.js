import React from "react";
import {Header} from "../components/Header.js";

export const HomePage = () => {
    console.log(window.location.href) 
    console.log(window.location.pathname) 
    
    return (
      <div>
        <Header />
        <h1>Formula 1</h1>
        <p>Todo sobre as temporadas da fórmula 1!</p>
      </div>
    )
};

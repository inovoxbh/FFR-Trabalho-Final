import React from "react";
import {Header} from "../components/Header.js";
import {NavBar} from "../components/NavBar.js";
import {Footer} from "../components/Footer.js";
import {SectionCSS} from "../visual/components.js"

export const HomePage = () => {
    return (
        <div>
          <Header />
          <NavBar />
          <SectionCSS>
              <p>Aqui você encontrará todas as informações das temporadas da Fórmula 1: corridas, grid de chegada e equipes!</p>
          </SectionCSS>
          <Footer />
        </div>
      )
};

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
              <h2>Tudo sobre as temporadas da fórmula 1!</h2>
          </SectionCSS>
          <Footer />
        </div>
      )
};

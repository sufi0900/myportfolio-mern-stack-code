import React from "react";
import Home from "./Home";
import { Helmet } from "react-helmet";

const HomeSeprate = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home- Sufian Mustafa</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development.( sufian mustafa website)"
        />
        <link rel="canonical" href="https://sufianmustafa.com/#home" />
      </Helmet>
      <Home />
    </div>
  );
};

export default HomeSeprate;

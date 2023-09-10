import React, { lazy, Suspense } from "react";

import { useMediaQuery, useTheme } from "@mui/material";
import Spin from "./Spin";

import About from "./About";
import { Helmet } from "react-helmet";
const LazySlideShowLg = lazy(() => import("./SlideShowLg"));
const LazySlideShowMbl = lazy(() => import("./SlideShowMbl"));
const LazyResponsiveShow = lazy(() => import("./ResponsiveShow"));

const Aboutsec = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <div className="flex" style={{ marginTop: "90px" }}>
        <div className="itemhome2">
          <Helmet>
            <meta charSet="utf-8" />
            <title>About Me - Sufian Mustafa</title>
            <meta
              name="description"
              content="Sufian Mustafa is a web developer with a passion for creating user-friendly and visually appealing websites. He is proficient in using front-end technologies such as HTML, CSS, and JavaScript, with a particular focus on ReactJS. He is also proficient in using back-end technologies such as Node.js, PHP, and MongoDB"
            />
            <link rel="canonical" href="https://sufianmustafa.com/#about" />
          </Helmet>
          <About />

          {isMatch ? (
            <>
              <Suspense fallback={<Spin />}>
                <LazySlideShowMbl />{" "}
              </Suspense>
            </>
          ) : (
            <>
              <Suspense fallback={<Spin />}>
                <LazySlideShowLg />
              </Suspense>

              <br />
            </>
          )}

          <Suspense fallback={<Spin />}>
            <LazyResponsiveShow />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Aboutsec;

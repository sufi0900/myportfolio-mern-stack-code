import React, { useState, useEffect, lazy, Suspense } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import Resume from "./Resume/sufi.pdf";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import SteamHomePage from "./SteamHomePage";
import Spin from "./Spin";
import { Helmet } from "react-helmet";

// Dynamically import components that you want to code-split
const AsyncALLComponents = lazy(() => import("./HomePage"));
const AsyncSvgHomePage = lazy(() => import("./SvgHomePage"));

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    sessionStorage.removeItem("showComponent");
  }, []);
  const ReactRotatingText = require("react-rotating-text");
  useEffect(() => {
    const loadedClass = () => {
      document.body.classList.add("loaded");
    };
    window.addEventListener("load", loadedClass);
    return () => {
      window.removeEventListener("load", loadedClass);
    };
  }, []);

  const button = {
    fontSize: "58px",
    color: "rgba(249, 43, 208, 0.696)",
    position: "relative",
    right: "40px",
  };
  const motionSettings = {
    animate: {
      x: [50, -50],
      y: [-50, 50],
      backgroundColor: ["hsla(240, 100%, 50%, 1)", "hsla(0, 100%, 50%, 1)"],
      scale: [1, 1.3, 1.4, 1, 1],
    },
    transition: {
      ease: "linear",
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sufian Mustafa - Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development.( sufian mustafa website)"
        />
        <link rel="canonical" href="https://sufianmustafa.com/" />
      </Helmet>

      <Grid
        container
        padding={2}
        flex
        sx={{
          margin: "auto",
          alignItems: "center", // Center vertically
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          sx={{ marginTop: "60px" }}
          container
          className="flex"
        >
          <motion.div className="Home">
            <motion.div
              className="Home_Circle"
              id="ContainerHome"
              animate={motionSettings.animate}
              transition={motionSettings.transition}
            >
              <img
                src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.no_overflow.preserve_transparency.progressive.sprite/v1693672583/624-6241203_css-icon-png-cascading-style-sheets_jeglsu.webp"
                style={{ width: "100%", height: "auto" }}
                alt="css"
                loading="lazy"
              />
              <SteamHomePage />
            </motion.div>
            <motion.div
              className="Home_Circle"
              style={{
                marginTop: "200px",
                marginBottom: "200px",
                marginLeft: "200px",
              }}
              id="ContainerHome"
              animate={{
                x: [50, -50, 50],
                y: [50, 50, -50],

                backgroundColor: [
                  "hsla(240, 100%, 50%, 1)",
                  "hsla(0, 100%, 50%, 1)",
                ],
                scale: [1, 1.3, 1.4, 1, 1],
              }}
              transition={motionSettings.transition}
            >
              <img
                src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive/v1693672395/pngegg_3_kleebp.webp"
                style={{ width: "90%", height: "auto" }}
                alt="javascript.png"
                loading="lazy"
              />
              <SteamHomePage />
            </motion.div>
            <motion.div
              className="Home_Circle"
              style={{
                marginTop: "350px",
                marginRight: "40px",
              }}
              id="ContainerHome"
              animate={{
                pathLength: 1,
                x: [-50, 50, 50],

                y: [50, 50, -50],

                backgroundColor: [
                  "hsla(240, 100%, 50%, 1)",
                  "hsla(0, 100%, 50%, 1)",
                ],
                scale: [1, 1.3, 1.4, 1, 1],
              }}
              transition={motionSettings.transition}
            >
              <img
                src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite.strip_profile/v1693672396/HTML5_Logo_512_eujwir.webp"
                style={{ width: "100%", height: "auto" }}
                alt="html"
                loading="lazy"
              />
              <SteamHomePage />
            </motion.div>
            <div>
              <motion.div
                className="Home_Circle"
                style={{
                  marginTop: "200px",
                }}
                id="ContainerHome"
                animate={{
                  y: [-50, -50, 50],
                  x: [50, -50, -50],

                  backgroundColor: [
                    "hsla(240, 100%, 50%, 1)",
                    "hsla(0, 100%, 50%, 1)",
                  ],
                  scale: [1, 1.3, 1.4, 1, 1],
                }}
                transition={motionSettings.transition}
              >
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite/v1692819141/Images/rr_htw6kq.webp"
                  style={{ width: "100%", height: "auto" }}
                  alt="react"
                  loading="lazy"
                />
                <SteamHomePage />
              </motion.div>
              <motion.div
                className="Home_Circle"
                style={{
                  marginTop: "400px",
                  marginLeft: "200px",
                }}
                animate={{
                  pathLength: 1,
                  x: [-50, 50, -50],

                  y: [50, -50, 50],

                  backgroundColor: [
                    "hsla(240, 100%, 50%, 1)",
                    "hsla(0, 100%, 50%, 1)",
                  ],
                  scale: [1, 1.3, 1.4, 1, 1],
                }}
                transition={motionSettings.transition}
              >
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/nn_1_cy2bcv.webp"
                  style={{
                    width: "100%",
                    height: "auto",
                    marginTop: "10px",
                  }}
                  alt="nodejs"
                  loading="lazy"
                />
                <SteamHomePage />
              </motion.div>

              <div>
                <div className="HomeDiv ">
                  <h1>
                    <div className="animate__animated animate__bounce Animateiv0">
                      Hi there 👋
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv1">
                      I am <span>SuFiaN MusTaFa</span>
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv2">
                      <h1> Web Developer</h1>
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv3">
                      <h2>
                        I am <span>27 years old</span> , residing in the
                        province of <span>KPK</span> , <span>Pakistan</span>,
                        with a strong passion for <span>coding,</span> and
                        currently a <span>student</span> in my last semester of{" "}
                        <span> MCS (Computer Science)</span>.
                      </h2>
                    </div>
                  </h1>
                  <p className="animate__animated animate__backInLeft Animateiv4">
                    I am an experienced web developer with a passion for
                    creating <span> high-quality</span> ,{" "}
                    <span>user-friendly</span>, and{" "}
                    <span>responsive websites</span>. I'm always improving my
                    skills to stay at the forefront of the industry. I have
                    hands-on experience in <span>backend development</span> as
                    well.
                  </p>
                  <div className="HomeInnerDiv animate__animated animate__backInLeft Animateiv5">
                    <p>
                      <span
                        style={{
                          color: "white",
                          textShadow: "1px 1px black",
                        }}
                      >
                        Some of the web technologies <br></br> i mostly used
                        are:
                      </span>{" "}
                      <div className="animate__animated animate__backInLeft Animateiv6">
                        <div>
                          <ReactRotatingText
                            items={[
                              " React Bootstrap",

                              " MaterialUI (React)  ",
                              " NextJS (ReactJS)",

                              " AOS (animate on scroll) ",

                              " Animate.css",

                              " Sanity IO",
                              " NodeJS",
                              " MogoDB",
                              " ExpressJS",

                              " FramerMotion",
                            ]}
                          />
                        </div>
                      </div>
                    </p>
                  </div>
                  <br />
                  <div className="animate__animated animate__lightSpeedInRight  Animateiv7">
                    <p
                      style={{
                        color: "white",

                        textShadow: showComponent
                          ? "0 0 10px rgba(255, 255, 255, 0.8)"
                          : "none",
                      }}
                    >
                      {showComponent ? (
                        <b className="glow-text star">Now scroll down</b>
                      ) : (
                        <>
                          Looking to discover my background, work and technical
                          abilities <span>?</span>
                        </>
                      )}
                      <br></br>
                      <span>
                        <div
                          style={{
                            display: "inline-block",
                            marginBottom: "20px",
                          }}
                        >
                          {showComponent
                            ? "Or Click to hide"
                            : "Click to Explore "}
                        </div>
                      </span>
                      <ArrowForwardOutlinedIcon />

                      <motion.button
                        animate={{
                          y: [-9, 9],
                        }}
                        transition={{
                          ease: "linear",
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          cursor: "pointer",
                          background: "none",
                          backgroundColor: "none",
                          borderColor: "transparent",
                        }}
                        onClick={handleClick}
                        className="cursorp"
                      >
                        <MouseOutlinedIcon
                          onClick={handleClick}
                          style={button}
                          className="cursorp"
                        />
                      </motion.button>
                      <div
                        className="Homeresume animate__animated animate__backInRight"
                        style={{
                          display: showComponent ? "inline-block" : "none",
                          marginBottom: "20px",
                        }}
                      >
                        <span>Or download My </span> <PictureAsPdfIcon />
                        <span>Resume</span> &nbsp;
                        <a
                          href={Resume} // Use the imported Resume as the href // Replace with the actual path to your PDF file
                          download="sufi.pdf" // Specify the desired downloaded file name
                        >
                          <motion.button
                            animate={{
                              y: [-9, 9],
                            }}
                            transition={{
                              ease: "linear",
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            style={{
                              cursor: "pointer",
                              background: "none",
                              backgroundColor: "none",
                              borderColor: "transparent",
                            }}
                            className="cursorp"
                          >
                            <FileDownloadOutlinedIcon
                              style={button}
                              className="cursorp"
                            />
                          </motion.button>
                        </a>
                      </div>
                      <div
                        className="Homeresume animate__animated animate__backInRight"
                        style={{
                          display: showComponent ? "inline-block" : "none",
                        }}
                      >
                        <span>Or Email ME </span>
                        &nbsp;
                        <a
                          href="mailto:sufianmustafa0900@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <motion.button
                            animate={{
                              y: [-9, 9],
                            }}
                            transition={{
                              ease: "linear",
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            style={{
                              cursor: "pointer",
                              background: "none",
                              backgroundColor: "none",
                              borderColor: "transparent",
                            }}
                            className="cursorp"
                          >
                            <EmailOutlinedIcon
                              style={button}
                              className="cursorp"
                            />
                          </motion.button>
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
                {/* HTML FOR TWO ANIMATED LINES */}
                <div>
                  <AsyncSvgHomePage />
                </div>
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
      {showComponent && (
        <Suspense fallback={<Spin />}>
          <AsyncALLComponents />
        </Suspense>
      )}
    </>
  );
};

export default Home;

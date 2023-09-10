import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Spin from "./Spin";
import SkillList from "./SkillList";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import Divider from "@mui/material/Divider";
import { Helmet } from "react-helmet";
const Skill = () => {
  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

    border: "1px solid rgba(255, 255, 255, 0.3)",
  }));

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []); // Empty dependency

  return (
    <div style={{ marginTop: "70px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Skills - Sufian Mustafa</title>
        <meta
          name="description"
          content="Explore Sufian Mustafa's proficiency in various technologies and tools. Discover his expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#Skill" />
      </Helmet>
      {loading ? (
        <Spin />
      ) : (
        <div>
          <Grid
            container
            spacing={2}
            padding={2}
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              lg={9}
              sm={12}
              style={{ width: "100%" }}
              className="flex"
            >
              <Item style={{ width: "100%" }} className="item">
                <div className="about41" style={{ overflow: "hidden" }}>
                  <h3>
                    <span
                      style={{ float: "left" }}
                      className="HeadingArrow"
                      data-aos="flip-left"
                    >
                      <ArrowBackIosNewOutlinedIcon />
                      <ArrowBackIosNewOutlinedIcon />
                    </span>
                    My Skill
                    <span
                      style={{ float: "right" }}
                      className="HeadingArrow"
                      data-aos="flip-right"
                    >
                      {" "}
                      <ArrowForwardIosOutlinedIcon />
                      <ArrowForwardIosOutlinedIcon />
                    </span>
                  </h3>
                </div>
                <div className="About3" data-aos="zoom-in-down">
                  <p>
                    {" "}
                    In my journey as a developer, I've gained proficiency in a
                    variety of technologies and tools. Below, you'll find an
                    overview of my skills, each accompanied by a percentage that
                    reflects my level of expertise.
                  </p>
                </div>
                <SkillList style={{ width: "100%" }} />
                <div className="About3" data-aos="zoom-in-up">
                  <p>
                    {" "}
                    My skills are not static; I'm committed to continuous
                    learning and growth, which enables me to adapt to new
                    challenges and technologies effectively. As I evolve, I look
                    forward to elevating my expertise across all areas of
                    development. <br />
                    Feel free to reach out if you'd like to discuss my skills
                    further or if you have specific questions about any
                    technology mentioned above.
                  </p>
                </div>
                <br />
              </Item>
            </Grid>
          </Grid>
        </div>
      )}
      <br></br>
      <Divider />

      <br></br>
    </div>
  );
};

export default Skill;

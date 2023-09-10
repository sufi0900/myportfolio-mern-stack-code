import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useParams } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "aos/dist/aos.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import AOS from "aos";
import "aos/dist/aos.css";

import Typography from "@mui/material/Typography";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "animate.css/animate.min.css";

import Divider from "@mui/material/Divider";
import "react-quill/dist/quill.snow.css";
import firebase from "./firebase";
import { getDatabase, ref, onValue, off } from "firebase/database";
import Spin from "./Spin";
import { Helmet } from "react-helmet";
import PageWithComments from "./PageWithComments";
const SkillCardDetail = () => {
  const [skill, setSkill] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, `/skills/${id}`); // Assuming your Firebase structure has a direct path to the skill you want.

    const unsubscribe = onValue(
      skillsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setSkill(data);
        }
      },
      {
        onlyOnce: true,
      }
    );

    // Cleanup: Unsubscribe from Firebase listener when component unmounts
    return () => {
      off(skillsRef, "value", unsubscribe);
    };
  }, [id]);

  if (!skill) {
    return (
      <div style={{ marginTop: "70px" }}>
        {" "}
        <Spin />
      </div>
    );
  }

  const progress = {
    width: "100%",
  };
  AOS.init();
  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",

    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  }));
  const canonicalUrl = `https://sufianmustafa.com/#Skill/${skill.id}`;

  return (
    <div style={{ marginTop: "60px" }}>
      <>
        <style type="text/css">
          {`   

.progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
  font-size:17px;
color:black; }
.progress{
  background-color: rgba(247, 90, 216, 0.696);
}


}

`}
        </style>
      </>
      <br></br>
      <br></br>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Helmet>
          <title>{skill.title} - Skill Sufian Mustafa</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content={`Explore details about my skill: ${skill.title}. Learn about my expertise in web development, including ReactJS, Node.js, HTML5, CSS3, and more. ${skill.description}`}
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11}>
          <Item className="moreproject item">
            <br></br>
            <div
              className="About3"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              {" "}
              <h1> {skill.title}</h1>
            </div>
            <br />
            <div className="flex">
              <AnimatedProgressProvider
                valueStart={1}
                valueEnd={skill.percentage}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(percentage) => {
                  const roundedPercentage = Math.round(percentage);
                  const containerSize = 350; // Set the desired container size
                  const imageSize = containerSize - 140; // Adjust the image size as needed

                  return (
                    <div
                      style={{ width: containerSize, height: containerSize }}
                    >
                      <CircularProgressbarWithChildren
                        value={roundedPercentage}
                        styles={buildStyles({
                          textColor: "black",
                          pathColor: "rgba(78, 78, 246, 0.647)",
                          border: "1px solid black",
                          trailColor: "rgba(247, 90, 216, 0.696)",
                          pathTransition: "none",
                          width: containerSize, // Set the width
                          height: containerSize, // Set the height
                        })}
                      >
                        <img
                          style={{
                            width: imageSize,
                            height: imageSize,
                            borderRadius: "50%",
                          }}
                          src={skill.imageFile}
                          alt="sufi"
                        />
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                          <Typography
                            sx={{ fontSize: "26px" }}
                            className="custom-input-color"
                          >
                            {`${roundedPercentage}%`}
                          </Typography>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <ListItem
              style={{
                width: "90%",
                position: "relative",
                left: "5%",

                textAlign: "center",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  style={{
                    height: "60px",
                    width: "60px",
                    background: "none",
                  }}
                >
                  <img
                    className="i-swing"
                    src={skill.imageFile}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Avatar>
              </ListItemAvatar>
              <ProgressBar
                animated
                now={skill.percentage}
                style={progress}
                label={
                  <span className="progress-label-color">{`${skill.percentage}%`}</span>
                } // Apply the class to the label
              />
            </ListItem>
            <br></br>

            <div className="About3">
              <p
                style={{
                  fontSize: "18px",
                }}
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                {skill.description}
              </p>
            </div>
            <div className="flex">
              <div style={{ display: "block", justifyContent: "center" }}>
                {skill &&
                  skill.images.map((image, index) => (
                    <div
                      className="QuillDescription"
                      key={index}
                      style={{
                        margin: "10px",
                        right: "5%",
                        position: "relative",
                      }}
                    >
                      <a href={image}>
                        <img src={image} alt="img loading..." />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <Divider />
            <br></br>
            <PageWithComments />
          </Item>
        </Grid>
      </Grid>{" "}
      <br></br>
      <br></br>
    </div>
  );
};

export default React.memo(SkillCardDetail);

import * as React from "react";

import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import { motion } from "framer-motion";

// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { ReadMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function KitchenSinkExample() {
  const project = {
    transition: "0.5s",
    borderRadius: "20px",
  };

  const butn = {
    fontSize: "58px",
    color: "black",
    cursor: "pointer",
    position: "relative",
  };
  return (
    <>
      <Grid
        item
        lg={4}
        sm={6}
        xl={3}
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        padding={3}
      >
        <Link
          to="/MyProjects"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Card style={project} className="ProjectCard">
            <div
              style={{
                position: "relative",
                bottom: "-10px",
              }}
            >
              <motion.div
                class="Top_Circle"
                animate={{
                  y: [-10, 10],
                  background: [
                    "hsla(326, 100%, 50%, 1)",
                    "hsla(264, 100%, 50%, 1)",
                  ],
                }}
                transition={{
                  ease: "linear",
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ left: "0.5%" }}
              ></motion.div>
            </div>
            <div
              style={{
                height: "270px",
                width: "97%",

                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                <motion.button
                  animate={{
                    x: [-9, 9],
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
                >
                  <ReadMore style={butn} />
                </motion.button>

                <hr></hr>
                <h3> Explore All Projects</h3>
              </p>
            </div>{" "}
            <CardActions
              disableSpacing
              style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            ></CardActions>
            <motion.div
              class="Bottom_Circle"
              animate={{
                x: [10, -10],

                backgroundColor: [
                  "hsla(326, 100%, 50%, 1))",
                  "hsla(264, 100%, 50%, 1)",
                ],
              }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ left: "75%" }}
            ></motion.div>
          </Card>
        </Link>
      </Grid>
    </>
  );
}

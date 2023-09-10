import * as React from "react";

import { motion } from "framer-motion";

// import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

import Grid from "@mui/material/Grid";
import { ReadMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function RecipeReviewCard() {
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
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link to="/MyBlogs" style={{ color: "black" }}>
          <motion.Card className="BlogCard">
            <br></br>
            <br></br>
            <div
              style={{
                height: "150px",
                width: "90%",

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
                <h3> Explore All Blogs</h3>
                <br />
                <br />
              </p>
            </div>{" "}
            <Divider></Divider>
            <br></br>
          </motion.Card>
        </Link>
      </Grid>
    </>
  );
}

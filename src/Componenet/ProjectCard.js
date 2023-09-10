import React from "react";

import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";

import { LazyLoadImage } from "react-lazy-load-image-component";

import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../redux/features/projectSlice";
import { Delete, Edit } from "@mui/icons-material";
const h5 = {
  color: "black",
  textDecoration: "underline",
  cursor: "pointer",
  "&:hover": {
    color: "blue",
    transform: "translateZ(50px)",
  },
};

const project = {
  transition: "0.3s",
  borderRadius: "20px",
  overflow: "visible",
};

export default function KitchenSinkExample({
  imageFile,
  description,
  title,
  imgurl,
  imgurl1,
  _id,
}) {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      dispatch(deleteProject({ id, toast }));
    }
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
        data-aos="zoom-in"
        padding={3}
      >
        <Card className="ProjectCard item" style={project}>
          <div
            className="ProjectCardInner"
            style={{
              position: "relative",
              bottom: "10px",
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
            ></motion.div>{" "}
            <h1
              style={{
                left: "0%",
                fontSize: "22px",
                fontWeight: "bolder",
                top: "12px",
              }}
              className="projectcardtitle"
            >
              {title}
            </h1>
          </div>

          <figure
            className="imghvr-push-right"
            style={{
              borderRadius: "20px",
            }}
          >
            {" "}
            {imageFile ? (
              <LazyLoadImage
                src={imageFile}
                style={{
                  height: "270px",
                  width: "97%",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <LazyLoadImage
                src={imgurl}
                style={{
                  height: "270px",
                  width: "97%",
                  borderRadius: "10px",
                }}
              />
            )}
            <figcaption
              style={{
                overflowX: "auto",
                backgroundColor: "white",
              }}
              className="figcaption1"
            >
              <div className="About3">
                {" "}
                <p style={{ color: "black" }}> {description}</p>
              </div>
            </figcaption>
          </figure>

          <CardActions
            disableSpacing
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Link to={`/project/${_id}`} className="themecard">
              <Typography
                variant="h5"
                sx={h5}
                className="custom-input-color themecard"
              >
                Read More...
              </Typography>
            </Link>
            {user?.result?._id && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Delete
                  onClick={() => handleDelete(_id)}
                  style={{ color: "#dd4b39", cursor: "pointer" }}
                />
                <Link to={`/editProject/${_id}`}>
                  <Edit
                    style={{
                      color: "#55acee",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
            )}
          </CardActions>
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
          ></motion.div>
        </Card>
      </Grid>
    </>
  );
}

import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { deleteTour } from "../redux/features/tourSlice";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Grid from "@mui/material/Grid";
import { Delete, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export default function RecipeReviewCard({
  imageFile,
  description,
  title,
  date,
  imgurl,
  _id,
}) {
  const h5 = {
    color: "black",
    textDecoration: "underline",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
      transform: "translateZ(50px)",
    },
  };
  const { user } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      dispatch(deleteTour({ id, toast }));
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
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        data-aos="zoom-in"
      >
        <motion.Card className="BlogCard ProjectCard item">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                S
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <div style={{ display: "inline-block" }}>
                <h1 style={{ fontSize: "22px", margin: 0 }}>Sufian Mustafa</h1>
              </div>
            }
          />
          <p> {date}</p>
          <div className="CardHeading">
            {" "}
            <h1 style={{ left: "0%", fontSize: "22px" }}> {title} </h1>
          </div>

          <figure
            className="imghvr-push-right"
            style={{ borderRadius: "20px" }}
          >
            <LazyLoadImage
              src={imageFile}
              alt="blogImg"
              style={{
                height: "250px",
                width: "97%",
                borderRadius: "20px",
              }}
            />

            <figcaption
              style={{
                backgroundColor: "white",
                color: "black",
                overflowX: "auto",
              }}
            >
              <div className="BlogP">
                <p> {description}</p>
              </div>
              <div>
                <CardActions disableSpacing>
                  <IconButton>
                    <Link to={`/tour/${_id}`}>
                      {" "}
                      <Typography style={{ color: "blue", fontSize: "17px" }}>
                        Read More..
                      </Typography>
                    </Link>
                  </IconButton>
                </CardActions>
              </div>
            </figcaption>
          </figure>

          <br></br>
          <br></br>

          <h1>
            <Link to={`/tour/${_id}`} className="themecard">
              {" "}
              <Typography
                variant="h5"
                sx={h5}
                className="custom-input-color themecard"
              >
                Read More..
              </Typography>
            </Link>
          </h1>
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
              <Link to={`/editTour/${_id}`}>
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
          <Divider></Divider>
          <br></br>
        </motion.Card>
      </Grid>
    </>
  );
}

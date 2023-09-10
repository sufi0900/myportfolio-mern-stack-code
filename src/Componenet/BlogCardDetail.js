import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import PageWithComments from "./PageWithComments";

import AOS from "aos";
import "aos/dist/aos.css";

import ModalImage from "react-modal-image";
import "react-quill/dist/quill.snow.css";

import "animate.css/animate.min.css";
import Divider from "@mui/material/Divider";
import { getTour, clearTour } from "../redux/features/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Spin from "./Spin";
const BlogCardDetail = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => ({ ...state.tour }));
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
    dispatch(clearTour());

    // Simulate loading delay
    const delay = 1500; // 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [dispatch, id]);

  const canonicalUrl = `https://sufianmustafa.com/#tour/${tour.id}`;

  AOS.init();
  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  }));

  return (
    <div style={{ marginTop: "90px" }}>
      <Helmet>
        <title>{`${tour.title} - Blogs Sufian Mustafa`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Explore Sufian Mustafa's portfolio website articles on web development, technology, and more. Stay updated with insightful articles and tutorials on various topics ${tour.title}. ${tour.description}`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <Item className="moreproject item">
            <br></br>
            {isLoading ? (
              <Spin />
            ) : (
              <>
                <div
                  style={{
                    position: "relative",
                    width: "100%", // Adjust the width as needed
                    height: "300px", // Adjust the height as needed
                    overflow: "hidden", // Hide overflow to prevent the cover photo from overflowing
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1693428898/Blog-Cover_tw63ut.gif" // Replace with your cover photo URL
                    alt="Cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensure the cover photo fills the container
                      borderRadius: "10px",
                    }}
                  />

                  {/* Date */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px", // Adjust the top positioning
                      right: "10px", // Adjust the right positioning
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {tour.date}
                  </div>

                  {/* Circular Profile Picture */}
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1693673198/0948d54e-68a2-451c-ba15-ac683b0c0780_kclx5w.webp" // Replace with your profile picture URL
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)", // Center horizontally
                      width: "200px", // Adjust the width as needed
                      height: "200px", // Maintain a square aspect ratio
                      borderRadius: "50%",
                      border: "2px solid rgba(250, 47, 210, 0.696)",
                    }}
                    alt="Profile"
                  />
                </div>

                <br />

                <div className="About3">
                  {" "}
                  <h1 data-aos="zoom-in" data-aos-delay="400">
                    {tour.title}
                  </h1>{" "}
                </div>

                <div
                  className="QuillDescription"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div
                    className="QuillDescription flex"
                    style={{ width: "100%" }}
                  >
                    <p dangerouslySetInnerHTML={{ __html: tour.description }} />
                  </div>
                </div>

                <Divider />
                <br></br>

                <div
                  className="QuillDescription"
                  style={{ right: "5%", position: "relative" }}
                >
                  <div>
                    <ModalImage
                      small={tour.imageFile}
                      large={tour.imageFile}
                      alt="img not uploaded"
                    />
                  </div>
                </div>

                <br></br>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="QuillDescription"
                    style={{ right: "5%", position: "relative" }}
                  >
                    <div>
                      <ModalImage
                        small={tour.imageFile1}
                        large={tour.imageFile1}
                        alt="img not uploaded"
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="QuillDescription"
                    style={{ right: "5%", position: "relative" }}
                  >
                    <div>
                      <ModalImage
                        small={tour.imageFile2}
                        large={tour.imageFile2}
                        alt="img not uploaded"
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <PageWithComments />
              </>
            )}
          </Item>
        </Grid>
      </Grid>{" "}
      <br></br>
      <Divider style={{ width: "100%" }} />
      <br></br>
    </div>
  );
};

export default React.memo(BlogCardDetail);

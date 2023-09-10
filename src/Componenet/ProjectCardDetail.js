import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import AOS from "aos";
import "aos/dist/aos.css";
import { getProject, clearProject } from "../redux/features/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageWithComments from "./PageWithComments";
import { Helmet } from "react-helmet";
import Spin from "./Spin";

const ProjectCardDetail = () => {
  AOS.init();
  const dispatch = useDispatch();
  const { Project } = useSelector((state) => ({
    ...state.project,
  }));
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getProject(id));
    }

    // Simulate loading delay
    const delay = 1500; // 2 seconds
    setTimeout(() => {
      setIsLoading(false); // Move this line inside the setTimeout
    }, delay);

    // Clear the project data when unmounting the component
    return () => {
      dispatch(clearProject());
    };
  }, [dispatch, id]);

  const canonicalUrl = `https://sufianmustafa.com/#Project/${Project.id}`;

  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  }));
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "80%",
    cursor: "pointer",
  };

  return (
    <>
      <Helmet>
        <title>{`${Project.title} - Blogs Sufian Mustafa`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Explore Sufian Mustafa's portfolio projects. Get insights into the technologies and skills used in each project, and discover the innovative solutions developed. ${Project.title}. ${Project.description}`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div style={{ marginTop: "80px" }}>
        {isLoading ? ( // Show loading spinner while isLoading is true
          <Spin />
        ) : (
          <>
            <div className="About3">
              <h1>
                {" "}
                <a href={Project.link} className="link" target="site">
                  Visit this site
                </a>{" "}
              </h1>{" "}
            </div>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              <Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "97%",
                  padding: "20px",
                }}
                className="item"
              >
                <div className="ProjectTop">
                  <div
                    style={{
                      width: "70%",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    <a href={Project.imageFile}>
                      <img
                        src={Project.imageFile}
                        alt="img not uploaded"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}
                      />
                    </a>
                  </div>
                  <br />
                  <div
                    style={{
                      width: "70%",

                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                    className="ProjectTextSm"
                  >
                    <span
                      className="ProjectTopTextDiv item"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="500"
                    >
                      <div className="About3">
                        {" "}
                        <h1 style={{ fontSize: "27px" }}> {Project.title} </h1>
                      </div>

                      {Project.toptext1}
                    </span>
                  </div>
                </div>
              </Item>
              <br />
              <br />
            </Grid>
            <br />
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              <Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "97%",
                  padding: "20px",
                }}
                className="item"
              >
                <div className="ProjectTop">
                  <div
                    style={{
                      width: "70%",
                      position: "relative",
                      left: "10%",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex",
                      zIndex: "1",
                    }}
                  >
                    <span
                      className="ProjectTopTextDiv item"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      data-aos-duration="500"
                    >
                      {Project.toptext2}
                      <div className="About3">
                        {" "}
                        <h1 style={{ fontSize: "27px" }}>
                          {" "}
                          <a href={Project.link} className="link" target="site">
                            Visit this site
                          </a>{" "}
                        </h1>
                      </div>
                    </span>
                  </div>

                  <br />

                  <div
                    style={{
                      width: "70%",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex",
                      marginRight: "80px",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    {" "}
                    <a href={Project.imageFile1}>
                      <img
                        src={Project.imageFile1}
                        alt="img not uploaded"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          cursor: "pointer",
                          borderRadius: "10px",

                          zIndex: "-1",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </Item>
              <br />
              <br />
            </Grid>
            <br />
            <br />
            <br />
            <Grid
              container
              spacing={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <br />
              <br />
              <br />

              <Grid item xs={11}>
                <Item className="moreproject item">
                  <div className="QuillDescription ">
                    <h1> More About this Project </h1>
                    <div
                      className="PrjectsDescription QuillDescription"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="500"
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Project.description,
                        }}
                      />
                    </div>
                  </div>

                  <br />

                  <Divider />
                  <br />
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
                        <img
                          src={Project.imageFile2}
                          alt="img not uploaded"
                          style={imgStyle}
                        />
                      </div>
                    </div>
                  </div>

                  <br></br>
                </Item>
                <br />
                <PageWithComments />
              </Grid>
            </Grid>{" "}
          </>
        )}
      </div>
    </>
  );
};
export default React.memo(ProjectCardDetail);

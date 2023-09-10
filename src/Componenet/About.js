import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Resume from "./Resume/sufi.pdf";
import Images from "./Images";
import Container from "@mui/material/Container";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import Grid from "@mui/material/Grid";
import "animate.css";

import ListA from "./ListAboutMe";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import AnimatedDiv from "./AnimateDiv";
import Spin from "./Spin";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import ContactMail from "@mui/icons-material/ContactMail";

const About = () => {
  const button = {
    fontSize: "38px",
    color: "rgba(15, 15, 251, 0.878)",
    position: "relative",
  };

  const progress = {
    width: "100%",
    height: "25px",
    borderRadius: "40px",
    color: "red",
  };

  AOS.init();

  const Item = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  }));
  const Bluetick = {
    color: "rgb(255, 0, 242)",
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me - Sufian Mustafa</title>
        <meta
          name="description"
          content="Sufian Mustafa is a web developer with a passion for creating user-friendly and visually appealing websites. He is proficient in using front-end technologies such as HTML, CSS, and JavaScript, with a particular focus on ReactJS. He is also proficient in using back-end technologies such as Node.js, PHP, and MongoDB"
        />
        <link rel="canonical" href="https://sufianmustafa.com/about" />
      </Helmet>
      <>
        <style type="text/css">
          {`   


  .progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
  font-size:17px;
color:black; }
.progress{
  background-color: rgba(247, 90, 216, 0.696);
}

`}
        </style>
      </>

      <Grid container spacing={2} padding={2} className="About">
        <Grid item lg={6} sm={12} className="About3">
          <Item className="item">
            <div className="AboutLeftDiv para" style={{ overflow: "hidden" }}>
              <h1
                data-aos="flip-left"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                About Me
              </h1>

              <p style={{ overflow: "hidden" }}>
                <span>Who am i and how i got here</span>{" "}
                <AnimatedDiv
                  className="animate__zoomIn"
                  data-aos-duration="700"
                >
                  {" "}
                  I am Sufian Mustafa, a web developer with a passion for
                  creating things that live on the internet. My interest in web
                  development began during my Master's degree in Computer
                  Science at AWKUM University. I have since learned a great deal
                  about computer science, but my true passion lies in web
                  development. I enjoy the challenge of creating user-friendly
                  and visually appealing websites.
                </AnimatedDiv>
                <br></br>
                <span>What am I currently doing </span>{" "}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  I am a web developer who is constantly learning and using
                  modern technologies to stay at the forefront of the industry.
                  I have been continuously working on web development for the
                  past year, and I have experience with a variety of projects,
                  including e-commerce websites, social media platforms,
                  Portfolio websites ETC. I am confident that I have the skills
                  and experience to create high-quality websites that meet the
                  needs of any user .<br></br>
                  <span>
                    Front-End Development Expertise: <br />
                  </span>{" "}
                  <span> With a Focus on ReactJS</span> <br />
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    I have a wide range of experience in web development, with a
                    focus on front-end technologies such as HTML, CSS, and
                    JavaScript with a particular focus on ReactJS. ReactJS is a
                    JavaScript framework that is known for its ease of use and
                    its ability to create user-friendly and visually appealing
                    websites. and this website was also created using ReactJS. I
                    love to use ReactJS with React MUI and React Bootstrap, as I
                    believe these libraries provide a great foundation for
                    building user-friendly and visually appealing websites.
                  </div>{" "}
                  <br />
                  <span>My Expertise in Back-End Development</span>
                  <br />
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    I am also proficient in using backend technologies such as
                    Node.js, php and MongoDB. I have a strong understanding of
                    the entire web development process
                  </div>
                  <br></br>
                </div>
                <br></br>
                <h4>
                  <div
                    className="AboutH4"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="700"
                  >
                    Here are few technologies I’ve been recently working with:
                  </div>
                  <div className="AboutLeftDiv_List">
                    <ul>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="100"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        HTML5
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="150"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        CSS3
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="170"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        JavaScript
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="200"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        ReactJS
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="230"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        NodeJS
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="260"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        ExpressJS
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="300"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        MongoDb
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="330"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        React MUI
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="360"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        React Bootstrap
                      </li>
                      <li
                        data-aos="zoom-out-down"
                        data-aos-delay="390"
                        data-aos-duration="500"
                      >
                        <FileDownloadDoneOutlinedIcon style={Bluetick} />
                        FramerMotion
                      </li>
                    </ul>
                  </div>
                </h4>
              </p>

              <div>
                <List
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                >
                  <ListItem>
                    <ProgressBar
                      animated
                      now={90}
                      style={progress}
                      label="90%"
                    />
                    <h2>FrontEnd</h2>
                  </ListItem>

                  <ListItem>
                    <ProgressBar
                      animated
                      now={50}
                      style={progress}
                      label="40%"
                    />
                    <h2>BackEnd</h2>
                  </ListItem>
                </List>
              </div>
            </div>
          </Item>
        </Grid>

        <Grid item lg={6} sm={12} padding={1} style={{ overflow: "hidden" }}>
          <Item className="item">
            <div style={{ padding: "10px" }}>
              <div className="image-area" data-aos="fade">
                <div className="img-wrapper">
                  <Suspense
                    fallback={
                      <div>
                        <Spin />
                      </div>
                    }
                  >
                    <a href={Images.image1.src}>
                      {" "}
                      <img
                        src={Images.image1.src}
                        alt={Images.image1.alt}
                        placeholder={<Spin />}
                        loading="lazy"
                      />
                    </a>
                  </Suspense>
                  <h2>SuFiaN MusTaFa</h2>
                </div>
              </div>
            </div>
            <br></br>

            <Container maxWidth="sm">
              <Grid
                item
                lg={12}
                sm={12}
                data-aos="zoom-in-up"
                data-aos-offset="300"
                data-aos-delay="200"
                data-aos-duration="700"
              >
                <ImageGallery />

                <div
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <a
                    href={Resume} // Use the imported Resume as the href // Replace with the actual path to your PDF file
                    download="sufi.pdf" // Specify the desired downloaded file name
                    style={{ textDecoration: "none" }}
                  >
                    <h2 style={{ padding: "10px" }} className="button-85">
                      {" "}
                      Download My Resume <PictureAsPdfIcon />
                      <FileDownloadOutlinedIcon
                        style={button}
                        className="cursorp"
                      />
                    </h2>{" "}
                  </a>
                  &nbsp;
                </div>
                <ListA />
                <br />
                <div
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <Link to="/faq" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      FAQ
                      <QuizIcon style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp;
                </div>

                <br />
                <div
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <Link to="/AboutMySite" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      About My Portfolio
                      <InfoIcon style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp;
                </div>
                <br />
                <div
                  className="Homeresume animadte__animated animate__backInRight About3"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <h2 style={{ padding: "10px" }} className="button-85">
                      Contact Me
                      <ContactMail style={button} className="cursorp" />
                    </h2>{" "}
                  </Link>
                  &nbsp;
                </div>
              </Grid>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

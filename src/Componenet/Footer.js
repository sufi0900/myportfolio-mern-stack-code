import React from "react";
import { Grid, Container } from "@mui/material";

import {
  AddReaction,
  ArrowUpwardSharp,
  GitHub,
  Info,
  LinkedIn,
  Mail,
  ManageAccounts,
  QuestionAnswer,
  Timeline,
  WhatsApp,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = () => {
  // ...

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling animation
    });
  };

  // ...

  return (
    <div>
      <footer className="new_footer_area bg_color item">
        <div className="new_footer_top">
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="About3">
                  {" "}
                  <h1 style={{ fontSize: "28px" }}>About Me</h1>
                </div>
                <div className="footerpara">
                  <p>
                    Thank you for visiting my portfolio. Feel free to reach out
                    if you have any questions or collaboration ideas. I'm here
                    to share my expertise with you. I'm Sufian Mustafa, a Web
                    Developer specializing in crafting user-friendly and
                    responsive websites. Let's connect and create something
                    amazing.
                  </p>
                </div>

                <ul className="footerc1">
                  <li>Email: sufianmustafa0900.com</li>
                  <li>Phone: +92 3177 652064</li>
                  <li>Address: Pakistan KPK (Mardan)</li>
                </ul>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sufian-mustafa-7a7845226/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="https://github.com/sufi0900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=03177652064"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsApp />
                  </a>

                  {/* <a href="https://twitter.com/johndoe">
                    <Twitter />
                  </a> */}
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="500"
              >
                {/* Services */}

                <div className="About3">
                  <ul className="services-list">
                    <li style={{ listStyle: "none" }}>
                      {" "}
                      <h1 style={{ fontSize: "28px" }}>Services</h1>
                    </li>
                    <li>Responsive Web Design</li>
                    <li>Animation Web Design</li>
                    <li>React MUI</li>
                    <li>Bootstrap</li>
                    <li>NextJS</li>

                    <li>Full Stack Web Development</li>
                    <li>UX UI Design </li>
                    <li> Website Deployment </li>
                    <li> Website Performance </li>
                    <li> SEO</li>

                    <li>Bug Fixing and Troubleshooting</li>
                  </ul>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div className="About3">
                  <ul
                    className="services-list site"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <div className="About3">
                        {" "}
                        <h1 style={{ fontSize: "28px" }}>Useful Links</h1>
                      </div>
                    </li>
                    <li>
                      <Link to="/faq">
                        FAQ <QuestionAnswer />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        About Me <Info />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/AboutMySite">
                        About My Site <Info />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/MyProjects">
                        Projects <Timeline />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/MySkills">
                        Skill <ManageAccounts />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/MyBlogs">
                        Blogs <AddReaction />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        Contact Info <Mail />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>

          <div
            className="footer_bg"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="500"
          >
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
            <div style={{ textAlign: "center", marginBottom: "-85px" }}>
              <Link
                to="/logo"
                className="logo-link"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <Grid item xs={12} style={{ paddingBottom: "5px" }}>
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819141/Images/logo_mjnbuh.png"
                    alt="logo"
                    style={{
                      width: "50px",
                      borderRadius: "40px",
                      position: "relative",

                      transition: "transform 0.3s", // Add a transition for smooth effect
                    }}
                    className="logo"
                  />
                </Grid>
              </Link>
              <Grid
                item
                xs={12}
                className="go-to-top"
                style={{ paddingBottom: "5px" }}
              >
                <Button
                  onClick={scrollToTop}
                  className="gototop button-85"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  data-aos-duration="500"
                  style={{ transition: "0.5s" }}
                >
                  Go To Top <ArrowUpwardSharp />{" "}
                </Button>
              </Grid>
              <p className="footer-design-credit">
                Website designed and developed by Sufian Mustafa
              </p>

              <p>All rights reserved &copy; 2023</p>
            </div>
          </div>
        </div>
      </footer>
      <br />
    </div>
  );
};

export default Footer;

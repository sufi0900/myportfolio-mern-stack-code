import React, { useRef, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux/features/projectSlice";
import { useEffect } from "react";
import Spin from "./Spin";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import ReadMoreCard from "./ReadMoreCard";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

// const ProjectCard = React.lazy(() => import("./ProjectCard"));

const HomePageProjects = memo(() => {
  const targetRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);
  const targetRefCurrent = targetRef.current;
  const dispatch = useDispatch();

  const { Projects, loading, currentPage } = useSelector((state) => ({
    ...state.project,
  }));
  useEffect(() => {
    dispatch(getProjects(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setShowComponent(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRefCurrent) {
        observer.unobserve(targetRefCurrent);
      }
    };
  }, [targetRefCurrent]);

  const newlyAddedProjects = Projects
    ? [...Projects]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4)
    : [];

  const [text, setText] = useState("My Projects");

  const onMouseEnter = () => {
    setText("Explore All Projects");
  };

  const onMouseLeave = () => {
    setText("My Projects");
  };

  if (loading) {
    return (
      <div>
        <div
          className="about41"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/MyProjects"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 style={{ overflow: "hidden" }}>
              <span
                style={{
                  float: "left",
                }}
                className="HeadingArrow"
              >
                <ArrowBackIosNewOutlinedIcon />
                <ArrowBackIosNewOutlinedIcon />
              </span>
              {text}
              <span
                style={{
                  float: "right",
                }}
                className="HeadingArrow"
              >
                <ArrowForwardIosOutlinedIcon />
                <ArrowForwardIosOutlinedIcon />
              </span>
            </h3>
          </Link>
        </div>
        <Spin />
      </div>
    );
  }

  return (
    <div>
      <div>
        {loading ? (
          <Spin />
        ) : (
          <div className="flex">
            <div className="item projectdiv">
              <div
                className="about41"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/MyProjects"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3 style={{ overflow: "hidden" }}>
                    <span
                      style={{
                        float: "left",
                      }}
                      className="HeadingArrow"
                    >
                      <ArrowBackIosNewOutlinedIcon />
                      <ArrowBackIosNewOutlinedIcon />
                    </span>
                    {text}
                    <span
                      style={{
                        float: "right",
                      }}
                      className="HeadingArrow"
                    >
                      <ArrowForwardIosOutlinedIcon />
                      <ArrowForwardIosOutlinedIcon />
                    </span>
                  </h3>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  overflowX: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    overflowX: "auto",
                  }}
                >
                  {newlyAddedProjects.map((item) => (
                    <ProjectCard key={item._id} {...item} />
                  ))}

                  <ReadMoreCard />
                </div>
              </div>

              <br></br>
            </div>
          </div>
        )}
        <br></br>
      </div>

      <br />
      <br />
    </div>
  );
});

export default HomePageProjects;

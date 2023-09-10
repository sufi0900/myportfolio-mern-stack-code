import React, { Suspense, useRef, useState } from "react";
import Loadable from "react-loadable";

import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../redux/features/tourSlice";
import { useEffect } from "react";
import Spin from "./Spin";
import ReadMoreBlog from "./ReadMoreBlog";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Blog1 from "./BlogCard";

import { Link } from "react-router-dom";

const HomePageBlogs = () => {
  const targetRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);

  const targetRefCurrent = targetRef.current;
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
  const [text, setText] = useState("My Blogs");

  const onMouseEnter = () => {
    setText("Explore All Blogs");
  };

  const onMouseLeave = () => {
    setText("My Blogs");
  };
  const containerRef = useRef(null);

  const { tours, loading, currentPage } = useSelector((state) => ({
    ...state.tour,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  const newlyAddedProjects = tours
    ? [...tours]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4)
    : [];

  if (loading) {
    return (
      <div>
        {" "}
        <div
          className="about41"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/MyBlogs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>
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
    <>
      <Suspense fallback={<Spin />}>
        <div>
          {loading ? (
            <div>
              <Spin />
            </div>
          ) : (
            <div className="flex">
              <div className="item projectdiv">
                <div
                  className="about41"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to="/MyBlogs"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3>
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
                  <Grid
                    ref={containerRef}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "40px",
                      overflowX: "auto",
                    }}
                  >
                    <Suspense fallback={<Spin />}>
                      {newlyAddedProjects.map((item) => (
                        <Blog1 key={item._id} {...item} />
                      ))}
                    </Suspense>
                    <ReadMoreBlog />
                  </Grid>
                </div>
                <br />

                <br></br>
              </div>
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default HomePageBlogs;

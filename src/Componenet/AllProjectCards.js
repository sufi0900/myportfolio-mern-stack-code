import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  getProjectsByUser,
  searchProjects,
  setCurrentPage,
} from "../redux/features/projectSlice";
import { useEffect } from "react";
import Spin from "./Spin";
import Grid from "@mui/material/Grid";
import Pagination from "./PaginationComponent";
import * as api from "../redux/api"; // Import your API functions
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProjectCard = React.lazy(() => import("./ProjectCard"));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProjectAll = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const { Projects, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.project,
    })
  );

  const dispatch = useDispatch();
  const userId = user?.result?._id;

  useEffect(() => {
    if (userId) {
      dispatch(getProjectsByUser(userId));
    }
  }, [dispatch, userId]);
  useEffect(() => {
    if (userId) {
      dispatch(getProjectsByUser(userId));
    }
  }, [dispatch, userId]);
  const preloadNextPageData = async (currentPage) => {
    const nextPage = currentPage + 1;
    try {
      await api.getProjects(nextPage); // Use your actual API function
      // You can choose to store or use the preloaded data if needed
    } catch (error) {
      // Handle error
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProjects(currentPage));
    preloadNextPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchProjects(search));
      navigate(`/Project/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };
  const location = useLocation();

  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  if (loading) {
    return (
      <>
        <div className="about41" style={{ marginTop: "90px" }}>
          <h3>My projects</h3>
        </div>

        <br></br>
        <br></br>
        <div>
          {" "}
          <Spin />{" "}
        </div>
      </>
    );
  }

  return (
    <div style={{ marginTop: "90px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects - Sufian Mustafa</title>
        <meta
          name="description"
          content="Explore Sufian Mustafa's portfolio projects. Get insights into the technologies and skills used in each project, and discover the innovative solutions developed."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#projects" />
      </Helmet>
      <div className="about41" style={{ marginTop: "90px" }}>
        <h3>
          My projects
          <span
            style={{
              float: "right",
              marginTop: "5px",
            }}
            className="searchicon0"
          >
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Projects 🔎"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ borderRadius: "20px" }}
              />
            </form>
          </span>
        </h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div>
          <Grid container spacing={2} className="flex">
            {Projects.length === 0 && location.pathname !== "/" && (
              <p className="text-center mb-0" tag="h2">
                We couldn't find any matches for "{searchQuery}"
              </p>
            )}
            <div className="About3" style={{ width: "90%" }}>
              <p>
                I am actively working on several projects in development on my
                local computer, which are currently in the final stages of
                development. While they have not yet been deployed to
                production, I have plans to carefully prepare and upload each
                project in the near future. As they reach completion, I will
                showcase them in the project sections.
              </p>
            </div>
            {Projects &&
              Projects.map((item) => (
                <Suspense
                  fallback={
                    <div style={{ marginTop: "75px" }}>
                      <Spin />
                    </div>
                  }
                >
                  {" "}
                  <ProjectCard key={item._id} {...item} />
                </Suspense>
              ))}

            {Projects.length > 0 && (
              <Pagination
                setCurrentPage={setCurrentPage}
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                dispatch={dispatch}
              />
            )}
          </Grid>
          <br />
          <div className="about41">
            <p style={{ fontSize: "20px" }}>
              More proJects coming soon IN SHAA ALLAH...{" "}
            </p>
            <img
              src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1694015121/Screenshot_190_oaffgj.png"
              alt="img"
              style={{
                width: "90%",
                height: "auto",
                border: "2px solid white",
                borderRadius: "10px",
              }}
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProjectAll;

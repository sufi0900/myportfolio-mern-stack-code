import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTours,
  searchTours,
  setCurrentPage,
} from "../redux/features/tourSlice";
import * as api from "../redux/api";
import Spin from "./Spin";
import Pagination from "./PaginationComponent.js";
import Grid from "@mui/material/Grid";
import { getToursByUser } from "../redux/features/tourSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
const BlogCard = React.lazy(() => import("./BlogCard"));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BlogAll = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const { tours, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.tour,
    })
  );

  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
  }, [dispatch, userId]);

  const preloadNextPageData = async (currentPage) => {
    const nextPage = currentPage + 1;
    try {
      await api.getTours(nextPage); // Use your actual API function
      // You can choose to store or use the preloaded data if needed
    } catch (error) {
      // Handle error
    }
  };
  useEffect(() => {
    dispatch(getTours(currentPage));
    preloadNextPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage]);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTours(search));
      navigate(`/tours/search?searchQuery=${search}`);
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
        {" "}
        <div className="about41" style={{ marginTop: "90px" }}>
          <h3>My Blogs</h3>
        </div>
        <div style={{ marginTop: "90px" }}>
          {" "}
          <Spin />{" "}
        </div>
      </>
    );
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs - Sufian Mustafa</title>
        <meta
          name="description"
          content="Explore Sufian Mustafa's portfolio website blogs articles on web development, technology, and more. Stay updated with insightful articles and tutorials on various topics."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#blogs" />
      </Helmet>
      <br></br>
      <br></br>
      <div className="about41" style={{ marginTop: "60px" }}>
        <h3>
          My Blogs
          <span
            style={{
              float: "right",
              marginTop: "5px",
            }}
            className="searchicon0"
          >
            {" "}
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Blogs 🔎"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ borderRadius: "20px" }}
              />
            </form>
          </span>
        </h3>
      </div>
      <div>
        <br></br>
        <br></br>
        <div>
          <div>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {tours.length === 0 && location.pathname !== "/" && (
                <p className="text-center mb-0" tag="h2">
                  We couldn't find any matches for "{searchQuery}"
                </p>
              )}
              {tours &&
                tours.map((item) => (
                  <Suspense
                    fallback={
                      <div>
                        <Spin />
                      </div>
                    }
                  >
                    <BlogCard key={item._id} {...item} />
                  </Suspense>
                ))}
              <Pagination
                setCurrentPage={setCurrentPage}
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                dispatch={dispatch}
              />
            </Grid>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAll;

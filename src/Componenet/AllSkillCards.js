import React, { useEffect, lazy, Suspense, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getSkills,
  getSkillsByUser,
  searchSkills,
  setCurrentPage,
} from "../redux/features/skillSlice";
import { useNavigate } from "react-router-dom";
import * as api from "../redux/api"; // Import your API functions

import Pagination from "./PaginationComponent";
import Spin from "./Spin";

import Grid from "@mui/material/Grid";

import { useLocation } from "react-router-dom";

const MemoizedSkillCard = lazy(() => import("./SkillCard"));
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SkillBackend = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const { Skills, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.skill,
    })
  );
  const dispatch = useDispatch();

  const userId = user?.result?._id;

  useEffect(() => {
    if (userId) {
      dispatch(getSkillsByUser(userId));
    }
  }, [dispatch, userId]);
  useEffect(() => {
    if (userId) {
      dispatch(getSkillsByUser(userId));
    }
  }, [dispatch, userId]);

  const navigate = useNavigate();
  const preloadNextPageData = async (currentPage) => {
    const nextPage = currentPage + 1;
    try {
      await api.getSkills(nextPage); // Use your actual API function
      // You can choose to store or use the preloaded data if needed
    } catch (error) {
      // Handle error
    }
  };
  useEffect(() => {
    dispatch(getSkills(currentPage));
    preloadNextPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchSkills(search));
      navigate(`/Skill/search?searchQuery=${search}`);
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
      <div>
        <div className="about41" style={{ marginTop: "90px" }}>
          <h3>My Skills</h3>
        </div>
        <Spin />
      </div>
    );
  }
  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <div className="about41" style={{ marginTop: "90px" }}>
          <h3>
            My Skills
            <span
              style={{
                float: "right",
                marginTop: "5px",
              }}
              className="searchicon0"
            >
              {" "}
              <form
                className="d-flex input-group w-auto"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Skills 🔎"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ borderRadius: "20px" }}
                />
              </form>
            </span>
          </h3>
        </div>
        <div className="flex">
          {" "}
          <span className="searchicon">
            {" "}
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Skills 🔎"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ borderRadius: "20px" }}
              />
            </form>
          </span>
        </div>

        <br></br>
        <br></br>
        <div>
          <Grid container spacing={5} padding={2} className="flex">
            {Skills.length === 0 && location.pathname !== "/" && (
              <p className="text-center mb-0" tag="h2">
                We couldn't find any matches for "{searchQuery}"
              </p>
            )}

            {Skills &&
              Skills.map((item) => (
                <Suspense
                  fallback={
                    <div style={{ marginTop: "75px" }}>
                      <Spin />
                    </div>
                  }
                >
                  {" "}
                  <MemoizedSkillCard key={item._id} {...item} />{" "}
                </Suspense>
              ))}

            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SkillBackend;

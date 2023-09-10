import React, { Suspense, lazy } from "react";
import "./fonts.css";

import { Routes, Route } from "react-router-dom";
import { checkSession } from "./redux/features/authSlice";

import AdminRoutes from "./pages/AdminRoutes";

import ContactMe from "./Componenet/ContactMe";

import { useEffect } from "react";

import theme from "./Componenet/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./pages/PrivateRoute";
import AddEditTour from "./pages/AddEditTour";
import AddEditProject from "./pages/AddEditProject";

import AllBlogsCard from "./Componenet/AllBlogsCard";

import HomePageBlogs from "./Componenet/HomePageBlogs";

import AllProjectCards from "./Componenet/AllProjectCards";

import Skill from "./Componenet/HomePageSkill";

import UpdateEmailForm from "./pages/UpdateEmailForm";
import ChangePassword from "./pages/UpdatePasswordForm";

import Navbar from "./Componenet/Navbar";
import AboutSection from "./Componenet/AboutSection";
import MyPortfolio from "./Componenet/MyPortfolio";
import FAQ from "./Componenet/FAQ";
import Footer from "./Componenet/Footer";
import Logo from "./Componenet/Logo";
import HomePageProjects from "./Componenet/HomePageProjects";
import Pagination from "./Componenet/PaginationComponent";

import HomePageSkill from "./Componenet/HomePageSkill";
import { getProjects, getTours } from "./redux/api";
import "./App.css";
import "./ResponsiveStyle.css";
import "./imageshover.css";
import Home from "./Componenet/Home";
import HomeSeprate from "./Componenet/HomeSeprate";
import Spin from "./Componenet/Spin";
import SkillCardDetail from "./Componenet/SkillCardDetail";

const MemoizedProjectCardDetail = lazy(() =>
  import("./Componenet/ProjectCardDetail")
);
const MemoizedBlogCardDetail = lazy(() =>
  import("./Componenet/BlogCardDetail")
);

const App = () => {
  const dispatch = useDispatch();
  // Dispatch checkSession action on app start or user interactions (e.g., onClick, useEffect)
  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  useEffect(() => {
    // Delay the execution of getProjects by 3 seconds (adjust the time as needed)
    const projectsTimeout = setTimeout(() => {
      getProjects(1); // Pass the appropriate page number
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clean up the timeout if the component unmounts before the delay
    return () => clearTimeout(projectsTimeout);
  }, []);

  useEffect(() => {
    // Delay the execution of getTours by 5 seconds (adjust the time as needed)
    const toursTimeout = setTimeout(() => {
      getTours(1); // Pass the appropriate page number
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clean up the timeout if the component unmounts before the delay
    return () => clearTimeout(toursTimeout);
  }, []);

  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  if (process.env.NODE_ENV !== "development") console.log = () => {};
  console.log = console.warn = console.error = () => {};

  // Look ma, no error!
  console.error("Something bad happened.");
  // Look ma, no error!
  console.error("Something bad happened.");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App custom-cursor">
          <div>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<AboutSection />} />
              <Route exact path="/home" element={<HomeSeprate />} />
              <Route exact path="/footer" element={<Footer />}></Route>
              <Route exact path="/logo" element={<Logo />}></Route>
              <Route exact path="/faq" element={<FAQ />}></Route>
              <Route path="/adminDashboard" element={<AdminRoutes />} />

              <Route
                exact
                path="/AboutMySite"
                element={<MyPortfolio />}
              ></Route>

              <Route path="/b" element={<HomePageBlogs />} />
              <Route path="/page" element={<Pagination />} />
              <Route path="/p" element={<HomePageProjects />} />

              <Route path="/s" element={<HomePageSkill />} />
              <Route path="/MyProjects" element={<AllProjectCards />} />
              <Route path="/Project/search" element={<AllProjectCards />} />
              <Route path="/Skill" element={<Skill />}></Route>
              <Route path="/MyBlogs" element={<AllBlogsCard />}></Route>
              <Route path="/tours/search" element={<AllBlogsCard />}></Route>
              <Route path="/contact" element={<ContactMe />}></Route>

              <Route
                path="/editTour/:id"
                element={
                  <PrivateRoute>
                    <AddEditTour />
                  </PrivateRoute>
                }
              />

              <Route
                path="/editProject/:id"
                element={
                  <PrivateRoute>
                    <AddEditProject />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PrivateRoute>
                    {" "}
                    <Login />
                  </PrivateRoute>
                }
              />

              <Route
                path="/changeemail"
                element={
                  <PrivateRoute>
                    <UpdateEmailForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/changepswd"
                element={
                  <PrivateRoute>
                    {" "}
                    <ChangePassword />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PrivateRoute>
                    <Register />
                  </PrivateRoute>
                }
              />
              <Route path="/Skill/:id" element={<SkillCardDetail />} />
              <Route path="/Tour/:id" element={<LazyLoadedBlogCardDetail />} />
              <Route
                path="/Project/:id"
                element={<LazyLoadedProjectCardDetail />}
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

function LazyLoadedProjectCardDetail() {
  return (
    <Suspense
      fallback={
        <div style={{ marginTop: "75px" }}>
          <Spin />
        </div>
      }
    >
      <MemoizedProjectCardDetail />
    </Suspense>
  );
}

function LazyLoadedBlogCardDetail() {
  return (
    <Suspense
      fallback={
        <div style={{ marginTop: "75px" }}>
          <Spin />
        </div>
      }
    >
      <MemoizedBlogCardDetail />
    </Suspense>
  );
}

export default App;

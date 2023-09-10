import React, { lazy, Suspense } from "react";

import Spin from "./Spin";
import Aboutsec from "./AboutSection";
import { Helmet } from "react-helmet";
import PreloadHomePageBlogs from "./Preload"; // Import the PreloadedHomePageBlogs

const LazySkill = lazy(() => import("./HomePageSkill"));
const LazyProject = lazy(() => import("./HomePageProjects"));
const LazyContact = lazy(() => import("./ContactMe"));

const HomePage = () => {
  return (
    <div>
      <div style={{ marginTop: "-70px" }}>
        <Aboutsec />
      </div>
      <div style={{ marginTop: "-50px" }}>
        <Suspense fallback={<Spin />}>
          <LazySkill />
        </Suspense>
      </div>

      <Suspense fallback={<Spin />}>
        <LazyProject />
      </Suspense>

      <Suspense fallback={<Spin />}>
        <PreloadHomePageBlogs />
      </Suspense>

      <div style={{ marginTop: "-30px" }}>
        {" "}
        <Suspense fallback={<Spin />}>
          <LazyContact />
        </Suspense>
      </div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage - Sufian Mustafa</title>
        <meta
          name="description"
          content="Discover the comprehensive portfolio of Sufian Mustafa, featuring details about my background, skills, projects, blogs, and contact information, along with a footer section."
        />

        <link rel="canonical" href="https://sufianmustafa.com/" />
      </Helmet>
    </div>
  );
};

export default HomePage;

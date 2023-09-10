import React, { lazy, Suspense } from "react";

const LazyHomePageBlogs = lazy(() => import("./HomePageBlogs"));

const PreloadHomePageBlogs = () => (
  <Suspense fallback={null}>
    <LazyHomePageBlogs />
  </Suspense>
);

export default PreloadHomePageBlogs;

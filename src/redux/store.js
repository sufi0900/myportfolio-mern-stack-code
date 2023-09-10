import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import TourReducer from "./features/tourSlice";
import ProjectReducer from "./features/projectSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    tour: TourReducer,
    project: ProjectReducer,
  },
});

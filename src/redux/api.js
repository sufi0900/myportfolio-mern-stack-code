import axios from "axios";

const API = axios.create({
  baseURL: "https://pink-witty-jellyfish.cyclic.app/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("profile")?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const changeEmail = (formData) =>
  API.post("/users/changeEmail", formData);
export const changePassword = (formData) =>
  API.post("/users/changePassword", formData);

// Blogs
export const createTour = (tourData) => API.post("/tour", tourData);
export const getTours = (page) => API.get(`/tour/pageTours?page=${page}`);

export const getTour = (id) => API.get(`/tour/${id}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/tour/${id}`, updatedTourData);
export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);
export const getAllTours = () => API.get("/tour");
export const getToursBySearch = (searchQuery) =>
  API.get(`/tour/search?searchQuery=${searchQuery}`);

// project
export const createProject = (ProjectData) => API.post("/Project", ProjectData);
export const getProjects = (page) => API.get(`/Project?page=${page}`);
export const getProject = (id) => API.get(`/Project/${id}`);
export const deleteProject = (id) => API.delete(`/Project/${id}`);
export const updateProject = (updatedProjectData, id) =>
  API.patch(`/Project/${id}`, updatedProjectData);
export const getProjectsByUser = (userId, page) =>
  API.get(`/Project/userProjects/${userId}?page=${page}`);
export const getAllProjects = () => API.get("/project");
export const getProjectsBySearch = (searchQuery) =>
  API.get(`/Project/search?searchQuery=${searchQuery}`);

import React, { lazy, Suspense } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme2 from "../Componenet/theme2";
import theme from "../Componenet/theme";
import { ToastContainer } from "react-toastify";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import MailLockIcon from "@mui/icons-material/MailLock";

import { setLogout } from "../redux/features/authSlice";
import { useSelector, useDispatch } from "react-redux";

import decode from "jwt-decode";
import Login from "./Login";

import AddEditProject from "./AddEditProject";
import AddEditBlog from "./AddEditTour";
import ChangeEmail from "./UpdateEmailForm";
import ChangePassword from "./UpdatePasswordForm";
import Spin from "../Componenet/Spin";
import DarkModeToggle from "../Componenet/DarkModeToggle";
import { Helmet } from "react-helmet";
const MemoizedDashboardProject = lazy(() => import("./DashboardProject"));
const MemoizedDashboardBlog = lazy(() => import("./DashboardBlog"));
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { user, isLoading } = useSelector((state) => ({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Store token in local storage after successful login
  if (user && user.token) {
    localStorage.setItem("token", user.token);
  }

  // Retrieve token from local storage after refresh
  const token = localStorage.getItem("token");

  if (!isLoading && token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.clear(); // Clear the token from local storage
    navigate("login");
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  if (!user?.result?._id) {
    navigate("login");
    <Login />;
  }

  if (isLoading) {
    // User data is being fetched, show loading indicator or placeholder content
    return <div>Loading...</div>;
  }

  if (!user?.result?._id) {
    // User is not logged in, redirect to login
    navigate("/login");
    // return <Admin />;
  }
  const handleUpdatePasswordClick = () => {
    navigate("changePassword");
  };

  const handleUpdateEmailClick = () => {
    navigate("changeEmail");
  };

  const handleProjectClick = () => {
    navigate("addProject");
  };

  const handleBlogClick = () => {
    navigate("addBlog");
  };

  const handleEditProjectClick = () => {
    navigate("dashboardProject");
  };

  const handleEditBlogClick = () => {
    navigate("dashboardBlog");
  };
  const handleLogin = () => {
    navigate("login");
  };
  const handleNavigate = () => {
    navigate("/");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin dashboard - Sufian Mustafa</title>
          <meta
            name="description"
            content="Welcome to the admin dashboard of Sufian Mustafa. Explore and manage your projects and blogs. Update your password and email. Create, edit, and view your content with ease."
          />
          <link
            rel="canonical"
            href="https://sufianmustafa.com/#/adminDashboard"
          />
        </Helmet>
        <Toolbar />
        <Divider />
        <List style={{ overflow: "auto" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <Brightness4Icon />
              </ListItemIcon>
              <DarkModeToggle />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText
                className="listitemtextadmin"
                primary="Add Project"
                onClick={handleProjectClick}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <AddReactionIcon />
              </ListItemIcon>
              <ListItemText
                className="listitemtextadmin"
                primary="Add Blogs"
                onClick={handleBlogClick}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List style={{ overflow: "auto" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <TimelineIcon />
              </ListItemIcon>

              <ListItemText
                className="listitemtextadmin"
                primary="Edit Project"
                onClick={handleEditProjectClick}
              />
              <ModeEditIcon className="listitemtextadmin" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <AddReactionIcon />
              </ListItemIcon>

              <ListItemText
                className="listitemtextadmin"
                primary="Edit Blogs"
                onClick={handleEditBlogClick}
              />
              <ModeEditIcon className="listitemtextadmin" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <EnhancedEncryptionIcon />
              </ListItemIcon>

              <ListItemText
                className="listitemtextadmin"
                primary="Update Password"
                onClick={handleUpdatePasswordClick}
              />
              <ModeEditIcon className="listitemtextadmin" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <MailLockIcon />
              </ListItemIcon>

              <ListItemText
                className="listitemtextadmin"
                primary="Update Email"
                onClick={handleUpdateEmailClick}
              />
              <ModeEditIcon className="listitemtextadmin" />
            </ListItemButton>
          </ListItem>
          {!user?.result?._id && ( // Render "Login" item only when not logged in
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="listitemtextadmin">
                  <LoginIcon />
                </ListItemIcon>

                <ListItemText
                  className="listitemtextadmin"
                  primary="Login"
                  onClick={handleLogin}
                />
                <ModeEditIcon className="listitemtextadmin" />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="listitemtextadmin">
                <TimelineIcon />
              </ListItemIcon>

              <ListItemText
                className="listitemtextadmin"
                primary="Go Home"
                onClick={handleNavigate}
              />
              <ModeEditIcon className="listitemtextadmin" />
            </ListItemButton>
          </ListItem>
          {user?.result?._id && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="listitemtextadmin">
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  className="listitemtextadmin"
                  primary="Logout"
                  onClick={handleLogout}
                />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </div>
    </ThemeProvider>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme2}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          className="bgColorAdminNavbar"
        >
          <ToastContainer />
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            className="drawerBackground" // Apply the class here
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,

                zIndex: "1222",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="addBlog" element={<AddEditBlog />} />
            <Route path="addProject" element={<AddEditProject />} />

            <Route path="dashboardBlog" element={<LazyLoadedDashboardBlog />} />

            <Route
              path="dashboardProject"
              element={<LazyLoadedDashboardProject />}
            />
            <Route path="changeEmail" element={<ChangeEmail />} />
            <Route path="changePassword" element={<ChangePassword />} />

            <Route path="login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

function LazyLoadedDashboardBlog() {
  return (
    <Suspense
      fallback={
        <div style={{ marginTop: "75px" }}>
          <Spin />
        </div>
      }
    >
      <MemoizedDashboardBlog />
    </Suspense>
  );
}
function LazyLoadedDashboardProject() {
  return (
    <Suspense
      fallback={
        <div style={{ marginTop: "75px" }}>
          <Spin />
        </div>
      }
    >
      <MemoizedDashboardProject />
    </Suspense>
  );
}
export default ResponsiveDrawer;

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import AOS from "aos";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { setLogout } from "../redux/features/authSlice";

import ListItem from "@mui/material/ListItem";

import LogoutIcon from "@mui/icons-material/Logout";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import { Home } from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook

import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "react-redux";
import Spin from "./Spin";
import DarkModeToggle from "./DarkModeToggle";

function HideOnScroll(props) {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const tripleClickThreshold = 500;
  const clickCountRef = React.useRef(0);
  const lastClickTimeRef = React.useRef(0);

  const handleTripleClickAvatar = (event) => {
    const now = new Date().getTime();
    const clickCount = clickCountRef.current;
    const lastClickTime = lastClickTimeRef.current;

    if (clickCount === 2 && now - lastClickTime < tripleClickThreshold) {
      handleOpenAvatar(event);
      clickCountRef.current = 0; // Reset the click count using ref
    } else {
      clickCountRef.current = clickCount + 1; // Update the click count using ref
      lastClickTimeRef.current = now; // Update the lastClickTime using ref
    }
  };

  // Function to open the avatar menu

  const handleOpenAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };
  const [selectedItem, setSelectedState] = useState(null);
  const [isSecondListOpen, setIsSecondListOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setSelectedState(null); // Use the setSelectedState function correctly
    setIsSecondListOpen(false);
  };

  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => ({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  }));
  const handleAdminClick = () => {
    if (user?.result?._id) {
      // If the user is logged in, navigate to the adminDashboard
      navigate("/adminDashboard");
    } else {
      // If the user is not logged in, redirect to the login page
      navigate("/login");
    }
  };
  const skillb = () => {
    navigate("/Skill");
  };
  const projectsb = () => {
    navigate("/MyProjects");
  };
  const contactb = () => {
    navigate("/contact");
  };
  const blogsb = () => {
    navigate("/MyBlogs");
  };

  const aboutb = () => {
    navigate("/about");
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.clear(); // Clear the token from local storage
    navigate("login");
  };

  if (isLoading) {
    // User data is being fetched, show loading indicator or placeholder content
    return <Spin />;
  }

  return (
    <div style={{ margin: "auto" }}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  className="cursorp"
                >
                  <Avatar
                    alt="logo lg"
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    className="cursorp Tab8 animate__animated animate__backInLeft"
                  />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar-nav"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  ></Menu>
                </Box>

                {/* <AdbIcon  /> */}
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <Avatar
                    alt="logo"
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
                    sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                  />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {isMatch ? (
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                  ) : (
                    <>
                      <Tabs centered sx={{ margin: "auto" }}>
                        <Tab
                          value="one"
                          label={
                            <span>
                              <Home /> Home
                            </span>
                          }
                          onClick={() => {
                            window.location.href = "/";
                          }}
                          className="Tab1 animate__animated animate__zoomIn"
                        />

                        <Tab
                          value="two"
                          label={
                            <span>
                              <InfoIcon /> About
                            </span>
                          }
                          onClick={() => {
                            aboutb();
                          }}
                          className="Tab2 animate__animated animate__zoomIn"
                        />

                        <Tab
                          value="three"
                          label={
                            <span>
                              <ManageAccountsIcon /> Skills
                            </span>
                          }
                          onClick={() => {
                            skillb();
                          }}
                          className="Tab4 animate__animated animate__zoomIn"
                        />
                        <Tab
                          value="three"
                          label={
                            <span>
                              <TimelineIcon /> Projects
                            </span>
                          }
                          onClick={() => {
                            projectsb();
                          }}
                          className="Tab3 animate__animated animate__zoomIn"
                        />
                        <Tab
                          value="three"
                          label={
                            <span>
                              <AddReactionIcon /> Blogs
                            </span>
                          }
                          onClick={() => {
                            blogsb();
                          }}
                          className="Tab5 animate__animated animate__zoomIn"
                        />
                        <Tab
                          value="three"
                          label={
                            <span>
                              <ContactMailIcon /> Contact
                            </span>
                          }
                          onClick={() => {
                            contactb();
                          }}
                          className="Tab6 animate__animated animate__zoomIn"
                        />

                        <Tab
                          value="four"
                          label={<DarkModeToggle />}
                          className="Tab6 animate__animated animate__zoomIn"
                        >
                          <DarkModeToggle />
                        </Tab>
                      </Tabs>
                    </>
                  )}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip>
                    <IconButton onClick={handleTripleClickAvatar} sx={{ p: 0 }}>
                      <Avatar
                        alt="sufi_sm_lg"
                        src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite/v1693584686/sufi_p281ju.png"
                        className="Tab7 animate__animated animate__backInRight"
                      />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    id="menu-appbar-avatar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top", // Adjust to match the new position
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <List className="DrawerList">
                      <ListItemButton>
                        <ListItemIcon>
                          <Home />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Home"}
                          onClick={() => {
                            window.location.href = "/";
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton>
                        <ListItemIcon>
                          <InfoIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"About"}
                          onClick={() => {
                            aboutb();
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton>
                        <ListItemIcon>
                          <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Skill"}
                          onClick={() => {
                            skillb();
                          }}
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Projects"}
                          onClick={() => {
                            projectsb();
                          }}
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <AddReactionIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Blogs"}
                          onClick={() => {
                            blogsb();
                          }}
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={"Contact"}
                          onClick={() => {
                            contactb();
                          }}
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText
                          primary={<DarkModeToggle />}
                          style={{ color: "white" }}
                        />
                      </ListItemButton>
                    </List>
                  </Menu>

                  <Menu
                    id="menu-appbar-avatar"
                    anchorEl={anchorElAvatar}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElAvatar)}
                    onClose={handleCloseAvatar}
                    className="cursorp"
                  >
                    <List style={{ background: "white", zIndex: "1222" }}>
                      {/* ... (other menu items) */}
                      <ListItemButton onClick={handleAdminClick}>
                        <ListItemIcon>
                          <AdminPanelSettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Admin"} />
                      </ListItemButton>

                      {user?.result?._id && (
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary="Logout"
                              onClick={handleLogout}
                            />
                          </ListItemButton>
                        </ListItem>
                      )}
                    </List>
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </div>
  );
}
export default ResponsiveAppBar;

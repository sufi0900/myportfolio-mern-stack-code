import React from "react";
import Grid from "@mui/material/Grid";

const Logo = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Set minimum height to fill the entire viewport
    >
      <Grid item sx={{ marginTop: "80px" }}>
        <div className="About3">
          {" "}
          <h1>My Logo</h1>
        </div>
        <br />
        <img
          src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819141/Images/logo_mjnbuh.png"
          alt="logo"
          style={{ maxWidth: "80%", height: "auto", borderRadius: "100%" }} // Make the logo responsive
        />
        <br />
        <br />
      </Grid>
    </Grid>
  );
};

export default Logo;

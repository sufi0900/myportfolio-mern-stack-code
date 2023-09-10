import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "red",
    },
    secondary: {
      main: "blue", // Replace with your custom color
    },
    // Define other colors as needed
  },
  // Other theme settings
});

export default darkTheme;

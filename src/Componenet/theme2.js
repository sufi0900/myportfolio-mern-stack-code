import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: blue,
    background: "",
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          background: "transparent",
          cursor: `url(https://res.cloudinary.com/dtvtphhsc/image/upload/v1692819139/Images/CursorPointer_ryq6sc.png) 4 4, auto`,
          "&:hover": {
            background: "rgb(255, 0, 204)",
            borderRadius: "20px",
          },
        },
      },
    },
  },
});
export default theme;

import React from "react";
import useDarkMode from "use-dark-mode";
import Switch from "react-switch";
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Switch
      checked={darkMode.value}
      onChange={darkMode.toggle}
      offColor="#bbbbbb" // Light mode color
      onColor="#000000" // Dark mode color
      checkedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5px" }}
        >
          <WbSunnyIcon style={{ color: "yellow" }} /> {/* Sunlight icon */}
        </div>
      }
      uncheckedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
        >
          <Brightness3Icon style={{ color: "white" }} /> {/* Moon icon */}
        </div>
      }
    />
  );
};

export default DarkModeToggle;

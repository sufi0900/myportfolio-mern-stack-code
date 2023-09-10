import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import ProgressBar from "react-bootstrap/ProgressBar";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebase from "./firebase";
import "firebase/database";
import Spin from "./Spin";
export default function FolderList() {
  const progress = {
    width: "90%",
    marginRight: "15px",
  };

  const [loading, setLoading] = useState(true); // Initialize loading state
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "/skills");

    onValue(
      skillsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const skillsArray = Object.values(data);
          setSkillsData(skillsArray);
          setLoading(false); // Data has been fetched, set loading to false
        }
      },
      {
        onlyOnce: true,
      }
    );

    return () => {
      off(skillsRef);
    };
  }, []);

  // Conditionally render the loading indicator or the content
  if (loading) {
    return (
      <div>
        {" "}
        <Spin />{" "}
      </div>
    );
  }
  const skillItems = skillsData.map((item) => (
    <Link
      to={`/Skill/${item._id}`}
      key={item._id}
      className="SkillList"
      style={{ textDecoration: "none" }}
    >
      <ListItem key={item._id} className="SkillList">
        <ListItemAvatar>
          <Avatar
            style={{
              background: "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "60px", // Adjust the width as needed
              height: "60px", // Maintain a square aspect
            }}
            data-aos="zoom-in-down"
          >
            <LazyLoadImage
              className="i-swing"
              src={item.imageFile}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Avatar>
        </ListItemAvatar>
        <ProgressBar
          animated
          now={item.percentage}
          style={progress}
          label={
            <span className="progress-label-color">{`${item.percentage}%`}</span>
          }
          data-aos="zoom-in-right"
        />
        <ListItemText
          primary={item.title}
          style={{ width: "30%" }}
          data-aos="zoom-in"
          className="ListItemTextSkill"
        />
      </ListItem>
    </Link>
  ));

  return (
    <Box>
      <>
        <style type="text/css">
          {`   

.progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
  font-size:17px;
color:black; }
.progress{
  background-color: rgba(247, 90, 216, 0.696);
}


}

`}
        </style>
      </>
      <Box>
        <List sx={{ overflowX: "visible", width: "100%" }}>{skillItems}</List>
      </Box>
    </Box>
  );
}

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Spin from "./Spin";
import { Suspense } from "react";

const CustomImageListItem = styled(ImageListItem)(({ theme }) => ({
  borderRadius: "15px",
  border: "1px solid white",

  overflow: "hidden", // Hide any image overflow to prevent visual issues with border radius
  "& img": {
    width: "100%",
    height: "100%", // Make the image take the full height of the container
    objectFit: "cover", // Scale the image while maintaining aspect ratio to cover the container
    transition: "transform 0.2s ease-in-out",
    transformOrigin: "center center",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
export default function StandardImageList() {
  return (
    <div className="flex">
      <ImageList
        sx={{
          width: "100%",
          height: 520,

          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",

          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "15px",

          padding: "10px",
        }}
        cols={1}
      >
        <Suspense
          fallback={
            <div>
              <Spin />
            </div>
          }
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ margin: "10px" }}>
              <CustomImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </CustomImageListItem>
            </ImageListItem>
          ))}
        </Suspense>
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672393/1e72070f-981e-4dcc-8b99-feaac53ec7e5_jybw8q.webp",
    title: "Sufi",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672395/sufi5_nrizsx.webp",
    title: "Sufi",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672394/sufi6_depmpo.webp",
    title: "sufi",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672407/sufi3_curvlx.webp",
    title: "Camera",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673965/AirBrush_20170128130335_t6dhwx.webp",
    title: "Camera",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693673974/AirBrush_20170128125226_rf8hal.webp",
    title: "Camera",
  },

  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672395/AirBrush_20170128121935_mwokjt.webp",
    title: "Hats",
  },
  {
    img: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1693672394/697ced9a-3edd-47e1-8cce-8f0ae2ec53ea_psear3.webp",
    title: "Honey",
  },
];

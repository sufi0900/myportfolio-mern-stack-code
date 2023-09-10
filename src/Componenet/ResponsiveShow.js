import React from "react";

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import Images from "./Images";
import { motion } from "framer-motion";

function CarouselFadeExample() {
  return (
    <>
      <div className="About3" data-aos="zoom-in">
        {" "}
        <h1> Website Responsiveness</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div>
          <div className="thumbnail">
            <img
              src={Images.screenresponsive.src}
              alt={Images.screenresponsive.alt}
              style={{
                width: "90%",
                display: "block",
                overflow: "hidden",
                zIndex: "3",
              }}
              loading="lazy"
            />
            <motion.div className="caption_sm">
              <Video
                autoPlay
                loop
                muted
                onCanPlayThrough={() => {}}
                loading="lazy"
              >
                <source
                  src={Images.mobile.src}
                  alt={Images.mobile.alt}
                  type="video/webm"
                />
              </Video>
            </motion.div>
            <div className="caption_md">
              <Video
                autoPlay
                loop
                muted
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {}}
                loading="lazy"
              >
                <source
                  src={Images.tablet.src}
                  alt={Images.tablet.alt}
                  type="video/webm"
                />
              </Video>
            </div>
            <div className="caption_lg">
              <Video
                autoPlay
                loop
                muted
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {}}
                loading="lazy"
              >
                {" "}
                <source
                  src={Images.pc.src}
                  alt={Images.pc.alt}
                  type="video/webm"
                />
              </Video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;

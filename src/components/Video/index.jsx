import React, { useState } from "react";
import Video from "../../assets/New Video.mp4"
import "./style.scss";
import VisibilitySensor from 'react-visibility-sensor';
import ReactPlayer from 'react-player';


function Index() {
  const [playing, setPlaying] = useState(false)
  return (

    <section className="section-video" data-scroll-section>
      <VisibilitySensor partialVisibility={true} onChange={(isVisible) => {
        if (isVisible) {
          setPlaying(true);
          console.log("visible")
        } else {
          setPlaying(false)
          console.log("not visible")

        }
      }}>
        <div>
        <div className="top-gradient-layer" style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "140px",
            background: "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
        }}></div>
          <ReactPlayer url={Video} playing={playing} controls={false} width="100%" height="100%" loop={true} style={{objectFit:"none"}}/>
          {/* <div className="top-gradient-layer" style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "80px",
            background: "linear-gradient(0deg, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
        }}></div> */}
        </div>
      </VisibilitySensor>
    </section>

  );
}

export default Index;

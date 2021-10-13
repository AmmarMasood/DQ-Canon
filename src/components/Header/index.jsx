import React, { useEffect } from "react";
import Video from "../../assets/video.mp4"
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";

export default function Header() {
  useEffect(() => {
    console.log("Designed and Developed By Ammar Masood");
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
       <div className="header-banner">     
        <video src={Video} type="video/mp4" autoPlay={true} muted loop  />
        <h1 id="header-text">CAPTURE MOMENT</h1>
      </div>
    </section>
  );
}

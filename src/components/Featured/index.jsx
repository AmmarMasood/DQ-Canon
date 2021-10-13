import React from "react";
import photos from "../../data";
import photo1 from "../../assets/Canon EOS R5.png"
import photo2 from "../../assets/Canon EOS-1D X Mark II (2).png"
import "./style.scss";

export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>Cameras</h6>
        <img src={photo1} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>Video Recoders</h6>
        <img src={photo2} data-scroll/>
      </div>
    </section>
  );
}

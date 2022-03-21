import React from "react";
import { Link } from "react-router-dom";

function PopularServicesCard({ img, title }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 col-xl-4">
      <img src={img} alt="" />
      <div className="popular-body my-2  ">
        <h5 className="xxl_text mt-3 font-600">{title}</h5>
        <p className="md_text font-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <button className="btn border w-100">Learn More</button>
      </div>
    </div>
  );
}

export default PopularServicesCard;

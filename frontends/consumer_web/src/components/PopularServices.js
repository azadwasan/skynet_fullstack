import React from "react";
import PopularServicesCard from "./PopularServicesCard";

function PopularServices() {
  return (
    <div className="container-fluid px-3 px-md-5 my-3">
      <h2 className="heading_sec font-700">Popular Services</h2>
      <div className="row py-2 gy-4">
        <PopularServicesCard
          img="assets/popular1.png"
          title="Digital Marketing"
        />
        <PopularServicesCard img="assets/popular2.png" title="Business" />
        <PopularServicesCard img="assets/popular3.png" title="Music & Audio" />
        <PopularServicesCard
          img="assets/popular4.png"
          title="Video & Animation"
        />
        <PopularServicesCard
          img="assets/popular5.png"
          title="Writing & Translation"
        />
        <PopularServicesCard img="assets/popular6.png" title="Lifestyle" />

        <PopularServicesCard img="assets/popular7.png" title="Local Services" />
        <PopularServicesCard
          img="assets/popular8.png"
          title="Programming & Tech"
        />
      </div>
    </div>
  );
}

export default PopularServices;

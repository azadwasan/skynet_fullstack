import React from "react";

function ExploreMarketCard({ img, subheading, title }) {
  return (
    <div className="col-sm-12 py-2  position-relative">
      <img src={img} alt="" />
      <div className="inner_card mt-4 ms-4">
        <h5>{subheading}</h5>
        <h3 className="mb-0 text-capitalize">{title}</h3>
      </div>
    </div>
  );
}

export default ExploreMarketCard;

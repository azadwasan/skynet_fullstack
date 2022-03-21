import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function DashboardService() {
  return (
    <div className="col-6 ">
      <div className="border border_Dash">
        <img src="/assets/dashboard/right1.png" alt="" />
        <h6 className="my-2 px-2">Data entry work , typing ,copy paste</h6>
        <p className="md_text grey_text px-2 mb-2">
          (4/5){" "}
          <span>
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
            <StarIcon className="star_icon" />
          </span>
        </p>
        <div className="m-0 d-flex justify-content-between align-items-center border-top py-2  px-2">
          <div>
            <p className="m-0 para_text md_text mb-1">Houlry Rate</p>
            <h6 className="m-0">2500 Pkr</h6>
          </div>
          <HeartIcon className="heart_icon" />
        </div>
      </div>
    </div>
  );
}

export default DashboardService;

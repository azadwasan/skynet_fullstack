import React from "react";
import { StarIcon } from "@heroicons/react/solid";

function ServiceReview() {
  return (
    <div className="col-md-6 px-3">
      <div className="">
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <img
              className="rounded-circle avatar_img"
              src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg"
              alt=""
            />
            <h6 className="m-0 ">Saud Khan (4/5)</h6>
            <div>
              <StarIcon fontSize={70} className="star_icon1 m-0" />
              <StarIcon fontSize={70} className="star_icon1 m-0" />
              <StarIcon fontSize={70} className="star_icon1 m-0" />
            </div>
          </div>
          <p className="m-0 font-300 md_text px-4">Week</p>
        </div>
        <p className="md_text font-300 my-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
    </div>
  );
}

export default ServiceReview;

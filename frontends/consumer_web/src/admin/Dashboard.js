import React from "react";
import "./Dashbaord.css";
import { StarIcon } from "@heroicons/react/solid";

import DashboardService from "./components/DashboardService";
import ServiceReview from "../components/ServiceReview";

function Dashboard() {
  return (
    <div className="dashboard py-5 ">
      <div className="container section_top6g mb-5">
        <div className="row gx-0">
          <div className="col-4 pe-2">
            <div className="col-12">
              <div className="card_dashboard text-center">
                <img src="/assets/dashboard/img1.png" alt="" />
                <img
                  className="wid_sg"
                  src="/assets/dashboard/img2.png"
                  alt=""
                />
                <h5 className="my-2">
                  Any Marrie
                  <span className="md_text grey_text ms-2">
                    (Virtual Assistant)
                  </span>
                </h5>
                <p className="md_text grey_text ms-2 mb-2">
                  (4/5){" "}
                  <span>
                    <StarIcon className="star_icon" />
                    <StarIcon className="star_icon" />
                    <StarIcon className="star_icon" />
                    <StarIcon className="star_icon" />
                  </span>
                </p>
                <p className="md_text grey_text ms-2 mb-0 mb-3 pb-3">
                  2K Reviews
                </p>
              </div>
            </div>
            <div className="col-12 card_dashboard py-3 px-4">
              <h4>About</h4>
              <p className="md_text grey_text m-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
              </p>
            </div>

            <div className="col-12 card_dashboard py-3 px-4 my-3">
              <h4>Skills</h4>
              <div className="d-flex flex-wrap  g_nh">
                <p className="skills ">Vitual assistant</p>
                <p className="skills">Essay editing</p>
                <p className="skills">Design</p>
                <p className="skills">Microsoft Word</p>
                <p className="skills">Transcripts</p>
              </div>
            </div>
          </div>

          <div className="col-8 px-2 ">
            <div className="card_dashboard py-3 ">
              <h5 className="mb-3 px-4">Any Marrie Services</h5>
              <div className="row px-4 gy-3">
                <DashboardService />
                <DashboardService />
                <DashboardService />
                <DashboardService />
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="card_dashboard px-3">
                <div className="row my-3">
                  <h5 className="my-4 font-600">Reviews as seller</h5>

                  <div className="col-md-12 px-3">
                    <div className="">
                      <div className="d-flex justify-content-between gap-3 align-items-center">
                        <div className="d-flex justify-content-between gap-3 align-items-center">
                          <img
                            className="rounded-circle avatar_img"
                            src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg"
                            alt=""
                          />
                          <h6 className="m-0 ">Saud Khan</h6>
                          <div className="d-flex gap-2">
                            <span>(4/5)</span>
                            <div>
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 font-300 md_text px-4">Week</p>
                      </div>
                      <p className="md_text font-300 my-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-12 px-3">
                    <div className="">
                      <div className="d-flex justify-content-between gap-3 align-items-center">
                        <div className="d-flex justify-content-between gap-3 align-items-center">
                          <img
                            className="rounded-circle avatar_img"
                            src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg"
                            alt=""
                          />
                          <h6 className="m-0 ">Saud Khan</h6>
                          <div className="d-flex gap-2">
                            <span>(4/5)</span>
                            <div>
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 font-300 md_text px-4">Week</p>
                      </div>
                      <p className="md_text font-300 my-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-12 px-3">
                    <div className="">
                      <div className="d-flex justify-content-between gap-3 align-items-center">
                        <div className="d-flex justify-content-between gap-3 align-items-center">
                          <img
                            className="rounded-circle avatar_img"
                            src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg"
                            alt=""
                          />
                          <h6 className="m-0 ">Saud Khan</h6>
                          <div className="d-flex gap-2">
                            <span>(4/5)</span>
                            <div>
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                              <StarIcon
                                fontSize={70}
                                className="star_icon1 m-0"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 font-300 md_text px-4">Week</p>
                      </div>
                      <p className="md_text font-300 my-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";

function AboutsUs() {
  return (
    <div className="container-fluid px-3 px-md-5 my-3">
      <h5 className="text-center color-prim">About Us</h5>
      <h3 className="text-center ">Why we're here</h3>
      <p className="text-center ">
        We create opportunities for anyone in the world to build their business,
        brand, or dream.
      </p>
      <img src="assets/home/aboutus.png" alt="" />
      <div className="row justify-content-between my-4 font-300">
        <div className="col-md-6 ">
          <div className="pr-4">
            <h4>Our Story</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et
            </p>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="ps-md-4 ps-0">
            <h4>Our Mission</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et
            </p>
          </div>
        </div>
      </div>
      <img className="my-3" src="assets/home/skynetposter.png" alt="" />

      {/* //nav-tabs */}

      <div className="my-5">
        <ul
          className="nav nav-pills mb-3 d-flex justify-content-center flex-md-row flex-column"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item col-md-3" role="presentation">
            <button
              className="nav-link active px-5 py-4 border rounded-0 w-100 py-4"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Careers
            </button>
          </li>
          <li className="nav-item col-md-3 " role="presentation">
            <button
              className="nav-link px-5  py-4 border rounded-0 w-100"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Services
            </button>
          </li>
          <li className="nav-item col-md-3" role="presentation">
            <button
              className="nav-link px-5 py-4  border rounded-0 w-100"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Selling on Skynet
            </button>
          </li>
          <li className="nav-item col-md-3" role="presentation">
            <button
              className="nav-link px-5 py-4  border rounded-0 w-100"
              id="pills-Buying-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Buying"
              type="button"
              role="tab"
              aria-controls="pills-Buying"
              aria-selected="false"
            >
              Buying on Skynet
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row justify-content-between align-items-center my-3 font-300">
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{" "}
                </p>
              </div>
              <div className="col-md-5">
                <img src="assets/home/aboutusilustration.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutsUs;

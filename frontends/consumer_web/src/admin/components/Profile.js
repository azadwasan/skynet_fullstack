import React from "react";

function Profile() {
  return (
    <div className="dashboard py-5 ">
      <div className="container section_top  ">
        <div className="row">
          <div className="col-md-3 d-flex flex-column bg-white">
            <a href="#">Edit Profile</a>
            <a href="">Password and Secuirity</a>
          </div>
          <div className="col-md-9 px-md-5 py-md-3">
            <h2>My Profile</h2>
            <img
              className="dashbaord_img1h my-3"
              src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
              alt=""
            />
            <div className="row">
              <div className="col-md-6 d-flex flex-column">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Second Name
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    CNIC
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-end px-md-3">
                <button className="btn bg-prim text-white px-4 py-2 float-end">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

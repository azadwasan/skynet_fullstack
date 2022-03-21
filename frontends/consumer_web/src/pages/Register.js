import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" het conatiner d-flex justify-content-center align-items-center">
      <div className="row justify-content-center p-3 px-md-3 py-md-2">
        <h2 className="text-center color-prim font-700 margin_423">Sign Up</h2>

        <div className="stl_121 col-12 d-flex flex-column gap-2 p-3 py-md-4 px-md-4">
          <button className="btn btn-google py-1 mt-2">
            <span>
              <i className="bi bi-google float-start custom_91" />
            </span>
            <span className="inder_div">Continue with Google</span>
          </button>

          <button className="btn btn-fb py-1">
            <span>
              <i className="bi bi-facebook float-start custom_91" />
            </span>
            <span className="inder_div">Continue with Facebook</span>
          </button>

          <button className="btn btn-app py-1">
            <span>
              <i className="bi bi-apple  float-start custom_91" />
            </span>
            <span className="inder_div">Continue with Apple Id</span>
          </button>
          <p className="m-0 text-center my-1">Or</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control py-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="email"
              className="form-control py-2 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>

          <button className="btn bg-prim text-white font-500 py-2 my-2">
            Sign in
          </button>
          <div className=" mt-0 mb-2">
            <div className="form-check md_text">
              <input
                style={{ fontSize: "14px" }}
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                I accept terms and condition
              </label>
            </div>
            <div className="form-check md_text">
              <input
                style={{ fontSize: "14px" }}
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Keep me updated through emails
              </label>
            </div>
            <div className="form-check md_text">
              <input
                style={{ fontSize: "14px" }}
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Remember me
              </label>
            </div>
          </div>
          <p className="mb-0 text-center md_text mt-2">
            Already have an account?
            <Link to={"/login"} className="font-500 ms-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

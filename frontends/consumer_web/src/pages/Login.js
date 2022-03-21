import React from "react";
import { Link } from "react-router-dom";
import "./Login-Reg.css";

function Login() {
  return (
    <div className=" het conatiner d-flex justify-content-center align-items-center">
      <div className="row justify-content-center p-3 px-md-3 py-md-2">
        <h2 className="text-center color-prim font-700 margin_423">Sign In</h2>

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
          <p className="m-0 text-center my-1 ">Or</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control py-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group my-2 ">
            <input
              type="email"
              className="form-control py-2 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
            />
          </div>

          <button className="btn bg-prim text-white font-500 py-2 my-2">
            Sign in
          </button>
          <div className="d-flex mt-0 mb-2 justify-content-between">
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
                Checked checkbox
              </label>
            </div>

            <a className="color-prim m-0 md_text font-500" href="">
              Forgot Password?
            </a>
          </div>
          <p className="mb-0 text-center md_text mt-2">
            Dont have an account?
            <Link to={"/register"} className="font-500 ms-1">
              Create Acount
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

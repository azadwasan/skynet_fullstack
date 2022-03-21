import React from "react";
import "./Banner.css";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container  d-flex justify-content-center align-items-center h-100">
      <div>
        <h1 className="banner-heading font-700">
          Find The Perfect Freelance Services For Your Business
        </h1>
        <div className="banner-input">
          <input
            className="w-100 h-100 input-style"
            placeholder={`Search for freelancers, services, or projects`}
            type="text"
          />
          <Link to={"/search"}>
            <button className="btn bg-prim text-white rounded-0 px-5 h-100">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;

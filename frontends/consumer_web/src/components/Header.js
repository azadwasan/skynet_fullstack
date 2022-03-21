import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", scrollfunction);

  function scrollfunction() {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  return (
    <div
      className={`${scroll ? "bg-white header-shadow" : " bg-sec  "} header`}
    >
      <div className="container  ">
        {/* navbar navbar-expand-lg navbar-dark bg-transparent */}
        <nav className={" navbar navbar-expand-lg "}>
          <div className="container-fluid p-0">
            <Link
              to={"/"}
              style={{ fontSize: "26px" }}
              className={`${
                scroll ? "bg-white" : "text-white "
              } navbar-brand font-600`}
            >
              Navbar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 lg_text font-500 styl32">
                <li className="nav-item">
                  <a
                    className={`${
                      scroll ? "text-black " : "text-white  "
                    } active`}
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${
                      scroll ? "color_prim" : "text-white "
                    }  active`}
                    aria-current="page"
                    href="#"
                  >
                    Hire
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${
                      scroll ? "color_prim" : "text-white"
                    }  active`}
                    aria-current="page"
                    href="#"
                  >
                    Become a seller
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`${
                      scroll ? "" : "text-white "
                    }  active dropdown-toggle`}
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Connect Business
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <button
                className={`${
                  scroll ? "color_prim text-white" : "text-white"
                } btn font-500 bg-prim me-2`}
                type="submit"
              >
                Search
              </button>
              <Link to={"/login"}>
                <button className="btn bg-prim  px-3 rounded-1 font-500 text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

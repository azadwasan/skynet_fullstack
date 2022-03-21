import React from "react";

import TopServiceCard from "../components/TopServiceCard";
import "./Categories.css";

function Categories() {
  return (
    <div className="container section_top mb-5">
      <div>
        <ul className="d-flex  justify-content-center margin_topjkj">
          <li className="nav-item px-2 border-end">
            <a href="">Social Media Marketing</a>
          </li>
          <li className="nav-item px-2 bord_left9">
            <a href="">Display Advertising</a>
          </li>
          <li className="nav-item px-2 bord_left9">
            <a href="">Mobile App Marketing</a>
          </li>
          <li className="nav-item px-2 bord_left9">
            <a href="">Community Management</a>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <h1 className="font-600 mt-5">Digital Marketing</h1>
        <p className="px-5 my-4 mt-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
      <div className="row my-5 text-center">
        <div className="col-3">
          <img className="w-100" src="assets/categories/image-1.png" alt="" />
          <h5 className="my-3">Social Media Marketing</h5>
        </div>
        <div className="col-3">
          <img className="w-100" src="/assets/categories/image-2.png" alt="" />
          <h5 className="my-3">Display Advertising</h5>
        </div>
        <div className="col-3">
          <img className="w-100" src="/assets/categories/image-3.png" alt="" />
          <h5 className="my-3">Mobile App Marketing</h5>
        </div>
        <div className="col-3">
          <img className="w-100" src="/assets/categories/image-3.png" alt="" />
          <h5 className="my-3">Community Management</h5>
        </div>
      </div>
      <h2 className="heading_sec font-600 mt-5">
        Popular Digital Marketing Experts
      </h2>
      <div className="parent py-2">
        <TopServiceCard
          img="assets/popularproviders/topservice1.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={5}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice2.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={5}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice3.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={4}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice4.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={5}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice5.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={4}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice6.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={4}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice7.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={5}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice8.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={5}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice9.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={3}
        />
        <TopServiceCard
          img="assets/popularproviders/topservice10.png"
          name="Saud Khan"
          servicename="Web Developer"
          description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
          rating={2}
        />
      </div>
    </div>
  );
}

export default Categories;

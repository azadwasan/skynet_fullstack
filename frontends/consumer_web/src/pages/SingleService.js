import React from "react";
import { Avatar, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { StarIcon } from "@heroicons/react/solid";
import "./SingleService.css";
import ServiceReview from "../components/ServiceReview";
import TopServiceCard from "../components/TopServiceCard";

function SingleService() {
  return (
    <div className="container mb-5 section_top">
      <Breadcrumb className="bg-gray mb-4 py-2 px-2 lg_text">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Service</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Graphics</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>

      <div className="row my-3">
        <div className="col-md-4">
          <img src="assets/singleservice/serviceimage1.png" alt="" />
          <div className="d-flex gap-2 align-items-center justify-content-center my-3">
            <img className="avatar_img border" src="" alt="" />
            <img className="avatar_img border" src="" alt="" />
            <img className="avatar_img border" src="" alt="" />
            <img className="avatar_img border" src="" alt="" />
          </div>
          <div className="row g-0 border">
            <div className="col-md-12 border p-3">
              <h6 className="">
                I'll spend 1 Hours for Data Entry, Web Research, Copy Paste as
                per your instructions.
              </h6>
              <p className="md_text my-3">
                <span>Hourly Rate :</span> PKR 2050
              </p>
              <button className="btn border w-100">Contact</button>
            </div>
          </div>
        </div>

        <div className="col-md-8 pading_21 py-2">
          <h2 className="font-700">
            Expert data entry work, typing, copy paste, web research
          </h2>
          <div className="d-flex justify-content-between my-3 align-items-center ">
            <div className="d-flex align-items-center gap-2">
              <img
                src="assets/singleservice/serviceimage1.png"
                className="rounded-circle avatar_img"
                alt=""
              />
              <h6 className="m-0 font-600">Saud Khan</h6>
              <p className="m-0">(3/5)</p>
              <div>
                <StarIcon fontSize={70} className="star_icon1 m-0" />
                <StarIcon fontSize={70} className="star_icon1 m-0" />
                <StarIcon
                  type="outlined"
                  fontSize={70}
                  className="star_icon1 m-0"
                />
              </div>
            </div>
            <button className="btn bg-prim px-4 text-white">Hire</button>
          </div>
          <h5 className="my-3 font-600">About Gig</h5>
          <p className=" ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      <hr />
      <div className="row my-3">
        <h5 className="my-4 font-600">Gig Reviews</h5>
        <ServiceReview />
        <ServiceReview />
        <ServiceReview />
        <ServiceReview />
      </div>

      <h5 className=" font-600 my-4 ">Popular Business Experts</h5>
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

export default SingleService;

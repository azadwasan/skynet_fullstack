import React from "react";
import "./TopService.css";
import TopServiceCard from "./TopServiceCard";

function TopService() {
  return (
    <div className="container-fluid px-3 px-md-5 my-5">
      <h2 className="heading_sec font-700">Top Service Providers</h2>
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

export default TopService;

import React from "react";
import PopularServices from "../components/PopularServices";
import PopularServicesCard from "../components/PopularServicesCard";
import TopServiceCard from "../components/TopServiceCard";
import "./SearchService.css";

function SearchService() {
  return (
    <div className="section_top container-fluid px-md-5 mb-5">
      <h2 className="font-700 mar89">Filters</h2>
      <div className="row gap-1 ">
        <div className="width_k8">
          <select
            className="form-select py-2"
            aria-label="Default select example"
          >
            <option selected>Category</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>

        <div className="width_k8">
          <select
            className="form-select py-2"
            aria-label="Default select example"
          >
            <option selected>Budget</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="width_k8">
          <select
            className="form-select py-2"
            aria-label="Default select example"
          >
            <option selected>Service Provider Details</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="width_k8">
          <select
            className="form-select py-2"
            aria-label="Default select example"
          >
            <option selected>Service Options</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
      </div>

      {/* Service Provider*/}

      <h2 className=" font-700 mt-4">Top Service Providers</h2>
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

      {/* Popular services */}
      <h2 className=" font-700 mt-4">Popular Services</h2>
      <div className="row py-2 gy-4">
        <PopularServicesCard
          img="assets/popular1.png"
          title="Digital Marketing"
        />
        <PopularServicesCard img="assets/popular2.png" title="Business" />
        <PopularServicesCard img="assets/popular3.png" title="Music & Audio" />
        <PopularServicesCard
          img="assets/popular4.png"
          title="Video & Animation"
        />
        <PopularServicesCard
          img="assets/popular5.png"
          title="Writing & Translation"
        />
        <PopularServicesCard img="assets/popular6.png" title="Lifestyle" />

        <PopularServicesCard img="assets/popular7.png" title="Local Services" />
        <PopularServicesCard
          img="assets/popular8.png"
          title="Programming & Tech"
        />
      </div>
    </div>
  );
}

export default SearchService;

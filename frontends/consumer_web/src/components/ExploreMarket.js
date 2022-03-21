import { useState, useEffect } from "react";
import "./ExploreMarket.css";
import ExploreMarketCard from "./ExploreMarketCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function ExploreMarket() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    //fetching data from api
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/services");
      const data = await response.json();
      setServiceData(data);
    };
    fetchData();
  }, []);
  console.log(serviceData);

  return (
    <div className="container-fluid px-3 px-md-5 my-5">
      <h2 className="font-700 heading_sec">Explore The Market Place</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@0.90": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.10": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {serviceData?.map((service, index) => (
          <SwiperSlide key={index}>
            <ExploreMarketCard
              img="assets/explore2.png"
              subheading="Build your brand"
              title={service.service}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore1.png"
            subheading="Build your brand"
            title="Graghic Desgning"
          />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore2.png"
            subheading="Build your brand"
            title=" Application Development"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore3.png"
            subheading="Health "
            title="Personal Health Care"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore4.png"
            subheading="Grow your business "
            title="Video Creator"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore1.png"
            subheading="Build your brand"
            title="Graghic Desgning"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore3.png"
            subheading="Health "
            title="Personal Health Care"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default ExploreMarket;

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Person, Quote } from "react-bootstrap-icons";

const Testimones = () => {
  return (
    <div
      className="align-grid"
      style={{ minHeight: `${window.innerHeight}px`,marginBottom:"50px",marginTop:"50px" }}
    >
      <div  id="imageclient" className="image-client layoutspacv">
        <img
          src={
            "https://res.cloudinary.com/dewkx66gl/image/upload/v1696001677/testi_o7krpm.jpg"
          }
          alt=""
        />
      </div>

      <div className="clientRate">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimoy-l">
              <div className="testimony-p">
                <span>
                  <Quote color="chocolate" size={40} />
                </span>
                <span>
                we pride ourselves on delivering impeccable service that goes
                beyond your expectations. Whether you're here for business or
                leisure, we aim to make your stay with us truly exceptional
                </span>
                </div>
              <p className="row-styles">
                <Person size={30} />{" "}
                <span style={{ marginLeft: "10px", color: "chocolate" }}>
                  James mensah
                </span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimoy-l">
              <p className="testimony-p">
                <span>
                  <Quote color="chocolate" size={40} />
                </span>
                we pride ourselves on delivering impeccable service that goes
                beyond your expectations. Whether you're here for business or
                leisure, we aim to make your stay with us truly exceptional
             
              </p>
              <p className="row-styles">
                <Person size={30} />{" "}
                <span style={{ marginLeft: "10px", color: "chocolate" }}>
                  James mensah
                </span>{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimones;

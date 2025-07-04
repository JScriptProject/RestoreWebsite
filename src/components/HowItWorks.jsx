import React from "react";
import RedBtn from "./RedBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";

// import images

import oldImg1 from "../assets/old-img1.jpg";
import oldImg2 from "../assets/old-img2.jpg";
import oldImg3 from "../assets/old-img3.jpg";
import oldImg4 from "../assets/old-img4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HowItWorks() {
  return (
    <section>
      <div className="section-wrapper">
        <div className="section-heading">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Restore your images in 3 simple steps
          </p>
        </div>
        <div className="section-content">
          <div className="section-info">
            <div className="section-info-container">
              <div className="section-card">
                <div className="number-value">1</div>
                <div className="section-card-content">
                  <div className="section-card-content-img">
                    📤 <span>Upload Photo</span>
                  </div>
                  <p>Select any photo you want to recover</p>
                </div>
              </div>
              <div className="section-card">
                <div className="number-value">2</div>
                <div className="section-card-content">
                  <div className="section-card-content-img">
                    ✨ <span>AI Magic</span>
                  </div>
                  <p>Our AI processes your image instantly</p>
                </div>
              </div>
              <div className="section-card">
                <div className="number-value">3</div>
                <div className="section-card-content">
                  <div className="section-card-content-img">
                    ⬇️ <span>Download</span>
                  </div>
                  <p>Get your deepnude image in high quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider here */}

          <div className="swiper-container">
            <Swiper
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={oldImg1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oldImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oldImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={oldImg4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="section-button">
          <RedBtn className="max-w-fit !px-8">TryPhixl AI Now</RedBtn>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

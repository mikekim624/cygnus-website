import team_home_two from "@/data/team-home-2";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// slider setting
const setting = {
  slidesPerView: 4,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".team-nxt",
    prevEl: ".team-prv",
  },
};

const Team = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="team-area pt-55 pb-55">
        <div className="container" style={{textAlign: 'center'}}>
          <span className="tp-section__sub-title left-line right-line mb-25">Our Services</span>
        </div>
        <div className="container" style={{marginBottom: '80px'}}>
          <div className="p-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <h3 className="tp-section__title" style={{textAlign: 'left', paddingLeft: '30px'}}>POS Solutions</h3>
                </div>
              </div>
            </div>
            <Swiper
              {...setting}
              modules={[Navigation]}
              loop={isLoop}
              className="swiper-container tp-team-active wow fadeInUp"
              data-wow-delay=".3s"
            >
              {team_home_two.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="team-item mb-30">
                      <div className="team-item__thumb mb-40">
                        <img src={item.img} alt="team-thumb" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="team-arrow">
              <div className="team-prv">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="team-nxt">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{marginBottom: '80px'}}>
          <div className="p-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <h3 className="tp-section__title" style={{textAlign: 'left', paddingLeft: '30px'}}>Terminal Solutions</h3>
                </div>
              </div>
            </div>
            <Swiper
              {...setting}
              modules={[Navigation]}
              loop={isLoop}
              className="swiper-container tp-team-active wow fadeInUp"
              data-wow-delay=".3s"
            >
              {team_home_two.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="team-item mb-30">
                      <div className="team-item__thumb mb-40">
                        <img src={item.img} alt="team-thumb" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="team-arrow">
              <div className="team-prv">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="team-nxt">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

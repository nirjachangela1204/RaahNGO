import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Slider() {
  const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);

  const openDonatePopup = () => {
    setIsDonatePopupOpen(true);
  };

  const closeDonatePopup = () => {
    setIsDonatePopupOpen(false);
  };
  return (
    <>
        <section className="banner-section">
            <Swiper
            autoplay
            loop
            speed={500}
            className="swiper-container banner-slider"
            >
            {/* Slide Item */}
            <SwiperSlide
                className="swiper-slide"
                style={{
                backgroundImage:"linear-gradient(rgba(212, 112, 24, 1), rgba(212, 112, 24, 0.351)), url(images/main-slider/banner1.jpg)",
                objectFit: "fill",
                }}
            >
                        <div className="content-outer">
                            <div className="content-box justify-content-center">
                                <div className="inner text-center">
                                    <h1>Together, We Can Create a Better Tomorrow</h1>
                                    <div className="link-box" onClick={openDonatePopup}>
                                        <button className="theme-btn btn-style-one donate-box-btn">
                                        <span>Donate Now</span>
                                        </button>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide"
                        style={{
                        backgroundImage:"linear-gradient(rgba(212, 112, 24, 1), rgba(212, 112, 24, 0.351)), url(images/main-slider/banner2.jpg)",
                        objectFit: "fill",
                        }}
                    >
                        <div className="content-outer">
                            <div className="content-box justify-content-center">
                                <div className="inner text-center">
                                    <div className="link-box-two"><button  className="theme-btn default-btn" onClick={openDonatePopup}>Help The Needy</button></div>
                                    <h1>Be the Change: Discover How You Can Help Today</h1>
                                    <div className="link-box" onClick={openDonatePopup}>
                                        <button className="theme-btn btn-style-one donate-box-btn">
                                        <span>Donate Now</span>
                                        </button>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        className="swiper-slide"
                        style={{
                        backgroundImage:"linear-gradient(rgba(212, 112, 24, 1), rgba(212, 112, 24, 0.351)), url(images/main-slider/banner3.jpg)",
                        objectFit: "fill",
                        }}
                    >
                        <div className="content-outer">
                            <div className="content-box justify-content-center">
                                <div className="inner text-center">
                                    <h1>Our Helping To The World</h1>
                                    <div className="link-box" onClick={openDonatePopup}>
                                        <button className="theme-btn btn-style-one donate-box-btn">
                                        <span>Donate Now</span>
                                        </button>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="banner-slider-pagination style-two" />
                    <div className="banner-slider-nav style-one">
                        <div className="banner-slider-control banner-slider-button-prev">
                            <span className="fa fa-angle-left" />
                        </div>
                        <div className="banner-slider-control banner-slider-button-next">
                            <span className="fa fa-angle-right" />
                        </div>
                </div>
        </Swiper>
        </section>
      <div
        id="donate-popup"
        className={`donate-popup ${isDonatePopupOpen ? "popup-visible" : ""}`}
        responsive
      >
        <div className="popup-overlay" />
        <div className="donate-form-area">
          <div className="donate-form-wrapper">
            <div className="close-donate theme-btn">
              <span className="flaticon-close" onClick={closeDonatePopup} />
            </div>
            <div className="sec-title text-center">
              <h1>Donate us to achive our goal</h1>
              <div className="text">
              By donating, you're not just giving money; you're giving children hope, joy, and the chance to dream big. Thank you for making a difference in the lives of these deserving children.
              </div>
            </div>
            <form action="/#" className="donate-form default-form">
              <h3 className="text-center">Bank Details</h3>
              <h4 className="text-center mb-5">RAAH - State Bank of India</h4>
              <div className="contact-form">
                <div className="row clearfix">
                  <div className="col-md-12 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <h5>A/c. No.: 31269256344</h5>
                      <h5>IFSC No.: SBIN0003043 </h5>
                      <h5>
                        Branch: Civil Hospital Precincts, Opp. B. J. Medical
                        College, Asarava, Ahmedabad-380016{" "}
                      </h5>
                      <h5>
                        Contact Person: Parsottam Parmar (97732 91918 / 99250
                        64083)
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;


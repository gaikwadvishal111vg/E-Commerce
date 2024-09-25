import HomeBanner from "../Components/HomeBanner/Banner";
import banner1 from "../../src/assets/images/banner.jpg";
import banner2 from "../../src/assets/images/banner2.jpg";
import banner3 from "../../src/assets/images/banner3.jpg";
import banner4 from "../../src/assets/images/banner4.jpg";
import newsLetterImage from "../../src/assets/images/coupon.png";
import Button from "@mui/material/Button";
import { MdOutlineMail } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import HomeCat from "../Components/HomeCategaries";
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import ProductItems from ".././Components/ProductItems/ProductItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import { IoArrowForwardSharp } from "react-icons/io5";
const Home = () => {
  const [value, setValue] = useState(5);
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
    {/* BANNER SECTION */}
      <HomeBanner />
      {/* HOME CATEGORY */}
      <HomeCat />
{/* HOME PRODUCT SECTION */}
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} className="cursor w-100"></img>
                </div>
                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100"></img>
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="text-light text-sml">
                    Do not miss the current offers the end of Session
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoArrowForwardSharp />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                {/* <Slider {...productSliderOptions}> */}

                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItems value={value} setValue={setValue} />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS </h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers the end of Session
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoArrowForwardSharp />
                </Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 ">
                <ProductItems value={value} setValue={setValue} />
                <ProductItems value={value} setValue={setValue} />
                <ProductItems value={value} setValue={setValue} />
                <ProductItems value={value} setValue={setValue} />
              </div>
              <div className="d-flex  mt-4 mb-5 bannerSection">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner4} className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* NEW LETTER SECTION */}
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                50% discount for your first order
              </p>
              <h3>Join Our Newsletter and get....</h3>
              <p className="text-light">
                join our email subscription now to get update on promotions and
                coupons.
              </p>
<form>
  <MdOutlineMail/>
<input text="email" placeholder="Your Email Address"/>
<Button>Subscribe</Button>
</form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImage} />
            </div>
          </div>
        </div>
      </section>
    {/* FOOTER SECTION */}
    <footer>

    </footer>
    </>
  );
};
export default Home;

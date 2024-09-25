import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeBanner = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow:true
  };
    return(
<div className="container mt-3">
        <div className="homeBannerSection">
        <Slider {...settings}>
            <div className="item">
                <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" className="w-100"></img>
            </div>
            <div className="item">
                <img src="https://image.freepik.com/free-psd/online-shopping-concept-banner-template_23-2148559463.jpg" className="w-100"></img>
            </div>
            <div className="item">
                <img src="https://static.vecteezy.com/system/resources/previews/000/211/681/original/shopping-sale-banner-neon-vector.jpg" className="w-100"></img>
            </div>
            <div className="item">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1.jpg" className="w-100"></img>
            </div>
        </Slider>
      </div>
      </div>
    );
};
export default HomeBanner;
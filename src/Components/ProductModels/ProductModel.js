import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { useContext, useRef } from "react";
import { IoMdPricetags } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { Settings } from "@mui/icons-material";
import { MdCompareArrows } from "react-icons/md";
import AddToCartQuantity from '../QuantityBox/AddToCartQuant';
import { MyContext } from "../../App";
const ProductModel = (props) => {

const context= useContext(MyContext)

  const handleTnCClick = () => {
    alert("Redirecting to Terms and Conditions page..."); // You can change this to actual navigation
  };

  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows:  true
  }
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);

  }

  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => context.setisOpenProductModel(false)}
      >
        <Button className="close" onClick={() => props.closeProductModal()}>
          <IoClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Cheken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
        <hr />
        <div className="row mt-2 productDetaileModal">
          <div className="col-md-5">
            <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://aperasa.co.uk/wp-content/uploads/2023/03/Products-template_0021_6869-800x800.jpg"
                    }
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://aperasa.co.uk/wp-content/uploads/2023/03/Products-template_0021_6869-800x800.jpg"
                    }
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://aperasa.co.uk/wp-content/uploads/2023/03/Products-template_0021_6869-800x800.jpg"
                    }
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://aperasa.co.uk/wp-content/uploads/2023/03/Products-template_0021_6869-800x800.jpg"
                    }
                  />
                </div>

                {/* {
                currentProduct.productImages !== undefined && currentProduct.productImages.map((imgUrl, index) => {
                    return(
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1}
                            src={`https://www.instacart.com/image-server/699x699/fil…le/large_7851cfb1-669c-4724-8c29-36ea493a1a7c.png`}/>
                         </div>
                    )
                })
            } */}
              </Slider>
            </div>
            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img src={`https://03.cdn37.se/zY/images/2.1009685/bla-band-outdoor-meal-chicken-meatballs-with-spicy-tomato.jpeg`} className="w-100" onClick={() => goto(0)}/>
              </div>
              <div className="item">
                <img src={`https://03.cdn37.se/zY/images/2.1009685/bla-band-outdoor-meal-chicken-meatballs-with-spicy-tomato.jpeg`} className="w-100"  onClick={() => goto(1)}/>
              </div>
              <div className="item">
                <img src={`https://03.cdn37.se/zY/images/2.1009685/bla-band-outdoor-meal-chicken-meatballs-with-spicy-tomato.jpeg`} className="w-100"  onClick={() => goto(2)}/>
              </div>
              <div className="item">
                <img src={`https://03.cdn37.se/zY/images/2.1009685/bla-band-outdoor-meal-chicken-meatballs-with-spicy-tomato.jpeg`} className="w-100" onClick={() => goto(3)}/>
              </div>
            </Slider>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-4">
<span className="oldPrice lg">$99.00</span>
<span className="netPrice text-danger lg mr-2">$99.99</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">The Superior Golden Chicken Meatballs provide the ultimate snacking experience, with each bite delivering a delicious experience. Beautifully battered and crumbed with Superior Crispy Crumb, they turn into hot, crisp, appetizing feasts in minutes.</p>
          <div className="d-flex align-items-center">
            <AddToCartQuantity/>
           
          <button className="btn-blue btn-lg ml-3">Add to Cart</button>
          </div>
          <div className="d-flex align-items-center mt-5 actions">
          <Button className="btn-round btn-sml" variant="outlined"> <FaRegHeart/>&nbsp;ADD TO WISHLIST </Button>
          <Button className="btn-round btn-sml" variant="outlined"> <MdCompareArrows/>     COMPARE </Button>
          </div>
          <div>
            <h5>Available offers</h5>
          <p><span><IoMdPricetags/></span> Bank Offer Extra ₹250 off on HDFC Bank Pixel Credit Card Transactions. Min Txn Value: ₹5,000 T&C</p>
           <p>
        <strong>Bank Offer:</strong> Extra ₹500 off on HDFC Bank Pixel Credit Card EMI Transactions. 
        Min Txn Value: ₹5,000 {' '}
        
        {/* T&C text styled as a link */}
        <span 
          onClick={handleTnCClick} 
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
        >
          T&C
        </span>
      </p>    
          </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModel;

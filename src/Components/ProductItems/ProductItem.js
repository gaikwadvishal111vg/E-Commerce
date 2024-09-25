import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";

import { MyContext } from "../../App";
const ProductItems = ({ value, setValue }) => {
const context = useContext(MyContext);
const viewProductDatails = (id) => {
  context.setisOpenProductModel(true);
}
// const closeProductModal=() =>{
//   context.setisOpenProductModel(false);
// }


  return (
    <>    <div className="d-flex flex-wrap">
    <div className="item productItem ">
      <div className="imgWrapper">
        <img
          src="https://www.unibicfoods.com/wp-content/uploads/2022/12/choco-ripple-2-2048x1365.png"
          className="w-100"
          alt=""
        />
        <span className="badge badge-primary">50%</span>
        <div className="actions">
          <Button onClick={() => viewProductDatails(1)}>
            <SlSizeFullscreen />
          </Button>
          <Button>
            <FaRegHeart style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>

      <div className="info ">
        <h4>UNIBIC Choco Ripple </h4>
        <span className="text-success">In Stock</span>
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend"></Typography>
          <Rating
            className=""
            name="simple-controlled"
            size="small"
            precision={0.5}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <div className="d-flex">
          <span className="oldPrice">$50.00</span>
          <span className="netPrice text-danger ml-2">$25.00</span>
        </div>
      </div>
    </div>
    </div>
    
    {/* <ProductModel/> */}
    </>

  );
};
export default ProductItems;

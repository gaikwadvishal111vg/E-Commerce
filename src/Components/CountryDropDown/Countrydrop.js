import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import React from "react";
import { MyContext } from "../../App";
// import { FilterList } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setcountryList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry=(index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  }
  useEffect(() => {
    setcountryList(context.countryList)
  },[context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = context.countryList.filter((item) => 
        item.country.toLowerCase().includes(keyword)
      );
      setcountryList(list); // Set the filtered list
    } else {
      setcountryList(context.countryList); // Reset to the original list
    }
  };
  return (
    <>
      <Button className="countryDrop " onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">{context.selectedCountry!== ""? context.selectedCountry.length>10?context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className=" mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area. </p>
        <Button className="close" onClick={() => setisOpenModal(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search Your Location" onChange={filterList}/>
          <Button>
            <IoSearchOutline />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {/* {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              <li>
                <Button onClick={() => setisOpenModal(false)}>India</Button>
              </li>;
            })} */}
   {countryList?.length !== 0 &&
            countryList?.map((item, index) => (
              <li key={index}>
                <Button onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button>
              </li>
            ))}




          {/* <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
<li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
<li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
<li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
<li><Button onClick={() => setisOpenModal(false)}>India</Button></li> */}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;

// import  Logo from '../../src/assets/images/logo.jpg'
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CountryDropDown from "../CountryDropDown/Countrydrop";
import { IoSearchOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Searchbox from "./SearchBox/Searchbox.js";
import Navigation from '../Header/Navigation/Navigation.js'
import { useContext } from "react";
import { MyContext } from "../../App.js";
const Header = () => {

  const context = useContext(MyContext)
  return (
    <>
      {/* <h2>Header Page</h2> */}
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              In your eyes, I found my home, my world, and my eternity. Love is
              not a choice; it's a feeling that chooses you.
            </p>
          </div>
        </div>
        <header className="header">
          <div className="headerContainer">
            <div className="row">
              <div className="logoWrapper d-flex align-item-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-item-center part2">
                {
                  context.countryList.length !==0 && <CountryDropDown />
                }
                
                
                
                
                
                <Searchbox />

                <div className="part3 d-flex align-item-center ml-auto">
                  {/* ml-auto se user icons and search get the gap */}
                  <Button className="circle mr-3">
                    <FaCircleUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-item-center">
                    <span className="price">$1000</span>
                    <div className="position-relative ml-2">
                      <Button className="circle ">
                        <IoCartOutline />
                      </Button>
                      <span className="count d-flex align-item-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation/>  
      </div>
    </>
  );
};
export default Header;

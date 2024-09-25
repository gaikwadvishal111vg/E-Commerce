import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { useState } from "react";
const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-item-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>{" "}
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men</Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men</Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <HomeWorkOutlinedIcon />
                    Home & Furniture
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Men</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Women</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Beauty</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Kid's</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Gift's</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Cloth's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear's</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blogs</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact Us</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

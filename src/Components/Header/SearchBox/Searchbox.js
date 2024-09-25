import Button from "@mui/material/Button";
import { IoSearchOutline } from "react-icons/io5";

const Searchbox =() => {
    return(
<div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search" />
                  <Button>
                    <IoSearchOutline />
                  </Button>
                </div>
    )
}

export default Searchbox;
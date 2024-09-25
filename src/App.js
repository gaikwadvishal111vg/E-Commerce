import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './Pages/Home';
import Listing from "./Pages/Listing";
import Header from './Components/Header/Header';
import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
// import ProductModel from '../ProductModels/ProductModel'
import ProductModel from "./Components/ProductModels/ProductModel.js";
// import Footer from '../src/Components/Footer'
import Footer from './Components/Footer/Footer';
const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");

  },[])
const getCountry= async(url) =>{
  const response = await axios.get(url).then((res) => {
             setCountryList(res.data.data); 
              console.log(res.data.data);
  })
}
  const values={
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModel,
    setisOpenProductModel
  }
  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/cat/:id" element={<Listing />} />
      {/*<Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer/>
      {
      isOpenProductModel === true && <ProductModel />
    }
      </MyContext.Provider>
    </BrowserRouter>
    
    </>
      );
}

export default App;
export {MyContext}
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import axios from "axios";
import NavBar from "./components/NavBar";
import Products from "./pages/products/Products";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import SlideShow from "./components/SlideShow";
import Subscribe from "./pages/home/Subscribe";

function App() {
  const [data, setData] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="products/:id" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <SlideShow products={data} />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

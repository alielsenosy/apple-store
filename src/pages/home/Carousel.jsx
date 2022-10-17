import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

function UncontrolledExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then((res) => setData(res.data));
  }, []);
  return (
    <Carousel>
      {data.map((slideImg, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slideImg.img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;

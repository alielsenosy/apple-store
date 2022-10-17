import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import cib from "../../assets/cib2x.png";
const Products = () => {
  const [prod, setProd] = useState([]);
  let params = useParams([]);

  useEffect(() => {
    axios
      .get(`https://63189f2cf6b281877c71eab0.mockapi.io/products/${params.id}`)
      .then((res) => setProd(res.data));
  }, [params.id]);

  console.log(prod);
  return (
    <div>
      <div className="container text-center" style={{ margin: "50px auto" }}>
        <div className="row d-flex justify-content-around">
          <div className="col-sm-5 d-flex justify-content-between">
            <div className="container text-center">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex flex-column mb-3">
                    {prod?.img?.map((oneImg, index) => (
                      <div className="p-2" key={index}>
                        <img
                          src={oneImg}
                          alt=""
                          width={"100px"}
                          height={"100px"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-8">
                  <img
                    src={prod?.img?.[0]}
                    width={"170vw"}
                    height={"150vh"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-5" style={{ textAlign: "left" }}>
            <div
              className="d-flex justify-content-between"
              style={{ paddingRight: "20px" }}
            >
              <span style={{ color: "#888888", fontWeight: "bold" }}>
                APPLE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <h5 style={{ fontWeight: "bold" }}>{prod.name}</h5>
            <div className="d-flex">
              <ReactStars
                value={prod.numberOfStars}
                size={30}
                edit={false}
                activeColor="#ffd700"
              />
              <span
                style={{
                  color: "#AAAAAA",
                  paddingTop: "12px",
                  paddingLeft: "5px",
                }}
              >
                ({prod.numberOfReviews} Reviews)
              </span>
            </div>
            {prod.inStock === 0 ? (
              <>
                <h3 style={{ color: "black", fontWeight: "bold" }}>
                  ${prod.price}
                </h3>
                <span style={{ color: "red" }}>Out of Stock</span>
              </>
            ) : (
              <>
                <h3 style={{ color: "#0D4EB7", fontWeight: "bold" }}>
                  ${prod.price}
                </h3>
                <span style={{ color: "#05d105" }}>In Stock</span>
              </>
            )}
            <div style={{ paddingTop: "25px", paddingBottom: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <span
                style={{
                  padding: "0px 20px",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                1
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-dash-circle"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </div>
            <div className="d-flex justify-content-start">
              <div
                className="card"
                style={{
                  color: "#C3C3C3",
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <h5
                  className="card-title"
                  style={{ lineHeight: "65px", fontWeight: "bold" }}
                >
                  Full Price
                </h5>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                }}
              >
                <h5
                  className="card-title"
                  style={{ lineHeight: "65px", fontWeight: "bold" }}
                >
                  Installments
                </h5>
              </div>
            </div>
            <div
              className="d-flex justify-content-start"
              style={{ marginTop: "5px" }}
            >
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <img src={cib} alt="" />
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  marginRight: "5px",
                  height: "70px",
                }}
              >
                <img src={cib} alt="" />
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  marginRight: "5px",
                  height: "70px",
                }}
              >
                <img src={cib} alt="" />
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                }}
              >
                <img src={cib} alt="" />
              </div>
            </div>
            <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>Memory</h5>
            <div
              className="d-flex justify-content-start"
              style={{ marginTop: "5px" }}
            >
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  128GB
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$999.00</h5>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  marginRight: "5px",
                  height: "70px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  256GB
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$999.00</h5>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  marginRight: "5px",
                  height: "70px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  512GB
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$999.00</h5>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  1TB
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$999.00</h5>
              </div>
            </div>
            <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>Color</h5>
            <div className="d-flex justify-content-start">
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "15px", fontWeight: "bold" }}
                >
                  Silver
                </h6>
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#EDEDED",
                    border: "1px solid #707070",
                    margin: "auto",
                  }}
                ></div>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "15px", fontWeight: "bold" }}
                >
                  Silver
                </h6>
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#90BAD1",
                    border: "1px solid #707070",
                    margin: "auto",
                  }}
                ></div>
              </div>
            </div>
            <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>Insurance</h5>
            <div
              className="d-flex justify-content-start"
              style={{ marginBottom: "50px" }}
            >
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                  marginRight: "5px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  1 year
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$99.00</h5>
              </div>
              <div
                className="card"
                style={{
                  textAlign: "center",
                  width: "24%",
                  height: "70px",
                }}
              >
                <h6
                  className="card-title"
                  style={{ lineHeight: "35px", fontWeight: "bold" }}
                >
                  2 year
                </h6>
                <h5 style={{ lineHeight: "0px" }}>$159.00</h5>
              </div>
            </div>
            {prod.inStock === 0 ? (
              <button type="button" className="btn btn-dark w-100">
                Add to Cart
              </button>
            ) : (
              <button type="button" className="btn btn-primary w-100">
                Add to Cart
              </button>
            )}
            <div>
              <div style={{ marginTop: "30px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-car-front"
                  viewBox="0 0 16 16"
                  style={{ color: "#6F6F6F" }}
                >
                  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" />
                  <path
                    fill-rule="evenodd"
                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"
                  />
                </svg>
                <span style={{ color: "#6F6F6F", paddingLeft: "20px" }}>
                  Free shipping, arrives by Tue, Nov 23
                </span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-recycle"
                  viewBox="0 0 16 16"
                  style={{ color: "#6F6F6F" }}
                >
                  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                </svg>
                <span style={{ color: "#6F6F6F", paddingLeft: "20px" }}>
                  Free 10-day return window starts Dec 26th Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

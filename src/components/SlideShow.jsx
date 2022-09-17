import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useNavigate } from "react-router-dom";

const SlideShow = ({ products }) => {
  let navigate = useNavigate();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      style={{
        margin: "70px auto",
        width: "80%",
      }}
    >
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>
        Explore Products
      </h3>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={0}
        leftChevron={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        }
        rightChevron={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {products.map((product) => (
          <div
            className="col border border-2"
            style={{ textAlign: "left", padding: "20px", cursor: "pointer" }}
            onClick={() =>
              navigate(`/products/${product.id}`, { replace: true })
            }
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <img
                src={product.img[0]}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <h4>{product.name}</h4>
            <div className="d-flex justify-content-between">
              {product.priceAfterdiscount !== product.price ? (
                <>
                  <span
                    style={{
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    ${product.priceAfterdiscount}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      textDecoration: "line-through",
                      color: "#A7A9AC",
                    }}
                  >
                    ${product.price}
                  </span>
                </>
              ) : (
                <span style={{ fontWeight: "bold" }}>${product.price}</span>
              )}
            </div>
            {product.inStock === 0 ? (
              <span style={{ color: "red" }}>Out of Stock</span>
            ) : (
              <span style={{ color: "#05d105" }}>In Stock</span>
            )}
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default SlideShow;

import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RelateProduct from "../components/RelateProduct";
import { createCartTunk } from "../store/slices/cart.slice";
import { getProductThunk } from "../store/slices/products.slice";
import Carousel from "react-bootstrap/Carousel";
import { render } from "react-dom";

const ProductsDetail = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const productList = useSelector((state) => state.products);

  const product = productList.find(
    (productItem) => productItem.id === Number(id)
  );

  const relatedProduct = productList.filter(
    (productsItem) => productsItem.category.id === product.category.id
  );
  let [quantitys, setQuantity] = useState("1");

  const addToCart = () => {
    const cart = {
      id: product?.id,
      quantity: String(quantitys),
    };
    console.log(cart);
    dispatch(createCartTunk(cart));
  };

  const sum = () => {
    setQuantity(Number(quantitys) + 1);
  };
  const subtraction = () => {
    setQuantity(Number(quantitys) - 1);
  };

  return (
    <div>
      <div>
        <div key={product?.id} className="product">
          <div className="imgs-product">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product?.productImgs[0]}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product?.productImgs[1]}
                  alt="Second slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product?.productImgs[2]}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h3>${product?.price}</h3>
            <div></div>
            <p className="dark a">
              <b>Status: </b>
              {product?.status !== "active" ? (
                <i className="fa-solid fa-face-frown red"></i>
              ) : (
                <i class="fa-solid fa-face-laugh-beam green"></i>
              )}
            </p>
            <button
              style={{
                borderRadius: `${50}%`,
                width: `${2}vw`,
                color: "white",
                background: "blueviolet",
                borde: "none",
              }}
              onClick={sum}
            >
              +
            </button>
            <input
              type="text"
              value={quantitys}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ width: `${2}vw`, margin: `${5}px` }}
            />
            <button
              style={{
                borderRadius: `${50}%`,
                width: `${2}vw`,
                color: "white",
                background: "blueviolet",
                borde: "none",
              }}
              onClick={subtraction}
            >
              -
            </button>
            <Button variant="success" onClick={addToCart}>
              <i class="fa-solid fa-cart-plus"></i>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <RelateProduct relatedProduct={relatedProduct} />
      </div>
    </div>
  );
};

export default ProductsDetail;

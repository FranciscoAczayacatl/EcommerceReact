import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createCartTunk } from "../store/slices/cart.slice";
import {
  filterInputThunk,
  filterProductThunk,
  getProductThunk,
} from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    dispatch(getProductThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  const addToCart = (idProduct) => {
    const cart = {
      id: idProduct,
      quantity: 1,
    };
    dispatch(createCartTunk(cart));
  };
  return (
    <div className="home">
      <div className="search-input">
        <div class="input-group mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            class="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={() => dispatch(filterInputThunk(inputSearch))}
          >
            Search
          </button>
        </div>
      </div>
      <div className="buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            class="btn btn-info"
            onClick={() => dispatch(filterProductThunk(category.id))}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="cards_container">
        {products.map((product) => (
          <div className="product-card">
            <Card style={{ width: "18rem" }} key={product.id}>
              <Link to={`/products/${product.id}`} className="product-card">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card.Img
                    variant="center"
                    src={product.productImgs?.[0]}
                    className="img"
                  />
                </div>

                <Card.Body>
                  <Card.Title className="dark">{product.title}</Card.Title>
                  <Card.Text>
                    <h6 className="price">Price: {product.price}</h6>

                    <p className="dark">
                      <b>Status: </b>
                      {
                        <div>
                          {product.status !== "active" ? (
                            <i className="fa-solid fa-face-frown red"></i>
                          ) : (
                            <i className="fa-solid fa-face-laugh-beam green"></i>
                          )}
                        </div>
                      }
                    </p>
                  </Card.Text>
                </Card.Body>
              </Link>
              <Button
                variant="success"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                <i className="fa-solid fa-cart-plus"></i>
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

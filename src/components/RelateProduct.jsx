import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createCartTunk } from "../store/slices/cart.slice";

const RelateProduct = ({ relatedProduct }) => {
  const dispatch = useDispatch();

  const addToCart = (idProduct) => {
    const cart = {
      id: idProduct,
      quantity: 1,
    };
    dispatch(createCartTunk(cart));
    console.log(cart);
  };

  console.log(relatedProduct);
  return (
    <div>
      <h3>Related products</h3>
      <div className="related-container">
        {relatedProduct.map((relatep) => (
          <div className="product-card" key={relatep.id}>
            <Card style={{ width: "18rem" }}>
              <Link to={`/products/${relatep.id}`} className="product-card">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card.Img
                    variant="center"
                    src={relatep.productImgs?.[0]}
                    className="img_o"
                  />
                </div>

                <Card.Body>
                  <Card.Title className="dark">{relatep.title}</Card.Title>
                  <Card.Text>
                    <h6 className="price">Price: {relatep.price}</h6>

                    <p className="dark">
                      <b>Status: </b>
                      {relatep.status !== "active" ? (
                        <i class="fa-solid fa-face-frown red"></i>
                      ) : (
                        <i class="fa-solid fa-face-laugh-beam green"></i>
                      )}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Link>
              <Button
                variant="success"
                onClick={() => {
                  addToCart(relatep.id);
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

export default RelateProduct;

import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/Purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);
  console.log(purchases);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: `${5}vh ${0}vh`,
          marginBottom: `${10}vh`,
        }}
      >
        <h1>purchases:</h1>
      </div>
      <div>
        {purchases.map((pur) => (
          <div key={pur.id}>
            <Card className="text-center">
              <Card.Header
                style={{ backgroundColor: "#0b525b", color: "white" }}
              >
                {pur.updatedAt}
              </Card.Header>
              <Card.Body>
                {pur.cart.products.map((products) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: `${5}px`,
                    }}
                  >
                    {
                      <Link
                        to={`/products/${products.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Card style={{ width: "50rem" }}>
                          <Card.Body>
                            <Card.Title>{products.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              ${products.price}
                            </Card.Subtitle>
                            <Card.Text>{products.brand}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    }
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;

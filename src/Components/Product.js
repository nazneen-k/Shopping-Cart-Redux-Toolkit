import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import "./Product.css";
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "Loading") {
    return <p>Loading... </p>;
  }
  if (status === "error") {
    return <p>Something went wrong! Try again later</p>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3 mb-4" key={product.id}>
      <Card className="h-100" style={{ width: "18rem", marginLeft: "10px" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button
            variant="primary"
            className="button-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="product-dashboard">Product Dashboard</h1>

      <div className="row">{cards}</div>
    </>
  );
};

export default Product;

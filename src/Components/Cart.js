import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/CartSlice";
import "./Cart.css";

const Cart = () => {
  // Reading the state from the imported one using useSelector
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // Dispatch a remove Action
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-3 mb-4" key={product.id}>
      <Card className="h-100 cart-card">
        {" "}
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
            className="cart-button"
            style={{ background: "#D21312", width: "100%" }}
            onClick={() => removeToCart(product.id)}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;

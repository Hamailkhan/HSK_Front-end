import { ShoppingCartOutlined } from "@ant-design/icons";
import "./card.css";
import { Card as Cart } from "antd";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const oldPrice = "$200";
  const newPrice = "$150";
  const navigate = useNavigate();

  return (
    <div className="cart-div">
      <h1>Our Products</h1>
      <div className="cart-container">
        <Cart
          style={{
            overflow: "hidden",
            boxShadow: "3px 3px 5px #0005",
            cursor: "pointer",
          }}
          onClick={() => navigate("/product/1")}
          className="cart"
          cover={
            <div style={{ position: "relative" }}>
              <img
                alt="example"
                src="/img/OIG4.jpeg"
                style={{
                  width: "100%",
                  height: "200px", // Specify the height you want for the image container
                  objectFit: "cover",
                  background: "#fff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 8, // Adjust as needed
                  left: 8, // Adjust as needed
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "2px 8px",
                  backdropFilter: "blur(5px)",
                  borderRadius: 4,
                }}
              >
                Category
              </div>
              <ShoppingCartOutlined
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: "24px",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                title="Add to cart"
                onClick={() => alert("Added to Cart!")}
              />
            </div>
          }
        >
          <Cart.Meta
            title="Card title"
            description={
              <div>
                <p>This is the description</p>
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{ textDecoration: "line-through", marginRight: 8 }}
                  >
                    {oldPrice}
                  </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {newPrice}
                  </span>
                </div>
              </div>
            }
          />
        </Cart>

        <Cart
          style={{
            overflow: "hidden",
            boxShadow: "3px 3px 5px #0005",
          }}
          className="cart"
          cover={
            <div style={{ position: "relative" }}>
              <img
                alt="example"
                src="/img/logo.png"
                style={{
                  width: "100%",
                  height: "200px", // Specify the height you want for the image container
                  objectFit: "cover",

                  background: "#fff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 8, // Adjust as needed
                  left: 8, // Adjust as needed
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "2px 8px",
                  backdropFilter: "blur(5px)",
                  borderRadius: 4,
                }}
              >
                Category
              </div>
              <ShoppingCartOutlined
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: "24px",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                title="Add to cart"
                onClick={() => alert("Added to Cart!")}
              />
            </div>
          }
        >
          <Cart.Meta
            title="Card title"
            description={
              <div>
                <p>This is the description</p>
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{ textDecoration: "line-through", marginRight: 8 }}
                  >
                    {oldPrice}
                  </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {newPrice}
                  </span>
                </div>
              </div>
            }
          />
        </Cart>

        <Cart
          style={{
            overflow: "hidden",
            boxShadow: "3px 3px 5px #0005",
          }}
          className="cart"
          cover={
            <div style={{ position: "relative" }}>
              <img
                alt="example"
                src="/img/bg.jpg"
                style={{
                  width: "100%",
                  height: "200px", // Specify the height you want for the image container
                  objectFit: "cover",

                  background: "#fff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 8, // Adjust as needed
                  left: 8, // Adjust as needed
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "2px 8px",
                  backdropFilter: "blur(5px)",
                  borderRadius: 4,
                }}
              >
                Category
              </div>
              <ShoppingCartOutlined
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: "24px",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                title="Add to cart"
                onClick={() => alert("Added to Cart!")}
              />
            </div>
          }
        >
          <Cart.Meta
            title="Card title"
            description={
              <div>
                <p>This is the description</p>
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{ textDecoration: "line-through", marginRight: 8 }}
                  >
                    {oldPrice}
                  </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {newPrice}
                  </span>
                </div>
              </div>
            }
          />
        </Cart>

        <Cart
          style={{
            overflow: "hidden",
            boxShadow: "3px 3px 5px #0005",
          }}
          className="cart"
          cover={
            <div style={{ position: "relative" }}>
              <img
                alt="example"
                src="/img/logo.png"
                style={{
                  width: "100%",
                  height: "200px", // Specify the height you want for the image container
                  objectFit: "cover",

                  background: "#fff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 8, // Adjust as needed
                  left: 8, // Adjust as needed
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "2px 8px",
                  backdropFilter: "blur(5px)",
                  borderRadius: 4,
                }}
              >
                Category
              </div>
              <ShoppingCartOutlined
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: "24px",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                title="Add to cart"
                onClick={() => alert("Added to Cart!")}
              />
            </div>
          }
        >
          <Cart.Meta
            title="Card title"
            description={
              <div>
                <p>This is the description</p>
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{ textDecoration: "line-through", marginRight: 8 }}
                  >
                    {oldPrice}
                  </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {newPrice}
                  </span>
                </div>
              </div>
            }
          />
        </Cart>
      </div>
    </div>
  );
};

export default Card;

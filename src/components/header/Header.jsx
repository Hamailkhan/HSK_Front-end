import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Badge } from "antd";

const Header = () => {
  // const isMobile = function () {
  //   const match = window.matchMedia("(pointer:coarse)");
  //   return match && match.matches;
  // };

  // isMobile()
  //   ? document.body.classList.add("mobile")
  //   : document.body.classList.remove("mobile");

  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <NavLink className="logo" to="/">
        <img src="/img/small logo.png" alt="logo" />
        <h2>SAFRO</h2>
      </NavLink>
      <div className={`navlinks ${open ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>
          home
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          about
        </NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>
          services
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          contact
        </NavLink>
      </div>
      <div className="account">
        <NavLink to="/cart">
          <Badge count={5} color="#000">
            <ShoppingCartOutlined
              style={{
                color: "#000",
                fontSize: "2rem",
              }}
            />
          </Badge>
        </NavLink>

        <div
          style={
            open
              ? {
                  color: "#fff",
                  fontSize: "1.6rem",
                  zIndex: "1",
                  transition: "none",
                }
              : {
                  color: "#000",
                  fontSize: "1.6rem",
                  zIndex: "1",
                  transition: "none",
                }
          }
          className="menuIcon"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </div>
  );
};

export default Header;

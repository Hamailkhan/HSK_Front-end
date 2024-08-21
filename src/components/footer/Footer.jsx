import { NavLink } from "react-router-dom";
import "./footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => (
  <footer>
    <div className="link">
      <ul>
        <li>
          <h4>Company</h4>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="privacy">
          <NavLink to="/privacy-policy">Privacy policy</NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <h4>Get Help</h4>
        </li>
        <li>
          <NavLink to="/faqs">FAQ's </NavLink>
        </li>
        <li>
          <NavLink to="">Order Status</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <h4>Categories</h4>
        </li>
        <li>
          <NavLink to="/faqs">FAQ's </NavLink>
        </li>
        <li>
          <NavLink to="">Order Status</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment Option</NavLink>
        </li>
      </ul>

      <ul className="flex">
        <li>
          <h4>Follow Us</h4>
        </li>
        <span>
          <li>
            <NavLink to="">
              <FacebookFilled className="i" />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <InstagramFilled className="i" />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <WhatsAppOutlined
                className="i"
                style={{
                  background: "#000",
                  color: "#fff",
                  fontSize: ".8rem",
                  padding: "3px",
                }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <LinkedinFilled className="i" />
            </NavLink>
          </li>
        </span>
      </ul>
    </div>
    <p>Copyright&copy;{new Date().getFullYear()} Safro</p>
  </footer>
);

export default Footer;

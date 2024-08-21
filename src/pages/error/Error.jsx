import { NavLink } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error container">
      404 <br />
      oops! page not found
      <NavLink to="/" className="btn">
        Back to Home
      </NavLink>
    </div>
  );
};

export default Error;

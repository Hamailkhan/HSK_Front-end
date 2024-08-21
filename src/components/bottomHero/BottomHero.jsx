import { useState } from "react";
import Button from "../button/Button";
import "./bottomHero.css";

const BottomHero = () => {
  const [season, setSeason] = useState("summer");

  return (
    <div className="bottomHero">
      <div className="bottomHero-left">
        <img src={`/img/${season}-man.jpeg`} alt="" />
      </div>
      <div className="bottomHero-middle">
        <h2>{season}</h2>
        <p>see our {season} collection</p>
        <Button
          title="See Collection"
          classname="bottomHero-btn"
          style={{
            background: "#f4f4f4",
            color: "#000",
            fontWeight: "600",
          }}
        >
          See Collection
        </Button>
      </div>
      <div className="bottomHero-right">
        <img src={`/img/${season}.jpeg`} alt="" />
      </div>
    </div>
  );
};

export default BottomHero;

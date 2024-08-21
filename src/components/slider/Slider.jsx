import { Carousel } from "antd";

const Slider = () => {
  const arr = [
    "/img/slider1.webp",
    "/img/slider3.webp",
    "/img/slider4.webp",
    "/img/slider2.webp",
  ];

  return (
    <>
      <Carousel
        autoplay
        arrows
        style={{
          height: "370px",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "20px 0",
        }}
      >
        {arr.map((item, index) => {
          return (
            <div className="fig" key={index}>
              <img src={item} className="img" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;

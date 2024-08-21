import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-cont">
        <div className="services__item">
          <h4 className="services__title">
            <TbTruckDelivery className="icon" />
            Super Fast Delivery
          </h4>
        </div>
        <div className="services__item">
          <h4 className="services__title">
            <MdSecurity className="icon" />
            Non-contact Shipping
          </h4>
        </div>
        <div className="services__item">
          <h4 className="services__title">
            <GiReceiveMoney className="icon" />
            Money-back Guaranteed
          </h4>
        </div>
        <div className="services__item">
          <h4 className="services__title">
            <RiSecurePaymentLine className="icon" />
            Super Secure Payment System
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Services;

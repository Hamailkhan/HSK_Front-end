import "./services.css";
import { Card, Col, Row } from "antd";

const servicesData = [
  {
    title: "Delivery and Shipping",
    content:
      "We offer fast and reliable delivery. Shipping is free on orders over $50. Estimated delivery time is 3-5 business days.",
  },
  {
    title: "Return and Exchange",
    content:
      "We have a hassle-free return and exchange policy. You can return items within 30 days of purchase.",
  },
  {
    title: "Customer Support",
    content:
      "Our customer support is available 24/7. You can reach us via email, chat, or phone for any assistance.",
  },
  {
    title: "Payment Methods",
    content:
      "We accept various payment methods including credit cards, PayPal, and Easypaisa. Secure payment processing is guaranteed.",
  },
  {
    title: "Order Tracking",
    content:
      "Track your orders in real-time. Simply enter your order ID on our tracking page to see the status of your order.",
  },
  {
    title: "Gift Services",
    content:
      "We offer gift wrapping and personalized messages. Add these services during checkout to make your gifts special.",
  },
  {
    title: "Special Offers and Discounts",
    content:
      "Sign up for our newsletter to receive exclusive offers, discounts, and early access to sales.",
  },
  {
    title: "Sustainability and Ethical Practices",
    content:
      "We are committed to sustainability. Our products are ethically sourced and we use eco-friendly packaging.",
  },
];

const Services = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Our Services
      </h1>
      <Row gutter={[16, 16]}>
        {servicesData.map((service, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              className="service-card"
              title={service.title}
              bordered={true}
            >
              <p>{service.content}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;

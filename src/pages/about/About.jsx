import { Row, Col, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div
      className="about"
      style={{
        padding: "20px",
      }}
    >
      <Title level={1}>About Us</Title>
      <Paragraph>
        Welcome to our e-commerce store! We started this journey in 2024 with
        the mission to provide high-quality, affordable products to our
        customers. Our journey began with a small team and a big dream, and
        today we are proud to have grown into a trusted brand.
      </Paragraph>

      <Title level={2}>Our Mission</Title>
      <Paragraph>
        Our mission is to make shopping easy, convenient, and enjoyable for
        everyone. We strive to offer a diverse range of products that cater to
        the needs and tastes of our customers, all while ensuring quality and
        value.
      </Paragraph>
      <Title level={2}>Our Vision</Title>
      <Paragraph>
        We envision a world where shopping is a seamless experience, where every
        customer finds exactly what they need without hassle. We aim to
        continuously innovate and expand our product offerings to meet the
        evolving needs of our customers.
      </Paragraph>

      <Title level={2}>Our Values</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title="Quality" className="service-card">
            We are committed to offering products that meet the highest
            standards of quality.
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Integrity" className="service-card">
            We believe in doing business with honesty and integrity, building
            trust with our customers.
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Customer Focus" className="service-card">
            Our customers are at the heart of everything we do. We are dedicated
            to providing exceptional service and support.
          </Card>
        </Col>
      </Row>
      <Title level={2}>Meet Our Team</Title>
      <Paragraph>
        Our team is made up of passionate individuals who are dedicated to
        making your shopping experience the best it can be. Meet some of the key
        members behind our brand.
      </Paragraph>

      <Title level={2}>Contact Us</Title>
      <Paragraph>
        We would love to hear from you! Reach out to us via email at
        support@example.com or follow us on our social media channels for the
        latest updates.
      </Paragraph>
    </div>
  );
};

export default About;

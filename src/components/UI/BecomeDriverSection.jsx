import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import driverImg from "../../assets/all-images/newPres.jpg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            tu as un ou des services mais pas de clients ? Alors rejoins nous
            </h2>

            <Link  to='/loginPrestataire' className="btn become__driver-btn mt-4" style={{backgroundColor:'white'}}>
              devenir Prestataire
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;

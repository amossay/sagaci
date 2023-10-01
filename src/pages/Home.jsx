import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="6" md="6">
                <div className="find__cars-left">
                  <h2>Promouvoir les facilitations des pénétrations des assurances en Côte d'Ivoire</h2>
                </div>
              </Col>

               <Col lg="6" md="6">
                             <div className="find__cars-left-2">
                               <h2>Défendre et de préserver les intérêts des agents généraux en assurance</h2>
                             </div>
                           </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
     
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Suivez-nous</h6>
              <h2 className="section__title">Actualités de SAGACI</h2>
            </Col>

            {carData.slice(0, 3).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
    
          
            </Col>

            
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
  
    </Helmet>
  );
};

export default Home;

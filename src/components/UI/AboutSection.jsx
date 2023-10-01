import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/11.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">A propos de nous</h4>
              <h2 className="section__title">Bienvenue à SAGACI</h2>
              <p className="section__description-new">
              Sagaci Syndicat des Agents Généraux d'Assurance de Côte d'Ivoire est un regroupement d'agents Généraux en Assurance.
A pour but de défendre et de préserver les intérêts des agents
généraux en assurance en occurrence les Agents Généraux.
              </p>

              <div className="about__section-item  align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  Sensibiliser sur la bonne organisation des agents généraux en Assurances
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Rendre plus dynamique le secteur
                </p>
              </div>

              <div className="about__section-item align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Donner la place d'attente a ce noble métier
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Faciliter la pénétration des assurances sur le marché
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/4.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="A propos de nous" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Nos valeurs et nos conceptions
                </h2>

                <p className="section__description-new">
                Depuis le temps des indépendances en Afrique et particulièrement en Côte d'Ivoire ou les Agents Généraux Français ont permis la pénétration des Assurances plusieurs compagnies se sont installer .Nous ne sommes jamais associé a une négociation de reforme de notre secteur et pourtant, chaque 10 ans la FANAF se réunis a Yamoussoukro pour prendre de grande décision dans notre secteur dans la zone CIMA
                 même a la 40ème anniversaire de la FANAF qui devait se tenir à Yamoussoukro et pour les circonstances logistiques à été tenue en 2016 à Abidian a l'hôtel Ivoire.
                </p>

                <p className="section__description">
                Le président des courtiers Kanté Mamadou datant de 2016 affirmer le chiffre d'affaire des courtiers de 62.000.000.000 environ de nos francs mais celui des agents généraux étaient ignoré. Vue cette discrimination nous avons intensifié notre lutte en installant 25 sections sur tout le territoire national jusqu'à ce jour nous comptons 31
                 sections sur tout le territoire national avec un bureau exécutif expérimenter dans le secteur des assurances tous des Agents Généraux de différentes compagnies.
             
                </p>
                <div>
                    <h6 className="section__subtitle">CISSE ABOU BAKARY</h6>
                    <h4>DG ADJOINT DES IMPOTS</h4>
                  </div>

                <div className=" d-flex align-items-center gap-3 mt-4">
              

                 
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Le bureau exécutif est composé comme suite</h6>
              <h2 className="section__title">Nos Membres</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;

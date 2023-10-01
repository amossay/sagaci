import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";


import driverImg from "../../assets/all-images/66.jpg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h1 className="section__title become__driver-title">
              Objectifs à atteindre 
            </h1>
            <div className="about__section-item-2  align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
              Promouvoir les facilitations des pénétrations des assurances en Côte d'Ivoire. Et un rôle central dans les négociations entre les grandes décideurs en assurance dans notre pays (la DA, L'ASACI...)
Pour une couverture totale du territoire national et promouvoir le métier des agents généraux d'assurance facilité l'installation et faire intéressé le métier des agents généraux aux jeunes étudiants en assurance dans la zone CIMA.
             
                </p>
                <p className="section__description d-flex align-items-center gap-2">
              ADAMA TOURE : Président de la coordination des gares routières.
     
                </p>
                <p className="section__description d-flex align-items-center gap-2">
            
              BEN FALLY : Président des consommateurs de Côte d'Ivoire.
                </p>
             
              </div>
              <div>
             
              
            
              </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;

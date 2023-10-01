import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/all-images/sagaci.png";

const quickLinks = [
  {
    path: "/about",
    display: "A propos de nous",
  },


  {
    path: "/cars",
    display: "Notre actualité",
  },
 

  {
    path: "/contact",
    display: "Contactez-nous",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="logo footer__logo">
              <h1>
              <Link to="/home" className=" d-flex align-items-center gap-2">
                 
                 <img src={logo} className="w-25"  alt="Logo" />
                     </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Sagaci Syndicat des Agents Généraux d'Assurance de Côte d'Ivoire est un regroupement d'agents Généraux en Assurance.
             A pour but de défendre et de préserver les intérêts des agents généraux en assurance en occurrence les Agents Généraux.
            </p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Liens rapides</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Notre siège</h5>
              <p className="office__info">Cocody, Abidjan</p>
              <p className="office__info">Telephone: +0995345875365</p>

              <p className="office__info">Email: info@sagaci.com</p>

              <p className="office__info">Heure d'ouverture : 8h - 17h</p>
            </div>
          </Col>

      

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Réalisé par
              MT INVESTMENTS AND TECHNOLOGIES.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

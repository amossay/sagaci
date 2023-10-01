import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava.png";
import ava02 from "../../assets/all-images/ava.png";
import ava03 from "../../assets/all-images/ava.png";
import ava04 from "../../assets/all-images/TA.jpg";
import ava05 from "../../assets/all-images/SA.jpg";
import ava06 from "../../assets/all-images/SAD.jpg";
import ava07 from "../../assets/all-images/SCM.jpg";
import ava08 from "../../assets/all-images/SCA.jpg";

const OUR__MEMBERS = [
  {
    name: "Le secrétaire général national qui fait office de président",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: " L'adjointe au secrétaire général national (SGA) office de vice présidente",
    experience: "Mme MOSSO JEANNETTE",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },

  {
    name: "La trésorier général",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Le trésorière adjointe",
    experience: "Mme SORO FATOU",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
  {
    name: "Le secrétariat permanent",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Le secrétaire administratif",
    experience: "KASSI BOSSON BERNARD",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava06,
  },
  {
    name: "Le secrétaire a la mobilisation des étudiants en Assurance",
    experience: "KOUAKOU AMOS",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava07,
  },
  {
    name: "Le secrétaire administratif adjoint",
    experience: "KANGA AMOIN",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava08,
  },
  {
    name: "Le secrétaire a l'organisation qui fait office au président d'organisation",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Le porte parole de secrétaire de section",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Le coordinateur",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Le chef protocole",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Le porte parole nationale ",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Commissariat aux comptes",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Commissaire aux comptes.",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Commissaire aux comptes adioint",
    experience: "",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
 
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />


            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <h6 className="text-center mb-0 mt-3">{item.experience}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;

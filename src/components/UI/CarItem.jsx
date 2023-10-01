import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, lieu, name, date, description, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100"/>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="section__title text-center">{description}</h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
 <h6 className="section__title text-center">{date}</h6>
 <h6 className="section__title text-center">{lieu}</h6>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">

          </button>

          <button className=" w-50 car__item-btn car__btn-details">

          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;

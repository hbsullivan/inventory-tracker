import React from "react";
import PropTypes from "prop-types";

export default function Wine(props) {
  return (
    <React.Fragment>
      <h3>Wine: {props.wine}</h3>
      <h4>Origin: {props.origin}</h4>
      <h4>Vintage: {props.vintage}</h4>
      <h5>Price: {props.price}</h5>
      <h5>Quantity: {props.quantity}</h5>
      <hr />
    </React.Fragment>
  )
}

Wine.propTypes = {
  wine: PropTypes.string,
  origin: PropTypes.string,
  vintage: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}
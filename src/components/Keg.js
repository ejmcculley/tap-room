import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
  <>
    <div onClick = {() => props.whenKegClicked(props.id)}>
      <h1>{props.name}</h1>
      <h2>{props.brand}</h2>
      <h3>$ {props.price} / glass | ABV: {props.abv} %</h3>
      <h3>{props.glassCount} / 397 glasses left in keg</h3>
    </div>
  </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  glassCount: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
  
export default Keg;
import React from "react";
import PropTypes from "prop-types";

const Keg = (props) => (
  <>
    <div onClick = {() => props.whenKegClicked(props.id)}>
      <h1>{props.name}</h1>
      <h2>{props.brand}</h2>
      <h3>$ {props.price} / pint | ABV: {props.abv} %</h3>
      <h3>{props.pintCount} / 124 pints left in keg</h3>
    </div>
  </>
);

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  pintCount: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
  
export default Keg;
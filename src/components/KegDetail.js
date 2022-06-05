import React from "react";
import PropTypes from "prop-types";

const KegDetail = ({ keg, onClickingDelete }) => (
  <>
    <h1>{props.name}</h1>
    <h2>{props.brand}</h2>
    <h3>$ {props.price} / pint | ABV: {props.abv} %</h3>
    <h3>{props.pintCount} / 124 pints left in keg</h3>
    <button onClick={ props.onClickingEdit }>Update</button>
    <button onClick={() => onClickingDelete(keg.id) }>Remove</button>
  </>
);

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
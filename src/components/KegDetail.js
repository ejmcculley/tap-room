import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <>
      <h1>{props.keg.name}</h1>
      <h2>{props.keg.brand}</h2>
      <h3>$ {props.keg.price} / glass | ABV: {props.keg.abv} %</h3>
      <button onClick={ props.onClickingEdit }>Update</button>
      <button onClick={() => onClickingDelete(keg.id) }>Remove</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
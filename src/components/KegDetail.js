import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles/Button.styled";
import { StyledCard } from "./styles/Card.styled";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <>
      <StyledCard>
        <h1>{props.keg.name}</h1>
        <h2>{props.keg.brand}</h2>
        <h3>$ {props.keg.price} / glass | ABV: {props.keg.abv} %</h3>
        <div>
          <Button onClick={ props.onClickingEdit }>Update</Button>
          <Button onClick={() => onClickingDelete(keg.id) }>Remove</Button>
        </div>
      </StyledCard>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
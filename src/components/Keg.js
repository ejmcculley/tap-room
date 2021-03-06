import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./styles/Button.styled"
import { StyledCard } from "./styles/Card.styled";

function Keg(props) {

  const [state, setState] = useState({ count: 397 })
  const count = state.count

  function decrementCount() {
    setState(prevState => {
      if (count > 1) { 
        return {...prevState, count: prevState.count -1 }
        } else {
          return {...prevState, count: "SOLD OUT"};
        }
  })
  }
 
  return (
  <>
    <StyledCard>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.brand}</h2>
        <h3>$ {props.price} / glass | ABV: {props.abv} %</h3>
        <h3>{ count } / {props.glassCount} glasses left in keg</h3>
          
          <div className="kegButtons">
              <Button onClick={decrementCount}>+ Sell Glass</Button>
              <Button onClick = {() => props.whenKegClicked(props.id)}>View</Button>
          </div>
      </div>
    </StyledCard>
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
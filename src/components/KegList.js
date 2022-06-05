import React from "react";
import Keg from "./Keg";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

const keg = {};
keg.id = v4();

const KegList = (props) => {
  (
    <>
      {props.kegList.map ((keg) =>
        <Keg  
          whenKegClick = { props.onKegSelection }
          name = { keg.name }
          brand = { keg.brand }
          price = { keg.price}
          abv = { keg.abv }
          pintCount = { keg.pintCount }
          id = { keg.id }
          key = { keg.id } />
          )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
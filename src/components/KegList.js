import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      {props.kegList.map((keg) =>
        <div className="kegContainer" key={keg}>
          <Keg  
            whenKegClicked = { props.onKegSelection }
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            glassCount={keg.glassCount || 397}
            id={keg.id}
            key={keg.id} />
        </div>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
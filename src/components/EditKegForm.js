import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ name: event.target.name.value,
                      brand: event.target.brand.value,
                      price: event.target.price.value,
                      abv: event.target.abv.value,
                      pintCount: event.target.pintCount.value,
                      id: keg.id });
  }

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand" />
        <input
          type="text"
          name="price"
          placeholder="Price" />
        <input
          type="text"
          name="abv"
          placeholder="ABV" />
          <input
          type="text"
          name="pintCount"
          placeholder="Number of Pints" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;
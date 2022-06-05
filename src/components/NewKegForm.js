import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const NewKegForm = (props) => {
  
  function handleNewKegFormSubmission(event) {
  event.preventDefault();
  props.onNewKegCreation({ name: event.target.name.value,
                           brand: event.target.brand.value,
                           price: event.target.price.value,
                           abv: event.target.abv.value,
                           pintCount: event.target.pintCount.value,
                           id: v4() });
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

handleNewKegFormSubmission.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;

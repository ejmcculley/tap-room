import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
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

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
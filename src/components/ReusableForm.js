import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles/Button.styled";
import { StyledForm} from "./styles/Form.styled";


function ReusableForm(props) {
  return (
    <>
      <StyledForm>
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
          <Button type="submit">{props.buttonText}</Button>
        </form>
      </StyledForm>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

const NewKegForm = (props) => {
  
  const handleNewKegFormSubmission = (event) => {
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
          <ReusableForm
            formSubmissionHandler={handleNewTicketFormSubmission}
            buttonText="Help!" />
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

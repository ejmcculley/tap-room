import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";



const EditKegForm = (props) => {
  const { keg } = props;

  const handleEditKegFormSubmission = (event) => {
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
      <ReusableForm
        buttonText="Update Ticket" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;
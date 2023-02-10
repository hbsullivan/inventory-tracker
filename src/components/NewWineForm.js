import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewWineForm(props){

  function handleNewWineFormSubmission(event) {
    event.preventDefault();
    props.onNewWineCreation({
      wine: event.target.wine.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      vintage: event.target.vintage.value,
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewWineFormSubmission}
      buttonText="Add Wine to Inventory" />
    </React.Fragment>
  );
}

NewWineForm.propTypes = {
  onNewWineCreation: PropTypes.func
}

export default NewWineForm;
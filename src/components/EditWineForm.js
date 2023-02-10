import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditWineForm (props) {
  const { wineObject } = props;

  function handleEditWineFormSubmission(event) {
    event.preventDefault();
    props.onEditWine({
      wine: event.target.wine.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      vintage: event.target.vintage.value,
      quantity: wineObject.quantity,
      id: wineObject.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditWineFormSubmission}
        buttonText="Update Wine" />
    </React.Fragment>
  );
}

EditWineForm.propTypes = {
  wineObject: PropTypes.object,
  onEditWine: PropTypes.func
}

export default EditWineForm;
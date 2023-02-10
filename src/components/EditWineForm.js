import React from "react";
import ReusableForm from "./ReusableForm";

function EditWineForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Wine" />
    </React.Fragment>
  );
}

export default EditWineForm;
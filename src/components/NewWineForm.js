import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
     <form onSubmit={handleNewWineFormSubmission}>
        <input
          type='text'
          name='wine'
          placeholder='Wine' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='vintage'
          placeholder='Vintage' />
        <button type='submit'>Add to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewWineForm.propTypes = {
  onNewWineCreation: PropTypes.func
}

export default NewWineForm;
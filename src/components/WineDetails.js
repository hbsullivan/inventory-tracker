import React from "react";
import PropTypes from "prop-types";

function WineDetail(props){
  const { wineObject, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1><u>Wine Details</u></h1>
      <h2>Wine: {wineObject.wine}</h2>
      <h3>Origin: {wineObject.origin}</h3>
      <h3>Vintage: {wineObject.vintage}</h3>
      <h4>Price: ${wineObject.price}</h4>
      <h4>Quantity: {wineObject.quantity} bottles</h4>
      <button onClick={()=>onClickingEdit(wineObject.id)}>Update Wine</button>
      <button onClick={()=>onClickingDelete(wineObject.id)}>Remove from Inventory</button>
      <hr />
    </React.Fragment>
  );
}

WineDetail.propTypes = {
  wineObject: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default WineDetail;
import React from "react";
import Wine from "./Wine";
import PropTypes from "prop-types";

export default function WineList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.wineList.map((item) => 
        <Wine 
        whenWineClicked = {props.onWineSelection}
        wine={item.wine}
        origin={item.origin}
        price={item.price}
        vintage={item.vintage}
        quantity={item.quantity}
        id={item.id}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}

WineList.propTypes = {
  wineList: PropTypes.array,
  onWineSelection: PropTypes.func
}
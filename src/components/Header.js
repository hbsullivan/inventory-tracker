import React from "react";
import wineImage from "./../img/wine-row.jpeg";

export default function Header() {
  return(
    <React.Fragment>
      <h1 style={{textAlign: "center"}}>Henry's Wine Shop</h1>
      <img src={wineImage} alt='picture of wine' style={{width:"100%"}}/>
    </React.Fragment>
  );
}
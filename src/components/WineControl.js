import React from "react";
import NewWineForm from "./NewWineForm";
import WineList from "./WineList";

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainWineList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      pageView: !prevState.pageView
    }));
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.pageView) {
      currentPage = <NewWineForm />
      buttonText="Return to List"
    } else {
      currentPage = <WineList wineList = {this.state.mainWineList}/>
      buttonText = "Add Wine"
    }
    return(
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default WineControl;
import React from "react";
import NewWineForm from "./NewWineForm";
import WineDetail from "./WineDetails";
import WineList from "./WineList";

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainWineList: [],
      selectedWine: null
    }
  }

  handleClick = () => {
    if(this.state.selectedWine !== null) {
      this.setState({
        pageView: false,
        selectedWine: null
      });
    } else {
      this.setState(prevState => ({
        pageView: !prevState.pageView
      }));
    }
  }

  handleAddingNewWineToList = (newWine) => {
    const newMainWineList = this.state.mainWineList.concat(newWine);
    this.setState({mainWineList: newMainWineList, pageView: false})
  }

  handleChangingselectedWine = (id) => {
    const selectedWine = this.state.mainWineList.filter(wine => wine.id === id)[0];
    this.setState({selectedWine: selectedWine});
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.selectedWine !== null) {
      currentPage = <WineDetail wineObject = {this.state.selectedWine}/>
      buttonText="Return to List"
    } else if (this.state.pageView) {
      currentPage = <NewWineForm onNewWineCreation = {this.handleAddingNewWineToList}/>
      buttonText="Return to List"
    } else {
      currentPage = <WineList wineList = {this.state.mainWineList} onWineSelection = {this.handleChangingselectedWine}/>
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
import React from "react";
import NewWineForm from "./NewWineForm";
import WineDetail from "./WineDetails";
import WineList from "./WineList";
import EditWineForm from "./EditWineForm";

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainWineList: [],
      selectedWine: null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedWine !== null) {
      this.setState({
        pageView: false,
        selectedWine: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        pageView: !prevState.pageView
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewWineToList = (newWine) => {
    const newMainWineList = this.state.mainWineList.concat(newWine);
    this.setState({mainWineList: newMainWineList, pageView: false})
  }

  handleChangingselectedWine = (id) => {
    const selectedWine = this.state.mainWineList.filter(wine => wine.id === id)[0];
    this.setState({selectedWine: selectedWine});
  }

  handleDeletingWine = (id) => {
    const newMainWineList = this.state.mainWineList.filter(wine => wine.id !== id);
    this.setState({
      mainWineList: newMainWineList,
      selectedWine: null
    });
  }

  handleEditingWineInList = (wineToEdit) => {
    const editedMainWineList = this.state.mainWineList.filter(wine => wine.id !== this.state.selectedWine.id).concat(wineToEdit);
    this.setState({
      mainWineList: editedMainWineList,
      editing: false, 
      selectedWine: null
    });
  }

  render() {
    let currentPage = null;
    let buttonText = null;

    if(this.state.editing === true) {
      currentPage = <EditWineForm wineObject={this.state.selectedWine} onEditWine = {this.handleEditingWineInList}/>
      buttonText="Return to List";
    } else if (this.state.selectedWine !== null) {
      currentPage = <WineDetail wineObject = {this.state.selectedWine} onClickingDelete={this.handleDeletingWine} onClickingEdit = {this.handleEditClick}/>
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
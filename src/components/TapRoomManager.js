import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { Button } from "./styles/Button.styled";

class TapRoomManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: "Lazio Lightning",
          brand: "Coastal Cruz",
          price: "14",
          abv: "13.5",
          glassCount: "397",
          id: "1"
        }, 
        {
          name: "Summer Crush",
          brand: "Bros of Beauj",
          price: "15",
          abv: "11.0",
          glassCount: "397",
          id: "2"
        }, 
        {
          name: "Bubbles What",
          brand: "Message in a Bottle",
          price: "11",
          abv: "12.2",
          glassCount: "397",
          id: "3"
        }],
      selectedKeg: null,
      editing: false
    };
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
      this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, 
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({ 
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Back";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = 
          <KegDetail
            keg = {this.state.selectedKeg}
            onClickingDelete = {this.handleDeletingKeg}
            onClickingEdit = {this.handleEditClick} />
        buttonText = "Back";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Back";
      } else {
          currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
          buttonText = "Add Keg";
      }
    return (
      <>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
}

export default TapRoomManager;

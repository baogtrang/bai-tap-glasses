import React, { Component } from 'react';
import './App.css';
import GlassesList from './GlassesList.js';
import DisplayModel from './DisplayModel.js';
import dataGlasses from "./assets/data/dataGlasses.json"

class App extends Component {
  state = {
    //this will hold the currently selected glasses object
    selectedGlasses: null 
  };

  // this function updates the state's selectedGlasses prop with the selected glasses object passed to import PropTypes from 'prop-types'
  // will be triggered when a pair of glasses from the GlassesList is selected
  handleGlassesSelection = (glasses) => {
    this.setState({selectedGlasses: glasses});
  };

  render(){
    return (
      <div className="App">
        <DisplayModel selectedGlasses={this.state.selectedGlasses}/>
        <GlassesList 
          // pass the array of glasses object to GlassesList component
          glassesData = {dataGlasses} 
          selectGlasses = {this.handleGlassesSelection}
        />
      </div>
    )
  };
}

export default App;

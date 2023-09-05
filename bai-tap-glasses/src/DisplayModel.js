// display the glasses on the model's face
import React, { Component } from 'react'

export default class DisplayModel extends Component {
  render() {
    // let {selectedGlasses} = this.props;
    let selectedGlasses = this.props.selectedGlasses;


    return (
        <div className="model-display">
          {/* displaying the model's face */}
          <img className="model-face" src="/glassesImage/model.jpg" alt="img" />

          {/* if there's a selected glasses, show the glasses */}
          {selectedGlasses && (
                <img className="glasses-overlay" src={selectedGlasses.url} alt={selectedGlasses.name} />
          )}
        </div>
    )
  }
}

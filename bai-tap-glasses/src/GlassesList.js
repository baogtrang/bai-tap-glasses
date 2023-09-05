// render the list of glasses options
import React, { Component } from 'react'

export default class GlassesList extends Component {
    
    render() {
        let {glassesData, selectGlasses} = this.props;
        
        return (
                <div className="glasses-list">
                    {/* map để convert */}
                    {/* for eah "glasses" item in the array, this will return */}
                    {/* a new div */}
                    {glassesData.map(glasses => (
                        <div
                            key={glasses.id}
                            className="glasses-option"
                            onClick = {() => selectGlasses(glasses)}
                        >
                            <img src={glasses.url} alt="img" />
                
                        </div>
                    ))}
                </div>  
        );
    }
}

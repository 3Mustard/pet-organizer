import React, { Component } from 'react';
//routes goes in here

//containers & components
import PetsContainer from "../containers/petsContainer";

class App extends Component {
    render() {
        return (
            //add routes here
            <div className="App">
                <p>You're on React!</p>
                <PetsContainer/>
            </div>
        );
    }
}

export default App;
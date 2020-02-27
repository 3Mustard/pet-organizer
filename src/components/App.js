import React, { Component } from 'react';

//containers & components
import PetsContainer from "../containers/petsContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PetsContainer/>
            </div>
        );
    }
}

export default App;
//Dependencies
import React, { Component } from 'react';
//Containers
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
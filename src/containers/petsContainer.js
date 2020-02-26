import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

//fetch function
import {fetchPets} from "../actions/fetchPets";

//components & containers
import PetForm from "../components/petForm";
import Pets from "../components/pets";

class PetsContainer extends Component {

    componentDidMount() {
        this.props.fetchPets();
    }

    render(){
        return (
            <div>
                <p>pet's container</p>
                <PetForm />
                <Pets pets={this.props.pets}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
}

export default connect(mapStateToProps, {fetchPets})(PetsContainer);
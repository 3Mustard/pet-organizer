import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

//fetch function
import {fetchPets} from "../actions/fetchPets";

//components & containers
import PetForm from "../components/petForm";
import Pets from "../components/pets";
import PetCard from "../components/petCard";

class PetsContainer extends Component {

    componentDidMount() {
        this.props.fetchPets();
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route path='/pets/new' component={PetForm}/>
                    <Route path='/pets/:id' render={(routerProps) => <PetCard {...routerProps} pets={this.props.pets}/>}/>
                    <Route path='/pets' render={(routerProps) => <Pets {...routerProps} pets={this.props.pets}/>}/>
                </Switch>
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
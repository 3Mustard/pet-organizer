//dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

//fetch function
import {fetchPets} from "../actions/Fetch/fetchPets";

//components & containers
import PetForm from "../components/Pets/Forms/petForm";
import Pets from "../components/Pets/pets";
import PetCard from "../components/Pets/petCard";
import DeletePet from "../components/Pets/deletePet";
import Toolbar from "../components/ResponsiveNavBar/Toolbar/Toolbar";
import SideDrawer from "../components/ResponsiveNavBar/SideDrawer/SideDrawer";
import Backdrop from "../components/ResponsiveNavBar/BackDrop/BackDrop";

class PetsContainer extends Component {
    state = {sideDrawerVisible: false};

    componentDidMount() {
        this.props.fetchPets();
    }

    drawerToggleClickHandler = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {sideDrawerVisible: !prevState.sideDrawerVisible};
        });
    };

    backdropClickHandler = (e) => {
        e.preventDefault();
        this.setState({sideDrawerVisible: false})
    };

    render(){
        let backDrop;

        if (this.state.sideDrawerVisible) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerVisible}/>
                {backDrop}
                <main className="pets-main" style={{marginTop: '64px'}}>
                    <Switch>
                        <Route path='/pets/new' component={PetForm}/>
                        <Route path='/pets/:id/delete' render={(routerProps) => <DeletePet {...routerProps} />}/>
                        <Route path='/pets/:id' render={(routerProps) => <PetCard {...routerProps}/>} />
                        <Route path='/pets' render={(routerProps) => <Pets {...routerProps} />}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
};

export default connect(mapStateToProps, {fetchPets})(PetsContainer);
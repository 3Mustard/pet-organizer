//dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

//fetch function
import {fetchPets} from "../actions/Fetch/fetchPets";

//components & containers
import About from "../components/Information/About";
import PetForm from "../components/Pets/Forms/petForm";
import Pets from "../components/Pets/pets";
import PetCard from "../components/Pets/petCard";
import DeletePet from "../components/Pets/deletePet";
import Toolbar from "../components/ResponsiveNavBar/Toolbar/Toolbar";
import SideDrawer from "../components/ResponsiveNavBar/SideDrawer/SideDrawer";
import Backdrop from "../components/ResponsiveNavBar/BackDrop/BackDrop";

class App extends Component {
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
            <div className="app-container">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerVisible}/>
                {backDrop}
                <main className="pets-main" >
                    <Switch>
                        <Route path='/pets/new' component={PetForm}/>
                        <Route path='/pets/:id/delete' render={(routerProps) => <DeletePet {...routerProps} />}/>
                        <Route path='/pets/:id' render={(routerProps) => <PetCard {...routerProps}/>} />
                        <Route path='/pets' component={Pets} />}/>
                        <Route exact path='/' component={About} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default connect(null, {fetchPets})(App);

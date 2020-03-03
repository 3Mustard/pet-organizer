import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {deletePet} from "../../actions/Destroy/deletePet";

class DeletePet extends Component {

    state= {
        pet_id: this.props.pet_id
    };

    handleSubmit = (e) => {
        e.preventDefault(); //prevent page reload
        this.props.deletePet(this.state);
    };

    render() {
        return (
            <div onClick={this.handleSubmit} style={{cursor: 'not-allowed'}}>
                <small>- Remove Pet</small>
            </div>
        )
    }
}

export default connect(null, {deletePet})(DeletePet);
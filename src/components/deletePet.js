import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {deletePet} from "../actions/deletePet";

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
            <div>
                <form>
                    <input type='submit' value="Delete Pet" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default connect(null, {deletePet})(DeletePet);
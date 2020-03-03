import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {updateFeeding} from "../../../actions/Update/updateFeeding";

class FeedingForm extends Component {

    state = {
        destination: this.props.pet.id,
        last_fed: '',
        next_feeding: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); //prevent page reload
        this.props.updateFeeding(this.state);
        this.setState({
            last_fed: '',
            next_feeding: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Last Fed On: {this.props.pet.last_fed} </label>
                    <input type="text" placeholder="Update last fed date" name="last_fed" value={this.state.last_fed} onChange={this.handleChange}/> <br/>
                    <label>Next Feeding On: {this.props.pet.next_feeding} </label>
                    <input type="text" placeholder="Update next feeding" name="next_feeding" value={this.state.next_feeding} onChange={this.handleChange}/> <br/> <br/>
                    <input type="submit" value="Change Feeding Dates"/>
                </form>
            </div>
        );
    }
}


export default connect(null, {updateFeeding})(FeedingForm);
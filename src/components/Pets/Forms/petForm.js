import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {addPet} from "../../../actions/Create/addPet";

class PetForm extends Component {

    state = {
        name: '',
        gender: '',
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
        this.props.addPet(this.state); //add new account to db
        this.setState({ //reset state for new form submission
            name: '',
            gender: '',
            last_fed: '',
            next_feeding: ''
        });
        this.props.history.push('/pets');
    }

    render() {
        return (
            <div>
                <form className="pet-form" onSubmit={this.handleSubmit}>
                    <label>Pet Name: </label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/> <br/> <br/>
                    <label>Gender: </label>
                    <input type="text" placeholder="Gender" name="gender" value={this.state.gender} onChange={this.handleChange}/><br/> <br/>
                    <label>Last Fed ("mm-dd-yyy"): </label>
                    <input type="text" placeholder="mm-dd-yyyy" name="last_fed" value={this.state.last_fed} onChange={this.handleChange}/><br/> <br/>
                    <label>Next Feeding ("mm-dd-yyy"): </label>
                    <input type="text" placeholder="mm-dd-yyyy" name="next_feeding" value={this.state.next_feeding} onChange={this.handleChange}/><br/> <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}


export default connect(null, {addPet})(PetForm);
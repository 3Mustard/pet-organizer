import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {addNote} from "../actions/addNote";

class NotesForm extends Component {

    state = {
        pet_id: this.props.pet.id,
        title: '',
        body: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); //prevent page reload
        this.props.addNote(this.state); //add new account to db
        this.setState({ //reset state for new form submission
            pet_id: this.props.pet.id,
            title: '',
            body: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Pet Name: </label>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label>Gender: </label>
                    <input type="text-field" placeholder="Body" name="body" value={this.state.body} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}


export default connect(null, {addNote})(NotesForm);
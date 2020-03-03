import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//functions
import {addNote} from "../../../actions/Create/addNote";

class NotesForm extends Component {

    state = {
        destination: this.props.match.params.id,
        title: '',
        body: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            destination: this.props.match.params.id,
            title: '',
            body: '',
        });
        this.props.history.push(`/pets/${this.state.destination}`);
    };

    render() {
        return (
            <div>
                - <Link to={`/pets/${this.state.destination}`}>Cancel</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label>Note: </label>
                    <input type="text" placeholder="enter notes here.." name="body" value={this.state.body} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}


export default connect(null, {addNote})(NotesForm);
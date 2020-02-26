import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {addNote} from "../actions/addNote";

class NotesForm extends Component {

    render() {
        return (
            <div>
                notes form
            </div>
        );
    }
}


export default connect(null, {addNote})(NotesForm);
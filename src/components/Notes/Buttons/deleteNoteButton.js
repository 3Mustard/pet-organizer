import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {deleteNote} from "../../../actions/Destroy/deleteNote";

class DeleteNoteButton extends Component {

    state = {
        pet_id: this.props.pet_id,
        note_id: this.props.note_id
    };

    handleSubmit = (e) => {
        e.preventDefault(); //prevent page reload
        this.props.deleteNote(this.state);
    };

    render() {
        return (
            <div className="remove-note-button" onClick={this.handleSubmit} style={{cursor: 'not-allowed'}}>
                <small>- Remove Note</small>
            </div>
        )
    }
}

export default connect(null, {deleteNote})(DeleteNoteButton);
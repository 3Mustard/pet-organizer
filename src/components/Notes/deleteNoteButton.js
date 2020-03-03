import React, { Component } from 'react';
import {connect} from 'react-redux';

//functions
import {deleteNote} from "../../actions/Destroy/deleteNote";

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
            <div>
                <form>
                    <input type='submit' value="Delete Note" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default connect(null, {deleteNote})(DeleteNoteButton);
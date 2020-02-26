import React, { Component } from 'react';

import NotesForm from "../components/notesForm";
import Notes from "../components/notes";

//recieves prop: pet
class TransactionsContainer extends Component {

    render() {
        return (
            <div>
                Notes container
                <NotesForm/>
                <Notes notes={this.props.pet && this.props.pet.notes}/>
            </div>
        );
    }
}

export default TransactionsContainer;
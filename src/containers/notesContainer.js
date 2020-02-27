import React, { Component } from 'react';
import {connect} from 'react-redux';

import NotesForm from "../components/notesForm";
import Notes from "../components/notes";

import {fetchNotes} from "../actions/fetchNotes";
import Pets from "../components/pets";
import {Route} from "react-router-dom";

//receives prop: pet
class NotesContainer extends Component {

    componentDidMount() {
        this.props.fetchNotes(this.props.pet.id)
    }

    render() {
        return (
            <div>
                notes container
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, {fetchNotes})(NotesContainer);
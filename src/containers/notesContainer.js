import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';

import NotesForm from "../components/notesForm";
import Notes from "../components/notes";

import {fetchNotes} from "../actions/fetchNotes";
import PetCard from "../components/petCard";

//receives prop: pet
class NotesContainer extends Component {

    componentDidMount() {
        this.props.fetchNotes(this.props.pet.id)
    }

    render() {
        return (
            <div>
                <h2>Notes</h2> - <Link to={`/pets/${this.props.pet.id}/notes/new`}>Add Note</Link>
                <br/>
                <Switch>
                    <Route path='/pets/:id/notes/new' render={(routerProps) => <NotesForm {...routerProps}/>}/>
                    <Route path='/pets/:id' render={(routerProps) => <Notes {...routerProps} notes={this.props.notes}/>}/>
                </Switch>
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
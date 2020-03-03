import React from 'react';

import DeleteNoteButton from "./Buttons/deleteNoteButton";

const Notes = (props) => {
    let notes = props.notes.reverse();
    return (
        <div className="notes-index-div">
            <ul>
            {notes.map(note => {
                if(note){
                    return(
                <li className="note-card" key={note.id}>
                <h5>{note.title}</h5>
                <p>{note.body}</p>
                <DeleteNoteButton note_id={note.id} pet_id={props.pet_id}/>
                </li> )}
            })
        }
            </ul>
        </div>
    )
};

export default Notes;
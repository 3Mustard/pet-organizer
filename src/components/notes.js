import React from 'react';

import DeleteNoteButton from "./deleteNoteButton";

const Notes = (props) => {
    let notes = props.notes.reverse();
    return (
        <div>
            {notes.map(note => {
                if(note){
                    return(
                <li key={note.id}>
                <h5>{note.title}</h5>
                <br/>
                <p>{note.body}</p>
                <DeleteNoteButton note_id={note.id} pet_id={props.pet_id}/>
                </li> )}
            })
        }
        </div>
    )
};

export default Notes;
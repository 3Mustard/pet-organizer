import React from 'react';
import {Link} from "react-router-dom";

const Notes = (props) => {
    let notes = props.notes.reverse();
    return (
        <div>
            {notes.map(note =>
                <li key={note.id}>
                    <h5>{note.title}</h5>
                    <br/>
                    <p>{note.body}</p>
                </li> )}
        </div>
    )
};

export default Notes;
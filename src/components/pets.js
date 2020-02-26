import React from 'react';

//components and containers
import PetCard from "./petCard";
import NotesContainer from "../containers/notesContainer"

const Pets = (props) => {

    return (
        <div>
            {props.pets.map(pet =>
                <li key={pet.id}>
                    <PetCard pet={pet}/>
                    <p>button to view notes</p>
                    <NotesContainer pet={pet} />
                </li> )}
        </div>
    )
};

export default Pets;
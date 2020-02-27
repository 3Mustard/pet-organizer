import React, { Component } from 'react';

import NotesContainer from "../containers/notesContainer";
import FeedingForm from "./FeedingForm";

const PetCard = (props) => {

    let pet = props.pets[props.match.params.id - 1];

    if(pet){
        return (
            <div>
                <p>Name: {pet.name}</p>
                <p>Gender: {pet.gender}</p>
                <FeedingForm pet={pet}/>
                <NotesContainer pet={pet}/>
            </div>
        );
    }else{
        return (
            <div></div>
        )
    }
};

export default PetCard;
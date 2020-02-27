import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NotesContainer from "../containers/notesContainer";
import FeedingForm from "./FeedingForm";

const PetCard = (props) => {

    let pet = props.pets[props.match.params.id - 1];

    if(pet){
        return (
            <div>
                <Link to={`/pets/`}>Back To All Pets</Link>
                <br/>
                <br/>
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
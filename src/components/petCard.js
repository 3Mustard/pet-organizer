import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NotesContainer from "../containers/notesContainer";
import FeedingForm from "./FeedingForm";

const PetCard = (props) => {

    let pet = props.pets[props.match.params.id - 1];

    if(pet){
        return (
            <div class="card-body">
                <p>Name: {pet.name}</p>
                <p>Gender: {pet.gender}</p>
                <FeedingForm pet={pet}/> <br/>
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
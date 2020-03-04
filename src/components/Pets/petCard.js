import React from 'react';
import {connect} from "react-redux";

import NotesContainer from "../../containers/notesContainer";
import FeedingForm from "./Forms/FeedingForm";

const PetCard = (props) => {
    const id = props.match.params.id;
    let pet = props.pets.find(pet=>pet.id === parseInt(id,10));

    if(pet){
        return (
            <div className="pet-card">
                <p>Name: {pet.name}</p>
                <p>Gender: {pet.gender}</p>
                <FeedingForm pet={pet}/> <br/>
                <NotesContainer pet={pet}/>
            </div>
        );
    }else{
        return (
            null
        )
    }
};

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
};

export default connect(mapStateToProps)(PetCard);

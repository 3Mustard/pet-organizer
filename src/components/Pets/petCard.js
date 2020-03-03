import React from 'react';
import {connect} from "react-redux";

import NotesContainer from "../../containers/notesContainer";
import FeedingForm from "./Forms/FeedingForm";

const PetCard = (props) => {

    let pet = props.pets[props.match.params.id - 1];

    if(pet){
        return (
            <div>
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

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
}

export default connect(mapStateToProps)(PetCard);

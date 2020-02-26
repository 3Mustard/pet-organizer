import React from 'react';

const PetCard = (props) => {

    let pet = props.pet;

    return (
        <div>
            <p>Name: {pet.name}</p>
            <p>Gender: {pet.gender}</p>
            <p>Last Ate On: {pet.last_fed}</p>
            <p>Next Feeding On: {pet.next_feeding}</p>
            <p>button to edit feeding details</p>
        </div>
    );
};

export default PetCard;
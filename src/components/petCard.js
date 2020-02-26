import React from 'react';

const PetCard = (props) => {

    let pet = props.pet;

    return (
        <div>
            <h2>
                {pet.name}
            </h2>
        </div>
    );
}

export default PetCard;
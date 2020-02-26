import React from 'react';

//components and containers
import PetCard from "./petCard";

const Pets = (props) => {

    return (
        <div>
            {props.pets.map(pet =>
                <li key={pet.id}>
                    <PetCard pet={pet}/>
                </li> )}
        </div>
    )
};

export default Pets;
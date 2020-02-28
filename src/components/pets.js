import React from 'react';
import {Route, Link} from 'react-router-dom';
import DeletePet from "./deletePet";

const Pets = (props) => {

    return (
        <div>
            <Link to={'/pets/new'}>Add a Pet</Link>
            <h3>Pets:</h3>
            {props.pets.map(pet => {
                if (pet) {
                    return (
                        <li key={pet.id}>
                            <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                            <DeletePet pet_id={pet.id}/>
                        </li>
                    )}
            })
            }
        </div>
    )
};

export default Pets;
import React from 'react';
import {Route, Link} from 'react-router-dom';

const Pets = (props) => {

    return (
        <div>
            {props.pets.map(pet =>
                <li key={pet.id}>
                    <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                </li> )}
        </div>
    )
};

export default Pets;
//dependencies
import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from "react-redux";
//components
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

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
};

export default connect(mapStateToProps)(Pets);
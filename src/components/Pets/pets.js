//dependencies
import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from "react-redux";
//components
import DeletePet from "./deletePet";

const Pets = (props) => {

    return (
        <div className="pets-index-div">
            <h2><u>Pets</u></h2>
            <Link to={`/pets/new`} style={{cursor: 'cell'}}><small>- Add New Pet</small></Link>
            <ul className="pets-index-ul">
            {props.pets.map(pet => {
                if (pet) {
                    return (
                        <li key={pet.id}>
                            <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                            <DeletePet pet_id={pet.id}/><br/>
                        </li>
                    )}
            })
            }
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
};

export default connect(mapStateToProps)(Pets);
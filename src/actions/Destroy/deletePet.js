export const deletePet = (data) => {
    //access to dispatch function from thunk
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pets/${data.pet_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(petID => dispatch({type: 'DELETE_PET', payload: petID}));
    };
};
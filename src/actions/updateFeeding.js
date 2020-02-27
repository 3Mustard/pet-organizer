export const updateFeeding = (data) => {
    //access to dispatch function from thunk
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pets/${data.destination}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(pet => dispatch({type: 'UPDATE_PET', payload: pet}));
    };
};
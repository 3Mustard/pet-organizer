export const addNote = (data) => {
    //access to dispatch function from thunk
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pets', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(pet => dispatch({type: 'ADD_PET', payload: pet}));
    };
}
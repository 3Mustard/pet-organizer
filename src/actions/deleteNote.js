export const deleteNote = (data) => {
    //access to dispatch function from thunk
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pets/${data.pet_id}/notes/${data.note_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(noteID => dispatch({type: 'DELETE_NOTE', payload: noteID}));
    };
};
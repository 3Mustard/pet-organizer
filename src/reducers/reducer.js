export default function reducer(state = {pets: [], notes: []}, action){
    switch(action.type) {
        case 'FETCH_PETS':
            return {...state, pets: action.payload};
        case 'FETCH_NOTES':
            return {...state, notes: action.payload};
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.payload]};
        case 'ADD_NOTE':
            return  {...state, notes: [...state.notes, action.payload]};
        case 'DELETE_NOTE':
            let notes = state.notes.map(note => {
                if (note && note.id !== action.payload) {
                    return note;
                }});
            return {...state, notes: notes};
        case 'UPDATE_PET':
            let pets2 = state.pets.map(pet => {
               if (pet.id === action.payload.id) {
                   return action.payload
               }else{
                   return pet
               }});
            return {...state, pets: pets2};
        default:
            return state;
    }
};
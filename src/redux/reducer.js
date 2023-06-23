import { ADD_FAV, REMOVE_FAV} from './actions-types'
const initialState = {
    myFavorites: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case REMOVE_FAV:
            return { 
                ...state, myFavorites: payload 
            };
        case ADD_FAV:
            return { 
                ...state, myFavorites: payload, allCharacters: payload 
            };
        default:
            return {... state}
    }
};

export default rootReducer;
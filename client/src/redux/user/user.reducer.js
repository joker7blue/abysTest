import userActionsType from "./user.actionsType";

const initialState = {

    currentUser: null
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case userActionsType.SET_CURRENT_USER:
            
            return { ...state, currentUser: action.payload }
    
        default:
            return state;
    }
}

export default userReducer;
import userActionsType from "./user.actionsType"


export const setCurrentUser = (user) => ({

    type: userActionsType.SET_CURRENT_USER,
    payload: user
})
export const initialState = {
    name: "Ahmed",
    age: 21
}

export type actionType = {
    type: "CHANGE_NAME",
    payload: string,
} | {
    type: "UPDATE_AGE",
    payload: number,
}

export const Reducer = (state: typeof initialState, action: actionType) => {
    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.payload
        }
    }
    if (action.type === "UPDATE_AGE") {
        return {
            ...state,
            age: action.payload
        }
    }
    return state
}
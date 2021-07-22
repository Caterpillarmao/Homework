import { ADDING } from "./action"

const initialstate= []

export default function appReducer(state = initialstate, action) {
    switch (action.type) {
        case (ADDING): 
            let newState = JSON.parse(JSON.stringify(state));
            return [...newState.push(action.value)]
        default:
            return state
    }
}
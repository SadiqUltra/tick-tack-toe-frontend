import { combineReducers } from 'redux'
import {ADD_STEP, RETRIEVE_ALL_STEPS, RETRIEVE_LOGS} from "../constants";


const initStepState = {
    steps: []
}

const initLogState = {
    logs: []
}

function steps(state = initStepState, action){
    switch (action.type) {
        case RETRIEVE_ALL_STEPS:
            return {
                ...state,
                steps: action.steps,
            }
        case ADD_STEP:
            return {
                ...state,
                steps: state.steps.concat(action.step)
            }
        default:
            return state
    }
}

function logs(state = initLogState, action){
    // switch (action.type) {
    //     case RETRIEVE_LOGS:
            return {
                ...state,
                logs: action.logs,
            }
    //     default:
    //         return state
    // }
}

export default combineReducers({
    steps,
    logs,
})
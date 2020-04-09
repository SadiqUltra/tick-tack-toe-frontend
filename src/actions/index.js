import {ADD_STEP, RETRIEVE_ALL_STEPS, RETRIEVE_LOGS} from "../constants";
import {getAllLogs, getAllSteps, insertStep} from "../GraphQL";

export function addStep (key, message, c,r, xo, step_no){
    return {
        type: ADD_STEP,
        step: {
            key,
            message,
            c, r,
            xo,
            step_no
        }
    }
}

export function retrieveAllStep (steps){
    return {
        type: RETRIEVE_ALL_STEPS,
        steps
    }
}

export function retrieveLogs (logs){
    return {
        type: RETRIEVE_LOGS,
        logs
    }
}


// all steps
export function bootSteps(key) {

    return function (dispatch) {

        return getAllSteps(key)
            .then(json => dispatch(retrieveAllStep(json)) )
    }
}

// all logs
export function bootLogs(key) {

    return function (dispatch) {

        return getAllLogs(key)
            .then(json => dispatch(retrieveLogs(json)) )
    }
}

// add post
export function pushStep(key, message, c,r, xo, step_no) {
    return function (dispatch){
        return insertStep(key, message, c,r, xo, step_no).then(json => {
            dispatch(addStep(key, message, c,r, xo, step_no))
            getAllLogs(key)
                .then(json => dispatch(retrieveLogs(json)) )
        } )
    }
}
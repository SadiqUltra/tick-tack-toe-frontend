import {ADD_STEP, RETRIEVE_ALL_STEPS, RETRIEVE_LOGS} from "../constants";

export function addStep ({ key, message, c,r, xo, step_no }){
    return {
        type: ADD_STEP,
        key,
        message,
        c, r,
        xo,
        step_no
    }
}

export function retrieveAllStep ({ steps }){
    return {
        type: RETRIEVE_ALL_STEPS,
        steps
    }
}

export function retrieveLogs ({ logs }){
    return {
        type: RETRIEVE_LOGS,
        logs
    }
}
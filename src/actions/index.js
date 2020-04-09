export const ADD_STEP = 'ADD_STEP'
export const RETRIEVE_ALL_STEPS = 'RETRIEVE_ALL_STEPS'
export const RETRIEVE_LOGS = 'RETRIEVE_LOGS'

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
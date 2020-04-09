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
                board: stepsToBoard(action.steps)
            }
        case ADD_STEP:
            return {
                ...state,
                steps: state.steps.concat(action.step),
                board: addStepToBoard(action.step, state.board)
            }
        default:
            return state
    }
}

function logs(state = initLogState, action){
    switch (action.type) {
        case RETRIEVE_LOGS:
            return {
                ...state,
                logs: action.logs,
            }
        default:
            return state
    }
}

function stepsToBoard(steps) {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    steps.map(step => {
        board[step.c][step.r] = step.xo
    })
    // console.debug(board)
    return board
}

function addStepToBoard(step, board) {
    console.debug(step)
    console.debug(board)
    board[step.c][step.r] = step.xo
    return board
}

export default combineReducers({
    steps,
    logs,
})
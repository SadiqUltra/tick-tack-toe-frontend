import {x,o} from "./constants"
/*

[
    [x,  o,    ""],
    [x,  o,    ""],
    [x,  "", ""],
]


[
    [x,  o,    ""],
    [o,  o,    o],
    [x,  "",    x],
]


[
    [x,     x,    x],
    [x,     o,    ""],
    ["",  "", o],
]

[
    [x,  o,    o],
    [x,  o,    ""],
    [o,  "", ""],
]


[
    [x,  o,    o],
    [x,  x,    ""],
    [o,  "", x],
]

 */

// returns false/"x"/"o"
export const checkWin = (board) => {

    for (let i = 0; i < 3; i++){
        // console.log(i, ':', board[i])
        //row
        // checking if "x"/"o" placed
        if (board[i][0] !== "" & board[i][1] !== "" & board[i][2] !== ""){
            // console.log('Not ""', board[i][0], board[i][1], board[i][2])

            if (board[i][0] ===  board[i][1] && board[i][1] === board[i][2]){
                // returns winner "x"/"o"
                return board[i][0];
            }
        }

        //column
        // checking if "x"/"o" placed
        if (board[0][i] !== "" & board[1][i] !== "" & board[2][i] !== ""){
            // console.log('Not ""', board[0][i], board[1][i], board[2][i])

            if (board[0][i] ===  board[1][i] && board[1][i] === board[2][i]){
                // returns winner "x"/"o"
                return board[0][i];
            }
        }

    }

    // cross match 1
    if (board[0][0] ===  board[1][1] && board[1][1] === board[2][2]){
        // returns winner "x"/"o"
        return board[0][0];
    }

    // cross match 2
    if (board[0][2] ===  board[1][1] && board[1][1] === board[2][0]){
        // returns winner "x"/"o"
        return board[0][2];
    }

    return false
}

export const checkWinBeforePush = (board, c,r, xo) => {
    board[c][r] = xo
    return checkWin(board)
}


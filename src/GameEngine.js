import {x,o} from "../constants"
/*

[
    [x,  o,    null],
    [x,  o,    null],
    [x,  null, null],
]


[
    [x,  o,    null],
    [o,  o,    o],
    [x,  null,    x],
]


[
    [x,     x,    x],
    [x,     o,    null],
    [null,  null, o],
]

[
    [x,  o,    o],
    [x,  o,    null],
    [o,  null, null],
]


[
    [x,  o,    o],
    [x,  x,    null],
    [o,  null, x],
]

 */

// returns false/"x"/"o"
let checkWin = (board) => {

    for (let i = 0; i < 3; i++){
        // console.log(i, ':', board[i])
        //row
        // checking if "x"/"o" placed
        if (board[i][0] !== null & board[i][1] !== null & board[i][2] !== null){
            // console.log('Not Null', board[i][0], board[i][1], board[i][2])

            if (board[i][0] ===  board[i][1] && board[i][1] === board[i][2]){
                // returns winner "x"/"o"
                return board[i][0];
            }
        }

        //column
        // checking if "x"/"o" placed
        if (board[0][i] !== null & board[1][i] !== null & board[2][i] !== null){
            // console.log('Not Null', board[0][i], board[1][i], board[2][i])

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


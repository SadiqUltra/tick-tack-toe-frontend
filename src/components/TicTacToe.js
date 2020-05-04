import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { bootSteps, bootLogs, pushStep } from './../actions'
import {getSessionKey, resetSessionKey} from "../utils";
import {checkWin, checkWinBeforePush} from "../GameEngine";
import LogText from "./LogText";


let SESSION_KEY = getSessionKey()

class TicTacToe extends Component {

    state = {
        isWin: false,
        isDraw: false
    }

    componentDidMount(){
        this.props.bootSteps(SESSION_KEY)
        this.props.bootLogs(SESSION_KEY)
    }

    boardCRPressed(c,r){
        if (this.state.isWin !== false) return

        if (this.props.board[c][r] === ""){
            const step_no = this.props.steps.length + 1
            const xo = step_no % 2 === 1 ? "X" : "O"

            let message = "Player "+ (2 - step_no % 2 ) + " put " + xo + " on column:" + (c+1) + ", row:" + (r+1)
            // check is win
            if (step_no >= 5) {
                const isWin = checkWinBeforePush(this.props.board, c, r, xo)

                if (isWin){
                    message = "Player "+ (2 - step_no % 2 ) + " Won(!) The Game by putting " + xo + " on column:" + (c+1) + ", row:" + (r+1)
                    this.setState({ isWin })
                }else if (step_no >= 9){
                    message = "MATCH DRAW! Player "+ (2 - step_no % 2 ) + " put " + xo + " on column:" + (c+1) + ", row:" + (r+1)
                    this.setState({ isDraw: true })
                }
            }

            this.props.pushStep(SESSION_KEY, message, c,r, xo, step_no)
        }
    }


    resetBoard() {
        SESSION_KEY = resetSessionKey()
        this.setState({
            isWin: false ,
            isDraw: false
        })

        this.props.bootSteps(SESSION_KEY)
        this.props.bootLogs(SESSION_KEY)
    }

    render(){

        return (
            <div className="TicTacToe">
                <header className="TicTacToe-header">
                    <button
                        type="button"
                        onClick={(e)=> this.resetBoard()}
                    >Reset</button>
                    <div>Player 1: X, Player 2: O</div>

                    {this.state.isWin &&
                        <p>Player &nbsp;
                            {this.props.board && this.props.steps.length % 2 === 1 && (1)}
                            {this.props.board && this.props.steps.length % 2 !== 1 && (2)} Won the Game!
                        </p>
                    }
                    {this.state.isDraw &&
                        <p>Match Draw!</p>
                    }

                    {this.state.isWin === false && this.state.isDraw === false &&
                        < p > Player &nbsp;
                        {this.props.board && this.props.steps.length % 2 === 0 && (1)}
                        {this.props.board && this.props.steps.length % 2 !== 0 && (2)}
                        's turn</p>
                    }

                    <div className="Board">
                        {this.props.board && this.props.board.map((boardColumn, i) =>
                            <div key={i} className="Board-Column" >
                                {boardColumn.map((boardRow, j) =>
                                    <div
                                        key={j}
                                        className="Board-Row"
                                        onClick={(e)=> this.boardCRPressed(i,j)}
                                    >{this.props.board[i][j]}</div>
                                )}
                            </div>
                        )}
                    </div>

                    <LogText logs={this.props.logs} />
            </header>
        </div>
        )
    }
}

function mapStateToProps ({ steps, logs }) {
    console.debug(logs, steps)
    return {
        steps: steps.steps,
        logs: logs.logs,
        board: steps.board
    }
}

function mapDispatchToProps (dispatch) {
    return {
        bootSteps: (key) => dispatch(bootSteps(key)),
        bootLogs: (key) => dispatch(bootLogs(key)),
        pushStep: (key, message, c,r, xo, step_no) => dispatch(pushStep(key, message, c,r, xo, step_no)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicTacToe)
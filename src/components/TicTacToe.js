import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { bootSteps, bootLogs, pushStep } from './../actions'
import {SESSION_KEY} from "../constants";


class TicTacToe extends Component {


    componentDidMount(){
        this.props.bootSteps(SESSION_KEY)
        this.props.bootLogs(SESSION_KEY)
    }

    boardCRPressed(c,r){
        if (this.props.board[c][r] === ""){
            const step_no = this.props.steps.length + 1
            const xo = step_no % 2 === 1 ? "X" : "O"
            this.props.pushStep(SESSION_KEY, `message: ${c},${r},${xo}`, c,r, xo, step_no)
        }
    }

    render(){

        return (
            <div className="TicTacToe">
                <header className="TicTacToe-header">
                    <div>Player 1: X, Player 2: O</div>
                    <p>Player &nbsp;
                         {this.props.board && this.props.board.length % 2 === 0 && (1)}
                         {this.props.board && this.props.board.length % 2 !== 0 && (2)}
                        's turn</p>
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

                    <p className='Logs-Text'>Log Text</p>
                    <div className="Logs">

                        {this.props.logs && this.props.logs.map((log,key) =>{
                                return (
                                    <div key={key} className='Logs-Text'>{log.message}</div>
                                )
                            }
                        )}
                    </div>
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
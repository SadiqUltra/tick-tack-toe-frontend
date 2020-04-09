import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { bootSteps, bootLogs, pushStep } from './../actions'
import {SESSION_KEY} from "../constants";


class TicTacToe extends Component {

    state = {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    componentDidMount(){
        this.props.bootSteps(SESSION_KEY)
        this.props.bootLogs(SESSION_KEY)

        console.debug(this.state.board)
    }

    render(){

        return (
            <div className="TicTacToe">
                <header className="TicTacToe-header">
                    <div>Player 1: X, Player 2: O</div>
                    <p>Player 1's turn</p>
                    <div className="Board">
                        {this.state.board.map((boardColumn, i) =>
                            <div key={i} className="Board-Column" >
                                {boardColumn.map((boardRow, j) =>
                                    <div
                                        key={j}
                                        className="Board-Row"
                                        onClick={(e)=> console.log(e)}
                                    >{j +''+ i}</div>
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
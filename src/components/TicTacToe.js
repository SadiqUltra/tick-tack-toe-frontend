import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { bootSteps, bootLogs, pushStep } from './../actions'


class TicTacToe extends Component {

    componentDidMount(){
        this.props.bootSteps('23f23f23f23f23f3ff32f23f23f23f23f23f2f323f')
        this.props.bootLogs('23f23f23f23f23f3ff32f23f23f23f23f23f2f323f')
    }

    render(){

        return (
            <div className="TicTacToe">
                <header className="TicTacToe-header">
                    <div>Player 1: X, Player 2: O</div>
                    <p>Player 1's turn</p>
                    <div className="Board">
                        <div className="Board-Column" >
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                        </div>
                        <div className="Board-Column" >
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                        </div>
                        <div className="Board-Column" >
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                            <div className="Board-Row">X</div>
                        </div>
                    </div>

                    <p className='Logs-Text'>Log Text</p>
                    <div className="Logs">
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>
                        <div className='Logs-Text'>Log Text</div>

                    </div>
            </header>
        </div>
        )
    }
}

function mapStateToProps ({ steps, logs }) {
    return {
        steps,
        logs,
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
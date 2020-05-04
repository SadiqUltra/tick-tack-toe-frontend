import * as React from "react";

export default class LogText extends React.Component{
    render() {
        return (
            <div>
                <p className='Logs-Text'>Log Text</p>
                <div className="Logs">

                    {this.props.logs && this.props.logs.reverse().map((log,key) =>{
                            return (
                                <div key={key} className='Logs-Text'>{log.message}</div>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}
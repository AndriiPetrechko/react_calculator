import React, { Component } from 'react';
import './output.css';

export default class Output extends Component {
    render() {
        return (
            <div className="result__field">
                <p> {this.props.result} </p>
            </div>
        )
    }
}

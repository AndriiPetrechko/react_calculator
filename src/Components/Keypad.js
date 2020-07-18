import React, { Component } from 'react';
import keypad from './keypad.css';

export default class Keypad extends Component {
    buttonPresed = e => {
        this.props.buttonPresed(e.target.name);
    }
    render() {
        return (
            <div className="key__group">
                <div className="key_group__item">
                    <button name="C" onClick={this.props.reset}> C </button>
                    <button name="CE" onClick={this.buttonPresed}> CE </button>
                    <button name="(" onClick={this.buttonPresed}> ( </button>
                    <button name=")" onClick={this.buttonPresed}> ) </button>
                </div>
                <div className="key_group__item">
                    <button name="7" onClick={this.buttonPresed}> 7 </button>
                    <button name="8" onClick={this.buttonPresed}> 8 </button>
                    <button name="9" onClick={this.buttonPresed}> 9 </button>
                    <button name="+" onClick={this.buttonPresed}> + </button>
                </div>
                <div className="key_group__item">
                    <button name="4" onClick={this.buttonPresed}> 4 </button>
                    <button name="5" onClick={this.buttonPresed}> 5 </button>
                    <button name="6" onClick={this.buttonPresed}> 6 </button>
                    <button name="-" onClick={this.buttonPresed}> - </button>
                </div>
                <div className="key_group__item">
                    <button name="1" onClick={this.buttonPresed}> 1 </button>
                    <button name="2" onClick={this.buttonPresed}> 2 </button>
                    <button name="3" onClick={this.buttonPresed}> 3 </button>
                    <button name="*" onClick={this.buttonPresed}> * </button>
                </div>
                <div className="key_group__item">
                    <button name="**2" onClick={this.buttonPresed}> ^2 </button>
                    <button name="=" onClick={this.buttonPresed}> = </button>
                    <button name="." onClick={this.buttonPresed}> . </button>
                    <button name="/" onClick={this.buttonPresed}> / </button>
                </div>

            </div>
        )
    }
}

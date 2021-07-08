import React, {Component} from 'react';
import TIMER1 from './Timer1';

export default class APP1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10
        }
    }
    render() {
        return(
            <div className="APP">
                <TIMER1 number={this.state.number}/>
            </div>
        );
    }
}
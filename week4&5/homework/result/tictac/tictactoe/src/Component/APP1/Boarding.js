import React, {Component} from"react";
import "./APP1.css";
import { FaTimes } from 'react-icons/fa';
import { BiCircle } from 'react-icons/bi';


export default class BOARDING extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        console.log("reach here")
    }
    render() {
        return(
            <div className='board'>
                {this.props.board.map((res, index1) => {
                    return res.map((res2, index2) => {
                        // console.log("reach here: "+res2);
                        if (res2 === 1) {
                            return (
                                <button key={index1*10+index2} disabled={this.props.shouldEnd} className='block' onClick={() => this.props.updating(index1*10+index2)}>
                                    <BiCircle/>
                                </button>
                            );
                        }
                        else if (res2 === 2) {
                            return (
                                <button key={index1*10+index2} disabled={this.props.shouldEnd} className='block' onClick={() => this.props.updating(index1*10+index2)}>
                                    <FaTimes/>
                                </button>
                            );
                        }
                        else {
                            return (
                                <button key={index1*10+index2} disabled={this.props.shouldEnd} className='block' onClick={() => this.props.updating(index1*10+index2)}>
                                </button>
                            );
                        }
                    });
                })}
            </div>
        );
    }
}
import React, {Component} from 'react';

export default class TIMER1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: props.number,
            shouldStop: false
        }
    }
    
    timeout = () =>{
        // console.log("now the number is " + this.state.currentNumber+ " and the shouldStop is: " + this.state.shouldStop)
        if (this.state.shouldStop || this.state.currentNumber<=0) {
            // console.log("should stop")
            return;
        }
        
        setTimeout(() => {
            this.setState((preState,preprops)=>{
                return {currentNumber: preState.currentNumber - 1}
            });
            this.timeout();
        }, 1000);
    }

    componentDidMount() {
        this.timeout();
    }
    render(){
        return(
            <div>
                <p>{this.state.currentNumber}</p>
                <button className='stop-button' onClick={()=>{
                    this.setState({shouldStop: true});
                }}>Stop Timer</button>
            </div>
        );
    }
}
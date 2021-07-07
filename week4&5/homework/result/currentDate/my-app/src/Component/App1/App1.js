import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./App1.css";

export default class APP1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            CurrentDay: "",
            CurrentMonth: "",
            CurrentYear: ""
        }
    }

    handleClick = () => {
        let currentTime = new Date();
        this.setState({
            CurrentDay: currentTime.getDay(),
            CurrentMonth: currentTime.getMonth(),
            CurrentYear: currentTime.getFullYear()
        })
        console.log("today is : " + currentTime.getFullYear() + "/" + currentTime.getMonth() + "/" + currentTime.getDay())
    }

    componentDidMount() {

    }
    render() {
        return(
            <div className="App">
                <div className="App-title">
                    <span>Date API</span>
                </div>
                <div className="APP-button">
                    <button onClick={this.handleClick}>DISPLAY DATE</button>
                </div>
                <Card className="APP-result">
                    <CardContent>
                    <Typography className="result-text" variant="body1" component="p">
                        Day: {this.state.CurrentDay}
                    </Typography>
                    <Typography className="result-text" variant="body1" component="p">
                        Month: {this.state.CurrentMonth}
                    </Typography>
                    <Typography className="result-text" variant="body1" component="p">
                        Year: {this.state.CurrentYear}
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
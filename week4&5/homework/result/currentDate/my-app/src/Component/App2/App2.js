import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./App2.css";

export default function APP2() {
    const [CurrentDay, setCurrentDay] = useState("");
    const [CurrentMonth, setCurrentMonth] = useState("");
    const [CurrentYear, setCurrentYear] = useState("");

    const handleClick = () => {
        let currentTime = new Date();
        setCurrentDay(currentTime.getDay());
        setCurrentMonth(currentTime.getMonth());
        setCurrentYear(currentTime.getFullYear());
    }

    return(
        <div className="App">
                <div className="App-title">
                    <span>Date API</span>
                </div>
                <div className="APP-button">
                    <button onClick={handleClick}>DISPLAY DATE</button>
                </div>
                <Card className="APP-result">
                    <CardContent>
                    <Typography className="result-text" variant="body1" component="p">
                        Day: {CurrentDay}
                    </Typography>
                    <Typography className="result-text" variant="body1" component="p">
                        Month: {CurrentMonth}
                    </Typography>
                    <Typography className="result-text" variant="body1" component="p">
                        Year: {CurrentYear}
                    </Typography>
                    </CardContent>
                </Card>
            </div>
    );
}
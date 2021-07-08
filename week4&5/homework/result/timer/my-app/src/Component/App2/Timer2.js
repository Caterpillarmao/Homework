import React, {useState, useEffect} from 'react';

export default function TIMER2(props) {
    const [currentNumber,setCurrentNumber] = useState(props.number);
    const [shouldStop,setShouldStop] = useState(false);

    // const timeout = () => {
    //     console.log("now the current number is: "+currentNumber)
    //     if (shouldStop || currentNumber<=0) {
    //         console.log("should stop")
    //         return clearTimeout(timer);
    //     }
    //     const timer = setTimeout(() => {
    //         setCurrentNumber(currentNumber-1);
    //         console.log("after minus 1, the number is: "+currentNumber)
    //         timeout();
    //     }, 1000);
    // }
    useEffect(()=>{
        if (shouldStop || currentNumber<=0) {
            return;
        }
        setTimeout(() => {
            setCurrentNumber(currentNumber-1);
        }, 1000);
    })
    return(
        <div>
            <p>{currentNumber}</p>
            <button className='stop-button' onClick={()=>{
                setShouldStop(true);
            }}>Stop Timer</button>
        </div>
    );
}
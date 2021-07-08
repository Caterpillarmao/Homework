import React, {useState} from "react";
import TIMER2 from "./Timer2";

export default function APP2 (){
    const [number, setNumber] = useState(11);

    

    return(
        <div className="APP">
            <TIMER2 number={number}/>
        </div>
    );
}
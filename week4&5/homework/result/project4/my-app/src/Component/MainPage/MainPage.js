import React, {useState, useEffect} from "react";
import "./MainPage.css";
import Controller from "../assist/Controller";
import TABLE from "../assist/table";

export default function MAINPAGE(){
    const [allData, setalldata] = useState([]);
    
    const submitCurrent = (data) => {
        // console.log('reach here')
        console.log("all data type is: " + allData,data)
       // let curD = JSON.parse(JSON.stringify(allData))
       // console.log("curD type is: "+curD)
        allData.push(data);
        console.log(allData);
        setalldata([...allData]);
        // console.log("now the action is: " + data.action)
        // console.log("now the symbol is: " + data.Symbol)
        // console.log("now the order type is: " + data.OrderType)
        // console.log("now the tif is: " + data.TIF)
    }

    const submitAll = () => {

    }
    
    return(
        <div className="body">
            <div className="header">
                <span>EXD Trader</span>
                <span>Order Entry</span>
            </div>
            <div className="controller">
                <Controller submition={submitCurrent}></Controller>
            </div>
            <div className="title">
                <span>Order Blotter</span>
                <span>Last Updated:</span>
            </div>
            <div className="table">
                <TABLE alldata2={allData}></TABLE>
            </div>
        </div>
    );
}
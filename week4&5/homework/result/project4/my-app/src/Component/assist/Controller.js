import React,{ useState } from'react';
import { useaform } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

const useStyle = makeStyles(theme => ({
    root:{
        display: "grid",
        height: "100%",
        gridTemplateRows: "179px auto"

    },
    allblock: {
        position:"relative",
        backgroundColor: "yellow",
        border: "solid black 1px"
    },
    actiontitle:{
        top: "23px",
        left: "15px",
        position: "absolute",
        backgroundColor:"yellow",
    },
    symboltitle:{
        top: "23px",
        left: "15px",
        position: "absolute",
        backgroundColor:"yellow",
    },
    ordertitle: {
        position:"absolute",
        left: "15px",
    },
    tiftitle: {
        position: 'absolute',
        left:"15px",
    },
    tifBlock:{
        marginTop: "23px",
        marginLeft:"17px",
        width: 500,
        height: "86px",
        backgroundColor:"yellow",
    },
    actionSelect: {
        position: "absolute",
        bottom: "18px",
        left: "15px",
        width: "128px",
        height: "37px",

    },
    symbolbox: {
        position: "absolute",
        bottom: "18px",
        left: "15px"
    },
    orderSelect: {
        position: "absolute",
        top: "31px",
        left: "15px",
        width: "128px",
        height: "37px"
    },
    tifSelect: {
        position: "absolute",
        top: "31px",
        left: "15px",
        width: "128px",
        height: "37px"
    },
    commentbox: {
        postion:"relative",
        backgroundColor: "green"
    },
    commentcontent: {
        position:" absolute",
        top: "17px",
        width: "385px",
        height: "155px",
        left: "15px",
        border: "1px solid black"
    },
    submitBox: {
        position: "relative"
    },
    submitButton: {
        position: "absolute",
        width: "167px",
        height: "35px",
        left: "180px",
        top: "102px"
    }
    
}));

const actionList = [
    {
        label: "Buy"
    },
    {
        label: "Sell"
    }
];

const orderList = [
    {
        label: "Market"
    },
    {
        label: "Limit"
    }
];

const tifList = [
    {
        label: "IOC"
    },
    {
        label: "GTC"
    },
    {
        label: "FOK"
    },
]

const initialValue = {
    action: "",
    Symbol: "",
    Qty: 0,
    Price: 0,
    OrderType: "Market",
    TIF: "Day",
    StopPrice: 0,
    Commenttext: ""
}

function Controller(props) {
    const [data, setData] = useState(initialValue);
    const classes = useStyle();
    const actionChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.action=event.target.value;
        setData(newData);
    }
    const symbolChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.Symbol=event.target.value;
        setData(newData);
    }
    const qtyChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.Qty=event.target.value;
        setData(newData);
    }
    const priceChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.Price=event.target.value;
        // console.log("price is: "+event.target.value)
        setData(newData)
    }
    const orderChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.OrderType=event.target.value;
        setData(newData)
    }
    const tifChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.TIF=event.target.value;
        setData(newData)
    }
    const stopPChange = (event) =>{
        let newData = JSON.parse(JSON.stringify(data));
        newData.StopPrice=event.target.value;
        // console.log("stop price is: "+event.target.value)
        setData(newData)
    }
    const commentChange = (event) => {
        let newData = JSON.parse(JSON.stringify(data));
        newData.Commenttext=event.target.value;
        setData(newData)
    }
    const onSubmit = () => {

        // console.log(props.submition);
        // props.submission();
        if (data.action == "") {
            alert("action can't be empty");
        }
        else if (data.Symbol=="") {
            alert("symbol can't be empty");
        }
        else if (data.OrderType=="") {
            alert("pick one for Order Type");
        }
        else if (data.TIF=="Day") {
            alert("Pick one for TIF")
        }
        else {
            setData(initialValue);
            props.submition(data);
        }
    }
    // const []
    return(
        <div className={classes.root}>
            <div className='top-controller'>
                {/* action selector */}
                <div className={classes.allblock}>
                    <span className={classes.actiontitle}>Action: </span>
                    <select 
                    className={classes.actionSelect} 
                    defaultValue=""
                    label="action" 
                    type="text"
                    value={data.action}
                    onChange={actionChange}
                    >
                        <option>All</option>
                        {actionList.map((res,index) => (
                            <option key={index} value={res.label}>
                                {res.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* symbol input */}
                <div className={classes.allblock}>
                    <span className={classes.symboltitle}>Symbol: </span>
                    <input 
                    className={classes.symbolbox} 
                    defaultValue="<Enter Symbol>" 
                    type="text" 
                    onChange={symbolChange}
                    ></input>
                </div>
                {/* Qty number */}
                <div className={classes.allblock}>
                    <span className={classes.actiontitle}>Qty: </span>
                    <TextField 
                    className={classes.actionSelect} 
                    type="number"
                    value={data.Qty}
                    onChange={qtyChange}>
                    </TextField>
                </div>
                {/* price number */}
                <div className={classes.allblock}>
                    <span className={classes.symboltitle}>Price: </span>
                    <TextField 
                    className={classes.symbolbox} 
                    type="number" 
                    value={data.Price}
                    onChange={priceChange}
                    ></TextField>
                </div>
                {/* Order Type selector */}
                <div className={classes.allblock}>
                    <span className={classes.ordertitle}>Order Type: </span>
                    <select 
                    className={classes.orderSelect} 
                    defaultValue="Market" 
                    type="text"
                    value={data.OrderType} 
                    onChange={orderChange}
                    >
                        <option>All</option>
                        {orderList.map((res,index) => (
                            <option key={index} value={res.label}>
                                {res.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* TIF selector */}
                <div className={classes.allblock}>
                    <span className={classes.tiftitle}>TIF: </span>
                    <select 
                    className={classes.tifSelect} 
                    defaultValue="Day" 
                    type="text"
                    value={data.TIF}
                    onChange={tifChange}
                    >
                        <option>All</option>
                        {tifList.map((res, index) => (
                            <option key={index} value={res.label}>
                                {res.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* empty block */}
                <div className={classes.allblock}>
                </div>
                {/* Stop Price number */}
                <div className={classes.allblock}>
                    <span className={classes.tiftitle}>Stop Price: </span>
                    <TextField 
                    className={classes.tifSelect} 
                    type="number"
                    value={data.StopPrice}
                    onChange={stopPChange}
                    >
                    </TextField>
                </div>
            </div>
            <div className='bottom-controller'>
                <div className={classes.commentbox}>
                    <input 
                        id="outlined-adornment"
                        className={classes.commentcontent}
                        onChange={commentChange}
                    ></input>
                </div>
                <div className={classes.submitBox}>
                    <button className={classes.submitButton} onClick={onSubmit}>submit</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        action: state.action,
        Symbol: state.Symbol,
        Qty: state.Qty,
        Price: state.Price,
        OrderType: state.OrderType,
        TIF: state.TIF,
        StopPrice: state.StopPrice,
        Commenttext: state.Commenttext
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Controller)
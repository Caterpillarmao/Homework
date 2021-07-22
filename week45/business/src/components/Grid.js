import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import "antd/dist/antd.css";
import { InputNumber } from "antd";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ResultGrid from "./ResultGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "white",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 0px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const section = {
  height: "100%",
  paddingTop: 5,
  color: "white",
  backgroundColor: "black",
  fontStyle: "normal",
};
const section2 = {
  height: "100%",
  paddingTop: 5,
  color: "white",
  backgroundColor: "black",
  fontStyle: "normal",
};
const section3 = {
  height: "10px",
  paddingTop: 5,
  color: "white",
  backgroundColor: "black",
  fontStyle: "normal",
  float: "right",
  width: "180px",
};
const underline = {
  borderBottom: "2px solid black",
  marginBottom: "1vw",
  marginTop: "3vw",
};

const FullGrid = () => {
  const classes = useStyles();
  const [keyboard] = useState(true);
  const [action, setAction] = useState("");
  const [symbol, setSymbol] = useState("");
  const [orderType, setOrderType] = useState("");
  const [tif, setTif] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [stopPrice, setStopPrice] = useState("");
  const [comment, setComment] = useState("");

  const [data, setData] = useState([]);
  let [count, setCount] = useState(0);
  const handleActionChange = (e) => {
    setAction(e.target.value);
    // setData((data) => [...data], e.target.value);
  };
  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrderType(e.target.value);
  };
  const handleTifChange = (e) => {
    setTif(e.target.value);
  };
  const handleQtyChange = (value) => {
    setQty(value);
  };
  const handlePriceChange = (value) => {
    setPrice(value);
  };
  const handleStopPriceChange = (value) => {
    setStopPrice(value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      action: action,
      symbol: symbol,
      orderType: orderType,
      tif: tif,
      qty: qty,
      price: price,
      stopPrice: stopPrice,
      comment: comment,
    };

    data.push(obj);
    setData([...data]);
    console.log(data[0]);
    setCount((count) => count + 1);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div style={section}>
              EXD Trader&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={section2}>Order Entry</span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.FormControl}>
              <InputLabel htmlFor="demo-customized-select-native">
                Action
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={action}
                onChange={handleActionChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"Buy"}>Buy</option>
                <option value={"Sell"}>Sell</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-textbox">Symbol:</InputLabel>
              <BootstrapInput
                id="demo-customized-textbox"
                value={symbol}
                onChange={handleSymbolChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="demo-customized-select-native"
                style={{ top: `${-25}px` }}
              >
                Qty:
              </InputLabel>
              <InputNumber
                id="demo-customized-textbox1"
                min={1}
                max={200}
                size="medium"
                style={{ top: `${30}px` }}
                value={qty}
                keyboard={keyboard}
                onChange={handleQtyChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="demo-customized-select-native"
                style={{ top: `${-25}px` }}
              >
                Price:
              </InputLabel>
              <InputNumber
                id="demo-customized-textbox2"
                min={1}
                max={110}
                keyboard={keyboard}
                size="medium"
                style={{ top: `${30}px` }}
                value={price}
                onChange={handlePriceChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.FormControl}>
              <InputLabel htmlFor="demo-customized-select-native">
                Order Type:
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={orderType}
                onChange={handleOrderChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"Market"}>Market</option>
                <option value={"Limit"}>Limit</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              className={classes.margin}
              style={{ left: `${-40}px` }}
            >
              <InputLabel htmlFor="demo-customized-select-native">
                TIF:
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={tif}
                onChange={handleTifChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"IOC"}>IOC</option>
                <option value={"GTC"}>GTC</option>
                <option value={"FOK"}>FOK</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="demo-customized-select-native"
                style={{ top: `${-35}px`, left: `${145}px` }}
              >
                Stop Price:
              </InputLabel>
              <InputNumber
                id="demo-customized-textbox3"
                min={1}
                max={150}
                keyboard={keyboard}
                size="medium"
                style={{ top: `${20}px`, left: `${145}px` }}
                value={stopPrice}
                onChange={handleStopPriceChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.margin}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="COMMENT"
                variant="outlined"
                onChange={handleCommentChange}
                style={{ width: `${270}px` }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              className={classes.margin}
              style={{ left: `${150}px`, top: `${80}px` }}
            >
              <Button variant="outlined" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <div style={underline}></div>
        <Grid item xs={12}>
          <div style={section}>
            Order Blotter&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={section3}>Last Updated: 10:27 11PM</span>
          </div>
        </Grid>
        <ResultGrid data={data} count={count} />
      </Container>
    </div>
  );
};

export default FullGrid;

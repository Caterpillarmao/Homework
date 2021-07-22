import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  table: {
    minWidth: 650,
  },
});

export default function ResultGrid(props) {
  const classes = useStyles();
  const { data, count } = props;
  console.log(data);
  console.log(count);
  console.log(data[count - 1]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Order Type</TableCell>
            <TableCell align="right">TIF</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Stop Price</TableCell>
            <TableCell align="right">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data,index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {data.action}
                </TableCell>
                <TableCell align="right">{data.symbol}</TableCell>
                <TableCell align="right">{data.qty}</TableCell>
                <TableCell align="right">{data.orderType}</TableCell>
                <TableCell align="right">{data.tif}</TableCell>
                <TableCell align="right">{data.price}</TableCell>
                <TableCell align="right">{data.stopPrice}</TableCell>
                <TableCell align="right">{data.comment}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

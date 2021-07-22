import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const setStyle = makeStyles(theme => ({
    root: {
        width: "744px",
        height: "442px",
        margin: "auto",
        marginTop: "40px",
        border: "solid 1px black"
    }
}))


export default function TABLE(props) {
    const classes = setStyle();
    const data = props.alldata2;

    return (
        <div className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Order Type</TableCell>
                        <TableCell>TIF</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stop Price</TableCell>
                        <TableCell>Comment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row,index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {row.action}
                        </TableCell>
                        <TableCell>{row.Symbol}</TableCell>
                        <TableCell>{row.Qty}</TableCell>
                        <TableCell>{row.OrderType}</TableCell>
                        <TableCell>{row.TIF}</TableCell>
                        <TableCell>{row.Price}</TableCell>
                        <TableCell>{row.StopPrice}</TableCell>
                        <TableCell>{row.Commenttext}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
}

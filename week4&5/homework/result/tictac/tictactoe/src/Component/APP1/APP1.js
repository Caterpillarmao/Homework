import React, {Component} from 'react';
import BOARDING from './Boarding';

export default class APP1 extends Component {
    constructor(props){
        super(props);
        let boardside= 3;
        let tmpBoard=Array(boardside).fill(Array(boardside).fill(0));
        this.state={
            Round: 1, //1 for o round, 2 for x round
            board: tmpBoard,
            boardsize: boardside,
            curX: -1,
            curY: -1,
            shouldend: false
        }
        console.log("the start board is: " + this.state.board.length);
    }
    updateBoard = (e) => {

        let currentX = e%10;
        let currentY = parseInt(e/10);
        let tmp_board = JSON.parse(JSON.stringify(this.state.board));
        let turn = this.state.Round;
        console.log("current turn is: " + turn);
        console.log("current x is: " + currentX);
        console.log("current y is: " + currentY);
        tmp_board[currentY][currentX] = turn;
        this.setState({curX: currentX, curY: currentY, board: tmp_board});
        // console.log("current x is: " + this.state.curX);
        // console.log("current y is: " + this.state.curY);
        let shouldEnd = this.checkWin(tmp_board,currentX,currentY,turn);
        console.log("after check win: "+shouldEnd)
        if (!shouldEnd) {
            console.log("not end so change turn")
            this.setState({Round: 3-turn});
        }
        else {
            this.setState({shouldend: true})
        }
    }
    checkWin = (tmpboard,currentX,currentY,turn) => {
        if (currentX < 0 || currentY<0) {
            return false;
        }
        let size = this.state.boardsize;
        let checkH = true;
        let checkV = true;
        let checkD = false;
        console.log("reach here " + size);
        for (let i = 0; i < size; i++) {
            console.log("now the turn is: "+turn+ " and tmp is: " + tmpboard[currentY][i] + "from row ")
            if (tmpboard[currentY][i] !== turn) {
                console.log("check herizontal it's false.")
                checkH = false;
                break;
            }
        }
        for (let i = 0; i < size; i++) {
            if (tmpboard[i][currentX] !== turn) {
                console.log("check vertical it's false.")
                checkV = false;
                break;
            }
        }
        if (currentX === currentY) {
            checkD = true;
            for (let i = 0; i < size; i++) {
                if (tmpboard[i][i] !== turn) {
                    checkD = false;
                }
            }
        }
        if (currentX === (2-currentY)){
            checkD = true;
            for (let i = 0; i < size; i++) {
                if (tmpboard[2-i][i] !== turn) {
                    checkD = false;
                }
            }
        }
        return checkV || checkD || checkH;

    }
    restart = () => {
        console.log("reach here")
        let boardsize = this.state.boardsize;
        let tmpBoard=Array(boardsize).fill(Array(boardsize).fill(0));
        let temp = JSON.parse(JSON.stringify({
            Round: 1, //1 for o round, 2 for x round
            board: tmpBoard,
            boardsize: boardsize,
            curX: -1,
            curY: -1,
            shouldend: false
        }));
        console.log("temp",temp);
        this.setState(temp);
        
    }

    render() {
        const tmp_board = this.state.board;
        console.log("tmp_board",tmp_board);
        return(
            <div className="APP">
                <div className="main-area">
                    <div className="main-title">Tic Tac Toe Game</div>
                    <div className="detail">
                        now is {this.state.Round} turn
                        {this.state.shouldend === false? (
                            <div></div>
                        ):(
                            <div>
                                {this.state.Round} win
                            </div>
                        )}
                        <button onClick={this.restart}>Play Again</button>
                    </div>
                    <div className="main-board">
                        <BOARDING className='board-prop' board={tmp_board} updating={this.updateBoard} shouldEnd={this.state.shouldend}></BOARDING>
                    </div>
                </div>
            </div>
        );
    };

}
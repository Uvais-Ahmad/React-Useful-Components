import React, { useEffect, useState } from 'react'
import Classes from './componentStyling.module.css'

export default function TicTacToe() {
    const [squaresValue, setSquareValue ] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext ] = useState(true)
    const [win, setWin] = useState(false)

    const calculatingWinner = (squares) => {
        console.log('square :',squares)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
        
        for(let line of lines){
            let [a, b, c] = line;
            if((squares[b] && squares[a] && squares[c]) && (squares[a] === squares[b] && squares[a] === squares[c])){
                setWin(true);
            }
        }
        return;
    }

    useEffect(() => {
        calculatingWinner(squaresValue)
    },[squaresValue])

    const handleOnSquareClick = (index) => {
        if(win){
            return;
        }
        const newSquares = squaresValue.slice();
        if(squaresValue[index]){
            return;
        }
        if(xIsNext){
            newSquares[index] = 'X';
        }
        else {
            newSquares[index] = 'O';
        }
        setXIsNext(!xIsNext)
        setSquareValue(newSquares);
    }
  return (
    <>
        <div className={Classes.box}>
            {
                squaresValue.map((item, index) => (
                    <Square handleOnSquareClick={() => handleOnSquareClick(index)} value={squaresValue[index]}/>
                ))
            }
        </div>
        {win && <h1>You are win</h1>}
    </>
  )
}

function Square(props) {
    const {value, handleOnSquareClick} = props
    return (
        <>
            <button className={Classes.square} onClick={handleOnSquareClick}>{value}</button>
        </>
    )
}

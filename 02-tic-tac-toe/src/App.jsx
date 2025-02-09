import React, {useState} from "react";
import confetti from "canvas-confetti";

import {Square} from "./components/Square.jsx";

import { turns } from "./constants.js";

import { checkWinner, checkEndGame } from "./logic/board.js";

import { WinnerModal } from "./components/WinnerModal.jsx";

import { saveGameStorage, resetEstorage } from "./logic/storage/index.js";

function App() {
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null)
  })



  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)

    resetEstorage()

  }

  const updateBoard = (index) => {

    if(board[index] || winner) return

    const newTurn = turn === turns.X ? turns.O : turns.X
    
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    setTurn(newTurn)

    saveGameStorage({
      board: newBoard,
      turn: newTurn
    }
    )

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Volver a empezar</button>

      <section className="game">
        {
          board.map((_,index) =>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}>
          {turns.X}
        </Square>
        <Square isSelected={turn === turns.O}>
          {turns.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}
export default App

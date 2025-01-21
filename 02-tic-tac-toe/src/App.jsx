import React, {useState} from "react";
import confetti from "canvas-confetti";

import {Square} from "./components/Square.jsx";

import { turns } from "./constants.js";

import { checkWinner } from "./logic/board.js";

const board = Array(9).fill(null)







function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(turns.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }

  const updateBoard = (index) => {

    if(board[index] || winner) return

    const newTurn = turn === turns.X ? turns.O : turns.X
    
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !==null)
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

      {
        winner !== null &&(
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    :'Ganó '
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}> Empezar de nuevo </button>
              </footer>
            </div>
          </section>
        )
      }

    </main>
  )
}
export default App

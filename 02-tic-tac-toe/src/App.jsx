import React, {useState} from "react"

const turns = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(turns.X)

  const updateBoard = () => {
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

  }

  return(
    <main className="board">
      <h1>Tic Tac Toe</h1>

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
    </main>
  )
}
export default App

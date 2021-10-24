import { Square } from "../Squares/Square"
import "../Board/board.css"
import { useState, useEffect } from "react"

export const Board = () => {

    const [gameState, setGameState] = useState([])
    const [isXChance, setIsXChance] = useState(false)

    const handleClick = (index) => {
        let strings = Array.from(gameState)

        strings[index] = isXChance ? "X" : "O"

        setGameState(strings)
        setIsXChance(!isXChance)

    }

    useEffect(() => {
        const winner = checkWinner()
        if(winner){
            alert(`Congo! Player ${winner} has won the game...`)
            setGameState([])
        }
        // else if(gameState.length === 9){
        //     setGameState([])
        // }

    }, [gameState])

    const checkWinner = () => {
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

        for(let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i]
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
                return gameState[a]
            }
        }
        return null
    }



    return (
        <div>
            <div className="row jc-center">
                <Square handleClick={() => handleClick(0)} state={gameState[0]} />
                <Square handleClick={() => handleClick(1)} state={gameState[1]} />
                <Square handleClick={() => handleClick(2)} state={gameState[2]} />
            </div>
            <div className="row jc-center">
                <Square handleClick={() => handleClick(3)} state={gameState[3]} />
                <Square handleClick={() => handleClick(4)} state={gameState[4]} />
                <Square handleClick={() => handleClick(5)} state={gameState[5]} />
            </div>
            <div className="row jc-center">
                <Square handleClick={() => handleClick(6)} state={gameState[6]} />
                <Square handleClick={() => handleClick(7)} state={gameState[7]} />
                <Square handleClick={() => handleClick(8)} state={gameState[8]} />
            </div>

            <div className="btn-container">
                <button className="delete" onClick={() => setGameState([])}>Clear Game</button>
            </div>
        </div>
    )
}
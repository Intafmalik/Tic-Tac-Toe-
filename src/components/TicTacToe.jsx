import React, { useState } from 'react'
import "./TictacToe.css"


const TicTacToe = () => {
    const [Box, SetNewBox] = useState(Array(9).fill(""))
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [player1_score, setPlayer1Score] = useState(0)
    const [player2_score, setPlayer2Score] = useState(0)
    const [tieScore, setTieScore] = useState(0)

    const handleBoxClick = (index) => {

        if (Box[index] !== "") return

        const newBox = [...Box]
        newBox[index] = currentPlayer
        SetNewBox(newBox)

        if (checkWinCondition(newBox, currentPlayer)) {
            if (currentPlayer === "X")
                setPlayer1Score(player1_score + 1)


            else
                setPlayer2Score(player2_score + 1)

        }
        else if (isTie(newBox)) {
            setTieScore(tieScore + 1)
            alert(`Its Tie`)

        }
        else setCurrentPlayer(currentPlayer === "X" ? "O" : "X")


    }

    const checkWinCondition = (currentBox, player) => {

        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let index = 0; index < conditions.length; index++) {
            const [box1, box2, box3] = conditions[index];

            if (currentBox[box1] !== "" && currentBox[box1] === currentBox[box2] && currentBox[box2] === currentBox[box3]) {
                {
                    alert(`${player} is a winner`)
                    return true
                }

            }

        }
        return false

    }

    const isTie = (currentBox) => {
        let tie = true
        currentBox.forEach((eachBox) => {
            if (eachBox === "") {
                tie = false
            }
        });
        return tie
    }

    const handleRestart = () => {
        SetNewBox(Array(9).fill(""))
        setPlayer1Score(0)
        setPlayer2Score(0)
        setTieScore(0)
        setCurrentPlayer("X")
    }

    const handlePlayAgain = () => {
        SetNewBox(Array(9).fill(""))

    }


    return (
        <>
            <div className='container'>
                <h2>Let's play <span>TicTacToe</span> In <span className='framwork'>React</span></h2>
                <div className='playerList'>
                    <div >Player 1 : X</div>
                    <div className='scorelist'>
                        <h3>Score</h3> <span className='player_score'>{player1_score} : {player2_score}</span>
                    </div>
                    <div >Player 2 : O</div>
                    <div className='tie'>Tie:{tieScore}</div>
                </div>
                <div className='board'>
                    {
                        Box.map((value, index) => {
                            return <div className='box' onClick={() => { handleBoxClick(index) }} key={index}>
                                {value}</div>
                        })
                    }

                </div>
                <div className='button'>
                    <button className='clickBtn playAgainBtn' onClick={() => { handlePlayAgain() }} >Play Again</button>
                    <button className='clickBtn restart' onClick={() => { handleRestart() }} >Restart</button>
                </div>
            </div>

        </>

    )
}

export default TicTacToe

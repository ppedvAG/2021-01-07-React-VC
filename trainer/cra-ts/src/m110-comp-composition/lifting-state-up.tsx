import { useState } from "react"

const Board = () => {

    const [squaresArray, setSquaresArray] = useState(new Array('o', 'x'))
    let isX = true


    function calculateWinner(squares: any) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 8]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a]
        }
        return null;

    }
    function handleClick(ev: any){
        console.log('ev', ev);
        console.log('geklickt');

    }
    return (
        <>
            <h2>Board works</h2>
            <Square value={squaresArray[0]} onClick={handleClick}></Square>
            <Square value={squaresArray[1]} onClick={handleClick}></Square>
            <Square value="" onClick={handleClick}></Square>
            <br />
            <Square value="" onClick={handleClick}></Square>
            <Square value="" onClick={handleClick}></Square>
            <Square value="" onClick={handleClick}></Square>
            <br />
            <Square value="" onClick={handleClick}></Square>
            <Square value="" onClick={handleClick}></Square>
            <Square value="" onClick={handleClick}></Square>
        </>
    )

}
export default Board

const Square = (props: any) => {
    return (
        <>
            {/* <h2>Square works</h2> */}
            <button onClick={(event) => props.onClick((event.target as HTMLButtonElement).textContent)}>{props.value}</button>
        </>
    )
}
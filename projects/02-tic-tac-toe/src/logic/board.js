import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] && 
            boardToCheck[a] === boardToCheck[c]
        ) {
        return boardToCheck[a] // X o O
        }
    }
    // Si no hay ganador
    return null
}

export const checkEndGame = (boardToCheck) => {
    //Revismos si hay empate
    //Si todos los cuadros tienen valor
    return boardToCheck.every((square) => square !== null)
}
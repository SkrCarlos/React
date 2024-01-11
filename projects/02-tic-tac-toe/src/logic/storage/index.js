export const saveGameStorage = ({ board, turn }) => {
    //Guardar partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', JSON.stringify(turn))

}

export const resetGameStorage = () => {
    //Borrar partida
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
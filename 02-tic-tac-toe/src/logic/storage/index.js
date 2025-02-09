export const saveGameStorage = ({ board, turn }) => {
  //Guardar partida
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetEstorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};

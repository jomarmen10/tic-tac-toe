/*----- constants -----*/
const MOVES = {
  "0": "white",
  "1": "red",
  "-1": "blue"
}
/*----- app's state (variables) -----*/
let board, turn
/*----- cached element references -----*/
/*----- event listeners -----*/
document.querySelector('section.container').addEventListener('click', handleClick)
/*----- functions -----*/
init();

function init(){
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  turn = 1;
}



function handleClick(e) {
  let tar = e.target
  // console.dir(tar)
  tar.style.backgroundColor = 'red'
}

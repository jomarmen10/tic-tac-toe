/*----- constants -----*/
const moves = {
  "0": "white",
  "1": "red",
  "-1": "blue"
}
/*----- app's state (variables) -----*/
let board
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
init();

function init(){
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

}

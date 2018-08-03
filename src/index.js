import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonToggleOne = this.buttonToggleOne.bind(this);
    this.buttonToggleTwo = this.buttonToggleTwo.bind(this);
    this.buttonToggleX = this.buttonToggleX.bind(this);
    this.buttonToggleO = this.buttonToggleO.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    window.AppComponent = this;
   
    this.state = {
      level: 1,
      player_token: "X",
      player_score: 0,
      computer_score: 0,
      btn1: "off",
      btn2: "off",
      btnX: "off",
      btnO: "off",
      whosTurn: "player",
      board: ["X","O","X",
              "O","O",5,
              "O",7, "O"]
    }; 
  }
 
  updateBoard(int, token) {
    let theOtherGuy = this.state.whosTurn;
    theOtherGuy === "player" ?  theOtherGuy = "AI" : theOtherGuy = "player";
    const newArray = this.state.board.slice();   
    newArray.splice(int, 1, token); 
    this.setState({board: newArray,
      whosTurn: theOtherGuy
    }, function () {
      checkForWinOrDraw(this.state.board, this.state);
  });
    
    if(typeof this.state.board[int] !== "number" || this.state.whosTurn === "AI") {
      document.getElementById('sq'+ int).setAttribute("disabled","true");
    }
  }
  handlerLevel(id) {
    if(id === "btn1"){
      if(this.state.level === 2){
        this.setState(() => {
          return {
            level: 1
          };
        });
      }
    }else{
      if(this.state.level === 1) {
        this.setState(() => {
          return {
            level: 2
          };
        });
          
        
      }
    }
  }
  handlerToken(id) {
    if(id === "btnX"){
      if(this.state.player_token === "O") {
        this.setState(() => {
          return {
            player_token: "X"
          };
        });
      }
    }else{
      if(this.state.player_token === "X") {
        this.setState(() => {
          return {
            player_token: "O"
          };
        });
      } 
    }
   }
   handlerReset() { 
      this.setState(() => {
        return {
          level: 1,
          player_token: "X",
          player_score: 0,
          computer_score: 0,
        };
      });
      if(this.state.btn1 === "on") {
        document.getElementById("button1").classList.toggle("sm-button-clicked");
        this.setState(() => {
          return {
            btn1: "off"
          };
        });
      }else if(this.state.btn2 === "on") {
        document.getElementById("button2").classList.toggle("sm-button-clicked");
        this.setState(() => {
          return {
            btn2: "off"
          };
        });
      }
      if(this.state.btnX === "on") {
        document.getElementById("_x").classList.toggle("sm-button-clicked"); 
        this.setState(() => {
          return {
            btnX: "off"
          };
        });
      }else if(this.state.btnO === "on") {
        document.getElementById("_o").classList.toggle("sm-button-clicked");
        this.setState(() => {
          return {
            btnO: "off"
          };
        });
      }
    }
    
    buttonToggleOne() {
      const one = document.getElementById("button1");
      const two = document.getElementById("button2");
       
        if(this.state.btn1 === "off" && this.state.btn2 === "off") {
          console.log("turning 1 on");
          this.setState(() => {
            return {
              btn1: "on"
            };
          });
          one.classList.toggle("sm-button-clicked");
        }else if(this.state.btn1 === "off" && this.state.btn2 === "on") {
          console.log("turning 1 on and 2 off");
          this.setState(() => {
            return {
              btn1: "on",
              btn2: "off"
            };
          });
          one.classList.toggle("sm-button-clicked");
          two.classList.toggle("sm-button-clicked"); 
        }  
        }
        buttonToggleTwo() {
          const one = document.getElementById("button1");
          const two = document.getElementById("button2");
           
            if(this.state.btn2 === "off" && this.state.btn1 === "off") {
              console.log("turning 2 on");
              this.setState(() => {
                return {
                  btn2: "on"
                };
              });
              two.classList.toggle("sm-button-clicked");
            }else if(this.state.btn2 === "off" && this.state.btn1 === "on") {
              console.log("turning 2 on and 1 off");
              this.setState(() => {
                return {
                  btn2: "on",
                  btn1: "off"
                };
              });
              one.classList.toggle("sm-button-clicked");
              two.classList.toggle("sm-button-clicked");
            }
      
        }
        buttonToggleX(_id) {
          const x = document.getElementById("_x");
          const o = document.getElementById("_o");
           
            if(this.state.btnX === "off" && this.state.btnO === "off") {
              console.log("turning x on");
              this.setState(() => {
                return {
                  btnX: "on"
                };
              });
              x.classList.toggle("sm-button-clicked");
            }else if(this.state.btnX === "off" && this.state.btnO === "on") {
              console.log("turning x on and o off");
              this.setState(() => {
                return {
                  btnX: "on",
                  btnO: "off"
                };
              });
              x.classList.toggle("sm-button-clicked");
              o.classList.toggle("sm-button-clicked"); 
            }  
            }
            buttonToggleO(_id) {
              const x = document.getElementById("_x");
              const o = document.getElementById("_o");
               
                if(this.state.btnO === "off" && this.state.btnX === "off") {
                  console.log("turning o on");
                  this.setState(() => {
                    return {
                      btnO: "on"
                    };
                  });
                  o.classList.toggle("sm-button-clicked");
                }else if(this.state.btnO === "off" && this.state.btnX === "on") {
                  console.log("turning o on and x off");
                  this.setState(() => {
                    return {
                      btnO: "on",
                      btnX: "off"
                    };
                  });
                  x.classList.toggle("sm-button-clicked");
                  o.classList.toggle("sm-button-clicked");
                }         
            }
            
              
              
 
  render() {
    return (
      
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton value={this.state} action={this.handlerReset.bind(this)} />
          <GameBoard whosTurn={this.state.whosTurn} player_token={this.state.player_token} board ={this.state.board} updateBoard={this.updateBoard.bind(this)} />
          <LevelSelector  action={this.handlerLevel.bind(this)} buttonToggleOne={this.buttonToggleOne} buttonToggleTwo={this.buttonToggleTwo} />
          <TokenSelector action={this.handlerToken.bind(this)} buttonToggleX={this.buttonToggleX} buttonToggleO={this.buttonToggleO} />
          <Footer />
      </div>     
    );
  }
}
class GameBoard extends React.Component { 
  render() {
    return (
      <div className="game-board">
                <button 
                className="square" id="sq0" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq0", 0, this.props.player_token)}}}>
               {this.props.board[0]}
                </button>
                <button 
                className="square" id="sq1" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq1", 1, this.props.player_token)}}}>
                {this.props.board[1]}
                </button>
                <button 
                className="square" id="sq2" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq1", 2, this.props.player_token)}}}>
                {this.props.board[2]}
                </button>
                <button 
                className="square" id="sq3" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq3", 3, this.props.player_token)}}}>
                {this.props.board[3]}
                </button>
                <button 
                className="square" id="sq4" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq4", 4, this.props.player_token)}}}>
                {this.props.board[4]}
                </button>
                <button 
                className="square" id="sq5" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq5", 5, this.props.player_token)}}}>
                {this.props.board[5]}
                </button>
                <button 
                className="square" id="sq6" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq6", 6, this.props.player_token)}}}>
                {this.props.board[6]}
                </button>
                <button 
                className="square" id="sq7" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq7", 7, this.props.player_token)}}}>
                {this.props.board[7]}
                </button>
                <button 
                className="square" id="sq8" onClick={(e) => {if(this.props.whosTurn === "player") {this.props.updateBoard("sq8", 8, this.props.player_token)}}}>
                {this.props.board[8]}
                </button>
      </div>
    );               
 }  
}
class ScoreBoard extends React.Component {
  render() {
    return (
      <h2 className="scoreboard">Player:<span className="player-integer"> 0</span> Computer: <span className="computer-integer"> 0</span></h2>
     
    );
  }
}
class ResetButton extends React.Component {
  render() {
    return (
      <button className="reset-button" onClick={(e) => this.props.action()}>Reset Game</button>
    );
  }
}
class LevelSelector extends React.Component {
  render() {
    return (     
      <div className="level-selector">Level 
        <button className="sm-button" id="button1" onClick={(e) => {this.props.action("btn1"); this.props.buttonToggleOne()}}>1</button>or 
        <button className="sm-button" id="button2" onClick={(e) =>{ this.props.action("btn2"); this.props.buttonToggleTwo()}}>2</button>?
      </div>         
    );
  } 
}
class TokenSelector extends React.Component {
  render() {
    return (
      <div className="token-selector">Level 
        <button className="sm-button" id="_x" onClick={(e) => {this.props.action("btnX");  this.props.buttonToggleX("_x")}}>X</button>or 
        <button className="sm-button" id="_o" onClick={(e) => {this.props.action("btnO"); this.props.buttonToggleO("_o")}}>O</button>?
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">Tic Tac Toe in React designed and coded by T. Reynolds, 2018.</footer>
    );
  }
}

//----------------JS Helper Functions-------------------------

function checkForWinOrDraw(arr, state) {
  console.log('stateincheckForWinOrDraw', state);
  //an array of all the possible winning rows
   const array = [[arr[0],arr[1],arr[2]], [arr[3],arr[4],arr[5]], [arr[6],arr[7],arr[8]], 
   [arr[0],arr[3],arr[6]], [arr[1],arr[4],arr[7]], [arr[2],arr[5],arr[8]], 
   [arr[0],arr[4],arr[8]], [arr[2],arr[4],arr[6]] ];
 //map over array of arrays- possible winning rows - and check if all are x or o
  const trueIndexX =( array.map((c,i,a) =>  c.every(d => d === "X"))).indexOf(true);
  const trueIndexO =( array.map((c,i,a) =>  c.every(d => d === "O"))).indexOf(true);
  console.log('trueIndexX', trueIndexX);
  console.log('trueIndexO', trueIndexO);
  //this round of code golf just checks to see if any of the arrays within the array are either
  //all Xs or all Os-- if neither, then check for draw before deciding whos turn it is.
  trueIndexX !== -1 ? declareWinner(array[trueIndexX], trueIndexX, state) : trueIndexO !== -1 ? declareWinner(array[trueIndexO], trueIndexO, state) : checkForDraw(arr, state); 
}
 function checkForDraw(arr, state) {
   console.log('state in checkForDraw',state);
  //check for draw after checking for win
  if(arr.every((c) => typeof c !== "number")) {
    //logic needed here
    alert('its a draw');
  }else{
    const turn = state.whosTurn
    console.log('turn', turn);
     if(turn === "AI") {
       checkForClearBoard(arr, state);
     }
  }
}
function declareWinner(winningRow, rowIndex, state) {
  console.log("index", rowIndex);
  console.log(winningRow);
  //check to see what player matches the letter in the winningRow and call and post to the screen
  if(winningRow[0] === state.player_token) {
    console.log('player wins');
  }else{
    console.log('Computer Wins');
  }
  //light up the winning squares
  lightUpSquares(rowIndex);
} 
 function lightUpSquares(rowIndex) {
   let a;
   let b;
   let c;
  console.log('rowIndex', rowIndex);
  switch (rowIndex) {
    case 0:
        a = 0;
        b = 1;
        c = 2;
        break;
    case 1:
        a = 3;
        b = 4;
        c = 5;
        break;
    case 2:
        a = 6;
        b = 7;
        c = 8;
        break;
    case 3:
        a = 0;
        b = 3;
        c = 6;
        break;
    case 4:
        a = 1;
        b = 4;
        c = 7;
        break;
    case 5:
        a = 2;
        b = 5;
        c = 8;
        break;
    case 6:
        a = 0;
        b = 4;
        c = 8;
        break;
    case 7:
        a = 2;
        b = 4;
        c = 6;
        break;
        default:
        a = 0;
        b = 1;
        c = 2;
  }
    timingSquareLighting(a,b,c);  
  }

function timingSquareLighting(A,B,C) {
  document.getElementById('sq'+ A).classList.toggle("square-lighted");
    setTimeout(() => {document.getElementById('sq'+ B).classList.toggle("square-lighted")}, 500);
    setTimeout(() => {document.getElementById('sq'+ C).classList.toggle("square-lighted");}, 1000); 
}

//---------------------------AI LOGIC---------------------------------

function checkForClearBoard(arr, state){
  console.log('called checkForClearBoard');
  //if the board is clear, call a function to choose a best first move; if not, call
  //checkforaWinningMove
  const boardIsEmpty = boardPopulation(state);
  boardIsEmpty === 9 ? pickAGoodFirstAIMove() : checkForAIWinningMove(arr, state); 
}
function boardPopulation(state) {
  console.log('im in boardIsEmpty', state.board);
  return (state.board.filter((c) => typeof c === "number")).length; 
}
function checkForAIWinningMove(arr, state) {
  const array = [[arr[0],arr[1],arr[2]], [arr[3],arr[4],arr[5]], [arr[6],arr[7],arr[8]], 
  [arr[0],arr[3],arr[6]], [arr[1],arr[4],arr[7]], [arr[2],arr[5],arr[8]], 
  [arr[0],arr[4],arr[8]], [arr[2],arr[4],arr[6]] ];
  //find an array among arrays that has two AI tokens and one empty string
 const filtered =  (array.map((c,i) => (c.filter((d) => d !== state.player_token).length)).indexOf(3));
 //if filtered has an array with two AI tokens and one empty string, find the empty string so
 //AI may make a move in that square
 if(filtered !== -1) {
  const targetIndex = (array[filtered].map((c,i) => typeof c === "number")).indexOf(true);
  const trueTargetIndex = array[1][2];
  console.log('trueTargetIndex', trueTargetIndex);
  let ai_token = "X";
  state.player_token === "X" ? ai_token = "O" : ai_token = "X";
 window.AppComponent.updateBoard(trueTargetIndex, ai_token);
  console.log('targetIndex', targetIndex);
 }else {
   shouldAIBlock() 
  
 }
 
  console.log(filtered, 'im in checkForAIWinningMove');
}

function pickAGoodFirstAIMove() {
  console.log('Im in pickAGoodFirstAIMove');
}
function shouldAIBlock() {
  console.log('im in shouldAIBlock');
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
   
    this.state = {
      level: 1,
      player_token: "X",
      player_score: 0,
      computer_score: 0,
      btn1: "off",
      btn2: "off",
      btnX: "off",
      btnO: "off"
    }; 
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
          <GameBoard state = {this.state} whosTurn={this.state.whosTurn} player_token={this.state.player_token} />
          <LevelSelector  action={this.handlerLevel.bind(this)} buttonToggleOne={this.buttonToggleOne} buttonToggleTwo={this.buttonToggleTwo} />
          <TokenSelector action={this.handlerToken.bind(this)} buttonToggleX={this.buttonToggleX} buttonToggleO={this.buttonToggleO} />
          <Footer />
      </div>     
    );
  }
}
class GameBoard extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      board: ["X","O","X",
              "O","O","",
              "","", ""],
              whosTurn: "player"
    };
   
    this.handleClick = this.handleClick.bind(this);
    this.checkForWinOrDraw = this.checkForWinOrDraw.bind(this);
    this.checkForDraw = this.checkForDraw.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.lightUpSquares = this.lightUpSquares.bind(this);
    this.timingSquareLighting = this.timingSquareLighting.bind(this);
    this.checkForClearBoard = this.checkForClearBoard.bind(this);
    this.boardPopulation = this.boardPopulation.bind(this);
    this.checkForAIWinningMove = this.checkForAIWinningMove.bind(this);
    this.stateReferenceConverter = this.stateReferenceConverter.bind(this);
    this.ai_MoveUpdate = this.ai_MoveUpdate.bind(this);
    this.shouldAIBlock = this.shouldAIBlock.bind(this);
    this.pickAGoodFirstAIMove = this.pickAGoodFirstAIMove.bind(this);
    
  }
   
  handleClick = (int, token) => {
    if(this.state.whosTurn === "player") {
    console.log('int', int, 'token', token);
    const newArray = this.state.board.slice();   
    
 newArray.splice(int, 1, token);
 console.log('newArray', newArray);
 let theOtherGuy = this.state.whosTurn;
    theOtherGuy === "player" ?  theOtherGuy = "AI" : theOtherGuy = "player";

 this.setState(
 {
    board: newArray,
    whosTurn: theOtherGuy
},
() => {this.checkForWinOrDraw(this.state.board, this.state)}
 );
 
}
  }
  
//----------------------------------------AI Logic-----------------------------
ai_MoveUpdate(int, token) {
  const newArray = this.state.board.slice();   
    
 newArray.splice(int, 1, token);
 console.log('newArray', newArray);
 let theOtherGuy = this.state.whosTurn;
    theOtherGuy === "player" ?  theOtherGuy = "AI" : theOtherGuy = "player";
  this.setState(
    {
       board: newArray,
       whosTurn: theOtherGuy
   },
   () => {this.checkForWinOrDraw(this.state.board, this.state)}
    );
}

shouldAIBlock() {
  console.log('im in shouldAIBlock');
}

pickAGoodFirstAIMove() {
  console.log('Im in pickAGoodFirstAIMove');
}

checkForClearBoard(arr, state) {
     
  console.log('called checkForClearBoard');
  console.log('attheclearboardfunction', state)
  //if the board is clear, call a function to choose a best first move; if not, call
  //checkforaWinningMove
  const boardIsEmpty = this.boardPopulation(state);
  console.log('boardIsEmpty', boardIsEmpty);
  boardIsEmpty === 9 ? this.pickAGoodFirstAIMove() : this.checkForAIWinningMove(arr, state); 
}
 boardPopulation(state) {
  console.log('im in boardPopulation', state.board);
  return (state.board.filter((c) => c === "")).length; 
}
stateReferenceConverter(a, b) {
  console.log('inside machine', a, b);
return a === 0 && b === 0 ? 0 : a === 0 && b === 1 ?  1 : a === 0 && b === 2 ?  2 : a === 1 && b === 0 ? 3 : a === 1 && b === 1 ? 4 : a === 1 && b === 2 ? 5 : a === 2 && b === 0 ? 6 : a === 2 && b === 1 ? 7 : a === 2 && b === 2 ? 8 : a === 3 && b === 0 ? 0 : a === 3 && b === 1 ? 3 : a === 3 && b === 2 ? 6 : a === 4 && b === 0 ? 1 : a === 4 && b === 1 ? 4 : a === 4 && b === 2 ? 7 : a === 5 && b === 0 ? 2 : a === 5 && b === 1 ? 5 : a === 5 && b === 2 ? 8 : a === 6 && b === 0 ? 0 : a === 6 && b === 1 ? 4 : a === 6 && b === 2 ? 8 : a === 7 && b === 0 ? 2 : a === 7 && b === 1 ? 4 : a === 7 && b === 2 ? 6 : "";
    
    }
checkForAIWinningMove(arr, state) {
  console.log('checkForAIWinningMove State:', state);
  
  const array = [[arr[0],arr[1],arr[2]], [arr[3],arr[4],arr[5]], [arr[6],arr[7],arr[8]], 
  [arr[0],arr[3],arr[6]], [arr[1],arr[4],arr[7]], [arr[2],arr[5],arr[8]], 
  [arr[0],arr[4],arr[8]], [arr[2],arr[4],arr[6]] ];
  console.log('array',array);
  //find an array among arrays that has two AI tokens and one empty string
 
  const filtered = ((array.map((c,i) => (c.filter((d) => d === this.props.player_token || d === "" )))).map((c) => c.length === 1)).indexOf(true);
 console.log('filtered', filtered);

 //if filtered has an array with two AI tokens and one empty string, find the empty string so
 //AI may make a move in that square for the win
 
 if(filtered !== -1) {
  const targetIndex = (array[filtered].map((c,i) => c === "")).indexOf(true);
  console.log('targetIndex', targetIndex);
 
  const element = this.stateReferenceConverter(filtered, targetIndex);
  console.log('element', element);

  let ai_token = "X";
  this.props.player_token === "X" ? ai_token = "O" : ai_token = "X";
 
 this.ai_MoveUpdate (element, ai_token);

}else {
   this.shouldAIBlock()
  
 }
 
}

//----------------------------------------Game Logic---------------------------
checkForWinOrDraw(arr, state) {
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
  trueIndexX !== -1 ? this.declareWinner(array[trueIndexX], trueIndexX, state) : trueIndexO !== -1 ? this.declareWinner(array[trueIndexO], trueIndexO, state) : this.checkForDraw(arr, state); 
}
 checkForDraw(arr, state) {
   console.log('state in checkForDraw',state);
  //check for draw after checking for win
  if(arr.every((c) => c !== "")) {
    //logic needed here
    alert('its a draw');
  }else{
    const turn = state.whosTurn
    console.log('turn', turn);
     if(turn === "AI") {
       this.checkForClearBoard(arr, state);
       //this is where the AI move will end if whosTurn is not AI, and the AI move starts with //checkForClearBoard
     }
  }
}
declareWinner(winningRow, rowIndex, state) {
  console.log("index", rowIndex);
  console.log(winningRow);
  //check to see what player matches the letter in the winningRow and call and post to the screen
  if(winningRow[0] === state.player_token) {
    console.log('player wins');
  }else{
    console.log('Computer Wins');
  }
  //light up the winning squares
  this.lightUpSquares(rowIndex);
} 
 lightUpSquares(rowIndex) {
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
    this.timingSquareLighting(a,b,c);  
  }

 timingSquareLighting(A,B,C) {
  document.getElementById('sq'+ A).classList.toggle("square-lighted");
    setTimeout(() => {document.getElementById('sq'+ B).classList.toggle("square-lighted")}, 500);
    setTimeout(() => {document.getElementById('sq'+ C).classList.toggle("square-lighted");}, 1000); 
}
  

  render() {
    return (
      <div className="game-board">
                <button 
                className="square" id="sq0" onClick={() => this.handleClick(0, this.props.player_token)}>
               {this.state.board[0]}
                </button>
                <button 
                className="square" id="sq1" onClick={() => this.handleClick(1, this.props.player_token)}>
                {this.state.board[1]}
                </button>
                <button 
                className="square" id="sq2" onClick={() => this.handleClick(2, this.props.player_token)}>
                {this.state.board[2]}
                </button>
                <button 
                className="square" id="sq3" onClick={() => this.handleClick(3, this.props.player_token)}>
                {this.state.board[3]}
                </button>
                <button 
                className="square" id="sq4" onClick={() => this.handleClick(4, this.props.player_token)}>
                {this.state.board[4]}
                </button>
                <button 
                className="square" id="sq5" onClick={() => this.handleClick(5, this.props.player_token)}>
                {this.state.board[5]}
                </button>
                <button 
                className="square" id="sq6" onClick={() => this.handleClick(6, this.props.player_token)}>
                {this.state.board[6]}
                </button>
                <button 
                className="square" id="sq7" onClick={() => this.handleClick(7, this.props.player_token)}>
                {this.state.board[7]}
                </button>
                <button 
                className="square" id="sq8" onClick={() => this.handleClick(8, this.props.player_token)}>
                {this.state.board[8]}
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













ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
    console.log(this.state);
    return (
      
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton value={this.state} action={this.handlerReset.bind(this)} />
          <GameBoard />
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
                <button className="square" id="sq1"></button>
                <button className="square" id="sq2"></button>
                <button className="square" id="sq3"></button>
                <button className="square" id="sq4"></button>
                <button className="square" id="sq5"></button>
                <button className="square" id="sq6"></button>
                <button className="square" id="sq7"></button>
                <button className="square" id="sq8"></button>
                <button className="square" id="sq9"></button>
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
  resetButtons(obj){
    console.log('the button object is', obj);
  }
  render() {
    console.log('heres the object', this.props.value);
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      level: 1,
      player_token: "X",
      player_score: 0,
      computer_score: 0
    };
    
  }
  handlerLevel(id) {
    if(id === "btn1"){
      if(this.state.level === 2){
        this.setState({level: 1});
      }
    }else{
      if(this.state.level === 1) {
        this.setState({level: 2});
      }
    }
  }
  handlerToken(id) {
    if(id === "btnX"){
      if(this.state.player_token === "O") {
        this.setState({player_token: "X"});
      }
    }else{
      if(this.state.player_token === "X") {
        this.setState({player_token: "O"});
      } 
    }
   }
 
  render() {
    return (
      
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton />
          <GameBoard />
          <LevelSelector  action={this.handlerLevel.bind(this)} />
          <TokenSelector action={this.handlerToken.bind(this)}/>
          <Footer />
      </div>
      
    );
  }
}

class GameBoard extends React.Component {
 
  render() {
    return (
      <div className="game-board">
                <button className="square" id="sq1"> 1</button>
                <button className="square" id="sq2"> 2</button>
                <button className="square" id="sq3"> 3</button>
                <button className="square" id="sq4"> 4</button>
                <button className="square" id="sq5"> 5</button>
                <button className="square" id="sq6"> 6</button>
                <button className="square" id="sq7"> 7</button>
                <button className="square" id="sq8"> 8</button>
                <button className="square" id="sq9"> 9</button>
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
      <button className="reset-button">Reset Game</button>
    );
  }
}

class LevelSelector extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    btn1: "off",
    btn2: "off"
  };
 this.buttonToggleOne = this.buttonToggleOne.bind(this);
 this.buttonToggleTwo = this.buttonToggleTwo.bind(this);
}

buttonToggleOne() {
  const one = document.getElementById("button1");
  const two = document.getElementById("button2");
   
    if(this.state.btn1 === "off" && this.state.btn2 === "off") {
      console.log("turning 1 on");
      this.setState({btn1: "on"});
      one.classList.toggle("sm-button-clicked");
    }else if(this.state.btn1 === "off" && this.state.btn2 === "on") {
      console.log("turning 1 on and 2 off");
      this.setState({btn1: "on"});
      this.setState({btn2: "off"});
      one.classList.toggle("sm-button-clicked");
      two.classList.toggle("sm-button-clicked"); 
    }  
    }
    
    buttonToggleTwo() {
      const one = document.getElementById("button1");
      const two = document.getElementById("button2");
       
        if(this.state.btn2 === "off" && this.state.btn1 === "off") {
          console.log("turning 2 on");
          this.setState({btn2: "on"});
          two.classList.toggle("sm-button-clicked");
        }else if(this.state.btn2 === "off" && this.state.btn1 === "on") {
          console.log("turning 2 on and 1 off");
          this.setState({btn2: "on"});
          this.setState({btn1: "off"});
          one.classList.toggle("sm-button-clicked");
          two.classList.toggle("sm-button-clicked");
        }
  
    }

  render() {
    console.log(this.state);
    return (
      
      <div className="level-selector">Level 
        <button className="sm-button" id="button1" onClick={(e) => {this.props.action("btn1"); this.buttonToggleOne()}}>1</button>or 
        <button className="sm-button" id="button2" onClick={(e) =>{ this.props.action("btn2"); this.buttonToggleTwo()}}>2</button>?
      </div> 
        
    );
  }
 
}
class TokenSelector extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    btnX: "off",
    btnO: "off"
  };
  this.buttonToggleX = this.buttonToggleX.bind(this);
 this.buttonToggleO = this.buttonToggleO.bind(this);
}

buttonToggleX(_id) {
  const x = document.getElementById("_x");
  const o = document.getElementById("_o");
   
    if(this.state.btnX === "off" && this.state.btnO === "off") {
      console.log("turning x on");
      this.setState({btnX: "on"});
      x.classList.toggle("sm-button-clicked");
    }else if(this.state.btnX === "off" && this.state.btnO === "on") {
      console.log("turning x on and o off");
      this.setState({btnX: "on"});
      this.setState({btnO: "off"});
      x.classList.toggle("sm-button-clicked");
      o.classList.toggle("sm-button-clicked");
      
    }
      
    }
    
  buttonToggleO(_id) {
    const x = document.getElementById("_x");
    const o = document.getElementById("_o");
     
      if(this.state.btnO === "off" && this.state.btnX === "off") {
        console.log("turning o on");
        this.setState({btnO: "on"});
        o.classList.toggle("sm-button-clicked");
      }else if(this.state.btnO === "off" && this.state.btnX === "on") {
        console.log("turning o on and x off");
        this.setState({btnO: "on"});
        this.setState({btnX: "off"});
        x.classList.toggle("sm-button-clicked");
        o.classList.toggle("sm-button-clicked");
      }

  }

  
  render() {
    console.log(this.state);
    return (
      <div className="token-selector">Level 
        <button className="sm-button" id="_x" onClick={(e) => {this.props.action("btnX");  this.buttonToggleX()}}>X</button>or 
        <button className="sm-button" id="_o" onClick={(e) => {this.props.action("btnO"); this.buttonToggleO()}}>O</button>?
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

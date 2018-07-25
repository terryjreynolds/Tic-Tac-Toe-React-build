import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_score: 0,
      computer_score: 0
    }
  }
  render() {
    const level = this.state.level
    return (
      
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton />
          <GameBoard />
          <LevelSelector level = {level} />
          <TokenSelector />
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
  constructor(props){
    super(props);
    this.state = {
      button1: "off",
      button2: "off",
    level: "1"
  };
    this.handleOneClick = this.handleOneClick.bind(this);
    this.handleTwoClick = this.handleTwoClick.bind(this);
  }
  opacity_change(id) {
    const el = document.getElementById(id);
    el.style.opacity = ".5";
  }
   opacity_restore(id) {
    const el = document.getElementById(id);
    el.style.opacity = "1";
  }
  handleOneClick(id) {
    const el1 = document.getElementById(id);
    if (this.state.button2 === "off") {
      if (this.state.button1 === "off") {
        el1.style.background = "rgb(97,218,251)";
        el1.style.color = "black";
        this.setState({button1: "on"});
      }else {
        el1.style.background = "black";
      el1.style.color = "white";
      this.setState({button1: "off"});
      }
    }
  }
  
  handleTwoClick(id){
    const el2 = document.getElementById(id);
    if (this.state.button1 === "off") {
    if (this.state.button2 === "off"){
    el2.style.background = "rgb(97,218,251)";
    el2.style.color = "black";
    this.setState({button2: "on", level: "2"});
    }else{
      el2.style.background = "black";
      el2.style.color = "white";
      this.setState({button2: "off", level: "1"});
    }
  }
  }
  render() {
    return (
      <div className="level-selector">Level <button className="sm-button" id="level_one" onClick={() => this.handleOneClick("level_one")}  onMouseOver={() => this.opacity_change("level_one")} onMouseOut={() => this.opacity_restore("level_one")}>1</button> or <button className="sm-button" id="level_two" onClick={() => this.handleTwoClick("level_two")} onMouseOver={() => this.opacity_change("level_two")} onMouseOut={() => this.opacity_restore("level_two")}>2</button> ?</div>
    );
  }
}

class TokenSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      button3: "off",
      button4: "off",
      player_token: "X"
  };
    this.handleThreeClick = this.handleThreeClick.bind(this);
    this.handleFourClick = this.handleFourClick.bind(this);
  }
  opacity_change(id) {
    const el = document.getElementById(id);
    el.style.opacity = ".5";
  }
   opacity_restore(id) {
    const el = document.getElementById(id);
    el.style.opacity = "1";
  }
  handleThreeClick(id) {
    const el1 = document.getElementById(id);
    if (this.state.button4 === "off") {
      if (this.state.button3 === "off") {
        el1.style.background = "rgb(97,218,251)";
        el1.style.color = "black";
        this.setState({button3: "on"});
      }else {
        el1.style.background = "black";
      el1.style.color = "white";
      this.setState({button3: "off", player_token: "O"});
      }
    }
  }
  
  handleFourClick(id){
    const el2 = document.getElementById(id);
    if (this.state.button3 === "off") {
    if (this.state.button4 === "off"){
    el2.style.background = "rgb(97,218,251)";
    el2.style.color = "black";
    this.setState({button4: "on"});
    }else{
      el2.style.background = "black";
      el2.style.color = "white";
      this.setState({button4: "off"});
    }
  }
  }
  render() {
    return (
      <div className="token-selector">Choose <button className="sm-button" id="token_X" onClick={() => this.handleThreeClick("token_X")} onMouseOver={() => this.opacity_change("token_X")} onMouseOut={() => this.opacity_restore("token_X")}>X</button> or <button className="sm-button" id="token_O" onClick={() => this.handleFourClick("token_O")} onMouseOver={() => this.opacity_change("token_O")} onMouseOut={() => this.opacity_restore("token_O")}>O</button></div>
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "one",
      player_token: "X",
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
    this.state = {two_button_click: "no"};
    this.handleClick = this.handleClick.bind(this);
  }
  opacity_change(id) {
    const el = document.getElementById(id);
    el.style.opacity = ".5";
  }
   opacity_restore(id) {
    const el = document.getElementById(id);
    el.style.opacity = "1";
  }
  

  handleClick(){
    this.setState({two_button_click: "yes"});
    console.log(this.props.level);
  }
  render() {
    return (
      <div className="level-selector">Level <button className="sm-button" id="level_one" onClick={this.handleClick} onMouseOver={() => this.opacity_change("level_one")} onMouseOut={() => this.opacity_restore("level_one")}>1</button> or <button className="sm-button" id="level_two" onMouseOver={() => this.opacity_change("level_two")} onMouseOut={() => this.opacity_restore("level_two")}>2</button> ?</div>
    );
  }
}

class TokenSelector extends React.Component {
  opacity_change(id) {
    const el = document.getElementById(id);
    el.style.opacity = ".5";
  }
   opacity_restore(id) {
    const el = document.getElementById(id);
    el.style.opacity = "1";
  }
  handleClick() {

  }
  render() {
    return (
      <div className="token-selector">Choose <button className="sm-button" id="token_X" onMouseOver={() => this.opacity_change("token_X")} onMouseOut={() => this.opacity_restore("token_X")}>X</button> or <button className="sm-button" id="token_O" onMouseOver={() => this.opacity_change("token_O")} onMouseOut={() => this.opacity_restore("token_O")}>O</button></div>
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

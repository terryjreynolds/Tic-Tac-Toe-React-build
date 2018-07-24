import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton />
          <GameBoard />
          <LevelSelector />
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
  render() {
    return (
      <div className="level-selector">Level <button className="sm-button">1</button> or <button className="sm-button">2</button> ?</div>
    );
  }
}

class TokenSelector extends React.Component {
  render() {
    return (
      <div className="token-selector">Choose <button className="sm-button">X</button> or <button className="sm-button">O</button></div>
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

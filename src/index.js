import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      level: 1,
      player_score: 0,
      computer_score: 0
    };
    
  }
  handler() {
    console.log("hi");
  }
 
  render() {
    return (
      
      <div className="app">
        <h1 className="game-title">TicTacToe</h1>
          <ScoreBoard />
          <ResetButton />
          <GameBoard />
          <LevelSelector  action={this.handler.bind(this)} />
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
      <div className="level-selector" >Level
      <SmallButton  label="1" onClick={this.props.action} />or  
      <SmallButton  label="2" />?
      </div>
       
    );
  }
 
}
class TokenSelector extends React.Component {
  
  render() {
    return (
      <div className="token-selector">Choose
        <SmallButton label="X" />or
        <SmallButton label="O" />
      </div>
    );
  }
}

class SmallButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  mouseOver() {
    this.setState({opacity: 0.5})
  }
  mouseOut() { 
    this.setState({opacity: 1})
  }

  render() {
    return (
      <button className="sm-button" style={{opacity: this.state.opacity}} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>{this.props.label}</button>
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

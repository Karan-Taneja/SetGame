import React, { Component } from 'react';
import './App.css';

//======Functions
import { shuffleDeck, dealCards, checkForMatches, deck, oDeck, devGetMatches } from './services/game';

//======Components
import Card from './components/card';

//======Containers
import Selection from './containers/selection';
import Board from './containers/board';

class App extends Component {

  state = {
    testing: false, //Enables developer get match button
    selection: [], //Selected cards
    indexes: [], //Indexes of selections in the board
    board: [], //Board of 12 cards
    deck: [], //Deck of cards
    score: 0, //Player's score
    setExists: null, //If there is a set or not
    error: '', //Error message to display to user
  };

  componentDidMount(){ //Initializes
    let gameDeck = JSON.parse(JSON.stringify(deck));
    let gameBoard = dealCards(12, gameDeck);
    let exists = checkForMatches(gameBoard);
    this.setState({
      deck: gameDeck,
      board: gameBoard,
      setExists: exists,
    });
  };

  devHax = () => { //Dev function to get a set
    devGetMatches(this.state.board);
  }

  handleChoice = (i) => (e) => { //Function to handle selection of a card
    if(this.state.indexes.includes(i)) this.setState({error:'You already picked that card'});
    else{
      if(this.state.selection.length === 3) return;
      const nuSelection = JSON.parse(JSON.stringify(this.state.selection));
      const nuIndexes = JSON.parse(JSON.stringify(this.state.indexes));
      const board = this.state.board;
      nuIndexes.push(i);
      nuSelection.push(board[i]);
      this.setState({selection: nuSelection, indexes: nuIndexes, error:''});
    };
  };

  undoChoice = (pos) => (e) => { //Function to allow user to undo selection by clicking card in selection
    let nuSelection = JSON.parse(JSON.stringify(this.state.selection));
    let nuIndexes = JSON.parse(JSON.stringify(this.state.indexes));
    nuSelection = nuSelection.slice(0, pos).concat(nuSelection.slice(pos+1));
    nuIndexes = nuIndexes.slice(0, pos).concat(nuIndexes.slice(pos+1));
    this.setState({selection: nuSelection, indexes: nuIndexes});
  }

  handleSubmit = (e) => { //Function to submit set
    const selection = this.state.selection;
    if(e.target.getAttribute('name') === "submit"){
      if(this.state.selection.length < 3) this.setState({error:'You have not selected 3 cards'});
      else {
        if(selection[0].matches[selection[1].id][selection[2].id]){
          let nuScore = this.state.score + 1;
          let nuBoard = JSON.parse(JSON.stringify(this.state.board));
          let indexes = this.state.indexes;
          let nuDeck;
          if(this.state.deck.length <= 3) nuDeck = JSON.parse(JSON.stringify(shuffleDeck(deck)));
          else nuDeck = JSON.parse(JSON.stringify(this.state.deck));   
          let nuDeal = dealCards(3, nuDeck);
          nuBoard[indexes[0]] = nuDeal[0];
          nuBoard[indexes[1]] = nuDeal[1];
          nuBoard[indexes[2]] = nuDeal[2];
          let exists = checkForMatches(nuBoard);
          this.setState({
            deck: nuDeck,
            board: nuBoard,
            selection: [],
            indexes: [],
            error: '',
            setExists: exists,
            score: nuScore,
          });
        }
        else{
          this.setState({selection: [], indexes:[], error: 'Not a valid set'})
        };
      };
    }
    else if(e.target.getAttribute('name') === "no-set"){
      if(this.state.setExists) this.setState({error:'There is a set'})
      else {
        let nuScore = this.state.score + 1;
        let nuDeck;
        if(this.state.deck.length <= 12) nuDeck = JSON.parse(JSON.stringify(shuffleDeck(deck)));
        else nuDeck = JSON.parse(JSON.stringify(this.state.deck));   
        let nuBoard = dealCards(12, nuDeck);
        let exists = checkForMatches(nuBoard);
        this.setState({
          deck: nuDeck,
          board: nuBoard,
          selection: [],
          indexes: [],
          error: '',
          setExists: exists,
          score: nuScore,
        });
      };
    };
  };

  render(){
    return (<>
      <div className="flex" style={{'width': '100%', 'textAlign':'center'}}>
        <h1>Score: {this.state.score}</h1>
      </div>
      <div className="container-fluid d-flex">
        <Selection cards={this.state.selection} indexes={this.state.indexes} click={this.undoChoice}/>
      </div>
      {this.state.error.length > 0 ? <div className="error-box mt-3">{this.state.error}</div> : <></>}
      <div className="d-flex center mt-3">

        {this.state.testing ? <div className="button mg-r" onClick={this.devHax}>Matches</div> : <></>}
        <div className="button red-button mg-r" name="no-set" onClick={this.handleSubmit}>No Set</div>
        <div className="button green-button" name="submit" onClick={this.handleSubmit}>Submit</div>
      </div>
      <div className="container-fluid">
        <Board cards={this.state.board} click={this.handleChoice}/>
      </div>
    </>);
  }
};

export default App;
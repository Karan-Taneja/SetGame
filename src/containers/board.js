import React from 'react';
import Card from '../components/card';
import './board.css';

const Board = (props) => {
  if(props.cards.length < 1) return (<></>)
  const cards = props.cards;
  let cardsA = [];
  for(let i = 0; i < 12; i++){
    if (i === 3 || i === 7 || i === 11) cardsA.push(<Card card={cards[i]} col="2" last={true} key={i} click={props.click(i)}/>)
    else cardsA.push(<Card card={cards[i]} col="2" key={i} click={props.click(i)}/>)
  };
  return(<>
    <div className="d-flex center mt-3" style={{'width':'100%'}}>
      {cardsA.slice(0,4)}
    </div>
    <div className="d-flex center mt-3" style={{'width':'100%'}}>
      {cardsA.slice(4,8)}
    </div>
    <div className="d-flex center mt-3" style={{'width':'100%'}}>
      {cardsA.slice(8)}
    </div>
  </>);
};

export default Board;
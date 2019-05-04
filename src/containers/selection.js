import React, { Component } from 'react';
import Card from '../components/card';
import './selection.css';

const Selection = (props) => {
    if(!props.cards) return(<></>)
    const cards = props.cards;
    const indexes = props.indexes;
    let cardsA = [];
    for(let i = 0; i < 3; i++){
      if(cards.length > i) cardsA.push(<Card index={indexes[i]} card={cards[i]} col="4" key={i} click={props.click}/>)
      else {
        if(cards.length === i+1) cardsA.push(<Card empty={true} col="4" last={true} key={i}/>)
        else cardsA.push(<Card empty={true} col="4" key={i}/>)
      }
    };
    return(<>
    <div className="d-flex center mt-2" style={{'width': '100%'}}>
      <div className="d-flex" style={{'width': '50%'}}>
        {cardsA}
      </div>
    </div>
    </>);
};

export default Selection;
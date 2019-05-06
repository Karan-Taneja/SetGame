import React from 'react';
import Card from '../components/card';
import './selection.css';

const Selection = (props) => {
    if(!props.cards) return(<></>)
    const cards = props.cards;
    let cardsA = [];
    for(let i = 0; i < 3; i++){
      if(cards[i]){
        if(i === 2) cardsA.push(<Card pos={i} card={cards[i]} col="2" key={i} last={true} click={props.click(i)}/>);
        else cardsA.push(<Card pos={i} card={cards[i]} col="2" key={i} click={props.click(i)}/>)
      }
      else {
        if(i === 2) cardsA.push(<Card empty={true} col="2" last={true} key={i}/>)
        else cardsA.push(<Card empty={true} col="2" key={i}/>)
      }
    };
    return(<>
    <div className="d-flex center mt-2" style={{'width': '100%'}}>
      <div className="d-flex center" style={{'width': '100%'}}>
        {cardsA}
      </div>
    </div>
    </>);
};

export default Selection;
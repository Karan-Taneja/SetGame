import React from 'react';
import './card.css';
import Shape from './shape';

const Card = (props) => {
  if(props.empty) {
    if (props.last) return (<div className="card last-card col-4"></div>)
    else return (<div className="card col-4"></div>)
  }
  let classes = ['card', `col-${props.col}`,]
  if(props.card.properties.last) classes.push('last-card')
  if(props.card.properties.color === "OR") classes.push("orange");
  else if (props.card.properties.color === "BL") classes.push("blue");
  else if (props.card.properties.color === "RE") classes.push("red");
  classes = classes.join(' ')
  return (<>
    <div index={props.index} id={props.card.id} className={classes} onClick={props.click}>
      <Shape index={props.index} shape={props.card.properties.shape} num={props.card.properties.num} fill={props.card.properties.fill}/>
    </div>
  </>);
};

export default Card;
import React from 'react';
import './card.css';
import Shape from './shape';

const Card = (props) => {
  if(props.empty) {
    if (props.last) return (<div className="card last-card col-4"></div>)
    else return (<div className="card col-4"></div>)
  }
  let classes = ['card', `col-${props.col}`,]
  let color;
  let num;
  if(props.card.properties.last) classes.push('last-card')
  if(props.card.properties.color === "OR") color="orange";
  else if (props.card.properties.color === "BL") color="blue";
  else if (props.card.properties.color === "RE") color="red";
  classes = classes.join(' ')
  if(props.card.properties.num === "ON") num=1;
  else if (props.card.properties.num === "TW") num=2;
  else if (props.card.properties.num === "TH") num=3;

  const shapes = [];
  for(let i = 0; i < num; i++) shapes.push(<Shape color={color} index={props.index} card={props.card} key={i}/>);

  return (<>
    <div pos={props.pos} index={props.index} id={props.card.id} className={classes} onClick={props.click}>
      <div className="d-flex flex-wrap">
        {shapes}
      </div>
    </div>
  </>);
};

export default Card;
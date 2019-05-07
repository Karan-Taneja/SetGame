import React from 'react';
import './card.css';
import Shape from './shape';

const Card = (props) => {
  if(props.empty) {
    if (props.last) return (<div className={`card ${props.theme} last-card col-${props.col}`}></div>)
    else return (<div className={`card ${props.theme} col-${props.col}`}></div>)
  }
  let classes = ['card', props.theme,`col-${props.col}`,]
  let color;
  let num;
  if(props.last) classes.push('last-card')
  if(props.card.properties.color === "GR") color="green";
  else if (props.card.properties.color === "BL") color="blue";
  else if (props.card.properties.color === "RE") color="red";
  classes = classes.join(' ')
  if(props.card.properties.num === "ON") num=1;
  else if (props.card.properties.num === "TW") num=2;
  else if (props.card.properties.num === "TH") num=3;

  const shapes = [];
  for(let i = 0; i < num; i++) shapes.push(<Shape color={color} card={props.card} key={i}/>);

  return (<>
    <div id={props.card.id} className={classes} onClick={props.click}>
      <div className="d-flex flex-wrap">
        {shapes}
      </div>
    </div>
  </>);
};

export default Card;
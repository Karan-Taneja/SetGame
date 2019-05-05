import React from 'react';
import './shape.css';
import HalfCircle from '../assets/twotone-circle.js';
import HalfRhombus from '../assets/twotone-rhombus.js';

const Shape = (props) => {

  const symbols = {
    FU: {
      ST: (<div index={props.index}>
        <span index={props.index} className={`iconify ${props.color}`} data-icon="ant-design:star-fill" data-inline="false"></span>
      </div>),
      DM: (<div index={props.index}>
        <span index={props.index} className={`iconify ${props.color}`} data-icon="mdi:rhombus" data-inline="false"></span>
      </div>),
      CR: (<div index={props.index}>
        <span index={props.index} className={`iconify ${props.color}`} data-icon="emojione-monotone:red-circle" data-inline="false"></span>
      </div>),
    },
    HA: {
      ST: (<div index={props.index}>
        <span index={props.index} className={`iconify ${props.color}`} data-icon="ant-design:star-twotone" data-inline="false"></span>
      </div>),
      DM: (<div index={props.index}>
        <HalfRhombus index={props.index} color={props.color} data-inline="false"/>
       </div>),
      CR: (<div index={props.index}>
        <HalfCircle index={props.index} color={props.color} data-inline="false"/>
      </div>),
    },
    EM: {
      ST:(<div index={props.index}>
        <span index={props.index} className={`iconify ${props.color}`} data-icon="ant-design:star-outline" data-inline="false"></span>
      </div>),
      DM:(<div index={props.index}>
      <span index={props.index} className={`iconify ${props.color}`} data-icon="mdi:rhombus-outline" data-inline="false"></span>
      </div>),
      CR:(<div index={props.index}>
      <span index={props.index} className={`iconify ${props.color}`} data-icon="entypo:circle" data-inline="false"></span>
      </div>),
    }
  }

  
  const card = props.card;
  const sym = symbols[card.properties.fill][card.properties.shape]

  return <div>{sym}</div>;
}

export default Shape;
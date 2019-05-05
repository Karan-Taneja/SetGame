import React from 'react';

//Components
import HalfCircle from '../assets/twotone-circle.js';
import HalfRhombus from '../assets/twotone-rhombus.js';

//Iconify Components

import { Icon } from '@iconify/react';

//Circle
import circleIcon from '@iconify/react/entypo/circle';
import redCircle from '@iconify/react/emojione-monotone/red-circle';

//Diamond
import rhombusOutline from '@iconify/react/mdi/rhombus-outline';
import rhombusIcon from '@iconify/react/mdi/rhombus';

//Stars
import starOutline from '@iconify/react/ant-design/star-outline';
import starTwotone from '@iconify/react/ant-design/star-twotone';
import starFill from '@iconify/react/ant-design/star-fill';


//CSS
import './shape.css';

const Shape = (props) => {

  const symbols = {
    FU: {
      ST: (<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify" data-icon="ant-design:star-fill" data-inline="false">
          <Icon icon={starFill} />
        </span>
      </div>),
      DM: (<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify" data-icon="mdi:rhombus" data-inline="false">
          <Icon icon={rhombusIcon} />
        </span>
      </div>),
      CR: (<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify" data-icon="emojione-monotone:red-circle" data-inline="false">
          <Icon icon={redCircle} />
        </span>
      </div>),
    },
    HA: {
      ST: (<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify">
          <Icon icon={starTwotone} />
        </span>
      </div>),
      DM: (<div className={props.color} index={props.index}>
        <span>
          <HalfRhombus index={props.index} data-inline="false"/>
        </span>
       </div>),
      CR: (<div className={props.color} index={props.index}>
        <span>
          <HalfCircle index={props.index} data-inline="false"/>
        </span>
      </div>),
    },
    EM: {
      ST:(<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify" data-icon="ant-design:star-outline" data-inline="false">
          <Icon icon={starOutline} />
        </span>
      </div>),
      DM:(<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify">
          <Icon icon={rhombusOutline} />
        </span>
      </div>),
      CR:(<div className={props.color} index={props.index}>
        <span index={props.index} className="iconify">
          <Icon icon={circleIcon} />
        </span>
      </div>),
    }
  }
  const card = props.card;
  const sym = symbols[card.properties.fill][card.properties.shape]
  return <div>{sym}</div>;
}

export default Shape;
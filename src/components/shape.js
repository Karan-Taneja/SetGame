import React from 'react';

//Components
import Wrapper from './wrapper';
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
      ST: <Icon icon={starFill} />, DM: <Icon icon={rhombusIcon} />,
      CR: <Icon icon={redCircle} />,
    },
    HA:{
      ST: <Icon icon={starTwotone} />, DM: <HalfRhombus />,
      CR: <HalfCircle />,
    },
    EM: {
      ST: <Icon icon={starOutline} />, DM:<Icon icon={rhombusOutline} />,
      CR: <Icon icon={circleIcon} />,
    }
  }
  const card = props.card;
  const sym = symbols[card.properties.fill][card.properties.shape]
  return (<>
    <div>
      <Wrapper color={props.color}>
        {sym}
      </Wrapper>
    </div>
  </>);
}

export default Shape;
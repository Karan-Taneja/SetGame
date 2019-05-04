import React from 'react';
import './shape.css';

const Shape = (props) => {

  const symbols = {
    FU: {
      ST: (<div index={props.index}>
        <span index={props.index} className="iconify" data-icon="ant-design:star-fill" data-inline="false"></span>
      </div>),
      DM: (<div index={props.index}>
        <span index={props.index} className="iconify" data-icon="mdi:rhombus" data-inline="false"></span>
      </div>),
      CR: (<div index={props.index}>
        <span index={props.index} className="iconify" data-icon="emojione-monotone:red-circle" data-inline="false"></span>
      </div>),
    },
    HA: {
      ST: (<div>
        <span index={props.index} className="iconify half" data-icon="ant-design:star-fill" data-inline="false"></span>
      </div>),
      DM: (<div index={props.index}>
        <span index={props.index} className="iconify half" data-icon="mdi:rhombus" data-inline="false"></span>
      </div>),
      CR: (<div index={props.index}>
         <span index={props.index} className="iconify half" data-icon="emojione-monotone:red-circle" data-inline="false"></span>
      </div>),
    },
    EM: {
      ST:(<div index={props.index}>
        <span index={props.index} className="iconify" data-icon="ant-design:star-outline" data-inline="false"></span>
      </div>),
      DM:(<div index={props.index}>
      <span index={props.index} className="iconify" data-icon="mdi:rhombus-outline" data-inline="false"></span>
      </div>),
      CR:(<div className="rel">
      <span index={props.index} className="iconify" data-icon="emojione-monotone:hollow-red-circle" data-inline="false"></span>
      </div>),
    }
  }

  const sym = []
  const nums = {
    'ON':1,
    'TW':2,
    'TH':3
  }

  for(let i = 0; i < nums[props.num]; i++){
    sym.push(<div key={i}>
        {symbols[props.fill][props.shape]}
      </div>)
  }

  return <div className="d-flex flex-wrap">{sym}</div>;
}

export default Shape;
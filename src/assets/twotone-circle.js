import React from 'react';
const HalfCircle = (props) => {
  return (<span className={`icon-twotone-circle ${props.color}`}><span className="path1"></span><span className="path2"></span></span>);
};
export default HalfCircle;
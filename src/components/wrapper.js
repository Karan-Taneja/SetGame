import React from 'react';

const Wrapper = (props) => {
  return (<>
    <div className={props.color}>
      <span className="iconify">
        {props.children}
      </span>
    </div>
  </>)
}

export default Wrapper;
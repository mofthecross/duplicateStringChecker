import React from 'react';

export let Output = function(props) {
  return (
    <div className='outputbox'>
      <div className='character'>
        {props.value[0]}
      </div>
      <div className='characterCount'>
        {props.value[1]}
      </div>
    </div>
  )
};

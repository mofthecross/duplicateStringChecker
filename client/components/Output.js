import React from 'react';

export let Output = function(props) {
  return (
    <div>
      <div>
      {props.value[0].toUpperCase()}
      </div>
      <div>
      {props.value[1]}
      </div>
    </div>
  )
};

import React from 'react';
export let Output = function(props) {
  return (
    <div>
      <h2> this is an output </h2>
      {props.entry}
    </div>
  );
};

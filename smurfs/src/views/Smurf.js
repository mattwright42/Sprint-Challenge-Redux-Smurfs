import React from 'react';

import './ViewStyle.css';

function Smurf(props) {
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height}</p>
      <button className="button" onClick={() => props.editSmurf(props.smurf)}>
        Edit
      </button>
      <button
        className="button"
        onClick={event => props.deleteSmurf(props.smurf.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Smurf;

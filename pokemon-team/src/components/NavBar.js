import React from 'react';

export default function NavBar(props){

  return (
    <div>
     <button onClick={props.turnPageBackward}>Prev</button>
     <h2> Navbar</h2>
     <button onClick={props.turnPageForward}>Next</button>
    </div>
  )
}
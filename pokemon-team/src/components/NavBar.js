import React from 'react';

export default function NavBar(props){

  return (
    <div>
     <button onClick={props.setActivePage(props.prevPage)}>Prev</button>
     <h2> Navbar</h2>
     <button onClick={props.setActivePage(props.nextPage)}>Next</button>
    </div>
  )
}
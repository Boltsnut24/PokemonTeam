import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokemonCard(props) {
  console.log("PokemonCard", props.pokemon)
  const [pokemonData, setPokemonData] = useState([])

  // props.pokemon.map(poke => {
  //   useEffect(() => {
  //     axios.get(`${poke.url}`)
  //       .then(result => {
  //         console.log(result.data)
  //       })
  //       .catch(err => {
  //         console.error("Error: ", err);
  //       })
  //   }, [])
  // })

  return (
    <div>
      
     
            <div>
              <h4>{props.pokemon.name}</h4>
            </div>
          
        
      

    </div>
  )
}
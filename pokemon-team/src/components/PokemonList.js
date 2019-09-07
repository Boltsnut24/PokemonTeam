import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard.js';
import axios from 'axios';
import NavBar from './NavBar.js';

export default function PokemonList() {

  const [pokemonList, setPokemonList] = useState([]);
  const [activePage, setActivePage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    axios.get(activePage)
      .then(result => {
        setPokemonList(result.data.results);
        setNextPage(result.data.next);
        setPrevPage(result.data.previous);
      })
      .catch(err => {
        console.error("Error: ", err);
      })
  }, [activePage])

  function turnPageForward() {
    setActivePage(nextPage);
  }

  function turnPageBackward() {
    setActivePage(prevPage);
  }

  return (
    <div>
      <h2>PokemonList</h2>
      {
        pokemonList.map(poke => {
          console.log(poke);
          return (
            <PokemonCard pokemon={poke} />
          )
        })
      }
      <NavBar turnPageForward={turnPageForward} turnPageBackward={turnPageBackward} />
    </div>
  )
}
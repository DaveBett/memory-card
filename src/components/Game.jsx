import { useState, useEffect, use } from "react";
import Card from "./Card";

export default function Game( { increaseScore, resetScore } ) {
  const [clicked, setClicked] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokeId = [];
    while (pokeId.length < 12) {
      const newPokeId = getRandomInt(1, 151);
      
      if (!pokeId.includes(newPokeId)) {
        pokeId.push(newPokeId)
      }
    }
    setPokemon(pokeId);
  }, []);
  
  const handleClicked = (e) => {
    const id = e.currentTarget.id;

    if (!clicked.includes(id)) {
      increaseScore();
      setClicked([...clicked, id]);
    } else {
      resetScore();
      setClicked([]);
    }
  }; 

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  return (
    <div className="game-container">
      {shuffleArray(pokemon).map((poke) => (
        <Card key = {poke} id = {poke} onClick = {handleClicked} />
      ))}
    </div>
  )
}
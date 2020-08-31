import React from "react";

export const Pokecard = (props) => {
  return (
    <div>
      <div className="pokecard">
        <h3>{props.name}</h3>
        <div className='pokeImg'>
        <img src={props.img} alt="pokemon" />
        </div>
        <p>Type: {props.type}</p>
        <p>EXP: {props.exp}</p>
      </div>
    </div>
  );
};

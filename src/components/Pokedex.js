import React, { Component } from "react";
import { Pokecard } from "./Pokecard";

// takes a numbe if its greater then 999 then we dont pad it and just return a number
// `00${number}`.slice(-3) - here we taking two zeros + the number and
// slicing three digits out of that and returning the 3
// f.e. if we have number 2 we add 00 and slice 3 digits
// if f.e. is the number is 23 we gonna add 2 and slice the back 3
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

export default class Pokedex extends Component {
  static defaultProps = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          {Pokedex.defaultProps.map((element) => (
            <Pokecard
              key={element.id}
              name={element.name}
              type={element.type}
              exp={element.base_experience}
              img={`${POKE_API}${padToThree(element.id)}.png`}
            />
          ))}
        </div>
      </div>
    );
  }
}

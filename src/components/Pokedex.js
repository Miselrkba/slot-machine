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
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="winner">Winning hand</h1>;
    } else {
      title = <h1 className="looser">Loosing hand</h1>;
    }
    return (
      <div>
         {title}
        <h4>Total Exp: {this.props.exp}</h4>
       
        <div className="pokedex">
          {this.props.pokemon.map((element) => (
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

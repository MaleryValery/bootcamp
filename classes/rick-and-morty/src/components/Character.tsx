// import React from "react";
import { Character as CharacterType } from "../types/characters.types";
import CardProperty from "./CardProperty";
import CardTitle from "./CardTitle";

type CharacterProps = {
  character: CharacterType;
};

export default function Character({ character }: CharacterProps) {
  return (
    <li className="flex flex-col sm:flex-row overflow-hidden rounded-[0.5rem] bg-[#3C3E44] m-[13.5px] w-full sm:h-[220px] sm:w-[600px] shadow-lg">
      <div className="flex-[2_1_0] ">
        <img className="object-center object-cover m-0 h-[300px] sm:h-full w-full" src={character.image} />
      </div>
      <div className="p-[0.75rem] flex-[3_1_0] flex flex-col ">
        <CardTitle name={character.name} species={character.species} status={character.status} />
        <CardProperty className={'justify-center'} title="Last known location:" value={character.location.name} />
        <CardProperty  className={'justify-end'}  title="First seen in:" value={character.origin.name} />
      </div>
    </li>
  );
}

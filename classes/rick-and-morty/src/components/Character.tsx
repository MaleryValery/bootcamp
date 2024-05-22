// import React from "react";
import { Character as CharacterType } from "../types/characters.types";
import CardProperty from "./CardProperty";
import CardTitle from "./CardTitle";

type CharacterProps = {
  character: CharacterType;
};

export default function Character({ character }: CharacterProps) {
  return (
    <li className="flex flex-col sm:flex-row overflow-hidden rounded-[0.5rem] bg-[#3C3E44] m-[13.5px] w-full sm:h-[220px] sm:w-[600px]">
      <div className="sm:w-[38%]">
        <img className="object-center object-cover m-0 h-[300px] sm:h-full w-full" src={character.image} />
      </div>
      <div className="p-[0.75rem]">
        {/* <p>{character.status} - {character.species}</p> */}
        <CardTitle name={character.name} species={character.species} status={character.status} />
        <CardProperty title="Last known location:" value={character.location.name} />
        <CardProperty title="First seen in:" value={character.origin.name} />
      </div>
    </li>
  );
}

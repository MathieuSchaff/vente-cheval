import type { Horse } from "@/pages/index";
import React from "react";
type HorseCardProps = {
  horse: Horse;
};
export default function HorseCard({ horse }: HorseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2">{horse.nom}</h2>
        <p className="text-gray-700 text-base">{horse.description}</p>
      </div>
      <ul className="px-6 py-4">
        <li className="mb-2">
          <span className="font-bold mr-2">Race :</span>
          {horse.race}
        </li>
        <li className="mb-2">
          <span className="font-bold mr-2">Sexe :</span>
          {horse.sexe}
        </li>
        <li className="mb-2">
          <span className="font-bold mr-2">Couleur :</span>
          {horse.couleur}
        </li>
        <li className="mb-2">
          <span className="font-bold mr-2">Taille :</span>
          {horse.taille}
        </li>
        <li className="mb-2">
          <span className="font-bold mr-2">Âge :</span>
          {horse.âge}
        </li>
      </ul>
    </div>
  );
}

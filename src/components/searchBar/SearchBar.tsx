import { useState } from "react";
import { Horse } from "../interfaces/Horse";
import ChevalCard from "./ChevalCard";

interface Props {
  chevaux: Horse[];
}

export default function ChevauxList({ chevaux }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAttribute, setSortAttribute] = useState("nom");

  const sortedChevaux = [...chevaux].sort((a, b) =>
    a[sortAttribute] > b[sortAttribute] ? 1 : -1
  );

  const filteredChevaux = sortedChevaux.filter((cheval) =>
    cheval.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center mb-4">
        <label htmlFor="search" className="mr-4">
          Rechercher :
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-gray-400 border-2 rounded-lg p-2"
        />
        <label htmlFor="sort" className="ml-4">
          Trier par :
        </label>
        <select
          id="sort"
          value={sortAttribute}
          onChange={(e) => setSortAttribute(e.target.value)}
          className="border-gray-400 border-2 rounded-lg p-2 ml-2"
        >
          <option value="nom">Nom</option>
          <option value="race">Race</option>
          <option value="sexe">Sexe</option>
          <option value="couleur">Couleur</option>
          <option value="taille">Taille</option>
          <option value="age">Âge</option>
        </select>
      </div>
      <ul>
        {filteredChevaux.map((cheval) => (
          <li key={cheval.nom}>
            <ChevalCard cheval={cheval} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterTeams() {
  const [teamCount, setTeamCount] = useState('');
  const [teamNames, setTeamNames] = useState([]);

  const handleTeamCountChange = (e) => {
    setTeamCount(e.target.value);
    setTeamNames(Array(parseInt(e.target.value)).fill(''));
  };

  const handleTeamNameChange = (index, e) => {
    const newTeamNames = [...teamNames];
    newTeamNames[index] = e.target.value;
    setTeamNames(newTeamNames);
  };

  const handleSave = () => {
    // Implementar a lógica de salvar os nomes dos times
    console.log('Nomes dos times:', teamNames);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="number"
            id="teamCount"
            value={teamCount}
            onChange={handleTeamCountChange}
            min="0"
            placeholder="Quantidade de Times"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div>
          {teamNames.map((teamName, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                id={`teamName${index + 1}`}
                value={teamName}
                onChange={(e) => handleTeamNameChange(index, e)}
                placeholder={`Nome do Time ${index + 1}`}
                className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Link href="newchampionship">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16">
              Voltar
            </button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Link from 'next/link';

export default function DrawGroups() {
  const [groupCount, setGroupCount] = useState('');
  const [teamCountPerGroup, setTeamCountPerGroup] = useState('');
  const [groups, setGroups] = useState([]);

  const handleGroupCountChange = (e) => {
    setGroupCount(e.target.value);
    setGroups([]);
  };

  const handleTeamCountPerGroupChange = (e) => {
    setTeamCountPerGroup(e.target.value);
    setGroups([]);
  };

  const handleDrawGroups = () => {
    if (groupCount && teamCountPerGroup) {
      const newGroups = [];
      const totalTeams = parseInt(groupCount) * parseInt(teamCountPerGroup);
      const allTeams = Array.from({ length: totalTeams }, (_, index) => index + 1);
      for (let i = 0; i < parseInt(groupCount); i++) {
        const group = [];
        for (let j = 0; j < parseInt(teamCountPerGroup); j++) {
          const randomIndex = Math.floor(Math.random() * allTeams.length);
          group.push(allTeams[randomIndex]);
          allTeams.splice(randomIndex, 1);
        }
        newGroups.push(group);
      }
      setGroups(newGroups);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="number"
            id="groupCount"
            value={groupCount}
            onChange={handleGroupCountChange}
            min="0"
            placeholder="Quantidade de Grupos"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            id="teamCountPerGroup"
            value={teamCountPerGroup}
            onChange={handleTeamCountPerGroupChange}
            min="0"
            placeholder="Quantidade de Times por Grupo"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16" onClick={handleDrawGroups}>
            Sortear
          </button>
        </div>
        {groups.length > 0 && (
          <div>
            <h2>Grupos Sorteados:</h2>
            {groups.map((group, index) => (
              <div key={index}>
                <h3>Grupo {index + 1}:</h3>
                <ul>
                  {group.map((team, teamIndex) => (
                    <li key={teamIndex}>Time {team}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between mt-4">
          <Link href="newchampionship">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16">
              Voltar
            </button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

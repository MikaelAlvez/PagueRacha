import { useState } from 'react';
import Link from 'next/link';

export default function DrawPlayers() {
  const [playerCountPerTeam, setPlayerCountPerTeam] = useState('');
  const [teams, setTeams] = useState([]);

  const handlePlayerCountPerTeamChange = (e) => {
    setPlayerCountPerTeam(e.target.value);
    setTeams([]);
  };

  const handleDrawTeams = () => {
    if (playerCountPerTeam) {
      const totalPlayers = parseInt(playerCountPerTeam);
      const allPlayers = Array.from({ length: totalPlayers }, (_, index) => index + 1);
      const shuffledPlayers = shuffleArray(allPlayers);

      const newTeams = [];
      for (let i = 0; i < shuffledPlayers.length; i += totalPlayers) {
        newTeams.push(shuffledPlayers.slice(i, i + totalPlayers));
      }

      setTeams(newTeams);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  // Função para embaralhar um array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="number"
            id="playerCountPerTeam"
            value={playerCountPerTeam}
            onChange={handlePlayerCountPerTeamChange}
            min="0"
            placeholder="Quantidade de Jogadores por Time"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-72 h-16"
            onClick={handleDrawTeams}
          >
            Sortear Times
          </button>
        </div>
        {teams.length > 0 && (
          <div>
            <h2>Times Sorteados:</h2>
            {teams.map((team, index) => (
              <div key={index}>
                <h3>Time {index + 1}:</h3>
                <ul>
                  {team.map((player, playerIndex) => (
                    <li key={playerIndex}>Jogador {player}</li>
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
        </div>
      </div>
    </div>
  );
}

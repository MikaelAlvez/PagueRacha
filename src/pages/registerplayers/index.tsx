import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPlayers() {
  const [playerName, setPlayerName] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');
  const [playerLevel, setPlayerLevel] = useState('');
  const [players, setPlayers] = useState([]);

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handlePlayerPositionChange = (e) => {
    setPlayerPosition(e.target.value);
  };

  const handlePlayerLevelChange = (e) => {
    setPlayerLevel(e.target.value);
  };

  const handleAddPlayer = () => {
    if (playerName && playerPosition && playerLevel) {
      const newPlayer = {
        name: playerName,
        position: playerPosition,
        level: playerLevel,
      };
      setPlayers([...players, newPlayer]);
      setPlayerName('');
      setPlayerPosition('');
      setPlayerLevel('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="text"
            value={playerName}
            onChange={handlePlayerNameChange}
            placeholder="Nome do Jogador"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={playerPosition}
            onChange={handlePlayerPositionChange}
            placeholder="Posição do Jogador"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={playerLevel}
            onChange={handlePlayerLevelChange}
            placeholder="Nível do Jogador"
            className="ml-2 w-72 h-16 py-2 px-3 rounded border border-gray-400 text-black"
          />
        </div>
        {players.length > 0 && (
          <div>
            <h2>Jogadores Cadastrados:</h2>
            <ul>
              {players.map((player, index) => (
                <li key={index}>
                  Nome: {player.name}, Posição: {player.position}, Nível: {player.level}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <Link href="newchampionship">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16">
              Voltar
            </button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16" onClick={handleAddPlayer}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

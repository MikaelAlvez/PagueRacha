import { useState } from 'react';
import Link from 'next/link';

export default function GenerateGames() {
  const [groups, setGroups] = useState([]);
  const [games, setGames] = useState([]);

  const handleGenerateGames = () => {
    // Implemente a lógica para gerar jogos para cada grupo aqui
    const generatedGames = [];

    // Exemplo de geração de jogos fictícios
    groups.forEach((group, index) => {
      const groupGames = [];
      for (let i = 0; i < group.length - 1; i++) {
        for (let j = i + 1; j < group.length; j++) {
          groupGames.push(`Jogo ${i + 1} - Time ${group[i]} vs Time ${group[j]}`);
        }
      }
      generatedGames.push({ group: `Grupo ${index + 1}`, games: groupGames });
    });

    setGames(generatedGames);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16" onClick={handleGenerateGames}>
            Gerar Jogos
          </button>
        </div>
        {games.length > 0 && (
          <div>
            <h2>Jogos Gerados:</h2>
            {games.map((group, index) => (
              <div key={index}>
                <h3>{group.group}</h3>
                <ul>
                  {group.games.map((game, gameIndex) => (
                    <li key={gameIndex}>{game}</li>
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

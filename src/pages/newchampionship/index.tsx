import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-4">
          <Link href="registerteams">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Cadastrar Times
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="drawgroups">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Sortear Grupos
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="generategames">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Gerar Jogos
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="registerplayers">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Cadastrar Jogadores
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="drawplayers">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Sortear Jogadores
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-end mr-4 mb-4">
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-lg w-36 h-16">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

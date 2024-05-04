import Link from 'next/link';

export default function MenuLoad() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-4">
          <Link href="table">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Tabela
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="games">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Jogos
            </div>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="artillery">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
              Artilharia
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

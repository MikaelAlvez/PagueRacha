import { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [championshipName, setChampionshipName] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveChampionship = () => {
    console.log('Nome do campeonato:', championshipName);
    setIsOpen(false);
  };

  const handleFocusInput = () => {
    if (championshipName === 'Nome do campeonato') {
      setChampionshipName('');
    }
  };

  const handleBlurInput = () => {
    if (championshipName === '') {
      setChampionshipName('Nome do campeonato');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="mb-20">
          <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">
            Novo Campeonato
          </button>
        </div>
        <div>
          <Link href="loadChampionship">          
            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded cursor-pointer w-80 h-20 flex justify-center items-center text-lg text-black">Carregar Campeonato</div>
          </Link>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal} contentLabel="Nome do Campeonato" className="modal">
        <div className="modal-content">
          <input 
            type="text" 
            value={championshipName} 
            onChange={(e) => setChampionshipName(e.target.value)} 
            onFocus={handleFocusInput} 
            onBlur={handleBlurInput} 
            className="input" 
            placeholder="Nome do campeonato" 
          />
          <div className="button-container">
            <Link href="newchampionship">          
              <button onClick={handleSaveChampionship} className="button salvar">Salvar</button>
            </Link>
            <button onClick={handleCloseModal} className="button fechar">Fechar</button>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          width: 500px;
          max-width: 90%;
          margin: 0 auto;
          color: black;
          text-align: center;
        }
        .input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .button-container {
          display: flex;
          justify-content: space-between;
        }
        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button.salvar {
          background-color: #4caf50;
          color: white;
        }
        .button.salvar:hover {
          background-color: #45a049;
        }
        .button.fechar {
          background-color: #f44336;
          color: white;
        }
        .button.fechar:hover {
          background-color: #da190b;
        }
      `}</style>
    </div>
  );
}

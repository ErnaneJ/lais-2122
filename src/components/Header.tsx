import { useState } from 'react';
import headerLogo from '../assets/images/header_logo.svg';

const links = [
  {name: "Inicio", path: "/", status: true},
  {name: "Sobre Nós", path: "#sobre_nos", status: false},
  {name: "Cursos", path: "/curso/modulos", status: false},
  {name: "Parceiros", path: "/parceiros", status: false},
  {name: "Transparência", path: "/transparencia", status: false},
  {name: "Contato", path: "#contato", status: false},
];

export const Header = () => {

  const [showHeader, setShowHeader] = useState(false);
  
  return <>
    <header className="bg-white fixed top-0 text-eb_gray-500 body-font drop-shadow-md w-full z-50">
      <div className={`transition ease-in-out duration-300 container mx-auto p-2 flex flex-col xl:flex-row items-center ${showHeader ? "h-auto" : "h-20 md:h-16" } xl:h-auto overflow-hidden`}>
        <div className="flex w-full items-center justify-between">
          <a href="/" className="flex title-font font-medium items-center text-white mb-5 md:mb-4 md:mb-0">
            <img src={headerLogo} className="xl:mt-3" alt="Imagem de logo da plataforma Elder Book"/>
          </a>
          <button onClick={() => setShowHeader(!showHeader)} className={`xl:hidden text-black h-full flex flex-col items-start justify-start ${showHeader ? "-mt-5" : "pt-5" }`}>
            <span className="block w-8 h-0.5 bg-gray-600 mb-2"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </button>
        </div>
        
        <nav className="xl:ml-auto flex flex-wrap xl:flex-nowrap items-center text-base justify-center mb-5 xl:mb-0">
          {links.map((link, index) => (
            <a key={index} href={link.path} className={`min-w-max mr-5 font-semibold ${link.status ? "text-eb_pink hover:text-eb_gray-500" : "text-eb_gray-500 hover:text-eb_pink"} transition ease-in-out duration-300`}>{link.name}</a>
          ))}
        </nav>

        <form className="flex items-center w-60 mr-2 pb-3 xl:pb-0 xl:min-w-max">   
          <label htmlFor="search" className="sr-only">Buscar</label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-eb_pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="search" className="bg-eb_pink/10 outline-none text-eb_gray-500 text-sm rounded-full focus:ring-eb_pink focus:border-eb_pink block w-full pl-10 p-1.5" required/>
          </div>
        </form>

        <div className="flex items-center flex-col md:flex-row gap-2">
          <a href="#log_in" className="transition ease-in-out duration-300 inline-flex items-center font-semibold bg-white text-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-6 focus:outline-none hover:text-white hover:bg-eb_pink rounded-full text-base">
            Entrar
          </a>
          
          <a href="#sign_in" className="transition ease-in-out duration-300 inline-flex items-center font-semibold text-white bg-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-6 focus:outline-none hover:bg-white hover:text-eb_pink rounded-full text-base">
            Cadastrar
          </a>
        </div>
      </div>
    </header>
  </>;
}
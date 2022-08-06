import laisLogo from '../assets/images/lais_logo.svg';
import ufrnLogo from '../assets/images/ufrn_logo.svg';

export const Footer = () => {
  return <footer className="text-white bg-eb_gray-500 body-font w-full">
    <div className='w-full bg-eb_green'>
      <div className="container px-5 py-12 mx-auto gap-10 flex flex-col items-center justify-between">
        <h3 className="text-3xl font-normal">Realização</h3>
        <div className="flex gap-5 flex-col md:flex-row md:gap-16 items-center justiify-center">
          <img src={laisLogo} className="h-14 md:h-20" alt="Imagem de logo do Laboratório de Inovação Tecnológica em Saúde - LAIS"/>
          <img src={ufrnLogo} className="h-14 md:h-20" alt="Imagem de logo da Universidade Federal do Rio Grande do Norte - UFRN"/>
        </div>
      </div>
    </div>
    
    <div className="container pt-12 sm:pt-24 pb-21 mx-auto flex items-start justify-end flex-col gap-5 sm:gap-0 sm:flex-row">
      <div className="w-full flex items-start justify-end">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font mb-3 font-medium items-center justify-center text-white">
            <img src={laisLogo} className="h-8" alt="Imagem de logo do Laboratório de Inovação Tecnológica em Saúde - LAIS"/>
          </a>
          <p className="mt-2 text-sm text-center text-gray-400">Laboratório de Inovação <br/> Tecnológica em Saúde.</p>
        </div>
      </div>
      <div className="w-full items-start justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Links Úteis</h2>
          <nav className="list-none">
            <li className="flex flex-col items-center justify-center text-gray-400 hover:underline cursor-pointer text-sm mb-2"> <a href="#">Início</a> </li>
            <li className="flex flex-col items-center justify-center text-gray-400 hover:underline cursor-pointer text-sm mb-2"> <a href="#">Sobre Nós</a> </li>
            <li className="flex flex-col items-center justify-center text-gray-400 hover:underline cursor-pointer text-sm mb-2"> <a href="#">Módulos</a> </li>
            <li className="flex flex-col items-center justify-center text-gray-400 hover:underline cursor-pointer text-sm mb-2"> <a href="#">Parceiros</a> </li>
            <li className="flex flex-col items-center justify-center text-gray-400 hover:underline cursor-pointer text-sm mb-2"> <a href="#">Transparência</a> </li>
          </nav>
        </div>
      </div>
      <div className="w-full mb-5 sm:mb-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Reces Sociais</h2>
          <span className="inline-flex justify-center items-center gap-3">
            <a href="#facebook" className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#twitter" className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#instagram" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
    <div className="bg-eb_gray-500 bg-opacity-75">
      <p className="text-gray-400 px-2 text-sm text-center w-full py-5">
        2022 © LAIS (HUOL). Todos os direitos reservados
      </p>
    </div>
  </footer>;
}
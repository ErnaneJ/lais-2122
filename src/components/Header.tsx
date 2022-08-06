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
  return <header className="bg-white text-eb_gray body-font drop-shadow-md">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src={headerLogo} alt="Imagem de logo da plataforma Elder Book"/>
    </a>

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {links.map((link, index) => (
        <a key={index} href={link.path} className={`mr-5 font-semibold ${link.status ? "text-eb_pink hover:text-eb_gray" : "text-eb_gray hover:text-eb_pink"} transition ease-in-out duration-300`}>{link.name}</a>
      ))}
    </nav>

    <form className="flex items-center w-60 mr-2">   
      <label htmlFor="search" className="sr-only">Buscar</label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-eb_pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </div>
        <input type="text" id="search" className="bg-eb_pink/10 outline-none text-eb_gray text-sm rounded-full focus:ring-eb_pink focus:border-eb_pink block w-full pl-10 p-1.5" required/>
      </div>
    </form>

    <a href="#log_in" className="transition ease-in-out duration-300 inline-flex items-center font-semibold bg-white text-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-10 focus:outline-none hover:text-white hover:bg-eb_pink rounded-full text-base mt-4 md:mt-0">
      Entrar
    </a>
    
    <a href="#sign_in" className="transition ease-in-out duration-300 inline-flex items-center font-semibold text-white bg-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-10 focus:outline-none hover:bg-white hover:text-eb_pink rounded-full text-base mt-4 md:mt-0">
      Cadastrar
    </a>
  </div>
</header>;
}
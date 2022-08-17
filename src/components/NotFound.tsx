import pageNotFound from "../assets/images/page_not_found.svg";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="pagina nao encontrada" src={pageNotFound}/>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ops..! Não encontramos nada.</h1>
          <p className="mb-8 leading-relaxed">Não fique perdido por ai, volte para a página anterior, ou para o início, e vamos recomeçar.</p>
          <div className="flex justify-center">
            <button onClick={() => navigate("/")} className="inline-flex text-white bg-eb_pink/90 border-0 py-1 px-8 focus:outline-none hover:bg-eb_pink rounded text-lg">Início</button>
            <button onClick={() => window.history.back()} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Voltar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
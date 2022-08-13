import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Breadcrumb } from "../components/breadcrumb";
import { Parceiro } from "../types/parceiro";
import { getPartners } from "../services/api";

import bannerVector from "../assets/images/banner_vector.svg";

export const Parceiros = () => {
  const [allPartners, setAllPartners] = useState<Parceiro[]>([]);
  const [perPagePartners, setPerPagePartners] = useState<Parceiro[]>([]);

  const navigate = useNavigate();
  const perPage = 6;
  const page = parseInt(useParams<{ page: string }>().page || "1");

  const allPages = () => parseInt(String(parseInt(allPartners.length/perPage as any) > 0 ? allPartners.length/perPage : 1));

  useEffect(() => {
    const fetchAllPartners = async () => setAllPartners(await getPartners(`/parceiros`));
    const fetchPerPagePartners = async () => setPerPagePartners(await getPartners(`/parceiros?_page=${page}&_limit=${perPage}`));

    fetchAllPartners();
    fetchPerPagePartners();

  }, [page, perPage, navigate]);

  return <main className="pt-24">
    <Breadcrumb key={Math.random()} path={["Início", "Parceiros"]}/>

    <section className="text-gray-600 body-font">
      <div className="container px-2 md:px-5 pb-10 mx-auto">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="xl:text-3xl text-2xl font-semibold text-left title-font mb-4 text-eb_green">Nossos parceiros</h1>
          <p className="italic text-sm text-left title-font mb-4 text-gray-500">{perPagePartners.length} de {allPartners.length} resultados</p>
        </div>
        {
          perPagePartners.length > 0 ?
        <><div className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap flex-col rounded-lg">
            <div className="flex flex-wrap -m-4">
              {perPagePartners.map((partner:Parceiro) => {
                return (
                  <div key={partner.id} className="lg:w-1/3 lg:mb-0 mb-6 py-2 md:p-4 h-full">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-[350px] h-[200px]">
                        <img src={partner.capa} width="350" height="200" className="object-contain object-center w-full h-full" alt={`Imagem de capa do parceiro ${partner.titulo}`}/>
                      </div>
                      <span className="inline-block h-1 w-full rounded bg-eb_green"></span>
                      <h2 className="text-gray-600 text-2xl text-center font-semibold mt-5">{partner.titulo}</h2>
                    </div>
                  </div>
              )})}
            </div>
          </div>
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center gap-3 mt-10">
          <div className="flex px-3 justify-center gap-2 group">
            {new Array(allPages()).fill(0).map((_, index) => (
              <button 
                key={`button_page_${index}_${page}`}
                onClick={() => navigate(`/parceiros/${index + 1}`)}
                className={`relative transition-all delay-50 group ease-in-out h-3 rounded-full duration-300 
                  ${(page === (index + 1)) ? "w-10 bg-eb_pink" : "bg-eb_gray-400 w-3"} 
                  group-hover:w-3 group-hover:bg-eb_gray-400 hover:!bg-eb_pink hover:!w-10 overflow-hidden hover:overflow-visible
                `}>
                  <span className="ml-0.5 text-eb_pink text-sm absolute right-0 -top-5 w-full font-bold"
                  >{index+1}</span>
              </button>
            ))}
          </div>
          <p className="italic text-sm text-left title-font mb-4 text-gray-500 flex items-center justify-center gap-3">
           <button
            onClick={() => navigate(`/parceiros${page - 1 > 0 ? `/${page - 1}` : ""}`)}
            className="font-semibold text-eb_pink text-2xl"  
          >
           &lt;
          </button> 
            <span>Página {page} de {allPages()} </span>
          <button
            onClick={() => navigate(`/parceiros${page + 1 < allPages() ? `/${page + 1}` : ""}`)}
            className="font-semibold text-eb_pink text-2xl"  
          >
            &gt;
          </button>
          </p>
        </div></> :
         <>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 items-center justify-center flex-col">
              <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={bannerVector}/>
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
         </>
        }
      </div>
    </section>
  </main>;
}
import bannerVector from "../assets/images/banner_vector.svg";
import { useEffect, useState } from "react";
import { Breadcrumb } from "../components/breadcrumb";
import { Parceiro } from "../types/parceiro";
import { getPartners } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export const Parceiros = () => {
  const [allPartners, setAllPartners] = useState<Parceiro[]>([]);
  const [perPagePartners, setPerPagePartners] = useState<Parceiro[]>([]);

  const navigate = useNavigate();
  const perPage = 6;
  const page = parseInt(useParams<{ page: string }>().page || "1");

  const allPages = () => parseInt(String(allPartners.length/perPage));

  useEffect(() => {
    const fetchAllPartners = async () => setAllPartners(await getPartners(`/parceiros`));
    const fetchPerPagePartners = async () => setPerPagePartners(await getPartners(`/parceiros?_page=${page}&_limit=${perPage}`));

    fetchAllPartners();
    fetchPerPagePartners();

  }, [page, perPage, navigate]);

  return <main className="pt-24">
    <Breadcrumb/>

    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="xl:text-3xl text-2xl font-semibold text-left title-font mb-4 text-eb_green">Nossos parceiros</h1>
          <p className="italic text-sm text-left title-font mb-4 text-gray-500">{perPagePartners.length} de {allPartners.length} resultados</p>
        </div>
        {
          perPagePartners.length > 0 ?
        <><div className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col rounded-lg">
            <div className="flex flex-wrap -m-4">
              {perPagePartners.map((partner:Parceiro, index:number) => {
                return (
                  <div key={partner.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4 h-full">
                    <div className="h-full text-center">
                      <img src={partner.capa} alt="Pessoas conversando"/>
                      <span className="inline-block h-1 w-10 rounded bg-eb_green"></span>
                      <p className="text-eb_gray-300">{partner.titulo}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center gap-3">
          <div className="flex justify-center gap-2 group">
            {new Array<number>(allPages()).fill(0).map((_, index) => (
              <button 
                key={`button_page_${index}_${page}`}
                onClick={() => navigate(`/parceiros/${index + 1}`)}
                className={`transition-all group ease-in-out h-3 rounded-full duration-300 ${(page === (index + 1)) ? "w-10 bg-eb_pink" : "bg-eb_gray-400 w-3"} group-hover:w-3 group-hover:bg-eb_gray-400 hover:!bg-eb_pink hover:!w-10`}>
              </button>
            ))}
          </div>
          <p className="italic text-sm text-left title-font mb-4 text-gray-500">Página {page} de {allPages()}</p>
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
import { Breadcrumb } from "../components/breadcrumb";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Parceiro } from "../types/parceiro";
import { Curso } from "../types/curso";
import { getCurses, getPartners } from "../services/api";
import { sanitarizeString } from "../utils/helpers";

export const Search = () => {

  const [term] = useState<string>(useParams<{term: string }>().term || "");
  const [currentTab, setCurrentTab] = useState<string>("modulos");
  const [allModules, setAllModules] = useState<Curso[]>([]);
  const [allPartners, setAllPartners] = useState<Parceiro[]>([]);

  function filterAllPartners(partnes: Parceiro[]) {
    setAllPartners(partnes.filter(partner => {
      return (
        sanitarizeString(partner.titulo).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(partner.capa).toLowerCase().includes(sanitarizeString(term))
      )
    }));
  }

  function filterAllModules(modules : Curso[]){
    setAllModules(modules.filter(mod => {
      return (
        sanitarizeString(mod.cateroria).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.capa).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.titulo).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.resumo).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.sobre).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.objetivo_geral).toLowerCase().includes(sanitarizeString(term)) ||
        sanitarizeString(mod.objetivo_especifico).toLowerCase().includes(sanitarizeString(term))
      )
    }));
  }
  useEffect(() => {
    const fetchAllPartners = async () => filterAllPartners(await getPartners(`/parceiros`));
    const fetchAllModules = async () => filterAllModules(await getCurses(`/cursos`));

    fetchAllPartners();
    fetchAllModules();
  }, [currentTab]);

  return <main className="pt-24">
    <Helmet>
      <title>Elder Book - Busca</title>
    </Helmet>
    <div className="container mx-auto px-12">
      <Breadcrumb key={Math.random()} path={["Início", "Cursos", "Busca", term]}/>
    </div>
      <div className="container px-2 md:px-5 pb-10 mx-auto">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="xl:text-3xl text-2xl font-semibold text-center title-font mb-4 text-eb_green">Busca - "{term}"</h1>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap flex-col">
          <div className="flex flex-wrap mb-20">
            <button onClick={() => setCurrentTab("modulos")} className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-eb_pink ${currentTab == "modulos" ? "border-eb_pink text-eb_pink" : ""} tracking-wider rounded-t`}>
              Módulos disponíveis
            </button>
            <button onClick={() => setCurrentTab("parceiros")} className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none hover:text-eb_pink ${currentTab == "parceiros" ? "border-eb_pink text-eb_pink" : ""} tracking-wider`}>
              Parceiros
            </button>
          </div>
         
         <div>
            {currentTab === "modulos" && 
              <div className="flex flex-wrap -m-4">
                <p className="italic font-medium text-sm text-left title-font mb-6 text-gray-600">{allModules.length} módulos encontrados</p>
              </div>
            }

            {currentTab === "parceiros" && 
              <div className="flex flex-wrap -m-4">
                <p className="italic font-medium text-sm text-left title-font mb-6 text-gray-600">{allPartners.length} parceiros encontrados</p>
              </div>
            }
         </div>
        </div>
      </div>
  </main>;
}
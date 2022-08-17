import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Breadcrumb } from "../components/breadcrumb";
import { Curso } from "../types/curso";
import { getCurses } from "../services/api";
import { NotFound } from "../components/NotFound";
import { Loading } from "../components/Loading";
import { Helmet } from "react-helmet";
import { CurseCard } from "../components/CurseCard";

function getCategories(modules:Curso[]):string[]{
  let allCategories = modules.map((curso: Curso):string => curso.cateroria);
  allCategories = allCategories.filter((v, i, a) => a.indexOf(v) === i);

  return allCategories.sort((a:string, b:string):number =>  a < b ? -1 : a > b ? 1 : 0 );
}

export const Modulos = () => {
  const [allModules, setAllModules] = useState<Curso[]>([]);
  const [perPageModules, setPerPageModules] = useState<Curso[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Acessibilidade");
  const [capturedData, setCapturedData] = useState(false);

  const navigate = useNavigate();
  const perPage = 6;
  const page = parseInt(useParams<{ page: string }>().page || "1");

  const allPages = () => parseInt(String(parseInt(allModules.length/perPage as any) > 0 ? allModules.length/perPage : 1));

  useEffect(() => {
    const fetchCategories = async () => {
      const curses = await getCurses(`/cursos`);
      setCategories(getCategories(curses));
    };
    const fetchAllModulesByCategory = async () => {
      const curses = await getCurses(`/cursos?cateroria=${selectedCategory}`);
      setAllModules(curses);
    };
    const fetchPerPageModules = async () => setPerPageModules(await getCurses(`/cursos?cateroria=${selectedCategory}&_page=${page}&_limit=${perPage}`));

    fetchAllModulesByCategory();
    fetchCategories();
    fetchPerPageModules();
    setTimeout(() => setCapturedData(true), 500);
  }, [page, perPage, selectedCategory, navigate]);

  const handdleCategory = (category:string) => {
    setSelectedCategory(category);
    navigate(`/cursos/modulos/1`);
  }

  return <main className="pt-24">
    <Helmet>
      <title>Elder Book - Módulos educacionais</title>
    </Helmet>
    <div className="container mx-auto px-12">
      <Breadcrumb key={Math.random()} path={["Início", "Cursos", "Módulos"]}/>
    </div>

    <section className="text-gray-600 body-font">
      <div className="container px-2 md:px-5 pb-10 mx-auto">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="xl:text-3xl text-2xl font-semibold text-center title-font mb-4 text-eb_green">Módulos Educacionais</h1>
        </div>
        {!capturedData ? 
          (
            <div className="w-full -ml-10 mb-20 flex items-center justify-center">
              <Loading/>
            </div>
          ) : (
            perPageModules.length > 0 ?
              <>
              <div className="text-gray-600 body-font">
                <div className="container px-5 mx-auto flex flex-wrap flex-col rounded-lg">
                  <div className="hidden xl:flex flex-wrap mb-5 justify-start gap-6 text-md">
                    {categories.map((category: string) => (
                      <button key={category} onClick={() => handdleCategory(category)} className={`
                        pt-3 pb-1 w-1/11 relative justify-center xl:justify-start title-font
                        font-semibold flex items-center leading-none tracking-wider`}>
                        <span
                          className={`pb-2 border-b-4 ${selectedCategory === category ? "border-eb_pink" : "border-transparent"}`}
                        >{category} </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex xl:hidden relative flex-wrap justify-start gap-6 text-md mt-5 mb-10">
                    <label htmlFor="categories" className="sr-only">Categorias</label>
                    <select 
                      id="categories" 
                      onChange={e => setSelectedCategory(e.target.value) } 
                      value={selectedCategory}
                      className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-eb_pink focus:outline-none 
                        appearance-none"
                      >
                        {categories.map((category: string, index: number) => (
                          <option key={category} value={category}>{category}</option>
                        ))}

                    </select>
                    <span
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-eb_pink font-bold text-md"
                    > &#709;</span>
                  </div>

                  <p className="italic font-medium text-sm text-left title-font mb-6 text-gray-600">{perPageModules.length} de {allModules.length} resultados</p>
                  <div className="flex flex-wrap -m-4">
                    {perPageModules.map((curse:Curso) => {
                      return (
                        <CurseCard curse={curse}/>
                    )})}
                  </div>
                </div>
              </div>
              <div className="text-center w-full flex flex-col items-center justify-center gap-3 mt-10">
                <div className="flex px-3 justify-center gap-2 group">
                  {new Array(allPages()).fill(0).map((_, index) => (
                    <button 
                      key={`button_page_${index}_${page}`}
                      onClick={() => navigate(`/cursos/modulos/${index + 1}`)}
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
                  onClick={() => navigate(`/cursos/modulos${page - 1 > 0 ? `/${page - 1}` : ""}`)}
                  className="font-semibold text-eb_pink text-2xl"  
                >
                &lt;
                </button> 
                  <span>Página {page} de {allPages()} </span>
                <button
                  onClick={() => navigate(`/cursos/modulos${page + 1 < allPages() ? `/${page + 1}` : ""}`)}
                  className="font-semibold text-eb_pink text-2xl"  
                >
                  &gt;
                </button>
                </p>
              </div></> :
              <>
                <NotFound/>
              </>
          )
        }
      </div>
    </section>
  </main>;
}
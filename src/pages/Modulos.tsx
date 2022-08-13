import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Breadcrumb } from "../components/breadcrumb";
import { Curso } from "../types/curso";
import { getCurses } from "../services/api";
import { NotFound } from "../components/NotFound";

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


  }, [page, perPage, selectedCategory, navigate]);

  return <main className="pt-24">
    <Breadcrumb key={Math.random()} path={["Início", "Cursos", "Módulos"]}/>

    <section className="text-gray-600 body-font">
      <div className="container px-2 md:px-5 pb-10 mx-auto">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="xl:text-3xl text-2xl font-semibold text-center title-font mb-4 text-eb_green">Módulos Educacionais</h1>
        </div>
        {
          perPageModules.length > 0 ?
        <>
          <div className="text-gray-600 body-font">
            <div className="container px-5 mx-auto flex flex-wrap flex-col rounded-lg">
              <div className="hidden xl:flex flex-wrap mb-5 justify-start gap-6 text-md">
                {categories.map((category: string) => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`
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
                    <div className="p-4 w-full md:w-1/3" key={curse.id}>
                      <div className="h-full w-full rounded-2xl">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl" src={curse.capa} alt={`Imagem de capa do curso ${curse.titulo}`}/>
                        <div className="p-6">
                          <h1 className="title-font text-lg xl:text-2xl font-semibold text-gray-900 mb-3">{curse.titulo}</h1>
                          <h2 className="tracking-widest text-xs title-font font-semibold text-eb_green mb-2">{curse.parceiros}</h2>
                          <div className="flex flex-wrap items-center justify-between flex-row my-3">
                            <span className="flex w-fit gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] xl:w-[31px] xl:h-[25px]" viewBox="0 0 31 25" fill="none">
                                <path d="M9.68528 11.8674C11.266 11.8674 12.782 11.2422 13.8998 10.1294C15.0175 9.01666 15.6455 7.5074 15.6455 5.93369C15.6455 4.35998 15.0175 2.85072 13.8998 1.73794C12.782 0.625155 11.266 0 9.68528 0C8.10454 0 6.58855 0.625155 5.4708 1.73794C4.35305 2.85072 3.72511 4.35998 3.72511 5.93369C3.72511 7.5074 4.35305 9.01666 5.4708 10.1294C6.58855 11.2422 8.10454 11.8674 9.68528 11.8674ZM23.0957 11.8674C24.2812 11.8674 25.4182 11.3985 26.2565 10.5639C27.0948 9.72934 27.5658 8.5974 27.5658 7.41711C27.5658 6.23683 27.0948 5.10489 26.2565 4.2703C25.4182 3.43571 24.2812 2.96685 23.0957 2.96685C21.9101 2.96685 20.7731 3.43571 19.9348 4.2703C19.0965 5.10489 18.6255 6.23683 18.6255 7.41711C18.6255 8.5974 19.0965 9.72934 19.9348 10.5639C20.7731 11.3985 21.9101 11.8674 23.0957 11.8674ZM2.79383 14.0925C2.05286 14.0925 1.34224 14.3856 0.818294 14.9072C0.294349 15.4288 0 16.1363 0 16.8739V17.8011C0 17.8011 0 24.4765 9.68528 24.4765C19.3706 24.4765 19.3706 17.8011 19.3706 17.8011V16.8739C19.3706 16.1363 19.0762 15.4288 18.5523 14.9072C18.0283 14.3856 17.3177 14.0925 16.5767 14.0925H2.79383ZM19.1277 22.3174C20.1528 22.7312 21.4514 22.993 23.0949 22.993C30.9176 22.993 30.9176 17.0594 30.9176 17.0594V16.8739C30.9176 16.1364 30.6234 15.429 30.0996 14.9074C29.5758 14.3858 28.8654 14.0927 28.1246 14.0925H19.8228C20.4927 14.8656 20.8606 15.8529 20.8591 16.8739V17.8344L20.8584 17.8767C20.854 18.0207 20.8441 18.1644 20.8286 18.3077C20.7916 18.6387 20.7316 18.9669 20.649 19.2897C20.3669 20.3962 19.8479 21.429 19.1277 22.3174Z" fill="#7DC143"/>
                              </svg>
                              {Intl.NumberFormat('pt-BR').format(curse.matriculados)}
                            </span>

                            <span className="flex w-fit gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" viewBox="0 0 24 24" fill="none">
                                <path d="M12.2471 0C5.85382 0 0.652954 5.20086 0.652954 11.5941C0.652954 17.9874 5.85382 23.1882 12.2471 23.1882C18.6403 23.1882 23.8412 17.9874 23.8412 11.5941C23.8412 5.20086 18.6403 0 12.2471 0ZM17.7611 17.5911C17.5727 17.7795 17.3253 17.8743 17.078 17.8743C16.8307 17.8743 16.5832 17.7795 16.395 17.5911L11.564 12.7603C11.3823 12.5797 11.281 12.3341 11.281 12.0773V5.79706C11.281 5.26278 11.7137 4.83094 12.2471 4.83094C12.7805 4.83094 13.2132 5.26278 13.2132 5.79706V11.6773L17.7611 16.225C18.1388 16.6029 18.1388 17.2134 17.7611 17.5911Z" fill="#7DC143"/>
                              </svg>
                              {curse.duracao}
                            </span>

                            <div className="flex w-fit items-center gap-2 relative">
                              <span className="flex relative">
                                <div className="text-gray-300 text-2xl xl:text-4xl relative m-0 p-0">
                                  <div className="text-eb_green p-0 absolute block top-0 left-0 overflow-hidden" style={{width: `${(parseFloat(curse.avaliacao)/5) * 100}%`}}>
                                    <span className="inline-block">🟊🟊🟊🟊🟊</span>
                                  </div>
                                  <div className="p-0 block">
                                    <span className="inline-block">🟊🟊🟊🟊🟊</span>
                                  </div>
                                </div>
                              </span>
                              {curse.avaliacao}
                            </div>
                          </div>
                          <p className="leading-relaxed mb-3 curse-line-clamp text-ellipsis overflow-hidden">{curse.resumo}</p>
                          <div className="flex items-center w-full justify-end flex-wrap">
                            <a href={`/cursos/modulo/${curse.titulo}`} className="text-eb_pink hover:underline decoration-eb_pink font-semibold inline-flex items-center md:mb-2 lg:mb-0">Ver curso</a>
                          </div>
                        </div>
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
        }
      </div>
    </section>
  </main>;
}
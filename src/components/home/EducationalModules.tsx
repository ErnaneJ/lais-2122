import { useEffect, useState } from "react";
import { Curso } from '../../types/curso';
import { getCurses } from "../../services/api";

const orderBybestRatedCourses = (curses:Curso[]):Curso[] => {
  return curses.sort((curseA, curseB) => {
    return parseFloat(curseB.avaliacao) - parseFloat(curseA.avaliacao);
  });
}

const orderBymostPopularCourses = (curses:Curso[]):Curso[] => {
  return curses.sort((curseA, curseB) => {
    return curseB.matriculados - curseA.matriculados;
  });
}

const orderBylatestCourses = (curses:Curso[]):Curso[] => {
  return curses.sort((curseA, curseB) => {
    const dataCurseA:string = curseA.criado_em.split('/').reverse().join('');
    const dataCurseB:string = curseB.criado_em.split('/').reverse().join('');
    return (dataCurseB > dataCurseA ? 1 : dataCurseB < dataCurseA ? -1 : 0);
  });
}

const orderCursesBy = [ orderBymostPopularCourses, orderBybestRatedCourses, orderBylatestCourses];

export const EducationalModules = () => {
  const [activeTabCurse, setActiveTabCurse] = useState(0);
  const [allCurses, setAllCurses] = useState<Curso[]>([]);

  useEffect(() => {
    const fetchCurses = async () => setAllCurses(await getCurses());

    fetchCurses();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="xl:text-3xl text-2xl font-semibold text-center title-font mb-4 text-eb_green">Módulos Educacionais</h1>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap flex-col">
            <div className="flex flex-wrap mb-5 justify-start max-w-screen">
              <button onClick={() => setActiveTabCurse(0)} className={`xl:px-6 py-3 w-1/3 xl:w-auto justify-center xl:justify-start border-b-2 title-font font-semibold inline-flex items-center leading-none ${activeTabCurse === 0 ? "border-eb_pink" : "border-transparent"} text-gray-900 tracking-wider rounded-t`}>
                Mais populares
              </button>
              <button onClick={() => setActiveTabCurse(1)} className={`xl:px-6 py-3 w-1/3 xl:w-auto justify-center xl:justify-start border-b-2 title-font font-semibold inline-flex items-center leading-none ${activeTabCurse === 1 ? "border-eb_pink" : "border-transparent"} text-gray-900 tracking-wider`}>
                Mais bem avaliados
              </button>
              <button onClick={() => setActiveTabCurse(2)} className={`xl:px-6 py-3 w-1/3 xl:w-auto justify-center xl:justify-start border-b-2 title-font font-semibold inline-flex items-center leading-none ${activeTabCurse === 2 ? "border-eb_pink" : "border-transparent"} text-gray-900 tracking-wider`}>
                Mais recentes
              </button>
            </div>
            <div className="text-gray-600 body-font max-w-screen">
              <div className="container px-5 flex flex-col gap-5">
                {orderCursesBy[activeTabCurse](allCurses).slice(0, 3).map((curse:Curso) => (
                  <div key={curse.id} className="flex items-center justify-center w-full bg-eb_gray-200 p-4 xl:flex-row rounded-2xl flex-col">
                    <img src={curse.capa} className="w-full md:w-[120px] h-[120px] rounded-2xl object-cover object-center xl:mr-5" alt={`Imagem de capa do curso ${curse.titulo}`}/>
                    <div className="flex-grow xl:text-left text-center mt-6 xl:mt-0 w-full xl:w-1/2 mb-5 xl:mb-0">
                      <h2 className="text-gray-900 text-md xl:text-xl title-font font-semibold mb-2 w-full">{curse.titulo}</h2>
                      <span className="text-eb_green text-sm font-medium inline-flex items-center"> {curse.parceiros} </span>
                    </div>
                    <div className="flex items-center justify-end gap-5 w-full xl:w-1/2 flex-col xl:flex-row">
                      <div className="flex gap-5">
                        <span className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">
                            <path d="M9.68528 11.8674C11.266 11.8674 12.782 11.2422 13.8998 10.1294C15.0175 9.01666 15.6455 7.5074 15.6455 5.93369C15.6455 4.35998 15.0175 2.85072 13.8998 1.73794C12.782 0.625155 11.266 0 9.68528 0C8.10454 0 6.58855 0.625155 5.4708 1.73794C4.35305 2.85072 3.72511 4.35998 3.72511 5.93369C3.72511 7.5074 4.35305 9.01666 5.4708 10.1294C6.58855 11.2422 8.10454 11.8674 9.68528 11.8674ZM23.0957 11.8674C24.2812 11.8674 25.4182 11.3985 26.2565 10.5639C27.0948 9.72934 27.5658 8.5974 27.5658 7.41711C27.5658 6.23683 27.0948 5.10489 26.2565 4.2703C25.4182 3.43571 24.2812 2.96685 23.0957 2.96685C21.9101 2.96685 20.7731 3.43571 19.9348 4.2703C19.0965 5.10489 18.6255 6.23683 18.6255 7.41711C18.6255 8.5974 19.0965 9.72934 19.9348 10.5639C20.7731 11.3985 21.9101 11.8674 23.0957 11.8674ZM2.79383 14.0925C2.05286 14.0925 1.34224 14.3856 0.818294 14.9072C0.294349 15.4288 0 16.1363 0 16.8739V17.8011C0 17.8011 0 24.4765 9.68528 24.4765C19.3706 24.4765 19.3706 17.8011 19.3706 17.8011V16.8739C19.3706 16.1363 19.0762 15.4288 18.5523 14.9072C18.0283 14.3856 17.3177 14.0925 16.5767 14.0925H2.79383ZM19.1277 22.3174C20.1528 22.7312 21.4514 22.993 23.0949 22.993C30.9176 22.993 30.9176 17.0594 30.9176 17.0594V16.8739C30.9176 16.1364 30.6234 15.429 30.0996 14.9074C29.5758 14.3858 28.8654 14.0927 28.1246 14.0925H19.8228C20.4927 14.8656 20.8606 15.8529 20.8591 16.8739V17.8344L20.8584 17.8767C20.854 18.0207 20.8441 18.1644 20.8286 18.3077C20.7916 18.6387 20.7316 18.9669 20.649 19.2897C20.3669 20.3962 19.8479 21.429 19.1277 22.3174Z" fill="#7DC143"/>
                          </svg>
                          {Intl.NumberFormat('pt-BR').format(curse.matriculados)}
                        </span>

                        <span className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.2471 0C5.85382 0 0.652954 5.20086 0.652954 11.5941C0.652954 17.9874 5.85382 23.1882 12.2471 23.1882C18.6403 23.1882 23.8412 17.9874 23.8412 11.5941C23.8412 5.20086 18.6403 0 12.2471 0ZM17.7611 17.5911C17.5727 17.7795 17.3253 17.8743 17.078 17.8743C16.8307 17.8743 16.5832 17.7795 16.395 17.5911L11.564 12.7603C11.3823 12.5797 11.281 12.3341 11.281 12.0773V5.79706C11.281 5.26278 11.7137 4.83094 12.2471 4.83094C12.7805 4.83094 13.2132 5.26278 13.2132 5.79706V11.6773L17.7611 16.225C18.1388 16.6029 18.1388 17.2134 17.7611 17.5911Z" fill="#7DC143"/>
                          </svg>
                          {curse.duracao}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="flex">
                          <div className="text-gray-300 text-4xl relative m-0 p-0">
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

                      <a href={`/cursos/modulo/${curse.id}`} className="transition ease-in-out duration-300 inline-flex items-center font-semibold text-white bg-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-6 focus:outline-none hover:bg-white hover:text-eb_pink rounded-full text-base">
                        Ver Módulo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <a href={`/cursos/modulos`} className="w-4/5 md:w-3/4 lg:w-1/3 transition ease-in-out duration-300 flex items-center justify-center font-semibold text-white bg-eb_pink border-[1px] mr-2 border-eb_pink py-1 px-6 focus:outline-none hover:bg-white hover:text-eb_pink rounded-full">
            Ver Mais
          </a>
        </div>
      </div>
    </section>
  );
}
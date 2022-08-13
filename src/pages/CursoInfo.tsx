import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/breadcrumb";
import { getCurses } from "../services/api";
import { Curso } from "../types/curso";


export const CursoInfo = () => {
  const [currentCurse, setCurrentCurse] = useState<Curso>();
  const [titleCurseQuery] = useState<string>(useParams<{modulo: string }>().modulo || "");
  const [bannerImage, setBannerImage] = useState<string>("");

  useEffect(() => {
    const fetchModuleByTitle = async () => {
      const [curse] = await getCurses(`/cursos?titulo=${titleCurseQuery}`);
      setCurrentCurse(curse);
      setBannerImage(curse.capa);
      console.log(curse);
    };
   
    fetchModuleByTitle();
  }, []);
  
  if(currentCurse === undefined) return <></>;

  return (
    <main>
      <section className={`pt-24 text-gray-600 relative body-font bg-center bg-origin-border bg-center bg-no-repeat bg-cover -z-10`} style={{backgroundImage: `url("${bannerImage}")`}}>
        <div className="w-full absolute top-0 left-0 right-0 bottom-0 bg-eb_green mix-blend-multiply -z-10"></div>
        <div className="container px-5 mx-auto pb-12 flex flex-wrap items-center mix-blend-normal z-20">
          <div className="w-full md:pr-16 lg:pr-0 pr-0">
            <Breadcrumb key={Math.random()} path={["Início", "Cursos", "Módulo", currentCurse.titulo]} textColor="white"/>
            <h1 className="title-font font-semibold text-2xl md:text-3xl xl:text-4xl text-white mt-4">{currentCurse.titulo}</h1>
            <p className="leading-relaxed mt-6 font-medium text-lg md:text-xl text-white">{currentCurse.parceiros}</p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 my-10 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2 className="sm:text-3xl text-2xl font-semibold title-font mb-8 text-eb_green">Informações Gerais do Curso</h2>
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <div className="flex flex-col xl:flex-row items-center justify-end gap-8 w-full font-bold">
                <span className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.2471 0C5.85382 0 0.652954 5.20086 0.652954 11.5941C0.652954 17.9874 5.85382 23.1882 12.2471 23.1882C18.6403 23.1882 23.8412 17.9874 23.8412 11.5941C23.8412 5.20086 18.6403 0 12.2471 0ZM17.7611 17.5911C17.5727 17.7795 17.3253 17.8743 17.078 17.8743C16.8307 17.8743 16.5832 17.7795 16.395 17.5911L11.564 12.7603C11.3823 12.5797 11.281 12.3341 11.281 12.0773V5.79706C11.281 5.26278 11.7137 4.83094 12.2471 4.83094C12.7805 4.83094 13.2132 5.26278 13.2132 5.79706V11.6773L17.7611 16.225C18.1388 16.6029 18.1388 17.2134 17.7611 17.5911Z" fill="#7DC143"/>
                  </svg>
                  {currentCurse.duracao} horas
                </span>

                <span className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <g clipPath="url(#clip0_11_2447)">
                      <path d="M5.50144 0.91058C5.50144 0.728196 5.42899 0.553282 5.30002 0.424317C5.17106 0.295352 4.99614 0.2229 4.81376 0.2229C4.63137 0.2229 4.45646 0.295352 4.3275 0.424317C4.19853 0.553282 4.12608 0.728196 4.12608 0.91058V1.59826H2.75072C2.02118 1.59826 1.32153 1.88807 0.805667 2.40393C0.289807 2.91979 0 3.61944 0 4.34898L0 5.72434H22.0058V4.34898C22.0058 3.61944 21.7159 2.91979 21.2001 2.40393C20.6842 1.88807 19.9846 1.59826 19.255 1.59826H17.8797V0.91058C17.8797 0.728196 17.8072 0.553282 17.6783 0.424317C17.5493 0.295352 17.3744 0.2229 17.192 0.2229C17.0096 0.2229 16.8347 0.295352 16.7057 0.424317C16.5768 0.553282 16.5043 0.728196 16.5043 0.91058V1.59826H5.50144V0.91058ZM22.0058 19.4779V7.0997H0V19.4779C0 20.2075 0.289807 20.9071 0.805667 21.423C1.32153 21.9388 2.02118 22.2287 2.75072 22.2287H19.255C19.9846 22.2287 20.6842 21.9388 21.2001 21.423C21.7159 20.9071 22.0058 20.2075 22.0058 19.4779ZM14.9282 12.4003L10.8021 16.5264C10.7382 16.5905 10.6623 16.6413 10.5788 16.6759C10.4952 16.7106 10.4056 16.7284 10.3152 16.7284C10.2247 16.7284 10.1352 16.7106 10.0516 16.6759C9.96808 16.6413 9.8922 16.5905 9.82832 16.5264L7.76528 14.4634C7.63615 14.3342 7.56361 14.1591 7.56361 13.9765C7.56361 13.7939 7.63615 13.6187 7.76528 13.4896C7.89441 13.3605 8.06954 13.2879 8.25216 13.2879C8.43477 13.2879 8.60991 13.3605 8.73903 13.4896L10.3152 15.0672L13.9544 11.4266C14.0835 11.2975 14.2587 11.2249 14.4413 11.2249C14.6239 11.2249 14.799 11.2975 14.9282 11.4266C15.0573 11.5557 15.1298 11.7308 15.1298 11.9135C15.1298 12.0961 15.0573 12.2712 14.9282 12.4003Z" fill="#7DC143"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_11_2447">
                        <rect width="22.0058" height="22.0058" fill="white" transform="translate(0 0.2229)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  Desde {currentCurse.criado_em}
                </span>

                <span className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path d="M9.19138 11.2622C10.6915 11.2622 12.1302 10.6689 13.1909 9.61289C14.2517 8.55685 14.8476 7.12456 14.8476 5.6311C14.8476 4.13764 14.2517 2.70535 13.1909 1.64931C12.1302 0.593275 10.6915 0 9.19138 0C7.69125 0 6.25257 0.593275 5.19182 1.64931C4.13107 2.70535 3.53515 4.13764 3.53515 5.6311C3.53515 7.12456 4.13107 8.55685 5.19182 9.61289C6.25257 10.6689 7.69125 11.2622 9.19138 11.2622ZM21.9179 11.2622C23.043 11.2622 24.122 10.8172 24.9176 10.0252C25.7131 9.23319 26.1601 8.15897 26.1601 7.03888C26.1601 5.91878 25.7131 4.84456 24.9176 4.05253C24.122 3.26051 23.043 2.81555 21.9179 2.81555C20.7928 2.81555 19.7138 3.26051 18.9182 4.05253C18.1227 4.84456 17.6757 5.91878 17.6757 7.03888C17.6757 8.15897 18.1227 9.23319 18.9182 10.0252C19.7138 10.8172 20.7928 11.2622 21.9179 11.2622ZM2.65136 13.3739C1.94817 13.3739 1.27379 13.652 0.776565 14.147C0.279339 14.642 0 15.3134 0 16.0134V16.8933C0 16.8933 0 23.2283 9.19138 23.2283C18.3828 23.2283 18.3828 16.8933 18.3828 16.8933V16.0134C18.3828 15.3134 18.1034 14.642 17.6062 14.147C17.109 13.652 16.4346 13.3739 15.7314 13.3739H2.65136ZM18.1523 21.1793C19.1251 21.572 20.3575 21.8205 21.9172 21.8205C29.341 21.8205 29.341 16.1894 29.341 16.1894V16.0134C29.341 15.3135 29.0618 14.6422 28.5647 14.1472C28.0676 13.6522 27.3934 13.3741 26.6903 13.3739H18.8119C19.4477 14.1075 19.7968 15.0445 19.7954 16.0134V16.925L19.7947 16.9651C19.7905 17.1017 19.7811 17.2381 19.7664 17.3741C19.7314 17.6883 19.6744 17.9997 19.596 18.306C19.3283 19.3561 18.8358 20.3362 18.1523 21.1793Z" fill="#7DC143"/>
                  </svg>
                  {Intl.NumberFormat('pt-BR').format(currentCurse.matriculados)} alunos matriculados
                </span>              

                <div className="flex flex-col xl:flex-row items-center gap-2">
                  <span className="flex">
                    <div className="text-gray-300 text-3xl relative m-0 p-0">
                      <div className="text-eb_green p-0 absolute block top-0 left-0 overflow-hidden" style={{width: `${(parseFloat(currentCurse.avaliacao)/5) * 100}%`}}>
                        <span className="inline-block">🟊🟊🟊🟊🟊</span>
                      </div>
                      <div className="p-0 block">
                        <span className="inline-block">🟊🟊🟊🟊🟊</span>
                      </div>
                    </div>
                  </span>
                  {currentCurse.avaliacao} ({Intl.NumberFormat('pt-BR').format(currentCurse.numero_avaliacoes)} avaliações)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mb-5 mx-auto">
          <div className="flex flex-col w-full">
            <h3 className="sm:text-2xl text-xl text-center font-semibold title-font mb-8 text-eb_green">Sobre o curso</h3>
            <p className="w-full mx-auto leading-relaxed text-base text-justify">
              {currentCurse.sobre}
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mb-5 mx-auto">
          <div className="flex flex-col w-full">
            <h3 className="sm:text-2xl text-xl text-center font-semibold title-font mb-8 text-eb_green">Objetivos</h3>
            <div className="w-full mx-auto leading-relaxed text-base text-justify">
              <div className="mb-4">
                <h4 className="font-bold mb-2">Objetivo Geral</h4>
                <p>{currentCurse.objetivo_geral ? currentCurse.objetivo_geral : "-"}</p>
              </div> 
              <div className="mb-4">
                <h4 className="font-bold mb-2">Objetivos Específicos</h4>
                <ul className="list-disc ml-6">
                  {currentCurse.objetivo_especifico ? currentCurse.objetivo_especifico.split('-').filter((el) => el !== '').map((objetivo:string) => (
                    <li key={Math.random()}>{objetivo}</li>
                  )) : <span className="-ml-6">-</span>}
                </ul>
              </div>   
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mb-5 mx-auto">
          <div className="flex flex-col w-full">
            <h3 className="sm:text-2xl text-xl text-center font-semibold title-font mb-8 text-eb_green">Recursos Educacionais</h3>
            <p className="w-full mx-auto leading-relaxed text-base text-center">
              Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 mb-28 body-font">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-col w-full">
            <h3 className="sm:text-2xl text-xl text-center font-semibold title-font mb-8 text-eb_green">Créditos</h3>
            <div className="w-full mx-auto leading-relaxed flex flex-col xl:flex-row items-center justify-center gap-5 max-w-full">
              {currentCurse.creditos.map((credito) => (
                <img key={Math.random()}  className="h-[114px] w-[248]" src={credito.capa} alt={`Imagem de capa - ${credito.titulo}`}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
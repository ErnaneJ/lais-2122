import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "../components/breadcrumb";
import { getTransparency } from "../services/api";
import { Transparencia as transparenciaType } from "../types/transparencia";

export const Transparencia = () => {
  const [transparencia, setTransparencia] = useState<transparenciaType>();
  const [rangeDataMap, setRangeDataMap] = useState<any[]>([]);
  const [rangeDataDonut, setRangeDataDonut] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransparencyData = async () => {
      const transparencyData = await getTransparency(`/transparecia`);
      setTransparencia(transparencyData);

      const maxNumber = Math.max(...transparencyData.usuarios_por_estado.map(data => data.usuarios_totais)); 
      setRangeDataMap(
        [
          {label: `Menor ou igual à ${Intl.NumberFormat('pt-BR').format(parseInt((maxNumber / 4) as any))} usuários.` , color: '#FFFFFF'},
          {label: `Entre ${Intl.NumberFormat('pt-BR').format(parseInt((maxNumber / 4)  as any ))} e ${Intl.NumberFormat('pt-BR').format(parseInt(2 * (maxNumber / 4)  as any ))} usuários.`, color: '#7DC143'},
          {label: `Entre ${Intl.NumberFormat('pt-BR').format(parseInt(2 * (maxNumber / 4)  as any ))} e ${Intl.NumberFormat('pt-BR').format(parseInt(3 * (maxNumber / 4)  as any ))} usuários.`, color: '#D16FFF'},
          {label: `Maior ou igual à ${Intl.NumberFormat('pt-BR').format(parseInt(3 * (maxNumber / 4)  as any ))} usuários.`, color: '#2F2E41'}
        ]
      );

      let colors = ['#FFFFFF', '#7DC143', '#D16FFF', '#2F2E41'];
      setRangeDataDonut(transparencyData.usuarios_por_curso.map((data, index) => {
        return {
          label: data.curso,
          value: data.usuarios,
          color: colors[index]
        }
      }));
    };

    fetchTransparencyData();
  }, []);
  
  if(transparencia === undefined) return <></>;

  return (
    <main>
      <Helmet>
        <title>Elder Book - Transparência</title>
      </Helmet>
      <section id="transparencia" className="pt-24 text-gray-600 relative body-font">
        <div className="container px-5 mx-auto pb-8 flex flex-wrap items-center">
          <div className="w-full  md:pr-16 lg:pr-0 pr-0">
            <Breadcrumb key={Math.random()} path={["Início", "Transparência"]} textColor="gray-200"/>
            <h1 className="title-font font-semibold text-center text-2xl md:text-3xl xl:text-4xl text-eb_green mt-4">Transparência</h1>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="p-4 w-full">
            <div className="flex flex-col rounded-lg shadow-md bg-eb_gray-200 p-8">
              <h2 className="text-eb_green text-center text-3xl title-font font-medium mb-8">Dados Gerais</h2>

              <div className="w-full flex flex-wrap items-center justify-center">
                <div className="w-full mb-5 flex-col lg:w-1/4 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                      <path d="M7.91395 9.69697C9.20559 9.69697 10.4443 9.18615 11.3576 8.27688C12.271 7.36761 12.7841 6.13438 12.7841 4.84848C12.7841 3.56259 12.271 2.32936 11.3576 1.42009C10.4443 0.510821 9.20559 0 7.91395 0C6.62231 0 5.38358 0.510821 4.47025 1.42009C3.55693 2.32936 3.04383 3.56259 3.04383 4.84848C3.04383 6.13438 3.55693 7.36761 4.47025 8.27688C5.38358 9.18615 6.62231 9.69697 7.91395 9.69697ZM18.8717 9.69697C19.8405 9.69697 20.7695 9.31386 21.4545 8.6319C22.1395 7.94995 22.5243 7.02503 22.5243 6.06061C22.5243 5.09618 22.1395 4.17126 21.4545 3.48931C20.7695 2.80736 19.8405 2.42424 18.8717 2.42424C17.903 2.42424 16.9739 2.80736 16.289 3.48931C15.604 4.17126 15.2191 5.09618 15.2191 6.06061C15.2191 7.02503 15.604 7.94995 16.289 8.6319C16.9739 9.31386 17.903 9.69697 18.8717 9.69697ZM2.28287 11.5152C1.67742 11.5152 1.09676 11.7546 0.668637 12.1808C0.240516 12.607 0 13.1851 0 13.7879V14.5455C0 14.5455 0 20 7.91395 20C15.8279 20 15.8279 14.5455 15.8279 14.5455V13.7879C15.8279 13.1851 15.5874 12.607 15.1593 12.1808C14.7311 11.7546 14.1505 11.5152 13.545 11.5152H2.28287ZM15.6294 18.2358C16.4671 18.5739 17.5282 18.7879 18.8711 18.7879C25.2632 18.7879 25.2632 13.9394 25.2632 13.9394V13.7879C25.2632 13.1852 25.0227 12.6072 24.5947 12.181C24.1667 11.7548 23.5862 11.5153 22.9809 11.5152H16.1974C16.7448 12.1468 17.0454 12.9536 17.0442 13.7879V14.5727L17.0436 14.6073C17.04 14.7249 17.0319 14.8424 17.0193 14.9594C16.9891 15.2299 16.9401 15.498 16.8725 15.7618C16.642 16.666 16.218 17.5099 15.6294 18.2358Z" fill="#7DC143"/>
                    </svg>
                    Total de usuários registrados
                  </span>
                  <strong className="text-2xl md:text-2xl md:text-3xl text-eb_green mt-2">{Intl.NumberFormat('pt-BR').format(transparencia.dados_gerais.usuarios_registrados)}</strong>
                </div>
                <div className="w-full mb-5 flex-col lg:w-1/4 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <path d="M10.25 4.625V0.25H5.875C5.37772 0.25 4.90081 0.447544 4.54917 0.799175C4.19754 1.15081 4 1.62772 4 2.125V5.50875C5.56293 5.06417 7.2328 5.18755 8.71342 5.857C10.194 6.52646 11.3897 7.6987 12.0882 9.16581C12.7868 10.6329 12.9432 12.3 12.5295 13.8714C12.1159 15.4428 11.1591 16.8169 9.82875 17.75H14.625C15.1223 17.75 15.5992 17.5525 15.9508 17.2008C16.3025 16.8492 16.5 16.3723 16.5 15.875V6.5H12.125C11.6277 6.5 11.1508 6.30246 10.7992 5.95083C10.4475 5.59919 10.25 5.12228 10.25 4.625ZM11.5 4.625V0.5625L16.1875 5.25H12.125C11.9592 5.25 11.8003 5.18415 11.6831 5.06694C11.5658 4.94973 11.5 4.79076 11.5 4.625ZM5.875 17.75C6.61369 17.75 7.34514 17.6045 8.02759 17.3218C8.71005 17.0391 9.33015 16.6248 9.85248 16.1025C10.3748 15.5801 10.7891 14.9601 11.0718 14.2776C11.3545 13.5951 11.5 12.8637 11.5 12.125C11.5 11.3863 11.3545 10.6549 11.0718 9.97241C10.7891 9.28995 10.3748 8.66985 9.85248 8.14752C9.33015 7.62519 8.71005 7.21086 8.02759 6.92818C7.34514 6.64549 6.61369 6.5 5.875 6.5C4.38316 6.5 2.95242 7.09263 1.89752 8.14752C0.842632 9.20242 0.25 10.6332 0.25 12.125C0.25 13.6168 0.842632 15.0476 1.89752 16.1025C2.95242 17.1574 4.38316 17.75 5.875 17.75ZM8.8175 11.6825C8.93486 11.7999 9.00079 11.959 9.00079 12.125C9.00079 12.291 8.93486 12.4501 8.8175 12.5675C8.70014 12.6849 8.54097 12.7508 8.375 12.7508C8.20903 12.7508 8.04986 12.6849 7.9325 12.5675L6.5 11.1337V14.625C6.5 14.7908 6.43415 14.9497 6.31694 15.0669C6.19973 15.1842 6.04076 15.25 5.875 15.25C5.70924 15.25 5.55027 15.1842 5.43306 15.0669C5.31585 14.9497 5.25 14.7908 5.25 14.625V11.1337L3.8175 12.5675C3.70014 12.6849 3.54097 12.7508 3.375 12.7508C3.20903 12.7508 3.04986 12.6849 2.9325 12.5675C2.81514 12.4501 2.74921 12.291 2.74921 12.125C2.74921 11.959 2.81514 11.7999 2.9325 11.6825L5.4325 9.1825C5.54894 9.06616 5.70665 9.00056 5.87125 9H5.87875C6.04172 9.00074 6.1979 9.06537 6.31375 9.18L6.3175 9.18375L8.8175 11.6838V11.6825Z" fill="#7DC143"/>
                    </svg>
                    Inscrições realizadas 
                  </span>
                  <strong className="text-2xl md:text-3xl text-eb_green mt-2">{Intl.NumberFormat('pt-BR').format(transparencia.dados_gerais.incricoes_realizadas)}</strong>
                </div>
                <div className="w-full mb-5 flex-col lg:w-1/4 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M3.85742 14.7841V10.4959L9.01093 13.4546C9.79035 13.9022 10.6735 14.1377 11.5723 14.1377C12.4711 14.1377 13.3542 13.9022 14.1336 13.4546L19.2871 10.4972V14.7841C19.2872 14.8686 19.2707 14.9523 19.2385 15.0304C19.2063 15.1085 19.159 15.1795 19.0994 15.2393L19.0968 15.2406L19.0942 15.2444L19.0852 15.2521L19.0556 15.2804L18.9528 15.3756C18.8271 15.4858 18.698 15.5922 18.5657 15.6945C18.1039 16.0491 17.6132 16.3643 17.0986 16.6369C15.3969 17.5396 13.4985 18.0078 11.5723 17.9999C9.64596 18.0078 7.74757 17.5396 6.04586 16.6369C5.53178 16.3643 5.04145 16.049 4.58004 15.6945C4.41037 15.5637 4.24649 15.4255 4.08886 15.2804L4.05929 15.2521C3.99628 15.1914 3.94598 15.1188 3.91132 15.0384C3.87666 14.9581 3.85834 14.8716 3.85742 14.7841ZM22.8218 6.9844L13.4932 12.3398C12.9087 12.6755 12.2464 12.8521 11.5723 12.8521C10.8982 12.8521 10.2358 12.6755 9.65126 12.3398L1.28581 7.5373V13.4983C1.28581 13.6688 1.21807 13.8323 1.0975 13.9529C0.976936 14.0735 0.813411 14.1412 0.642903 14.1412C0.472394 14.1412 0.30887 14.0735 0.188302 13.9529C0.0677343 13.8323 9.89172e-08 13.6688 9.89171e-08 13.4983V6.42636C-6.41904e-05 6.31045 0.0312104 6.19668 0.0905136 6.09709C0.149817 5.99749 0.234943 5.91578 0.336881 5.86061L9.65126 0.512945C10.2357 0.176869 10.8981 0 11.5723 0C12.2464 0 12.9088 0.176869 13.4932 0.512945L22.8218 5.86961C22.9198 5.92595 23.0012 6.00715 23.0579 6.10501C23.1145 6.20288 23.1443 6.31394 23.1443 6.42701C23.1443 6.54007 23.1145 6.65114 23.0579 6.749C23.0012 6.84687 22.9198 6.92806 22.8218 6.9844Z" fill="#7DC143"/>
                    </svg>
                    Cursos Ativos 
                  </span>
                  <strong className="text-2xl md:text-3xl text-eb_green mt-2">{Intl.NumberFormat('pt-BR').format(transparencia.dados_gerais.cursos_ativos)}</strong>
                </div>
                <div className="w-full mb-5 flex-col lg:w-1/4 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                      <path d="M9.35077 0C8.87 0 8.39231 0.161539 7.98077 0.456923L6.70692 1.34615L5.23923 1.53846H5.21538L5.19154 1.56231C4.71018 1.67101 4.26949 1.91391 3.92055 2.26286C3.5716 2.6118 3.3287 3.05249 3.22 3.53385L3.19692 3.55769V3.58154L3.00462 5.07231L2.11538 6.22615L2.09077 6.25V6.27385C1.55308 7.13308 1.52923 8.24231 2.11538 9.06231L3.02846 10.3362L3.26923 11.6592L0.793077 15.4323L0 16.6108H3.67769L4.56692 18.6777L5.12 20L5.91308 18.7977L8.34077 15.1438C8.99308 15.4115 9.72923 15.4362 10.3608 15.1438L12.7885 18.7977L13.5815 20L14.1346 18.6777L15.0238 16.6108H18.7015L17.9085 15.4323L15.5046 11.7792L15.6969 10.3369L16.5862 9.06308L16.6108 9.03923V9.01538C17.1485 8.15615 17.1723 7.07077 16.5862 6.25077L15.6969 4.97615L15.4085 3.53385H15.4323C15.4292 3.51538 15.4115 3.50308 15.4085 3.48538C15.27 2.47923 14.4738 1.66231 13.4615 1.53846H13.4369L11.9946 1.34615L10.7208 0.456923C10.3229 0.165475 9.84391 0.00571428 9.35077 0ZM14.6631 13.2692L15.8415 15.0723H13.9892L13.7969 15.5531L13.2685 16.7785L11.6338 14.2785L11.9938 14.0146L13.5092 13.75V13.7738C13.5269 13.7708 13.5385 13.7531 13.5569 13.75C13.9618 13.6916 14.3443 13.5256 14.6631 13.2692ZM4.03846 13.2931C4.37248 13.5967 4.7921 13.7899 5.24 13.8462H5.26385L6.73077 14.0385L7.06692 14.3031L5.43231 16.7785L4.90385 15.5531L4.71154 15.0723H2.86077L4.03846 13.2931Z" fill="#7DC143"/>
                    </svg>
                    Direito à Certificação 
                  </span>
                  <strong className="text-2xl md:text-3xl text-eb_green mt-2">{Intl.NumberFormat('pt-BR').format(transparencia.dados_gerais.direito_certificacao)}</strong>
                </div>
                <div className="w-full mb-5 flex-col lg:w-1/3 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
                      <path d="M9.42882 22.1414V18.3297L14.0097 20.9596C14.7025 21.3575 15.4875 21.5669 16.2864 21.5669C17.0854 21.5669 17.8704 21.3575 18.5632 20.9596L23.1441 18.3309V22.1414C23.1442 22.2165 23.1295 22.2909 23.1009 22.3603C23.0723 22.4298 23.0302 22.4929 22.9772 22.546L22.9749 22.5472L22.9726 22.5506L22.9646 22.5575L22.9383 22.5826L22.8469 22.6672C22.7352 22.7652 22.6205 22.8597 22.5029 22.9506C22.0924 23.2658 21.6561 23.5461 21.1988 23.7884C19.6862 24.5908 17.9987 25.007 16.2864 24.9999C14.5742 25.007 12.8867 24.5908 11.3741 23.7884C10.9171 23.546 10.4813 23.2658 10.0711 22.9506C9.92033 22.8344 9.77466 22.7116 9.63454 22.5826L9.60826 22.5575C9.55225 22.5035 9.50753 22.4389 9.47673 22.3675C9.44592 22.296 9.42963 22.2192 9.42882 22.1414ZM26.286 15.2084L17.994 19.9687C17.4744 20.2671 16.8856 20.4241 16.2864 20.4241C15.6872 20.4241 15.0985 20.2671 14.5789 19.9687L7.14294 15.6998V20.9985C7.14294 21.15 7.08273 21.2954 6.97556 21.4026C6.86839 21.5097 6.72303 21.57 6.57147 21.57C6.41991 21.57 6.27455 21.5097 6.16738 21.4026C6.06021 21.2954 6 21.15 6 20.9985V14.7123C5.99994 14.6093 6.02774 14.5082 6.08046 14.4196C6.13317 14.3311 6.20884 14.2585 6.29945 14.2094L14.5789 9.45595C15.0984 9.15722 15.6872 9 16.2864 9C16.8857 9 17.4745 9.15722 17.994 9.45595L26.286 14.2174C26.3732 14.2675 26.4455 14.3397 26.4959 14.4267C26.5462 14.5137 26.5727 14.6124 26.5727 14.7129C26.5727 14.8134 26.5462 14.9121 26.4959 14.9991C26.4455 15.0861 26.3732 15.1583 26.286 15.2084Z" fill="#7DC143"/>
                      <path d="M6.45 5.25C6.15 5.175 5.85 5.025 5.625 4.8C5.4 4.725 5.325 4.5 5.325 4.35C5.325 4.2 5.4 3.975 5.55 3.9C5.775 3.75 6 3.6 6.225 3.675C6.675 3.675 7.05 3.9 7.275 4.2L7.95 3.3C7.725 3.075 7.5 2.925 7.275 2.775C7.05 2.625 6.75 2.55 6.45 2.55V1.5H5.55V2.55C5.175 2.625 4.8 2.85 4.5 3.15C4.2 3.525 3.975 3.975 4.05 4.425C4.05 4.875 4.2 5.325 4.5 5.625C4.875 6 5.4 6.225 5.85 6.45C6.075 6.525 6.375 6.675 6.6 6.825C6.75 6.975 6.825 7.2 6.825 7.425C6.825 7.65 6.75 7.875 6.6 8.1C6.375 8.325 6.075 8.4 5.85 8.4C5.55 8.4 5.175 8.325 4.95 8.1C4.725 7.95 4.5 7.725 4.35 7.5L3.6 8.325C3.825 8.625 4.05 8.85 4.35 9.075C4.725 9.3 5.175 9.525 5.625 9.525V10.5H6.45V9.375C6.9 9.3 7.275 9.075 7.575 8.775C7.95 8.4 8.175 7.8 8.175 7.275C8.175 6.825 8.025 6.3 7.65 6C7.275 5.625 6.9 5.4 6.45 5.25ZM6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6 11.175C3.15 11.175 0.825 8.85 0.825 6C0.825 3.15 3.15 0.825 6 0.825C8.85 0.825 11.175 3.15 11.175 6C11.175 8.85 8.85 11.175 6 11.175Z" fill="#7DC143"/>
                    </svg>
                    Investimento médio por curso
                  </span>
                  <strong className="text-2xl md:text-3xl text-eb_green mt-2">{transparencia.dados_gerais.investimento_medio_curso}</strong>
                </div>
                <div className="w-full mb-5 flex-col lg:w-1/3 flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2 font-semibold text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                      <path d="M13.0993 11.4265C13.8423 11.4265 14.4958 11.8047 14.8807 12.3791H9.04596C8.41434 12.3791 7.8086 12.63 7.36197 13.0767C6.91535 13.5233 6.66444 14.129 6.66444 14.7607V18.5711C6.66444 18.7245 6.67873 18.8759 6.70731 19.0207C3.9076 18.8435 1.81472 17.83 0.486782 15.9657C0.170298 15.5219 0.000134311 14.9904 0 14.4453V13.5689C0 13.0007 0.225718 12.4558 0.627499 12.054C1.02928 11.6522 1.57421 11.4265 2.14241 11.4265H13.0993ZM7.61705 0C8.24254 -9.32055e-09 8.86191 0.123199 9.43979 0.362565C10.0177 0.60193 10.5427 0.952773 10.985 1.39506C11.4273 1.83735 11.7782 2.36242 12.0175 2.9403C12.2569 3.51818 12.3801 4.13755 12.3801 4.76304C12.3801 5.38853 12.2569 6.0079 12.0175 6.58577C11.7782 7.16365 11.4273 7.68873 10.985 8.13102C10.5427 8.57331 10.0177 8.92415 9.43979 9.16351C8.86191 9.40288 8.24254 9.52608 7.61705 9.52608C6.35382 9.52608 5.14232 9.02426 4.24907 8.13102C3.35583 7.23777 2.85401 6.02628 2.85401 4.76304C2.85401 3.4998 3.35583 2.28831 4.24907 1.39506C5.14232 0.501819 6.35382 0 7.61705 0ZM7.61705 14.7607C7.61705 14.3817 7.7676 14.0182 8.03557 13.7503C8.30354 13.4823 8.66699 13.3317 9.04596 13.3317H16.6668C17.0458 13.3317 17.4092 13.4823 17.6772 13.7503C17.9452 14.0182 18.0957 14.3817 18.0957 14.7607V18.5711C18.0957 18.9501 17.9452 19.3135 17.6772 19.5815C17.4092 19.8495 17.0458 20 16.6668 20H9.04596C8.66699 20 8.30354 19.8495 8.03557 19.5815C7.7676 19.3135 7.61705 18.9501 7.61705 18.5711V14.7607ZM17.1431 15.237C16.8905 15.237 16.6482 15.1366 16.4695 14.958C16.2909 14.7793 16.1905 14.537 16.1905 14.2844H15.2379C15.2379 14.7896 15.4386 15.2742 15.7959 15.6315C16.1532 15.9888 16.6378 16.1896 17.1431 16.1896V15.237ZM17.1431 17.1422C16.6378 17.1422 16.1532 17.3429 15.7959 17.7002C15.4386 18.0575 15.2379 18.5421 15.2379 19.0474H16.1905C16.1905 18.7947 16.2909 18.5524 16.4695 18.3738C16.6482 18.1951 16.8905 18.0948 17.1431 18.0948V17.1422ZM9.52227 14.2844C9.52227 14.537 9.4219 14.7793 9.24325 14.958C9.06461 15.1366 8.82231 15.237 8.56966 15.237V16.1896C9.07495 16.1896 9.55955 15.9888 9.91685 15.6315C10.2741 15.2742 10.4749 14.7896 10.4749 14.2844H9.52227ZM10.4749 19.0474C10.4749 18.5421 10.2741 18.0575 9.91685 17.7002C9.55955 17.3429 9.07495 17.1422 8.56966 17.1422V18.0948C8.82231 18.0948 9.06461 18.1951 9.24325 18.3738C9.4219 18.5524 9.52227 18.7947 9.52227 19.0474H10.4749ZM14.5235 16.6659C14.5235 16.2237 14.3478 15.7997 14.0352 15.4871C13.7226 15.1744 13.2985 14.9988 12.8564 14.9988C12.4143 14.9988 11.9902 15.1744 11.6776 15.4871C11.365 15.7997 11.1893 16.2237 11.1893 16.6659C11.1893 17.108 11.365 17.532 11.6776 17.8447C11.9902 18.1573 12.4143 18.3329 12.8564 18.3329C13.2985 18.3329 13.7226 18.1573 14.0352 17.8447C14.3478 17.532 14.5235 17.108 14.5235 16.6659Z" fill="#7DC143"/>
                    </svg>
                    Investimento médio por aluno
                  </span>
                  <strong className="text-2xl md:text-3xl text-eb_green mt-2">{transparencia.dados_gerais.investimento_medio_aluno}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="charts-transparency" className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto flex flex-wrap">
          <div className="p-4 w-full lg:w-1/2">
            <div className="flex h-full flex-col rounded-lg shadow-md bg-eb_gray-200 p-8">
              <h2 className="text-eb_green text-center text-3xl title-font font-medium mb-8">Usuários por curso</h2>
              <input type="hidden" value={JSON.stringify(transparencia.usuarios_por_curso)} id="data-donut-chart"/>
              <div className="w-full h-full" id="donut-chart" style={{ minHeight: "400px"}}></div>
              <div className="flex flex-col items-start justify-center text-center">
                {rangeDataDonut.map(data => (
                  <span key={Math.random()} className="text-sm font-semibold text-gray-600 flex items-center justify-start gap-2">
                    <span className="block rounded-full h-3 w-3" style={{border: "1px solid #9a9a9a", backgroundColor: data.color}}></span> {data.label}.
                    <i className="hidden md:block">({Intl.NumberFormat('pt-BR').format(data.value)} usuários)</i>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 h-full w-full lg:w-1/2">
            <div className="flex h-full flex-col rounded-lg shadow-md bg-eb_gray-200 p-8">
              <h2 className="text-eb_green text-center text-3xl title-font font-medium mb-8">Usuários por estado</h2>
              <input type="hidden" value={JSON.stringify(transparencia.usuarios_por_estado)} id="data-map-chart"/>
              <div className="w-full h-full" id="map-chart" style={{ height: "400px"}}></div>
              <div className="flex flex-col items-start justify-center text-center">
                {rangeDataMap.map(data => (
                  <span key={Math.random()} className="text-sm font-semibold text-gray-600 flex items-center justify-start gap-2">
                    <span className="block rounded-full h-3 w-3" style={{border: "1px solid #9a9a9a", backgroundColor: data.color}}></span> {data.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
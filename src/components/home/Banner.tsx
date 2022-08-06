import { createRef, useState } from "react";
import bannerVector from "../../assets/images/banner_vector.svg";

const sections = [1, 2, 3, 4, 5];

export const Banner = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const refs = sections.reduce((acc:any, val:number, i:number) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i:number) => {
    setCurrentSection(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const totalImages = sections.length;
  const nextImage = () => {
    if (currentSection >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentSection + 1);
    }
  };

  const previousImage = () => {
    if (currentSection === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentSection - 1);
    }
  };

  return <section className="text-gray-600 body-font bg-eb_gray-100 pt-24 w-full h-full">
    <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
      <div className="w-full flex flex-row items-center justify-center">
        <button onClick={previousImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="none">
            <path d="M20 38L2 20L20 2" stroke="#7DC143" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div className="carousel">
          {sections.map((section, i) => (
            <div className="min-w-full flex items-center justify-center flex-col" key={section} ref={refs[i]}>
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center justify-center">
                <h1 className="title-font font-semibold text-5xl tracking-wider text-eb_green">Especialização PEPSUS - {i}</h1>
                <p className="leading-relaxed w-full mt-2 text-center font-bold text-2xl text-eb_gray">Conheça o curso de Especialização em Saúde da Família.</p>
                <a href="#acesse" className="inline-flex text-white border-0 py-1 px-10 focus:outline-none bg-eb_pink rounded-2xl text-2xl font-medium my-5">
                  Acesse
                </a>
              </div>
              <img className="w-full xl:w-3/4 my-10 object-cover object-center rounded" alt="Ilustração de três pessoas conversando entre si." src={bannerVector}/>
            </div>
          ))}
        </div>

        
        <button onClick={nextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="none">
            <path d="M2 2L20 20L2 38" stroke="#7DC143" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="text-center lg:w-2/3 w-full mt-10">
        <div className="flex justify-center gap-2 group">
          {sections.map((_, i) => (
            <button 
              onClick={() => scrollToImage(i)}
              className={`transition-all ease-in-out h-3 rounded-full hover:bg-eb_pink hover:w-10 duration-300 ${(currentSection == i) ? "w-10 bg-eb_pink" : "bg-eb_gray-400 w-3"}`}>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>;
}
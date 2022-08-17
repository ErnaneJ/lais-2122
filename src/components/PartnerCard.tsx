import { Parceiro } from "../types/parceiro";

interface PartnerCardProps {
  partner: Parceiro;
}

export const PartnerCard = ({ partner }:PartnerCardProps) => {
  return (
    <div key={partner.id} className="w-full lg:w-1/3 lg:mb-0 mb-6 py-2 md:p-4 h-full">
      <div className=" flex flex-col items-center justify-center">
        <div className="w-[350px] h-[200px]">
          <img src={partner.capa} width="350" height="200" className="object-contain object-center w-full h-full" alt={`Imagem de capa do parceiro ${partner.titulo}`}/>
        </div>
        <span className="inline-block h-1 w-full rounded bg-eb_green"></span>
        <h2 className="text-gray-600 text-2xl text-center font-semibold mt-5">{partner.titulo}</h2>
      </div>
    </div>
  );
}

import noData from '../assets/images/no_data.svg';

export const DataNotFound = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex md:px-5 pt-6 pb-12 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="imagem de dados não encontrado" src={noData} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Nenhuma informação encontrada</h1>
          <p className="mb-6 leading-relaxed">
            Infelizmente não foi possível encontrar nenhuma informação referente à pesquisa solicitada. Por favor, revise o termo buscado e tente novamente.
          </p>
        </div>
      </div>
    </section>
  );
}
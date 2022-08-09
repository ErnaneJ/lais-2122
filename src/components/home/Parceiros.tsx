export const Parceiros = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="xl:text-3xl text-2xl font-semibold text-center title-font mb-4 text-eb_green">Parceiros</h1>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col bg-eb_gray-100 rounded-lg">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <h2 className="text-eb_gray-300 font-semibold text-2xl title-font tracking-wider">Governo do RN</h2>
                  <span className="inline-block h-1 w-10 rounded bg-eb_green"></span>
                  <p className="text-eb_gray-300">Governo do Estado do Rio Grande do Norte.</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <h2 className="text-eb_gray-300 font-semibold text-2xl title-font tracking-wider">SESAP</h2>
                  <span className="inline-block h-1 w-10 rounded bg-eb_green"></span>
                  <p className="text-eb_gray-300">Secretaria de Saúde Pública do Estado do Rio Grande do Norte</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <h2 className="text-eb_gray-300 font-semibold text-2xl title-font tracking-wider">UFRN</h2>
                  <span className="inline-block h-1 w-10 rounded bg-eb_green"></span>
                  <p className="text-eb_gray-300">Universidade Federal do Rio Grande do Norte</p>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <h2 className="text-eb_gray-300 font-semibold text-2xl title-font tracking-wider">HUOL</h2>
                  <span className="inline-block h-1 w-10 rounded bg-eb_green"></span>
                  <p className="text-eb_gray-300">Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
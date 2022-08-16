import { Helmet } from "react-helmet";

export const Contato = () => {
  return (
    <main>
      <Helmet>
        <title>Elder Book - Entre em contato</title>
      </Helmet>
      <section className="text-gray-600 body-font relative mt-12">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-3xl font-semibold title-font mb-4 text-eb_green">Entre em contato</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500 text-base">Se houver alguma dúvida ou pendência você sempre poderá entrar em contato pelos nossos meios oficiais ou por aqui mesmo no formulário abaixo.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
                  <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-eb_green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-mail</label>
                  <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-eb_green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
                  <textarea id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-eb_green h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-eb_green border-0 py-1 px-8 focus:outline-none hover:bg-eb_green/95 rounded text-lg">Enviar</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:contato@elderbook.com" className="inline-block text-eb_green mb-2">contato@elderbook.com</a><br/>
                <span className="inline-flex">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/LAIS.HUOL/" className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/laishuol?lang=en" className="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/laishuol/?hl=en" className="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
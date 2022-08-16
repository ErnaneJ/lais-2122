export const Login = () => {
  return (
    <main>
      <section className="text-gray-600 body-font h-screen bg-origin-border bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url('https://img.freepik.com/free-photo/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus_1418-627.jpg?w=1380&t=st=1660616278~exp=1660616878~hmac=c66bc63a409cde3eebc910dba2ffedc1a0622110054eb29598fb7f591b20c1d4')"}}>
        <div className="w-full h-full bg-eb_green/60 flex items-center justify-center">
          <div className="container px-5 mt-24 lg:mt-0 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 w-full md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-semibold text-2xl lg:text-5xl leading-[2rem] lg:leading-[4rem] text-white">Bem vindo de volta, <br/> Acesse a plataforma e obtenha <br/> todo o potencial disponível!</h1>
              <p className="leading-relaxed mt-4 text-white font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum interdum tortor, eget porttitor neque.
              </p>
            </div>
            <div className="lg:w-2/6 w-full bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 lg:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Acessar</h2>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-mail</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-eb_pink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="senha" className="leading-7 text-sm text-gray-600">Senha</label>
                <input type="password" id="senha" name="senha" className="w-full bg-white rounded border border-gray-300 focus:border-eb_pink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="text-white bg-eb_pink border-0 py-2 px-8 focus:outline-none hover:bg-eb_pink/95 rounded text-lg">Entrar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modulos } from './pages/Modulos';
import { CursoInfo } from './pages/CursoInfo';
import { Transparencia } from './pages/Transparencia';

import { Parceiros } from './pages/Parceiros';
import { Contato } from './pages/Contato';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Search } from './pages/Search';

export const Main = () => {
  return (         
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cursos/modulos/' element={<Modulos/>}/>
      <Route path='/cursos/modulos/:page' element={<Modulos/>}/>
      <Route path='/cursos/modulo/:modulo' element={<CursoInfo/>}/>
      <Route path='/parceiros/' element={<Parceiros/>} />
      <Route path='/parceiros/:page' element={<Parceiros/>} />
      <Route path='/transparencia/' element={<Transparencia/>} />

      <Route path='/contato/' element={<Contato/>} />
      <Route path='/cadastro/' element={<Cadastro/>} />
      <Route path='/entrar/' element={<Login/>} />
      <Route path='/buscar/:term' element={<Search/>} />
    </Routes>
  );
}
export default Main;
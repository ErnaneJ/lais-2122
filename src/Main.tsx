import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modulos } from './pages/Modulos';
import { Parceiros } from './pages/Parceiros';


export const Main = () => {
  return (         
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cursos/modulos/' element={<Modulos/>}/>
      <Route path='/cursos/modulos/:page' element={<Modulos/>}/>
      <Route path='/parceiros/' element={<Parceiros/>} />
      <Route path='/parceiros/:page' element={<Parceiros/>} />
    </Routes>
  );
}
export default Main;
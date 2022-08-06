import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modules } from './pages/Modules';

export const Main = () => {
  return (         
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/modules' element={<Modules/>} />
    </Routes>
  );
}
export default Main;
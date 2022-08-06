import * as React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './Main';

export default function App() {
  return (
    <>  
      <Header />
        <Main /> 
      <Footer />
    </>
  )
}
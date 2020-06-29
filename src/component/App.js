import React from 'react';
import Header from '../container/Header';
import Converter from './Converter';
import Footer from '../container/Footer';
import './main.scss';

function App() {
  return (
    <>
      <Header />
      <Converter />
      <Footer />
    </>
  );
}

export default App;

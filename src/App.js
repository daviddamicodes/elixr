import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoHomes from './components/InfoHomes';
import InfoSection from './components/InfoSection';

import Navbar from './components/Navbar';
import { HomeData, InfoData, InfoDataThree, InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';
import InfoInterior from './components/InfoInterior';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection  {...InfoData} />
      <InfoHomes {...HomeData} />
      <InfoInterior  {...InfoDataTwo} />
      <InfoSection  {...InfoDataThree} />
      <Footer />
    </>
  );
}

export default App;

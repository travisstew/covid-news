import React from 'react';
import Navbars from './Navbars';
import Header from './Header';
import CovidNews from './CovidNews';
import Footer from './Footer';
// import '../src/index.css';


function HomePage() {
  return (
    <>
      <Navbars />
      <div>
        {/* <Home /> */}
        <Header />
       
      <CovidNews />
      </div>
      <Footer />

    </>
  )
}

export default HomePage

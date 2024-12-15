import React from 'react';
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div id="layout-page">
      <div id = "header-ruban" className='bg-blue-50 text-black'>
        <Header />
        <h1 className="text-center text-3xl p-3"><strong>Activités et Aventures à Montpellier</strong></h1>
      </div>
      <div id='site-content'>
        

      </div>
    </div>
    
  );
}

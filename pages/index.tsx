import React from 'react';
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className='bg-blue-50 text-black'>
      <Header />
      <h1 className="text-center text-3xl p-3">Activités et Aventures à Montpellier</h1>
    </div>
  );
}

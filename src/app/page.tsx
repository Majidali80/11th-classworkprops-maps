import Image from "next/image";
import Navbar from './components/Navbar';
import ParentComponents from './components/ParentComponents';
import ChildComponents from './components/ChildComponent';
import React from 'react';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-200">

      <Navbar />
      <ParentComponents />
      <ChildComponents />
      <Footer />
      </div>
  );
}

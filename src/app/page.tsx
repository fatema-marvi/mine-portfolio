"use client";
import React from "react";
import Header from "./component/header";
import Personal from "./component/Personal";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const Home: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100'>
      <Header />
      <main className="container max-auto py-8">
        {/*<div className="flex flex-col md:flex-row md:space-x-4">*/}

        <div className="bg-gray-200 flex-1 bg-white pl-10 rounded-lg shadow-md">
          <Personal />
        </div>

        <div className="bg-gray-200 flex-1 bg-white pl-10 rounded-lg shadow-md">
          <Education />
        </div>

        <div className="bg-gray-200 flex-1 bg-white pl-10 rounded-lg shadow-md">
          <Skills />
        </div>

        <div className="bg-gray-200 flex-1 bg-white pl-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 pt-5">EXPERIENCE</h2>
          <Experience />
        </div>

        <div className="bg-gray-200 flex-1 bg-white pl-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 pt-5">CONTACT DETAILS</h2>
          <Contact />
        </div>
        <div />
      </main>
      <Footer />
    </div>
  );
};



export default Home;



import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="brutal-card max-w-lg mx-auto p-8 text-center">
          <h1 className="font-mono font-bold text-6xl mb-4">404</h1>
          <p className="text-2xl mb-6">Page not found</p>
          <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
          
          <Link 
            to="/" 
            className="brutal-btn inline-block"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

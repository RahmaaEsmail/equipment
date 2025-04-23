import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  // Define routes where Header/Footer should be hidden
  
  return (
    <div>
      <Header />
      <main className="!py-3">
        {children}
      </main>
    <Footer />
    </div>
  );
}

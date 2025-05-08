import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { Outlet } from 'react-router-dom'
import InternetAccess from '../components/internetAccesibility/InternetAccess';
import NetworkAvail from '../PageNotFound/NetworkAvail';

const MainLayouts = () => {
  const isOnline = InternetAccess();
  return (
    <>
        {/* <Header />
          <main>
            <Outlet />
          </main>
        <Footer /> */}

        
      {isOnline ? (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <NetworkAvail/>
      )}
    </>
  );
};

export default MainLayouts

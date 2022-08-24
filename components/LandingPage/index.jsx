import React from 'react';
import Navbar from '../students/Navbar';
// import MainNavigation from './MainNavigation';
// import Footer from './Footer';

const Index = ({ children }) => (
  <>
    {/* <MainNavigation /> */}
    <Navbar />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);

export default Index;

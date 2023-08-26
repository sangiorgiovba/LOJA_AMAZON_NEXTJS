import React, { ReactElement } from 'react';
import Header from './header/Header';
import BottomHeader from './header/BottomHeader';
import Footer from './Footer';


interface Props{
    children: ReactElement;
}

const R_Layout = ({children} : Props) => {
  return (
    <>
    <Header/>
    <BottomHeader/>
    {children}
    <Footer/>
    </>
  );
};

export default R_Layout;
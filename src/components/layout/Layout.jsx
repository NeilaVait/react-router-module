import React from 'react';
import MainNavigation from './MainNavigation';
import cl from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={cl.main}>{props.children}</main>
    </>
  );
};

export default Layout;

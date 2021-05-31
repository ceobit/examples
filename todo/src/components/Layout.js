import React from 'react';

const Layout = (props) => {
  return (
    <>
      <header>
        It's HEADER
      </header>
      {props.children}
      <footer>
        It's FOOTER
      </footer>
    </>
  );
};

export default Layout;
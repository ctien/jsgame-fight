import React from "react";

import { Header, Footer } from "../components";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

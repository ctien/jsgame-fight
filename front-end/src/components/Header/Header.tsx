import React from "react";

import "./style.sass";

const Header: React.FC<{}> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="col-lg-2 p-0">
            <div className="header__left d-flex">
              <a href="/">
                <i className="icon-simple-line mr-3" />
              </a>
              <a href="/" className="header__left-logo">
                Cesa.
              </a>
            </div>
          </div>
          <ul className="header__nav navbar d-flex">
            <li className="navbar__item">
              <a href="/" className="navbar__link link--golden">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="./shop.html" className="navbar__link link--golden">
                Shop
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link link--golden">
                Blog
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link link--golden">
                Page
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link link--golden">
                Purchase
              </a>
            </li>
          </ul>
          <div className="header__services services d-flex">
            <button>ser</button>
            <button>lov</button>
            <button>car</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

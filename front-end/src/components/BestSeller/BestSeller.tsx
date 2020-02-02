import React from "react";

import "./style.sass";

const BestSeller = () => {
  return (
    <section className="best-seller">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="best-seller__left">
              <div className="best-seller__left-inner">
                <p className="text--highlight best-seller__text--welcome">
                  WELLCOME TO CESA
                </p>
                <h2 className="best-seller__title">Best Seller</h2>
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                </div>
                <div>
                  <a className="best-seller__link" href="/">
                    DISCOVER SALES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="best-seller__img-holder">
              <img
                className="best-seller__img"
                src="https://demo.alura-studio.com/cesa/wp-content/uploads/2019/06/367549-PAXLPC-718-1024x683.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

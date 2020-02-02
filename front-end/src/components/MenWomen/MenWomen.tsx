import React from "react";

import "./style.sass"

const MenWomen = () => {
  return (
    <section className="men-women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <figure className="men-women__img-holder">
              <a href="/">
                <img
                  className="men-women__img"
                  src="https://demo.alura-studio.com/cesa/wp-content/uploads/2019/06/12-1024x1024.jpg"
                  alt=""
                />
              </a>
              <figcaption className="men-women__img-caption">
                <a className="link--golden" href="/">
                  MEN
                </a>
                – 30
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-6">
            <figure className="men-women__img-holder">
              <a href="/">
                <img
                  className="men-women__img"
                  src="https://demo.alura-studio.com/cesa/wp-content/uploads/2018/03/15-1024x1024.jpg"
                  alt=""
                />
              </a>
              <figcaption className="men-women__img-caption">
                <a className="link--golden" href="/">
                  WOMEN
                </a>
                – 30
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenWomen;

import React from 'react';

const Header = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://www.familysearch.org/blog/es/wp-content/uploads/sites/5/2015/10/the-power-of-small.jpg" alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Banner Sabina modificado </p>
          <p> Subtítulo del banner</p>
          <a href="https://reactjs.org" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

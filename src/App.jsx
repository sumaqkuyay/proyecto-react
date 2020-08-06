import React from 'react';
// import logo from './logo.svg';
import './styles/styles.scss';
import Card from './Card';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://www.familysearch.org/blog/es/wp-content/uploads/sites/5/2015/10/the-power-of-small.jpg" alt="banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Banner Sabina modificado SASA</p>
            <p> Subtítulo del banner</p>
            <a href="https://reactjs.org" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Card
        title="Aprendiendo React IMPRIMIENDO PROPS"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        price="30usd"
      />
      <Card
        title="Aprendiendo React IMPRIMIENDO PROPS"
        image="https://cdn5.f-cdn.com/contestentries/690017/19944121/57ad5f33da095_thumb900.jpg"
        price="50usd"
      />
    </div>
  </>
);

export default App;

// Toda etiqueta debe cerrarse
// Los componentes deben devolver un solo elemento padre
// Apoyarse de los fragments cuando necesito devolver 2 elementos <> hijos</>
// img siempre se cierra y se pone un alt=""
// class pasa a ser className

/* const App = () => (
  <>
    <div className="saludo">
      <h1> Hola Mundo</h1>
      <p> Hola , saludando desde mi componente app.js</p>
    </div>
    <div>
      <img src="https://www.online-image-editor.com/styles/2019/images/power_girl_editor.png" alt="" />
    </div>
  </>
); */

/*
const App = () => (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hola mundo desde mi archivo APP.jsx c:
      </p>
      <a
        lassName="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
*/

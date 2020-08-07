import React from 'react';
// import logo from './logo.svg';
import './styles/styles.scss';
import Card from './Card';
import Header from './Header';
import Formulario from './Formulario';

/* const products = [
  {
    title: 'Cafe Americano',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Café Americano',
  },
  {
    title: 'Cafe con Leche',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Café con Leche',
  },
  {
    title: 'Sandwich de Jamón y Queso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Sandwich de Jamón y Queso',
  },
  {
    title: 'Jugo de Frutas Natural',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Jugo de Frutas Natural',
  },
  {
    title: 'Hamburguesa Simple Res',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Res',
  },
  {
    title: 'Hamburguesa Doble Res',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Res',
  },
  {
    title: 'Hamburguesa Simple Pollo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Pollo',
  },
  {
    title: 'Hamburguesa Doble Pollo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Pollo',
  },
  {
    title: 'Hamburguesa Simple Vegetariana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Vegetariana',
  },
  {
    title: 'Hamburguesa Doble Vegetariana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Vegetariana',
  },
  {
    title: 'Papas Fritas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Papas Fritas',
  },
  {
    title: 'Aros de Cebolla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Aros de Cebolla',
  },
  {
    title: 'Agua 500ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Agua 500ml',
  },
  {
    title: 'Agua 750ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Agua 750ml',
  },
  {
    title: 'Bebida/gaseosa 500ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Bebida/gaseosa 500ml',
  },
  {
    title: 'Bebida/gaseosa 750ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Bebida/gaseosa 750ml',
  },
  {
    title: 'Jamón',
    image: '',
    price: 1,
    productName: 'Jamón',
  },
  {
    title: 'Queso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 1,
    productName: 'Queso',
  },
]; */

const App = () => (
  <>
    <Header />
    <Formulario />

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

   <div className="ed-grid m-grid-3">
      {
        // eslint-disable-next-line max-len
        products.map((element) => <Card title={element.title} image={element.image} price={element.price} productName={element.productName} />)
      }
    </div>
);
*/

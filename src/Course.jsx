import React from 'react';

const products = [
  {
    id: 1,
    title: 'Cafe Americano',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Café Americano',
  },
  {
    id: 2,
    title: 'Cafe con Leche',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Café con Leche',
  },
  {
    id: 3,
    title: 'Sandwich de Jamón y Queso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Sandwich de Jamón y Queso',
  },
  {
    id: 4,
    title: 'Jugo de Frutas Natural',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Jugo de Frutas Natural',
  },
  {
    id: 5,
    title: 'Hamburguesa Simple Res',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Res',
  },
  {
    id: 6,
    title: 'Hamburguesa Doble Res',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Res',
  },
  {
    id: 7,
    title: 'Hamburguesa Simple Pollo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Pollo',
  },
  {
    id: 8,
    title: 'Hamburguesa Doble Pollo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Pollo',
  },
  {
    id: 9,
    title: 'Hamburguesa Simple Vegetariana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Hamburguesa Simple Vegetariana',
  },
  {
    id: 10,
    title: 'Hamburguesa Doble Vegetariana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 15,
    productName: 'Hamburguesa Doble Vegetariana',
  },
  {
    id: 11,
    title: 'Papas Fritas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Papas Fritas',
  },
  {
    id: 12,
    title: 'Aros de Cebolla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Aros de Cebolla',
  },
  {
    id: 13,
    title: 'Agua 500ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 5,
    productName: 'Agua 500ml',
  },
  {
    id: 14,
    title: 'Agua 750ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Agua 750ml',
  },
  {
    id: 15,
    title: 'Bebida/gaseosa 500ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 7,
    productName: 'Bebida/gaseosa 500ml',
  },
  {
    id: 16,
    title: 'Bebida/gaseosa 750ml',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 10,
    productName: 'Bebida/gaseosa 750ml',
  },
  {
    id: 17,
    title: 'Jamón',
    image: '',
    price: 1,
    productName: 'Jamón',
  },
  {
    id: 18,
    title: 'Queso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    price: 1,
    productName: 'Queso',
  },
];

const Course = ({ match })=> {
  const cursoActual = products.filter((c) => c.id === parseInt(match.params.id))[0];
  return (
    cursoActual ? (
      <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">{cursoActual.title}</h1>
        <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title} />
        <p className="m-cols-2">{cursoActual.productName}</p>
      </div>
    ) : (
      <h1>El curso no existe</h1>
    )
  );
};

export default Course;

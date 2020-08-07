import React from 'react';
import PropTypes from 'prop-types';

// const mayorDeEdad = (edad) => edad > 18;

// const persona = { nombre: 'Sabina', apellido: 'CanchumaniHuaman', edad: 26 };

const Card = ({title, image, price, productName}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <span className="small">{ `${productName} `}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://reactjs.org">{`S/. ${price}`}</a>
      </div>
    </div>
  </article>
);

Card.prototype = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  productName: PropTypes.string,
};

Card.defaultProps = {
  title: 'No se encontró titulo',
  image: 'https://blogtrip.org/wp-content/uploads/2016/06/visitar-paris-ciudad-luz-fotografia-nocturna.jpg',
  price: '--',
};
export default Card;

/*
const Card = ({title, image, price}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        { mayorDeEdad(persona.edad) ? 'soy mayor de edad' : 'soy menor de edad' }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://www.familysearch.org/blog/es/wp-content/uploads/sites/5/2015/10/the-power-of-small.jpg" alt="" />
            </div>
          </div>
          <span className="small">{ `${persona.nombre} ${persona.apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://reactjs.org">{`$ ${price}`}</a>
      </div>
    </div>
  </article>
);

*/

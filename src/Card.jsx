import React from 'react';

const mayorDeEdad = (edad) => edad > 18;
const curso = {
  tille: 'Aprendiendo React',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  price: '30usd',
};

const persona = { nombre: 'Sabina', apellido: 'Canchumani Huaman', edad: 26 };

const Card = () =>(
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={curso.image} alt={curso.tille} />
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
        <a className="button--ghost-alert button--tiny" href="https://reactjs.org">$ 20USD</a>
      </div>
    </div>
  </article>
);

export default Card;

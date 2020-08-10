import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
      // declarando estados
    super(props);
    this.state = {
      nombre: '',
      correo: '',
    };
    // this.cambiarNombre = this.cambiarNombre.bind(this);
    // this.cambiarCorreo = this.cambiarCorreo.bind(this);
  }
  // hacer anidaciones, el numero q pongo en el input lo convierto a algo o hacer una conersion a dolares
  // todo ello se hace acá y lo llamo como un callback . Despues de hacer esa lógica se actualiza el estado
   cambiarNombre = (e) => {
    this.setState ({
        nombre : e.target.value,
    });
  }
   cambiarCorreo = (e) => {
    this.setState ({
        correo: e.target.value,
    });
  }
  // Metodo render encargado de presentar la vista al usario
  render() {
     
    return (
        <div className="ed-grid">
            <h1>Formulario</h1>
            <form id="elemento">
                <div className="ed-grid m-grid-2">
                  <div className="form__item">
                    <label>Nombre Completo</label>
                    <input 
                      type ="text" 
                      onChange={
                        this.cambiarNombre}
                        // usando callback
                    />
                  </div>
                  <div className="form__item">
                    <label>Correo Completo</label>
                    <input 
                    type ="email" 
                    onChange={
                       this.cambiarCorreo}
                       // usando callback
                    />
                  </div>
                </div>
            </form>
            <div>
                <h3>{`hola ${this.state.nombre}`}</h3>
                <span>{`tu correo es : ${this.state.correo}`}</span>
            </div>
        </div>
    )
  }
  // con este método me aseguro que todo lo el render ya existe en el DOM , y ya puedo manipularlo , porq estoy seguro que el Render a corrido.
  componentDidMount(){

    let elemento = document.getElementById('elemento');
    console.log(elemento);
  }
}
export default Formulario;

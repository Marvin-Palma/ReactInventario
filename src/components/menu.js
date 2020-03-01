import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';
import newProduct from '../images/newProduct.png';

class Menu extends Component {

    state = {
    };

    ModuloNuevoProducto = () => {
        alert("Modulo de nuevo producto");
    }

    render() {
        return (
            <div className="wrap-menu100 p-l-40 p-r-40 p-t-50 p-b-40">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-10">
                        Menú de funcionalidades
					            </span>
                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        {/*<span className="login100-form-subtitle p-b-55">
                            Módulo de ingreso
					    </span>*/}
                        <div className="text-center w-full p-t-10" id="botonIngresar">
                            <div className="buttonMenu" id="button-5" onClick={this.ModuloNuevoProducto}>
                                <div id="translateMenu"></div>
                                <img src={newProduct} alt="Logo" className="imagenMenu" />
                                <a>Ingresar un nuevo producto!</a>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10" id="botonIngresar">
                            <div className="buttonMenu" id="button-5" onClick={this.ModuloNuevoProducto}>
                                <div id="translateMenu"></div>
                                <img src={newProduct} alt="Logo" className="imagenMenu" />
                                <a>Ingresar un nuevo producto!</a>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10" id="botonIngresar">
                            <div className="buttonMenu" id="button-5" onClick={this.ModuloNuevoProducto}>
                                <div id="translateMenu"></div>
                                <img src={newProduct} alt="Logo" className="imagenMenu" />
                                <a>Ingresar un nuevo producto!</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center w-full p-t-10" id="botonIngresar">
                        <div className="button" id="button-5">
                            <div id="translate"></div>
                            <a onClick={this.ingresar}>Ingresar!</a>
                        </div>
                    </div>
                    <span className="login100-form-titleError p-b-10 p-t-10">
                        {this.state.mensaje}
                    </span>
                </form>
            </div>
        );
    }
}

export default Menu;
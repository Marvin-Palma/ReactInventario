import React, { Component } from 'react';
import newProduct from '../images/newProduct.png';
import searchProduct from '../images/searchProduct.png';
import buyProduct from '../images/buyProduct.png';
import factura from '../images/factura.png';
import updateProducto from '../images/updateProducto.png';
import InventarioImage from '../images/inventarioImage.svg';

class Menu extends Component {

    state = {
        message: ""
    };

    ModuloNuevoProducto = () => {
        alert("Modulo de nuevo producto");
    }

    logOut = () => {
        this.setState({message:"LogOut."}, res=>{
            this.props.parentCallback(this.state.message);
        });
    }

    irModulo = (modulo) => {
        console.log(modulo);
        this.setState({message:modulo}, res=>{
            this.props.parentCallback(this.state.message);
        });
    }

    render() {
        return (
            <div className="wrap-menu100 p-l-40 p-r-40 p-t-50 p-b-40">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-10">Menú de funcionalidades</span>

                    {/* Módulo de ingreso de productos */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10">
                            <div className="buttonMenu" id="button-5" onClick={()=>this.irModulo("IngresoProducto.")}>
                                <div id="translateMenu"></div>
                                <img src={newProduct} alt="Logo" className="newProduct" />
                                <a>Ingresar un nuevo producto!</a>
                            </div>
                        </div>
                    </div>

                    {/* Módulo de consulta de productos */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10">
                            <div className="buttonMenu" id="button-5" onClick={()=>this.irModulo("ConsultaProducto.")}>
                                <div id="translateMenu"></div>
                                <img src={searchProduct} alt="Logo" className="searchProduct" />
                                <a>Consulta de productos!</a>
                            </div>
                        </div>
                    </div>

                    {/* Módulo de compra de productos */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10">
                            <div className="buttonMenu" id="button-5" onClick={()=>this.irModulo("CompraProducto.")}>
                                <div id="translateMenu"></div>
                                <img src={buyProduct} alt="Logo" className="buyProduct" />
                                <a>Realizar una compra!</a>
                            </div>
                        </div>
                    </div>

                    {/* Módulo de consulta de facturas */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10">
                            <div className="buttonMenu" id="button-5" onClick={()=>this.irModulo("ConsultaFactura.")}>
                                <div id="translateMenu"></div>
                                <img src={factura} alt="Logo" className="buyProduct" />
                                <a>Consultar facturas!</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Módulo de actualización de productos */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <div className="text-center w-full p-t-10">
                            <div className="buttonMenu" id="button-5" onClick={()=>this.irModulo("UpdateProducto.")}>
                                <div id="translateMenu"></div>
                                <img src={updateProducto} alt="Logo" className="buyProduct" />
                                <a>Actualización inventario!</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Imagen */}

                    <div className="wrap-inputMenu100 validate-input m-b-16">
                        <img src={InventarioImage} style={{ width: "90%" }}/>
                    </div>

                    {/* LogOut */}

                    <div className="text-center w-full p-t-10">
                        <div className="button" id="button-5" onClick={this.logOut}>
                            <div id="translate"></div>
                            <a>Salir!</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Menu;
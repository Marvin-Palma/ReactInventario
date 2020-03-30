import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';

class IngresoProducto extends Component {

    state = {
        archivo: null,
        messageError: "",
        message: ""
    };

    limpiarModulo = () =>{
        document.getElementById("nombreProducto").value="";
        document.getElementById("descripcionProducto").value="";
        document.getElementById("cantidadProducto").value="";
        document.getElementById("precioProducto").value="";
        this.setState({ archivo:null });
    }

    return = () => {
        this.setState({ message: "Menu." }, res => {
            this.props.parentCallback(this.state.message);
        });
    }

    guardar = () => {
        if(document.getElementById("nombreProducto").value==""){
            this.setState({ messageError: "Falta nombre del producto" });
            return;
        }
        if(document.getElementById("descripcionProducto").value==""){
            this.setState({ messageError: "Falta descripción del producto" });
            return;
        }
        if(document.getElementById("precioProducto").value==""){
            this.setState({ messageError: "Falta precio del producto" });
            return;
        }
        if(document.getElementById("cantidadProducto").value==""){
            this.setState({ messageError: "Falta cantidad del producto" });
            return;
        }
        if(this.state.archivo==null){
            this.setState({ messageError: "Falta archivo del producto" });
            return;
        }
        this.setState({ messageError: "" });
        const formData= new FormData();
        formData.append('file0', this.state.archivo);
        formData.append('nombre', document.getElementById("nombreProducto").value);
        formData.append('precio', document.getElementById("precioProducto").value);
        formData.append('cantidad', document.getElementById("cantidadProducto").value);
        formData.append('descripcion', document.getElementById("descripcionProducto").value);
        axios.post(URL + "api/saveProducto", formData).then(res => {
            if(res.data.producto){
                this.setState({ messageError: "Producto almacenado." });
            }
            this.limpiarModulo();
        }).catch(err => {
            console.log(err);
        });
    }

    validacionNumero = () => {
        document.getElementById("precioProducto").value = parseFloat(document.getElementById("precioProducto").value).toFixed(2);
    }

    validacionLongitudPrecio = () =>{
        if(document.getElementById("precioProducto").value>999999 || document.getElementById("precioProducto").value==0){
            document.getElementById("precioProducto").value=parseInt(document.getElementById("precioProducto").value.substring(0,document.getElementById("precioProducto").value.length-1))
        }
    }

    validacionCantidad = () => {
        if(document.getElementById("cantidadProducto").value>999 || document.getElementById("cantidadProducto").value==0){
            document.getElementById("cantidadProducto").value=parseInt(document.getElementById("cantidadProducto").value.substring(0,document.getElementById("cantidadProducto").value.length-1))
        }
        document.getElementById("cantidadProducto").value = parseInt(document.getElementById("cantidadProducto").value);
    }

    selectedFile = (event) => {
        this.setState({
            archivo:event.target.files[0]
        });
        console.log("LLEGAAAAAAAAAAAA");
        this.setState({ messageError: "Imagen cargada." });
    }

    render() {
        return (
            <div className="wrap-menu100 p-l-40 p-r-40 p-t-50 p-b-40">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-18">Ingreso de productos</span>

                    {/* Input Nombre Producto */}

                    <div className="wrap-inputProducto100 m-b-18">
                        <span className="login100-form-subtitle p-b-10 p-t-8">Nombre del producto</span>
                        <input className="input100" placeholder="Nombre del producto (30 caracteres)" maxLength="30" id="nombreProducto"></input>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>

                    </div>

                    {/* Input Descripcion Producto */}
                    <div className="wrap-inputProducto100 m-b-18">
                        <span className="login100-form-subtitle p-b-10 p-t-8">Descripción del producto</span>
                        <textarea className="p-t-10 input100" placeholder="Descripción del producto (60 caracteres)" maxLength="60" id="descripcionProducto"></textarea>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                    </div>

                    {/* Input Precio Producto */}
                    <div className="wrap-inputProducto100 m-b-18">
                        <span className="login100-form-subtitle p-b-10 p-t-8">Precio del producto</span>
                        <input className="input100" type="number" min="0.01" step="0.01" onBlur={this.validacionNumero} onChange={this.validacionLongitudPrecio} id="precioProducto" placeholder="0.00" maxLength="8"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>

                    </div>

                    {/* Input Cantidad Producto */}
                    <div className="wrap-inputProducto100 m-b-18">
                        <span className="login100-form-subtitle p-b-10 p-t-8">Cantidad del producto</span>
                        <input className="input100" type="number" min="1" max="999"  onChange={this.validacionCantidad} onBlur={this.validacionCantidad} id="cantidadProducto" placeholder="Cantidad (Máximo 999)"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>

                    </div>
                    {/* Input Imagen Producto */}
                    <div className="wrap-inputProducto100 m-b-18">
                        <span className="login100-form-subtitle p-b-10 p-t-8">Imagen del producto</span>
                        <label className="input100 p-t-12" htmlFor="upload-photo" style={{marginBottom: "0px !important"}}>Buscar imagen...</label>
                        <input className="input100" type="file" name="file0" onChange={this.selectedFile} id="upload-photo"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>

                    </div>


                    <div className="text-center w-full p-t-25">
                        {/* Return */}
                        <div className="button" id="button-5" onClick={this.return}>
                            <div id="translate"></div>
                            <a>Regresar!</a>
                        </div>
                        {/* Guardar */}
                        <div className="button" id="button-5" onClick={this.guardar}>
                            <div id="translate"></div>
                            <a>Guardar!</a>
                        </div>
                    </div>

                    {/* Mensaje ERROR */}
                    <span className="login100-form-titleError p-b-10 p-t-10">
                        {this.state.messageError}
                    </span>

                </form>
            </div>

        );
    }

}

export default IngresoProducto; 
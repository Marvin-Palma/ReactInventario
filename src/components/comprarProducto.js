import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class ComprarProductos extends Component {

    state = {
        productosIniciales: [],
        items: [],
        itemsCarretilla: [],
        message: ""
    }

    filtroProductos = (event) => {
        console.log(this.state.productosIniciales);
        let items = this.state.productosIniciales;
        items = items.filter(item => {
            return item.nombre.toLowerCase().indexOf(document.getElementById("searchBar").value.toLowerCase()) > -1;
        });
        this.setState({ items: items }, res => {
            if (this.state.items.length == 0) {
                this.setState({ message: "No se encontraron productos." });
            } else {
                this.setState({ message: "" });
            }
        });
    }

    agregarCarretilla = (producto) => {
        /* Antes de agregar el producto de forma normal,
           Debería buscar en el arreglo de itemsCarretilla para verificar que no existe previamente
           De ser así debo agregar uno a la cantidad nada más
           Además no debo dejar que agregue más cuando ya agregó la cantidad máxima de ese producto disponible */
        var carretilla= this.state.itemsCarretilla;
        carretilla.push(producto);
        this.setState({
            itemsCarretilla: carretilla
        });
    }

    componentWillMount() {
        //LLamada a servidor para traer todos los productos
        axios.get(URL + "api/get-productos/").then(res => {
            if (res.status === 210) {
                this.setState({
                    message: "No se encontraron productos."
                });
            } else {
                //Asignación inicial de productos
                this.setState({
                    productosIniciales: res.data.productos,
                    items: res.data.productos
                })
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return = () => {
        this.setState({ message: "Menu." }, res => {
            this.props.parentCallback(this.state.message);
        });
    }

    render() {
        return (
            <div className="wrap-menuFlex p-l-40 p-r-40 p-t-50 p-b-40" style={{ textAlign: "center" }}>
                <span className="login100-form-title p-b-18">Consulta de productos</span>

                <Container>
                    <Row>
                        <Col>
                            {/* Input de búsqueda */}
                            <div className="wrap-inputProducto100Consulta m-b-18">
                                <span className="login100-form-subtitle p-b-10 p-t-8">Nombre del producto</span>
                                <input className="input100" placeholder="Buscar..." maxLength="30" id="searchBar" onChange={this.filtroProductos}></input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                </span>
                            </div>
                        </Col>
                        <Col>
                            {/* Return Menu */}
                            <div className="text-center p-t-10">
                                <div className="button" id="button-5" onClick={this.return}>
                                    <div id="translate"></div>
                                    <a>Regresar!</a>
                                </div>
                            </div>
                            {/* Mensaje ERROR */}
                            <span className="login100-form-titleError p-b-10 p-t-10">
                                {this.state.message}
                            </span>
                        </Col>
                    </Row>
                </Container>


                {/* Generación de Divs con productos */}
                <Container>
                    <Row>
                        <Col>
                            <div>
                                {
                                    this.state.items.map((item, index) =>{
                                        return <div key={index} className="containerProductosCarretilla">
                                            <Container style={{ width: "100%", textAlign: "center !important" }}>
                                                <Row>
                                                    <Col xs="6" sm="5">
                                                        <div className="login100-form-desc">Nombre: {item.nombre}</div>
                                                        <div className="login100-form-desc">Descripción: {item.descripcion}</div>
                                                        <div className="login100-form-desc">Precio: Q.{item.precio}</div>
                                                        <div className="login100-form-desc">Cantidad: {item.cantidad} Unidades.</div>
                                                    </Col>
                                                    <Col xs="6" sm="5">
                                                        <div>
                                                            <img src={URL + "api/get-image-producto/" + item.imagen} className="newProduct"></img>
                                                        </div>
                                                    </Col>
                                                    <Col xs="6" sm="2">
                                                        {/* Botón para agregar a carretilla */}
                                                        <div className="text-center p-t-20">
                                                            <div className="buttonCarretilla" id="button-5" onClick={() => this.agregarCarretilla(item)}>
                                                                <div id="translate"></div>
                                                                <a>+</a>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <hr style={{ borderColor: "transparent", marginTop: "10px" }}></hr>
                                            </Container>
                                        </div>
                                    })
                                }
                            </div>
                        </Col>
                        <Col>
                            <span className="login100-form-title carretillaTitle p-b-18 m-b-12">Carretilla de compras</span>
                            <div>
                                {
                                    this.state.itemsCarretilla.map((item, index)=> {
                                        return <div key={index} className="containerProductosCarretilla">
                                            <Container style={{ width: "100%", textAlign: "center !important" }}>
                                                <Row>
                                                    <Col>
                                                        <div className="login100-form-desc">Nombre: {item.nombre}</div>
                                                        <div className="login100-form-desc">Descripción: {item.descripcion}</div>
                                                        <div className="login100-form-desc">Precio: Q.{item.precio}</div>
                                                        <div className="login100-form-desc">Cantidad: {item.cantidad} Unidades.</div>
                                                    </Col>
                                                    <Col>
                                                        <div>
                                                            <img src={URL + "api/get-image-producto/" + item.imagen} className="newProduct"></img>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <hr style={{ borderColor: "transparent", marginTop: "10px" }}></hr>
                                            </Container>
                                        </div>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default ComprarProductos; 
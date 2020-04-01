import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class Factura extends Component {

    state = {
        facturasIniciales: [],
        facturas: [],
        message: ""
    }

    filtroFacturas = (event) => {
        let facturasInterno = this.state.facturasIniciales;
        facturasInterno = facturasInterno.filter(item => {
            return item.nit.toLowerCase().indexOf(document.getElementById("searchBar").value.toLowerCase()) > -1;
        });
        this.setState({ facturas: facturasInterno }, res => {
            if (this.state.facturas.length == 0) {
                this.setState({ message: "No se encontraron facturas." });
            } else {
                this.setState({ message: "" });
            }
        });
    }

    componentWillMount() {
        //LLamada a servidor para traer todos los productos
        axios.get(URL + "api/get-facturas/").then(res => {
            if (res.status === 210) {
                this.setState({
                    message: "No se encontraron facturas."
                });
            } else {
                //Asignación inicial de productos
                this.setState({
                    facturasIniciales: res.data.facturas,
                    facturas: res.data.facturas
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
                <span className="login100-form-title p-b-18">Consulta de facturas</span>

                <Container>
                    <Row>
                        <Col>
                            {/* Input de búsqueda */}
                            <div className="wrap-inputProducto100Consulta m-b-18">
                                <span className="login100-form-subtitle p-b-10 p-t-8">Nit del Cliente</span>
                                <input className="input100" placeholder="Buscar..." maxLength="30" id="searchBar" onChange={this.filtroFacturas}></input>
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
                <div>
                    {
                        this.state.facturas.map(function (factura, index) {
                            var total = 0;
                            return <div key={index} className="containerProductos">
                                <Container style={{ width: "100%", textAlign: "center !important" }}>
                                    <Row>
                                        <Col>
                                            <div className="login100-form-desc">Nombre: {factura.nombre}</div>
                                            <div className="login100-form-desc">Nit: {factura.nit}</div>
                                            <div className="login100-form-desc">Fecha: {factura.fecha}</div>
                                            <div className="login100-form-desc">Correlativo: {factura.codigo}</div><br></br>
                                            <div className="login100-form-desc">Productos:</div><br></br>
                                            <Row>
                                                <Col className="login100-form-desc" style={{ textAlign: "center" }}>Cantidad</Col>
                                                <Col className="login100-form-desc" style={{ textAlign: "center" }}>Nombre</Col>
                                                <Col className="login100-form-desc" style={{ textAlign: "center" }}>Precio Unitario</Col>
                                                <Col className="login100-form-desc" style={{ textAlign: "center" }}>Subtotal</Col>
                                            </Row>
                                            <br></br>
                                            {
                                                factura.productos.map(function (producto, index) {
                                                    total = total + (producto.precio * producto.cantidad);
                                                    return <div key={index}>
                                                        <Container>
                                                            <Row>
                                                                <Col>
                                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>{producto.cantidad}</div>
                                                                </Col>
                                                                <Col>
                                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>{producto.nombre}</div>
                                                                </Col>
                                                                <Col>
                                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>Q.{parseFloat(producto.precio).toFixed(2)}</div>
                                                                </Col>
                                                                <Col>
                                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>Q.{parseFloat(producto.precio * producto.cantidad).toFixed(2)}</div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                })
                                            }
                                            <br></br>
                                            <Row>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col>
                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>Total: </div>
                                                </Col>
                                                <Col>
                                                    <div className="login100-form-desc" style={{ textAlign: "center" }}>Q.{parseFloat(total).toFixed(2)}</div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr style={{ borderColor: "transparent", marginTop: "10px" }}></hr>
                                </Container>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Factura; 
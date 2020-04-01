import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class UpdateProducto extends Component {

    state = {
        productosIniciales: [],
        items: [],
        message: ""
    }

    filtroProductos = (event) => {
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

    update = (producto, index) => {
        var cantidad = document.getElementById(index).value;
        if (cantidad < 0 || cantidad=="") {
            alert("Cantidad no puede estar vacía o ser menor a cero!!!");
        } else {
            axios.post(URL + "api/update-producto-cantidad/" + producto._id, { cantidad: cantidad }).then(res => {
                this.componentWillMount();
                alert("Producto actualizado!!!")
            }).catch({});
        }
    }

    render() {
        return (
            <div className="wrap-menuFlex p-l-40 p-r-40 p-t-50 p-b-40" style={{ textAlign: "center" }}>
                <span className="login100-form-title p-b-18">Actualización Productos</span>

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
                <div>
                    {
                        this.state.items.map((item, index) => {
                            return <div key={index} className="containerProductos">
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
                                            <Row>
                                                <input type="number" id={index} style={{ borderBottomStyle:"groove", borderRadius: "10px", width: "70%", height: "40%", textAlign: "center" }}></input>
                                            </Row>
                                            <Row>
                                                {/* Update Button */}
                                                <div className="text-center p-t-1">
                                                    <div className="buttonUpdate" id="button-5" onClick={() => this.update(item, index)}>
                                                        <div id="translate"></div>
                                                        <a>Update!</a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default UpdateProducto; 
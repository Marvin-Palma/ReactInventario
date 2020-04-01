import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/select2/select2.min.css';
import '../css/util.css';
import '../css/main.css';
import LoginInformacion from './login_informacion';
import Menu from './menu';
import IngresoProducto from './ingresoProducto';
import ConsultaProducto from './consultaProducto';
import CompraProducto from './comprarProducto';
import UpdateProducto from './updateProducto';
import Factura from './consultaFactura';

class Fondo extends Component {

    state = {
        showLogin: false,
        showMenu:true,
        showIngresoProducto:false,
        showConsultaProducto:false,
        showCompraProducto:false,
        showUpdateProducto:false,
        showFactura:false,
        message: ""
    };

    callbackFunction = (childData) => {
        this.setState({ message: childData }, res=>{
            if(this.state.message==="Menu."){ 
                this.setState({ showLogin: false, showMenu:true, showIngresoProducto: false, showConsultaProducto:false, showCompraProducto:false, showUpdateProducto:false, showFactura:false });
            }
            if(this.state.message==="LogOut."){ 
                this.setState({ showLogin: true, showMenu:false, showIngresoProducto: false, showConsultaProducto:false,  showCompraProducto:false, showUpdateProducto:false, showFactura:false });
            }
            if(this.state.message==="IngresoProducto."){ 
                this.setState({ showLogin: false, showMenu:false, showIngresoProducto: true, showConsultaProducto:false,  showCompraProducto:false, showUpdateProducto:false, showFactura:false });
            }
            if(this.state.message==="ConsultaProducto."){ 
                this.setState({ showLogin: false, showMenu:false, showIngresoProducto: false, showConsultaProducto:true,  showCompraProducto:false, showUpdateProducto:false, showFactura:false });
            }
            if(this.state.message==="CompraProducto."){ 
                this.setState({ showLogin: false, showMenu:false, showIngresoProducto: false, showConsultaProducto:false,  showCompraProducto:true, showUpdateProducto:false, showFactura:false });
            }
            if(this.state.message==="UpdateProducto."){ 
                this.setState({ showLogin: false, showMenu:false, showIngresoProducto: false, showConsultaProducto:false,  showCompraProducto:false, showUpdateProducto:true, showFactura:false });
            }
            if(this.state.message==="ConsultaFactura."){ 
                this.setState({ showLogin: false, showMenu:false, showIngresoProducto: false, showConsultaProducto:false,  showCompraProducto:false, showUpdateProducto:false, showFactura:true });
            }
        });
    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        {this.state.showLogin && <LoginInformacion parentCallback = {this.callbackFunction}/> }
                        {this.state.showMenu && <Menu parentCallback = {this.callbackFunction}/>}
                        {this.state.showIngresoProducto && <IngresoProducto parentCallback = {this.callbackFunction}/>}
                        {this.state.showConsultaProducto && <ConsultaProducto parentCallback = {this.callbackFunction}/>}
                        {this.state.showCompraProducto && <CompraProducto parentCallback = {this.callbackFunction}/>}
                        {this.state.showUpdateProducto && <UpdateProducto parentCallback = {this.callbackFunction}/>}
                        {this.state.showFactura && <Factura parentCallback = {this.callbackFunction}/>}
                    </div>
                </div>
            </div >
        );
    }
}

export default Fondo;
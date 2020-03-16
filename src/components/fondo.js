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

class Fondo extends Component {

    state = {
        showLogin: true,
        showMenu:false,
        message: ""
    };

    callbackFunction = (childData) => {
        this.setState({ message: childData }, res=>{
            if(this.state.message==="Login exitoso."){ 
                this.setState({ showLogin: false, showMenu:true });
            }
            if(this.state.message==="LogOut."){ 
                this.setState({ showLogin: true, showMenu:false });
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
                    </div>
                </div>
            </div >
        );
    }
}

export default Fondo;
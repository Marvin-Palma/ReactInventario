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

class Fondo extends Component {
    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <LoginInformacion/>
                    </div>
                </div>
            </div >
        );
    }
}

export default Fondo;
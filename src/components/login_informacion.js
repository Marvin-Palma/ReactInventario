import React, { Component } from 'react';
import URL from '../Constants';
import axios from 'axios';

class LoginInformacion extends Component {

    componentDidMount() {
        document.getElementById("botonIngresar").style.display = "none";
    }

    state = {
        email: "",
        password: "",
        mensajeError: ""
    };

    validacion = () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (password !== null && password !== undefined && password !== "") {
                document.getElementById("botonIngresar").style.display = "block";
                this.setState({
                    email: email,
                    password: password,
                    mensajeError: ""
                });
            } else {
                document.getElementById("botonIngresar").style.display = "none";
                this.setState({
                    mensajeError: "Ingresa la contraseña."
                });
            }
        } else {
            document.getElementById("botonIngresar").style.display = "none";
            this.setState({
                mensajeError: "Email inválido."
            });
        }
    }

    ingresar = () => {
        axios.get(URL + "api/getUser/" + this.state.email + "/" + this.state.password).then(res => {
            console.log(res);
            if (res.status === 210) {
                this.setState({
                    mensajeError: "Credenciales inválidas."
                });
            } else {
                this.setState({
                    mensajeError: "Login exitoso."
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-55">
                        Login
					            </span>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="text" name="email" placeholder="Email" id="email" onChange={this.validacion}></input>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <span className="lnr lnr-envelope"></span>
                        </span>

                    </div>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                        <input className="input100" type="password" name="pass" placeholder="Password" id="password" onChange={this.validacion}></input>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <span className="lnr lnr-lock"></span>
                        </span>
                    </div>
                    <div className="text-center w-full p-t-10" id="botonIngresar">
                        <div className="button" id="button-5">
                            <div id="translate"></div>
                            <a onClick={this.ingresar}>Ingresar!</a>
                        </div>
                    </div>
                    <span className="login100-form-titleError p-b-10 p-t-10">
                        {this.state.mensajeError}
                    </span>
                </form>
            </div>

        );
    }

}

export default LoginInformacion; 
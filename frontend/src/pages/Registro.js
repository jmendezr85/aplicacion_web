import "../estilos/Principal.css";
import logo2 from "../media/logo_tienda.png";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

function Registro() {
  return (
    <Fragment>
      <div className="fondologin">
        <div className="formulario">
          <form action="action_page.php" method="post">
            <div className="imgcontainer">
              <img src={logo2} alt="Avatar" class="avatar" />
            </div>

            <div className="container">
              <label for="uname">
                <b>Nuevo Usuario</b>
              </label>
              <input
                type="text"
                placeholder="Ingresa el nuevo usuario"
                name="uname"
                required
              />

              <label for="email">
                <b>Correo Electónico</b>
              </label>
              <input
                type="text"
                placeholder="Ingresa tu correo electrónico"
                name="uname"
                required
              />

              <label for="psw">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                placeholder="Ingresa la Contraseña"
                name="psw"
                required
              />
              <div>
                <label>
                  <b>Selecciona tu Rol</b>
                </label>
                <input
                  class="oc"
                  type="radio"
                  id="vendedor"
                  name="mi_rol"
                  value="Vendedor"
                />
                <label class="oc"> Vendedor</label>
                <input
                  class="oc"
                  type="radio"
                  id="administrador"
                  name="mi_rol"
                  value="Administrador"
                />
                <label class="oc"> Administrador</label>
              </div>
              <button type="submit" id="logearse">
                Registrarse
              </button>
            </div>

            <div className="container" className="abajo">
              <Link to="/">
                <button type="button" className="cancelbtn">
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <footer className="piedepagina">
        <div>
          Todos los derechos reservados | Misión-Tic 2022 | WARMYS
        </div>
      </footer>
    </Fragment>
  );
}

export default Registro;

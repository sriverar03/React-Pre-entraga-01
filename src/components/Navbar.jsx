import React from "react";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <div>
      <header className="header site-header colorfulheader">
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div className="container-fluid">
              <div className="navbar-header">
                
                <a className="navbar-brand" href="index.html">
                  <img src="../src/assets/images/lightlogo.png" alt="Linda" />
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="index.html">Inicio</a>
                  </li>
                  <li className="dropdown yamm-fw hasmenu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Productos <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="yamm-content">
                          <div className="row">
                           
                              <ul>
                                <li>
                                  <a href="#">Producto 1</a>
                                </li>
                                <li>
                                <a href="#">Producto 2</a>
                                </li>
                                <li>
                                <a href="#">Producto 3</a>
                                </li>
                                <li>
                                <a href="#">Producto 4</a>
                                </li>
                               
                                                       
                              </ul>
                                                  
                            
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>                 
                  <li className="active">
                    <a href="#">Ofertas</a>
                  </li>
                  <li className="">
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <li className="lastlink hidden-xs hidden-sm">
                    <CartWidget />
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

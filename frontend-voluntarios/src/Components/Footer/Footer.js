import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
       <div class="py-3" >
    <div class="container-footer">
      <div class="row">
        <div class="col-md-12 text-center d-md-flex align-items-center">
          <ul class="nav d-flex justify-content-center">
            <li class="nav-item"> <a class="nav-link" href="#nossos">Nossos Voluntarios</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#quero">Quero ser Voluntario</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#login">Login</a> </li>
          </ul> 
          <p class="mb-0 py-1">©2022 Voluntarios para Refugiados All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer

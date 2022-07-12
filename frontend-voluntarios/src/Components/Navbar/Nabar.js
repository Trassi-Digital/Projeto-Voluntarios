import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Voluntarios <i>para Refugiados</i></a>
   {/*  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" id="nossos" href="#">Nosso Voluntario</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="quero"  href="#">Quero ser Voluntario</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="login" href="#">Login</a>
        </li>
       </ul>
    </div>
  </div>
</nav>
    </navbar>
  )
}

export default Navbar

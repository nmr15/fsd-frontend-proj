import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="faq">FAQ</Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a href="#" className="nav-link fw-bold" data-bs-toggle="modal" data-bs-target="#modalLogin">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
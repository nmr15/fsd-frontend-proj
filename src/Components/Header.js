import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => 
{
  return (
    <>
      <div className="bg-warning d-flex justify-content-between align-items-center">
        <div className="">
          <Link to="/"><img src="/img/logo.png" alt="logo" className="logo" /></Link>
        </div>
        <div className="">
          <h3>Your real estate destination</h3>
        </div>
        <div className="me-5">
          <Link to="/login"><button className="btn btn-primary btn-lg">Login</button></Link>
          <Link to="/signup"><button className="btn btn-success btn-lg ms-3">Sign Up</button></Link>
        </div>
      </div>
    </>
  )
}

export default Header
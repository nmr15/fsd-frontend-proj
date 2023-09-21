import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#14279B"}}>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#expertise">Expertise</a>
          </li>
          <li className="nav-item"><a className="nav-link" href="#professional">Professional Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#accomplishments">Accomplishments</a></li>
          <li className="nav-item"><a className="nav-link" href="#techsum">Technological Summary</a></li>
          <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#certification">Certification</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
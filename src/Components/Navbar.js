import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#14279B"}}>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#expertise">Expertise</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#professional">Professional Experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#accomplishments">Accomplishments</a></li>
          <li class="nav-item"><a class="nav-link" href="#techsum">Technological Summary</a></li>
          <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
          <li class="nav-item"><a class="nav-link" href="#certification">Certification</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
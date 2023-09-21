import React from 'react'

const Technology = () => {
  return (
    <>
      <div className="my-5">
        <h2 id="techsum">Technological Summary</h2>
        <table className="table table-bordered table-striped">
          <tr>
            <th>Languages</th>
            <td>C++, C#, Java, Delphi, Visual Basic</td>
          </tr>
          <tr>
            <th>Development Tools, Methodologies, & Environments</th>
            <td>Rapid Application Design (RAD), Object-Oriented Analysis & Design (OOAD), Waterfall Approach, Spiral
              Approach, Prototype Approach, Integrated Software Development, Microsoft Visual Studio</td>
          </tr>
          <tr>
            <th>Software</th>
            <td>TIBCO, IBM WebSphere MQ, Apache, Business Objects, JBoss, Oracle WebLogic Server</td>
          </tr>
          <tr>
            <th>Systems</th>
            <td>Unix, Windows, VAX/VMS, NeXTStep, .Net Framework</td>
          </tr>
          <tr>
            <th>Databases</th>
            <td>Oracle, Sybase, Access</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Technology
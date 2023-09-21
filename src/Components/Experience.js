import React from 'react'

const Experience = () => {
  return (
    <>
      <div class="my-5">
        <h2 id="professional">Professional Experience</h2>
        <p><i>ABC Inc. (2005 to Present) / DEF Inc. (2004 to 2008) - Sometown, CA</i></p>
        <table className="table table-bordered table-striped">
          <tr>
            <th>Role</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td><b>Director of Software Development</b></td>
            <td>2010 to Present</td>
          </tr>
          <tr>
            <td><b>Senior Software Developer</b></td>
            <td>2008 to 2010</td>
          </tr>
          <tr>
            <td><b>Software Developer / Tester</b></td>
            <td>2004 to 2008</td>
          </tr>
          <tr>
            <td colspan="2"><b>Advanced through several promotions, culminating in present director-level role overseeing
              firm's development activities. Manage a $4.5M R&D budget and a 12-member developer team.</b></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Experience
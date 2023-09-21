import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container py-5" id="contact">
        <h1>Submit the form below to contact me</h1>
        <div className="form_container">
          <form action="day4Portfolio.html">
            <label for="name">Name</label> <br/>
              <input className="form-control" type="text" name="name" required /> <br/>
              <label for="message">Message</label> <br/>
              <textarea className="form-control" name="message" id="" cols="30" rows="10" required></textarea> <br/>
              <input className="btn btn-myblue" type="submit" value="Submit" />
          </form>
          <p><i>*All fields are required. Submit form to go back to Portfolio page</i></p>
        </div>
      </div>
    </>
  )
}

export default Contact
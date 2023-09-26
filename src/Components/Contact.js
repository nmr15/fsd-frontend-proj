import React from 'react'

const Contact = () => {
  return (
    <>
      <main>
        <section className="section__contact my-5">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h2>Contact Us</h2>
                <form>
                  <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="" aria-describedby="helpId" />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="" aria-describedby="helpId" />
                  </div>
                  <div className="mb-3">
                    <label for="subject" className="form-label">Subject</label>
                    <input type="text" id="subject" className="form-control" placeholder="" aria-describedby="helpId" />
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <button type="submit" className="btn bg-main-red">Submit</button>
                </form>
              </div>
              <div className="col-4">
                <div className="card mt-3">
                  <div className="card-body">
                    <p className="card-text"><b>Address:</b> 1234 Aaron Aaronson Ave, Los Angeles, CA</p>
                    <p className="card-text"><b>Call:</b> (012) 456-7890</p>
                    <p className="card-text"><b>Email:</b> email@domain.com</p>
                    <p className="card-text"><b>Hours</b> 10:00 am - 8:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
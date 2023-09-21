import React from 'react'
import avatar from './avatar.png'

const About = () => {
  return (
    <>
      <div className="intro">
        <div className="intro__right">
          <img src={avatar} alt="avatar" width="20%" />
            <h1>John Doe</h1>
        </div>

        <p><b>Email: johndoe@johndoe.com</b></p>
        <p><b>Mobile Number: (000) 000-0000</b></p>
        {/* <a className="btn btn-myblue" href="bootstrapContact.html" target="_blank">Contact me</a> */}
        <hr />
      </div>

      <div className="my-5">
        <h2>Director of Software Development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint voluptatem. Expedita quibusdam autem
          vero
          ex odit, quae eveniet doloremque soluta ratione reprehenderit voluptate pariatur deserunt, numquam repellendus!
          Amet, perferendis!</p>
        <ul>
          <li>Dynamic leader of software development teams</li>
          <li>Skilled in all phases</li>
          <li>Expert in translating business requirements</li>
        </ul>
      </div>
    </>
  )
}

export default About;
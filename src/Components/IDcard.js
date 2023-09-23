import React from 'react'


const IDcard = (props) => {
  return (
    <>
      <div className="card w-25 float-start mx-1 my-1" key={props.key}>
        <div className="card-body bg-primary">
          <h4 className="card-title bg-info">{props.name}</h4>
          <p className="card-text">{props.des} <br/> {props.age}</p>
        </div>
      </div>
    </>
  )
}

export default IDcard
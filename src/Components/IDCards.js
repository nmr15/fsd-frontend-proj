import React from 'react'
import IDcard from './IDcard'
import data from '../data.json'

const IDCards = () => {
  return (
    <>
      {data.map((data) =>
      {
        return(
          <IDcard key={data.key} name={data.name} age={data.age} des={data.des}/>
        )
      })}
    </>
  )
}

export default IDCards
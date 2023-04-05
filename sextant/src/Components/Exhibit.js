import React from 'react'
import './Exhibit.css'
const Exhibit = (props) => {
  return (
    <div className='exhibit'>
        <h2>{props.title}</h2>
        {props.children}
    </div>
  )
}

export default Exhibit
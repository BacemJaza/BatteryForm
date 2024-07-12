import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FormNav = () => {
  return (
    <div className='flex mx-auto justify-center mb-10'>
      <button className="btn btn-lg"><a href='/generalinformation'>Add a new battery passport <FontAwesomeIcon icon={faPlus} /></a></button>
    </div>
  )
}

export default FormNav

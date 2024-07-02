import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FormNav = () => {
  return (
    <div className='flex mx-auto justify-center mb-10'>
      <button className="btn btn-lg">Add a new battery passport <FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}

export default FormNav
